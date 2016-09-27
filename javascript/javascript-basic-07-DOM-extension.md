### DOM 扩展
#### 选择符API
```javascript
// querySelector()
// 接收一个CSS选择符,返回与模式匹配的第一个元素,没有返回null
document.querySelector('#myDiv'); // 取得id为myDiv的元素
document.querySelector('body'); // 取得body元素
document.querySelector('.container'); //取得类为container的第一个元素
// 通过document调用会在文档元素的范围内查找匹配元素
// 而通过Element类型调用只会在该元素的范围内查找匹配元素

// querySelectorAll()
// 与querySelector()接受的参数一样
// 返回匹配的所有元素,是一个NodeList的实例
document.querySelectorAll("p strong"); // 取得<p>元素中所有<strong>元素
```

#### 元素遍历
对于元素间的空格,IE9之前版本不会返回文本节点,而其他所有浏览器都会返回文本节点.这就,就导致了在使用childNodes和firstChild的时候行为不一致,为了弥补这个不足,而同时又为了保持DOM规范不变,ElementTraversal规范定义了一组新属性
+ childElementCount 返回子元素的个数
+ firstElementChild 指向第一个子元素,firstChild的元素版
+ lastElementChild 指向最后一个元素,lastChild的元素版
+ previousElementSibing:指向前一个同辈元素,previousSibing的元素版
+ nextElementSibing:指向后一个同辈元素,nextSibing的元素版

#### HTML5
对于传统HTML而言,HTML5是一个叛逆,之前的版本对Javascript接口的描述都是三言两语,而HTML围绕如何使用新增标记定义了大量Javascript的API
```javascript
// getElementsByClassName()
// HTML中最受欢迎的方法
// 接受一个参数,即一个包含一个或者多个类名的字符串
// 返回带有指定类的所有元素的NodeList
document.getElmentsByClassName('m1 m2'); //取得所有类中包含m1和m2的元素,类名的先后顺序无所谓

// classList属性
// add(value) 给定的字符串添加到列表中,如果存在就不添加
// remove(value) 删除给定的字符串
// toggle(value) 存在就删除它,不存在就添加
// contains(value) 列表中是否存在给定值,存在返回true,否则false
var m=document.getElementsByClassName('m1 m2');
m[0].classList; // ["m1", "m2"]
m[0].classList.remove('m1');
m[0].classList.add('m3');
m[0].classList.toggle('m4'); // true
m[0].classList.contains('m4'); // true


// HTML5中引入了辅助管理DOM焦点的功能
// document.activeElement属性


// HTMLDocument的变化
// readyState
// 可能的值:loading正在加载文档,complete已经加载完毕
if(document.readyState=='complete'){
  // some operation
}


// 兼容模式
// 标准模式document.compatMode的值为CSS1Compat
// 混杂模式document.compatMode的值为BackCompat
document.compatMode; // "CSS1Compat"

// head
// 新增加了对head的快捷访问
document.head; // 等于 document.getElementByTagName('head')[0];

// 字符集属性
// document.charset
document.charset; // 获取编码
document.charset='gb2312'; //设置编码

// 自定义数据属性
// HTML5规定为元素添加非标准的属性,但是添加前缀data-
// <div id="myDiv" data-appid="123" data-appname="buuug7"></div>
var div=document.getElementById('myDiv')
div.dataset; // DOMStringMap {appid: "123", appname: "buuug7"}
// 获取值
div.dataset.appid; // "123"
div.dataset.appname; // "buuug7"
// 设置值
div.dataset.appid="456"; 
div.dataset.appname="bob";


// 插入标记
// 给文档插入大量的HTML标记的情况下,DOM操作非常繁琐
// HTML纳入规范的innerHTML
document.body.innerHTML;// 返回body标签内的所有HTML标记
document.body.innerHTMl="<h2>hello world</h2>"; // 给body中插入h2替换原来的内容
// 不过通过innerHTML插入<script>元素的代码不会执行
// 并不是所有元素都支持innerHTML
// 不支持innerHTML的元素有:
// col,colgroup,frameset,head,html,style,table,tbody,thead,tfoot,tr

// outerHTML
// 返回调用它的元素及所有子节点组成HTML标记

// insertAdjacentHTML()方法
// TODO

// scrollIntoView()方法
// HTML最终选择了scrollIntoView()作为标准方法
// scrollIntoView()可以在所有HTML元素上调用,通过滚动浏览器窗口或某个容器元素
// 调用元素就会出现在视口中
document.getElementsByTagName('p')[2].scrollIntoView();
```

#### 专有扩展
##### 文档模式
IE8引入的文档模式,文档模式决定你使用哪个级别的CSS,可以在javascript中使用那些API,以及如何对待doctype  
```
<meta http-quiv="X-UA-Compatible" content="IE=7">
```

##### children属性
由于IE9之前的版本在处理文本节点中的空白符的差异,因此就引入了children属性.它只包含元素中还是元素的节点.虽然该属性未被标准接受,但是大多数的浏览器都支持该方法

##### contains()方法
在实际开发中,经常要检查一个节点是不是另外一个节点的后代,IE率先引入contains()方法来实现该功能,不过该方法现在大多数主流的浏览器都支持.
```javascript
document.body.contains(document.getElementById("myDiv")); // 返回布尔值
```

##### innerText outerText
虽然这两个属性没有被HTML5标准接收,但是大多数的浏览器依然支持
```javascript
document.body.innerText; // 返回body标签内的文本,不包含html标记
document.body.innerText="hello world!"; // 设置body标签内的内容

// 类似的outerText
document.body.outerText; // 返回结果与innerText一样
document.body.outerText="hello world"; // 连同标签一起替换掉
```

### 小结
虽然DOM为XML以及HTML文档交互指定了一系列核心API,但是任然有几个规范对标准的DOM进行了扩展,这些扩展原来是浏览器专有的,但是后来成为事实上的标准.
+ Selectors API 定义了两个方法,querySelector() 和  querySelectorAll()
+ Element Traversal 为DOM元素定义了额外的属性,让开发人员更方便的从一个元素跳转到另外一个元素
+ HTML5 为标准的DOM定义了很多扩展功能
