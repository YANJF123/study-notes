### BOM (Browser Object Model) 浏览器对象模型

#### window对象
BOM的核心对象是window,它表示浏览器的一个实例,在浏览器中,window对象有双重角色,它既是通过JavaScript访问浏览器窗口的一个接口,又是ECMAScript规定的global对象.  
在全局作用域声明的变量,函数都会变成window对象的属性和方法.  
如果页面中包含框架,则每个框架都拥有自己的window对象,并保存在frames集合中.  

##### 窗口位置  
用来确定和修改window对象位置的属性和方法很多,不过各种浏览器都有自己的标准,所以在跨浏览器的条件下无法取到窗口左边和上边的精确坐标值.
+ screenLeft 表示窗口相对于屏幕左边的距离
+ screenTop 表示窗口相对于屏幕上边的距离
Firefox提供了screenX和screenY与之对应,不过Safari和Chrome也支持该属性
```javascript
var leftPos=(typeof window.screenLeft == "number") ? window.screenLeft:window.screenX;
var topPos=(typeof window.screenTop == "number") ? window.screenTop:window.screenY;
```
利用moveTo(),moveBy()方法可以将窗口移动到一个新位置,不过该方法可能被浏览器禁用
+ moveTo() 接收的是新位置的x和y的做标值
+ moveBy() 接收的是在水平和垂直方向上移动的像素数
```javascript
window.moveTo(0,0); // 将窗口移动到屏幕的左上角
window.moveBy(0,100); // 将窗口向下移动100像素
window.moveTo(200,300); // 将窗口移动到(200,300)
window.moveBy(-50,0); // 将窗口向左移动50像素
```

##### 窗口大小
跨浏览器确定一个窗口的大小不是一件容易的事情,不过各种浏览器均提供了四个属性:innerWidth,innerHeight,outerWidth,outerHeight,虽然无法确定浏览器窗口本身的大小,但却可以取得页面视口的大小:
```javascript
var pageWidth=window.innerWidth,
      pageHeight=window.innerHeight;
if(typeof pageWidth != 'number'){
  if(document.compatMode == "CSS1Compat"){
    pageWidth=document.documentElement.clientWidth;
    pageHeigh=document.documentElement.clientHeight;
  }else{
    pageWidth=document.body.clientWidth;
    pageHeight=document.body.clientHeight;
  }
}
// 对于移动设备,window.innerWidth和window.innerHeight保存着可见视口.
```
另外,使用resizeTo()和resizeBy()方法可以调整浏览器窗口的大小.不过该方法有可能被浏览器禁用.都接收两个参数,其中
+ resizeTo() 接收浏览器窗口的新宽度和新高度
+ resizeBy() 接收新窗口与原窗口的高度和宽度之差
```javascript
window.resizeTo(100,100); // 调整到100x100
window.resizeBy(100,50); // 调整到200x150
window.resizeTo(300,200); // 调整到300x200
```

##### 导航和打开窗口
window.open()方法既可以导航到一个特定的URL,也可以打开一个新的浏览器窗口,该方法接收四个参数
+ 要加载的URL
+ 窗口目标
+ 一个特性字符串
+ 表示新页面是否取代浏览器历史记录中当前加载页面的布尔值
通常只需要传递一个参数即可
```javascript
window.open("https://github.com/");

// 弹出窗口
window.open("https://github.com/", "_blank", "resizable=yes, scrollbars=yes, titlebar=yes, width=800, height=900, top=10, left=10");
```

