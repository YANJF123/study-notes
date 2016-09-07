## DOM
DOM(文档对象模型)是针对HTML和XML文档的一个API(应用程序编程接口).

#### 节点层次
DOM可以将任何HTML或XML文档描绘成一个由多层节点构成的结构.
**文档元素**,文档元素是文档的最外层元素,文档中的其他所有元素都包含在文档元素中.每个文档都只能有一个文档元素.在HTML页面中,文档元素始终都是`<html>`元素.

###### Node类型
DOM1级定义了一个Node接口,该接口将由DOM中的所有节点类型来实现.这个Node接口在javascript中时作为Node类型来实现的,javascript中所有节点类型都继承与Node类型,每一个节点都有一个nodeType属性,用于表名节点的类型.
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
</body>
</html>
```

```javascript
var bodyNode=document.querySelector('body');
bodyNode.nodeType; // 1
bodyNode.nodeName; // "BODY"
bodyNode.nodeValue; // null
var childNodes=bodyNode.childNodes;
childNodes.length; // 9
childNodes[0] ; // 返回body节点的第一个子节点
childNodes[0].parentNode; // <body>​…​</body>​
childNodes[0].nextSibling; // <p>​…​</p>​
childNodes[0].previousSibling; // null

bodyNode.firstChild; // #text
bodyNode.lastChild; // #text

// appendChild()
// 用于向childNodes列表的末尾添加一个节点
// 添加后,childNodes相互的指针关系会得到更新
// 返回新增加的节点.
// 如果传入的节点是文档中的一部分,结果就是该节点从原来位置转移到新位置
bodyNode.appendChild(childNodes[1]);// 将childNodes的第一个节点转移到末尾

// insertBefore()
// 替换节点
// 该方法会把节点放在childNodes列表中某个特定的位置上,而不是像appendChild()放在末尾.
// 接受两个参数:
// 第一个是确定要插入的节点
// 第二个是作为参考的节点
bodyNode.insertBefore(childNodes[1],null); // 把childNodes第二个节点​放到第一个节点上

// replaceChild()
// 接受两个参数,要插入的节点和要替换的节点
// 要替换的节点将由这个方法返回并从文档中移出
bodyNode.replaceChild(childNodes[1],bodyNode.lastChild); // 把childNodes第一个节点插入到最后一个节点,并移出最后一个节点

// removeChild()
// 移除节点
// 接收一个参数,即要移除的节点
bodyNode.removeChild(bodyNode.lastChild); // 移除childNodes最后一个节点

// 前面介绍的四个方法操作的都是某个节点的子节点
// 其中childNodes会返回一些空白的元素,比如换行符,空格等
// 而用children返回的子节点中不会包含换行符和空白元素,所以建议使用children
// 如果要使用childNodes,可以添加额外的过滤,比如元素节点nodeType的值为1
for(var i=0,len=element.childNodes.length;i<len;i++){
  if(element.childNodes[i].nodeType==1){
    // some operation
  }
} 

// coneNode()
// 克隆一个节点
// 接受一个布尔型参数,在参数为false的情况下执行浅复制,即只复制节点本身
// 在参数为true的情况下,执行深复制,也就是复制节点及其整个节点树
// 返回节点的副本信息
document.getElementById('a1').children[1].cloneNode();

// normalize()
// 处理文档树中的文本节点,在DOM解析出现异常的时候使用
```

#### Document 类型
Javascript 通过Document类型表示文档,在浏览器中,document是HTMLDocument(继承自Document)的一个实例,表示整个HTML页面.Document节点具有的特征:
+ nodeType 的值为9
+ nodeName的值为"#document"
+ nodeValue的值为null
+ parentNode的值为null
+ ownerDocument的值为null

```javascript
// 文档子节点
var html=document.documentElement; // 取得对<html>的引用
html == document.childNodes[0]; // true
html == document.firstChild; // true

var body=document.body; // 取得对<body>的引用
var doctype=document.doctype; // 取得对<!DOCTYPE >的引用

// 文档信息
document.title; // 取得文档标题
document.title="new title"; // 设置文档标题

document.URL;// 取得完整的URL
document.domain; // 取得域名
document.referrer; // 取得来源页面的URL

// 查找元素
// getElementById()
// 接收一个参数,即取得元素的ID
// 返回该元素,找不到返回null
document.getElementById('myDiv');

