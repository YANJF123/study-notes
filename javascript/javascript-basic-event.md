## javascript 事件
javascript和HTML之间的交互式通过事件来实现的。事件，就是文档或者窗口中发生的一些特定的交互瞬间。

#### 事件流
事件流描述的是从页面接收事件的顺序。
+ 事件冒泡，IE的事件流叫做**事件冒泡**(event bubbing),即事件开始时由最具体的元素接收，然后逐级向上传播到较为不具体的节点
+ 事件捕获(event capturing),思想是不太具体的节点应该更早接收事件，而最具体的节点应该最后接收事件，一般建议使用事件冒泡，在有特殊需求的时候使用事件捕获
+ DOM事件流，包括三个阶段：事件捕获阶段，处于目标阶段和事件冒泡阶段，首先是事件捕获，为截获事件提供机会，然后是实际目标接收到事件，最后一个阶段是事件冒泡阶段，可以在这个阶段对事件作出相应。

#### 事件处理程序
事件就是用户或浏览器自身执行的某种动作，例如click，load等。而响应某个事件的函数就叫做**事件处理程序（或事件侦听器）**。
+ HTML事件处理程序，例如`<input type="text" value="click me" onclick="alert('clicked')" >`,不过现在不建议这种用法
+ DOM0级事件处理程序，将一个函数赋值给一个事件处理程序属性。
```javascript
var btn=document.getElementById('myBtn');
btn.onclick=function(){
  alert(this.id); // myBtn
}
```
+ DOM2级事件处理程序，添加了两个新的方法，`addEventListener(),removeEventListener()`,他们都接收三个参数(要处理的事件名、事件处理程序、一个布尔值),其中布尔值为false表示用在冒泡阶段调用事件处理程序,为true表示在事件捕获阶段调用事件处理程序.不过不建议在事件捕获阶段添加事件处理程序.
```javascript
var btn=document.querySelector('#myBtn');
btn.addEventListener('click',function(){
  alert(this.id);
   console.log(this);
},false);
// 可以添加多个事件处理程序
btn.addEventListener('click',function(){
  alert('hello world');
},true);

// 移除事件处理程序,注意添加的匿名函数无法通过该函数移除
btn.removeEventListener('click',handle(),false);
```

#### 事件对象
在触发DOM上的某个事件时,会产生一个事件对象event,这个对象中包含着所有与事件有关的信息.
+ bubbles 表明事件是否冒泡
+ cancelable 表明是否可以取消事件的默认行为
+ currentTarget 事件处理程序当前正在处理那个元素
+ defualtPrevented 为true表示已经调用了preventdefault()
+ detail  与事件相关的细节信息
+ eventPhase 调用事件处理程序的阶段
+ preventDefault() 取消事件的默认行为
+ stopImmediatePropagation() 取消事件的进一步冒泡或者捕获
+ stopPropagation() 取消事件的进一步捕获或者冒泡,如果bubbles为ture,就可以使用这个方法
+ target 事件的目标
+ type 被触发事件的类型
+ view 与事件相关的抽象视图,等同于发生事件时window对象
在事件处理程序内部,对象this始终等于currentTarget的值,而target则只包含事件的实际目标

IE9之前的事件对象跟dom规定的又不一样,这里不再累赘,见mis文件夹下的`event-util.js`的跨浏览器解决方案

#### 事件类型
DOM3级规定了以下几类事件:
+ UI(user interface)事件,当用户与页面上的元素交互时触发
+ 焦点事件,当元素获得或失去焦点时触发
+ 鼠标事件,当用户通过鼠标在页面上执行操作时触发
+ 滚轮事件,当使用鼠标滚轮时触发
+ 文本事件,在文档中输入文本时触发
+ 键盘事件,当用户通过键盘在页面上执行操作的时候触发
+ 合成事件,当为IME(input method editor,输入法编辑器)输入字符时触发
+ 变动事件,当底层DOM结构发生变化时触发
+ 变动名称事件,当元素或者属性名变动时触发.此类事件已经废弃

除了上面定义的事件外,HTML5也定义了一组事件,而有些浏览器在DOM和BOM上实现了自己的专有事件

###### UI事件
+ load 当页面完全加载后在window上触发,当所有框架加载完毕后在框架集上触发,当图像加载完毕后在`<img>`元素上触发,嵌入内容加载完毕后在`<object>`元素上触发
+ unload 当页面完全卸载后在window上面触发,当所有框架都卸载后,在框架集上触发,或者嵌入的内容卸载完毕后`<object>`上触发
+ abord 当用户停止下载过程时,如果嵌入的内容没有加载完毕,则在`<object>`元素上触发
+ error 当发生javascript错误是在window上面触发,当无法加载图像在`<img>`元素上触发,当无法加载嵌入内容时`<object>`元素上触发,或者当一个或者多个框架无法加载时在框架集上触发
+ select 当用户选择文本框(input,textarea)中的一个或多个字符时触发
+ resize 当窗口或框架大小变化时
+ scroll 当用户滚动带滚动条的元素内容