##### 间歇调用和超时调用
JavaScript是单线程语言,但它允许通过设置超时值和间隙时间值来调度代码在特定的时刻执行.前者是在指定的时间过后执行代码,后者是每隔指定的时间就执行一次代码.
超时调用需要是用window.setTimeout()方法,他接受两个参数:要执行的代码和以毫秒表示的时间,第二个参数是一个表示等待多长时间的毫秒数,但经过该时间后指定的代码不一定会执行,因为Javascript是一个单线程的解释器,因此一定时间内只能执行一段代码,为了控制要执行的代码,就有一个javascript任务队列,这些任务会按照将他们添加到队列的顺序执行,setTimeout()的第二个参数告诉JavaScript在过多长时间把当前任务添加到队列中.如果队列是空的,那么添加的代码会立即执行,如果队列不是空的,那么它就要等待前面的代码执行完毕了以后再执行.
调用setTimeout()之后,该方法会返回一个数值ID,表示超时调用,这个超时调用的ID是计划执行代码的唯一标识符,通过调用它来取消超时调用,要取消尚未执行的超时调用计划,可以调用clearTimeout()方法并将相应的超时调用ID作为参数传递给它.
```javascript
var timeoutId=setTimeout(function(){
  alert("hello world!");
},5000);
clearTimeout(timeoutId);
```
间歇调用与超时调用类似,只不过它会按照指定的时间间隔重复执行代码,直到间歇调用被取消或者页面被卸载,设置间歇调用的方法是setInterval(),他接受的参数与setTimeout()相同.
```javascript
setInterval(function(){
  alert("hello");
  },1000);

var num=0,max=10,interalId=null;
function incrementNumber(){
  num++;
  if(num==max){
    clearInterval(interalId);
    alert("Done");
  }
}
ineteralId=setInterval(incrementNumber,500);
// 这个例子中变量num每半秒递增一次,当递增到最大值时就会取消先前设置的间歇调用.

// 不过一般认为,使用超时调用来模拟间歇调用时最佳模式
// 上面的例子用超时调用来模拟 
var num=0;
var max=10;
function incrementNumber(){
  num++;
  if(num<max){
    setTimeout(incrementNumber,500);
  }else{
    alert("Done");
  }
}
setTimeout(incrementNumber,500);
```

##### 系统对话框
`alert() confirm() prompt()`方法可以调用系统对话框向用户显示信息,通过这几种方法打开的对话框都是同步和模态的,也就是说,显示这些对话框的时候代码会停止执行,而关掉这些对话框后代码又恢复执行.
```javascript
// alert()就在不多做介绍了
// confirm() 
// 用户如果点击了OK则返回true,点击Cancel则返回false
if(confirm("are you sure?")){
  alert("yes!");
}else{
  alert("no");
}
// prompt()
// 用于提示用户输入一些信息
// 接受两个参数,要显示给用户的文本提示和文本输入域的默认值
// 返回用户输入的文本信息,取消返回null
prompt("you name?","buuug7");

// print()
// 用于页面打印
```

#### location对象
location是最有用的BOM对象之一,他提供了与当前窗口中加载的文档有关的信息.它既是window对象的属性,也是document对象的属性,它们引用的是同一个对象.
```javascript
window.location;

// 获取查询字符串
function getQueryStringArgs(){
  // 取得查询字符串并去掉开头的问号
  var qs=location.search.length > 0 ? location.search.substring(1) : "";
  // 保存对象的数组
  var args={};
  // 取得每一项
  items=qs.length>0 ? qs.split("&") : [];
  var item=null;
  var name=null;
  var value=null;
  for(var i=0;i<items.length;i++){
    item=items[i].split("=");
    name=decodeURIComponent(item[0]);
    value=decodeURIComponent(item[1]);
    if(name.length){
      args[name]=value;
    }
  }
  return args;
}

// location.replace();
// replace()方法不会再浏览器的历史记录生成新纪录
location.replace("http://baidu.com/");

// location.reload()
location.reload();// 重新加载(有可能从缓存)
location.reload(true); // 重新加载(从服务器加载)
```


#### navigator 对象
navigator现在已经成为识别客户端浏览器事实标准.
##### 检测插件
TODO
##### 注册处理程序
TODO

#### screen对象
javascript中几个对象在编程中作用不大,而screen对象就是其中之一,screen对象基本上只用来表明客户端的能力,其中包括浏览器窗口外部的显示器信息,如像素宽度和高度等.

#### history对象
history对象保存着用户的上网历史记录,从窗口被打开的那一刻起.使用go()方法可以在用户的历史记录中任意跳转
```javascript
history.go(-1); // 后退一页
history.go(1); // 前进一页
history.go(2);// 前进两页
history.go("www.baidu.com"); // 跳转到最近的www.baidu.com页面
history.back(); // 后退一页
history.forward(); // 前进一页

// 通过history.length可以查看历史记录的数量
if(history.length==0){
  // 这里应该是用户打开窗口后的第一个页面
}
```

#### 总结
浏览器对象模型(BOM)以window对象为依托,表示浏览器窗口以及页面可见区域.
+ 在使用框架时,每个对象都有自己的window对象以及所有原生构造函数,每个框架都保存在frames集合中,可以通过位置或者名称来访问.
+ top对象始终指向最外层的框架,也就是整个浏览器窗口.
+ parent对象表示包含当前框架的框架,而self对象则回指window
+ 使用location对象可以通过编程方式来访问浏览器的导航系统.
+ 调用replace()方法可以导航到一个新URL,同时该URL会替换浏览器历史记录中的当前显示页面.
+ navigator对象提供了与浏览器相关的信息.
+ BOM中的screen和history对象功能有限
