// getElementsByTagName()
// 接收一个参数,即要取得元素的标签名
// 返回值: 包含零个或者多个元素的NodeList.在HTML中,这个方法会返回一个HTMLCollection对象,与NodeList很类似
var images=document.getElementsByTagName('img');
images.length; // 输出图像的数量
images[0].src; //输出第一个图像元素的src特性

// HTMLCollection对象还有个namedItem(),这个方法通过元素的name特性取得集合中的项.
// <img src="myimage.gif" name="myImage">
images.namedItem('myImage');

// getELementsByName()
// 返回带有给定name特性的所有元素
document.getElementsByName('color');


// 特殊集合
// document.anchors;//包含文档中所有带name特性的<a>元素
// document.forms;// 包含文档中所有<from>元素,与document.getElementsByTagName('form')的结果类似
// document.images;// 与document.getElementsByTagName('img')结果相同
// document.links; // 包含文档中所有带href特性的<a>元素

// 文档写入
// write(), writeln(),open(),close();
document.write("abc");
document.writeln("abc");
```

#### Element 类型
Element类型是用于表现XML或HTML元素,提供了对元素标签名,子节点及特性的访问,其特征:
+ nodeType 的值为1
+ nodeName的值为元素的标签名
+ nodeVaue的值为null
+ parentNode的值是Document或者Element

```javascript
//    <div id="myDiv" title="divTitle" class="divClass" data-order='1'>
//       <p>i am paragraph!</p>
//   </div>
var div =document.getElementById('myDIv');
div.nodeName; // div
div.tagName; // div

// html元素
div.title; // myDiv
div.title; // divTitle
div.className; // divClass

// 取得特性
// getAttribute()
div.getAttribute('id'); //"myDiv"
div.getAttribute('class'); //"divClass"
div.getAttribute('title'); //"divTitle"
// 通过getAttribute()也可以取得自定的特性,不过根据html5的规范,自定义特性应该加上data-前缀
div.getAttribute('data-order');

// 设置特性
// setAttribute(),removeAttribute()
// 两个参数,要设置特性的名称和值
// 该方法既可以操作HTML特性,也可以操作自定义特性
div.setAttribute('data-order',4);
div.getAttribute('data-order'); // "4"

// attributes属性
// Element类型是使用attributes属性的唯一一个DOM节点类型.
// getNamedItem(name) : 返回nodeName属性等于name的值
// removeNamedItem(name) : 从列表中移除属性等于name的节点
// setNamedItem(node) : 向列表中添加节点,很少用到
// item(pos) : 返回位于数字pos位置处的节点
div.attributes.getNamedItem('class'); // class="divClass"
div.attributes.getNamedItem('class').nodeValue; // "divClass"

// 也可以这样来访问
div.attributes['class']; // class="divClass"
div.attributes['class'].nodeValue; // "divClass"

div.attributes.removeNamedItem('title'); // 移除title特性

// 创建元素
// 是用document.createElement()方法可以创建新元素
// 只接收一个参数 : 要创建元素的的标签名
var newDiv=document.createElement('div');
newDiv.id="newDiv";
newDiv.title="newTitle";
newDiv.className="newClass"; //<div id="newDiv" title="newTitle" class="newClass"></div>
document.body.appendChild(newDiv);

// 通过某个特定的标签名取得子节点或者后代节点
// 下面的例子中返回id=myList的元素后带节点中标签名为li的所有子节点
var ul=document.getElementById('myList');
var items=ul.getElementsByTagName('li');
```


#### Text类型
文本节点由Text类型来表示,包含的是可以照字面解释的纯文本内容.纯文本中可以包含转义后的HTML字符,但不能包含HTML代码.
+ nodeType的值为3
+ nodeName的值为`#text`
+ nodeValue的值为节点所包含的文本
+ parentNode是一个Element
+ 不支持子节点
```javascript
// <p>some text</p>
// <p>some other text</p>
var p=document.getElementsByTagName('p');
// 取得节点的文本
p[0].firstChild.nodeValue;// some text
// 修改节点的值,结果会立即反应在浏览器中
p[0].firstChild.nodeValue="some text after modified!";

// 创建文本节点
// 用document.createTextNode()
// 接受一个参数,要插入节点中的文本.
var textNode=document.createTextNode("<strong>you wakl</strong>");
var div=document.createElement('div'); // 创建div
div.appendChild(textNode); // 把文本节点添加到刚创建的div内
document.body.appendChild(div); //把div插入到body中

// 规范化文本节点
// DOM文档中存在相邻的同胞文本很容易导致混乱,因为分不清哪个文本节点表示哪个字符串
// 于是催生了一个能够将相邻文本节点合并的方法
// 该方法名字叫normalize()
// 在过在一个包含两个或者多个文本节点的元素上调用,则会将所有文本合并成一个节点

// 分隔文本节点
// splitText()
// TODO

```