```javascript
// load
// 当页面完全加载后(包括图像,javascript,css等资源文件)后在window上触发
// 相比较jquery中的$(document).ready()会在文档加载完毕后就触发,不需要等待图像等资源加载完毕就可以运行你的代码了
var handle=function(){};
window.addEventListener('load',handle);

// 还有些元素比如script,link也以非标准的方式支持load事件

// unload
// 在文档完全卸载之后触发,只要用户从一个页面切换到另外一个页面就会发生unload事件
// 而利用这个事件更多的是清楚作用,防止内从泄露
window.addEventListener('unload',handle); 

// resize
// 在window对象上发生
window.addEventListener('resize',handle);

// scroll
// 在window对象上发生
window.addEventListener('scroll',handle);
```

###### 焦点事件
焦点事件会在页面获得或失去焦点时触发
+ blur 在元素失去焦点时触发,这个事件不会冒泡,所有浏览器都支持
+ focus 在元素获得焦点时触发,这个事件不会冒泡,所有浏览器都支持
+ focusin 获得焦点时触发
+ focusout 失去焦点时触发

###### 鼠标与滚轮事件
+ click 在用户按下鼠标按钮或者按下回车键后触发
+ dbclick 双击左键后触发
+ mousedown 在用户按下任意鼠标键触发
+ mouseenter 鼠标光标从元素外部首次移动到元素范围之内时触发
+ mouseleave 在位于元素上方的光标移动到元素范围之外时触发
+ mousemove 当鼠标指针在元素内部移动时触发
+ mouseout 在鼠标指针位于一个元素上方,然后用户将其移入另一个元素时触发
+ mouseover 在鼠标位于一个元素外部,然后用户首次将其移入另一个元素边界之内时触发
+ mouseup 在用户释放鼠标按钮时触发
+ mousewheel 鼠标滚轮事件
```javascript
// 客户区坐标
// 发生事件时鼠标指针在视口中的位置
// 用event.clientX和event.clientY

// 页面坐标
// 发生事件时鼠标在页面中的位置
// 用event.pageX和event.pageY

// 屏幕坐标
// 发生事件时鼠标在屏幕上的位置
// 用 event.screenX和event.screenY


// 修改键
// 也就是在按下鼠标时键盘上的某些键的状态也许可以影响到所采取的操作
// 有shift,ctrl,alt,meta
// 表示这些键的状态有shiftkey,ctrlkey,altkey,metakey
// 当鼠标事件发生时,通过检测这几个属性就知道对应的键是否被按下
var div =document.getElementById('myDiv');
div.addEventListener('click',function(event){
  if(event.shiftkey){
    //some operation
  }
  if(event.ctrlkey){
    // some other operation
  }
  ...
  });


// 相关元素
// DOM通过event对象的relatedTarget属性提供了相关元素的信息
// 这个属性只对于mouseover和mouseout事件才有值,对于其他事件,这个属性的值为null


// 鼠标按钮
// 对于mousedown和mouseup事件来说,要判断是鼠标左键或右键,或者是滚轮,到底是那个触发的该事件
// 在event对象中存在一个button属性,表示按下或者释放的键
// 0表示主鼠标键(左键),1表示中间的键(滚轮),2表示次鼠标按钮

// 更多事件信息
// event.detail中包含了有关事件的更多信息


// 鼠标滚轮事件
// mousewheel
// 发生该事件时event对象会包含鼠标事件的所有标准信息外,还会包含一个特殊的wheelDelta属性
// 向前滚动滚轮时,wheelDelta是120的倍数
// 向后滚动滚轮时,wheelDelta是-120的倍数
var p = document.querySelector('#myp');
var handle = function(e) {
  var e = EventUtil.getEvent(e);
  console.log(e.wheelDelta);
};
EventUtil.addHandler(p, 'mousewheel', handle);


// 触摸设备
// 由于触摸设备不支持鼠标,有一下几点需要注意
// 1 不支持dblclick,双击会放大画面
// 2 轻击可单击元素会触发mosemove事件,可单击的元素指的是那些单击可产生默认操作的元素(如链接)
// 3 mousemove事件会触发mouseover和mouseout事件
// 4 两个手指放屏幕上且页面随手指一动而滚动会触发mousewheel和scroll事件

// 无障碍阅读
// TODO
```