#### comment类型
注释在DOM中是通过Comment类型来表示的.
+ nodeType的值为8
+ nodeName的值为 '#comment'
+ nodeValue的值是注释的值
+ parentNode可能是Document或者Element
+ 不支持子节点
```javascript
//<div id="myDiv"><!-- a comment --></div>
var div = document.getElementById('myDiv');
var comment=div.firstChild;
comment.data; //  a comment 
comment.nodeValue; // a comment
```


#### CDATASection 类型
TODO

#### DocumentType 类型
```javascript
document.doctype.name; // html
```

#### DocumentFragment类型
在所有节点类型中,只有DocumentFragment(文档片段)在文档中没有对应的标记.是一种轻量级的文档,虽然不能把文档片段直接添加到文档中,但是可以降它作为一个"仓库"来使用,即在里面保存将来可能会添加到文档中的节点.
+ nodeType的值为11
+ nodeName的值为"#document-fragment"
+ nodeValue的值为null
+ parentNode的值为null

```javascript
// <ul id="myList"></ul>
var fragment=document.createDocumentFragment();
var ul=document.getElementById('myList');
var li=null;
for(var i=0;i<4;i++){
  li=document.createElement('li');
  li.appendChild(document.createTextNode('item '+(i+1)));
  fragment.appendChild(li);
}
ul.appendChild(fragment);
```

#### Attr类型
元素的特性在DOM中意Attr类来表示,Attr对象有三个属性:name,value和specified,name为特性名称,value为特性值,而specificed是一个布尔值,用于区别特性是在代码中指定的,还是默认的.
```javascript
var attr=document.createAttribute('align');
attr.value='left';
element.setAttributeNode(attr);
element.attributes['align'].value; // left
element.getAttributeNode(); // left
element.getAttribute('align'); //left
// 我们建议并不直接访问特性节点,实际上使用getAttribute(),setAttribute()和removeAttribute()方法远比操作特性节点来的容易
```


### DOM操作技术
#### 动态脚本
```javascript
// 动态加载js
// <script type="text/javascript" src="cilent.js"></script>
var script=document.createElement('script');
script.type="text/javascript";
script.src="client.js";
document.body.appendChild(script);

// 动态加载css样式
// <link rel="stylesheet" href="style.css">
var link=document.createElement('link');
link.rel="stylesheet";
link.href="style.css";
document.head.appendChild(link);

// 操作表格
// <table>是HTML中最复杂的结构之一,使用DOM创建表格更加复杂
var table=document.createElement('table');
table.border=1;
table.width="100%";
var tbody=document.createElement('tbody');
table.appendChild(tbody);
tbody.insertRow(0);
table.rows[0].insertCell(0);
tbody.rows[0].cells[0].appendChild(document.createTextNode('cell 1,1'));

table.rows[0].insertCell(1);
tbody.rows[0].cells[1].appendChild(document.createTextNode('cell 2,1'));
```

#### 使用NodeList
理解NodeList及其近亲NamedNodeMap和HTMLCollection,是从整体上透彻理解DOM的关键所在.着三个集合都是动态更新的.一般来说,应该尽量减少访问NodeList的次数,因为每次访问NodeList,都会运行一次基于文档的查询

### 小结
DOM是语言中立的API,用于访问和操作HTML和XML文档.DOM1级将HTML和XML文档形象地看做一个层次化的节点树,可以是用javascript来操作节点树,进而改变底层文档的外观和结构.
+ 最基本的节点类型是Node,用于抽象的表示文档中一个独立的部分,所有其他类型都继承于Node
+ Document表示整个文档,是一组分层节点的根节点
+ Element节点表示文档中的所有HTML和XML元素,可以用来操作这些元素的内容和特性
+ 另外还有一些节点类型,分别表示文本内容,注释,文档类型,CDATA区域或者文档片段

访问DOM在多数情况下是很直观的,不过在处理`<script>`和`<link>`元素时还是存在一些复杂性,由于这两个元素包含了脚本和样式信息,因此浏览器会把它们与其他元素分开对待.
DOM操作往往是javascript程序中开销最大的部分,而访问NodeList导致的问题为最多.NodeList对象都是动态的,这就意味着每一次访问NodeList对象,就执行一次查询,有鉴于此,建议减少DOM曹组.
