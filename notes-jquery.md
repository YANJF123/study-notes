#jQuery notes
***
### 基础
***
##### 准备(jquery ready函数和代码写入的地方)
- 第一步添加jquery库并引入你的html文件中  
- 第二步在jquery ready函数中写你的代码
```javascript
<!DOCTYPE html>
<html>

<head>
    <script src="https://code.jquery.com/jquery-2.1.4.js"></script>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>JS Bin</title>
</head>

<body>
    <a href="https://www.baidu.com" target="_blank">click me</a>
    <script>
    $(document).ready(function() {
        $("a").click(function(event) {
            console.log("buuug7");
            event.preventDefault();
        });
    });
    </script>
</body>

</html>

```
上面的代码会在DOM已经加载,不必等到其他资源(如图片等)加载完毕就开始执行,点击a超链接后会向控制台打印buuug7字符,并禁止链接的跳转  
window.onload和$(document).ready()的区别:  
1. window.onload必须等到页面内包括图片的所有元素都加载完毕后才执行,多个window.onload只会执行一个  
2. $(document).ready()是DOM结构绘制完毕后就执行,不必等到加载完毕,多个$(document).ready()都可以执行  

$(document).ready(handler)==$().ready(handler)==$(handler) 这三个写法等价

##### 用jquery添加删除元素的类
```javascript
// add class
$("a").addClass("test");
//remove class
$("a").removeClass("test");
```
##### jquery隐藏元素
```javascript
$("a").hide("slow");
```

##### 回调函数
回调函数就是传递给其他函数的一个参数,在其父函数执行完毕后它自己才执行,回调函数在等待其父函数执行完毕之前的这段时间里,浏览器会去处理其他问题而不会停止下来等待该结果,一旦该回调函数执行完毕后就会通知浏览器处理该结果,大大提高了浏览器的执行效率,所以回调函数比一般的函数特别
```javascript
//callback without arguments
$.get( "myhtmlpage.html", myCallBack );
//callback with arguments(right)
$.get( "myhtmlpage.html", function(){
    myCallBack( param1, param2 );
} );
//callback with arguments(wrong)
$.get( "myhtmlpage.html", myCallBack( param1, param2 ));
```
注意上面的有参数的回调函数,错误的那个是因为它把回调函数的值当做第二个参数,并不是把函数当做第二个参数


##### No-Conflict Mode
当与其他库冲突的时候,可以通过用一下几种方法来解决冲突问题


- 创建新的别名
```javascript
var $jq = jQuery.noConflict();
```
- 直接用函数表达式调用
```javascript
jQuery.noConflict();
(function( $ ) {
    // Your jQuery code here, using the $
})( jQuery );
```
- 把参数$直接传递到jQuery(document).ready()函数中
```javascript
jQuery(function($){
    // Your jQuery code here, using the $
});
// or 
jQuery(document).ready(function($){
    // Your jQuery code here, usring the $
});
```

##### attributes(属性)
```javascript
$("a").attr("href","http://www.baidu.com/");
// 一次设置多个属性
$("a").attr({
    "href":"http://www.baidu.com/",
    "title":"new title"
});
// 获取元素属性的值
$("a").attr("href");
```

##### slelecting elements(选择元素)
```javascript
// selecting elements by ID
$("#myId");

// selecting elements by Class Name
$(".myClass");

// selecting elements by Attribute
$("input[name='first-name']");

// selecting elements by compound CSS selector
$("#contents ul.people li");

// pseudo-selector below

$("a.external:first");
// selected odd tr
$("tr:odd");
// select all input-like elements in a form
$("#myForm:input");
$("div:visible");
// all except the first tree divs
$("div:gt(2)");
// all currently animated divs
$("div:animated");

// 判断是否选中元素
// 错误
if($("a.foo")){
    ...
}
// 正确
if($("a.foo").length){
    ...
}

// filter selections
// 类名为foo的div中是否有p元素
$("div.foo").has("p");
// 类名为foo的div元素中没有包含bar类的元素
$("div.foo").not(".bar");
// ul中含有apple类的li项目
$("ul li").filter(".apple");
// 返回列表的第一个元素
$("ul li").first();
// 返回ul中第三个元素
$("ul li").eq(2);

// 选择表单元素
// :checked伪类选择器选中checked的输入项
// :checked伪类选择器适用于checkbox,radio buttons,selects
$("form :checked");
// :disabled
// 适用于任意<input>元素
$("form :disabled");
// :enabled
// :disabled的反面,选择任意没有disabled属性的元素
$("form :enabled");
// :input
// 该伪选择器选择表单中的所有<input>,<textarea>,<select>,<button>元素
$("form :input");
// :selected
// 选择select下选中的<option>
$("form :selected");
// 其他的伪类选择器
// :password
// :radio
// :text
// :submit
// :checkbox
// :reset
// :file
// :image

```

##### getters & setters
一些jquery函数既可以用于获取值也可以用于设置值,通常一个getters函数会获取选中区域中的第一元素的值,当然.text()函数除外,
它会默认获取所有元素的值
```javascript
// 会设置所有h1元素的html为hello world
$("h1").html("hello world");
// 会获取第一个h1元素的值
$("h1").html();
// setter通常会返回一个jquery对象,允许你在后面继续调用jquery函数,而getters通常不能这么调用
// 这样的调用通常称为chaining,也就是链式调用
$("h1").html("hello world").addClass("test");
$("#content").find("h3").eq(2).html("foo bar");
// jquery提供的.end()方法让链式调用返回上一级
$( "#content" )
    .find( "h3" )
    .eq( 2 )
        .html( "new text for the third h3!" )
        .end() // Restores the selection to all h3s in #content
    .eq( 0 )
        .html( "new text for the first h3!" );
```

#### 操纵元素
##### 获取和设置元素的信息(getting and setting information about elements)
```javascript
// .html() 获取或者设置HTML内容
// .text() 获取或者设置text内容,HTML将会被去除
// .attr() 获取或者设置元素属性
// .width() 获取或者设置选中区域的第一个元素宽度,传递参数为整数
// .height() 获取或者设置选中区域的第一个元素高度,传递参数为整数
// .position() 获取选中区域第一个元素的定位信息,它不能设置元素定位信息
// .val() 获取或者设置表单元素的值
```
##### 移动,复制,移除元素
```javascript
// .insertAfter() 将给定的元素插入参数所选元素的后面
// <h6>元素会跟在<h1>元素后面
$("<h6>i am h6</h6>").insertAfter("h1");
// .after() 在选定的元素后面跟上参数中的元素
// 同样<h1>元素后面跟着<h6>
$("h1").after("<h6>i am h6</h6>");
// .insertBefore()和.before()跟前面的相反


// .append()将参数指定的内容添加到所选定的元素的末尾
// .appendTo()与append()前后倒置

// Make the first list item the last list item:
// 将ul中第一个li添加到末尾,当然第二个li就会变成第一个li
var li = $( "#myList li:first" ).appendTo( "#myList" );
 
// Another approach to the same problem:
$( "#myList" ).append( $( "#myList li:first" ) );
```
##### 克隆元素
```javascript
// 克隆ul第一个li元素在添加到ul末尾
$("#myList li:first").clone().appendTo("#myList");
```
##### 删除元素
* .remove()删除的元素不在关联其数据和事件
* .detach()删除的元素仍旧关联它原来的数据和事件
* .empty()清空元素的内容

##### 创建元素
```javascript
// 创建一个段落
$("<p>This is a new paragraph.</p>");

// Creating a new element with an attribute object.
$( "<a/>", {
    html: "This is a <strong>new</strong> link",
    "class": "new",
    href: "foo.html"
});

//给ul一次添加多个子元素
var html=[];
for(var i=0;i<10;i++){
    html.push("<li>item"+i+"</li>");
}
$("ul").append(html.join(""));
```
##### 操作属性
```javascript
// 操作单个属性
$("#myDiv a:first").attr("href","new.html");
// 操作多个属性
$("#myDiv a:first").attr({
    href:"new.html",
    rel:"nofollow"
});
```
#### jquery对象
当创建或者选择元素的时候,jquery返回一个jquery对象,类似于数组,但是比数组更加复杂
##### DOM和DOM元素
DOM=document object model(文档对象模型),它代表HTML文档,DOM元素被它的类型(例如div,p,a等)和属性(src,href,class等)来描述
##### jquery对象
用jquery对象简介并且兼容性很好,所以就可以代替本地(native-dom)来操作,检查你jquery选择器是否匹配上对应的元素的通用做法是用.length属性来验证,其中的.get()方法是将jquery对象转换成本地dom元素(native DOM element),返回DOM元素本身

```javascript
// Selecting only the first <h1> element on the page.
var firstHeadingElem = $( "h1" ).get( 0 );
});
```

#### Traversing
##### Parents
```html
<div class="grandparent">
    <div class="parent">
        <div class="child">
            <span class="subchild"></span>
        </div>
    </div>
    <div class="surrogateParent1"></div>
    <div class="surrogateParent2"></div>
</div>
```
```javascript
// Selecting an element's direct parent:
 
// returns [ div.child ]
$( "span.subchild" ).parent();
 
// Selecting all the parents of an element that match a given selector:
 
// returns [ div.parent ](返回父元素中类名为parent的div元素)
$( "span.subchild" ).parents( "div.parent" );
 
// returns [ div.child, div.parent, div.grandparent ](返回所有的父元素包括body和html,这里没写出来)
$( "span.subchild" ).parents();
 
// Selecting all the parents of an element up to, but *not including* the selector:
 
// returns [ div.child, div.parent ](返回从子元素直接父元素到类名为grandparent的父元素之间的元素,但是不包含选择器中的父元素)
$( "span.subchild" ).parentsUntil( "div.grandparent" );
 
// Selecting the closest parent, note that only one parent will be selected
// and that the initial element itself is included in the search:
 
// returns [ div.child ]
$( "span.subchild" ).closest( "div" );
 
// returns [ div.child ] as the selector is also included in the search:
$( "div.child" ).closest( "div" );
```

##### Children
```javascript
// Selecting an element's direct children:
 
// returns [ div.parent, div.surrogateParent1, div.surrogateParent2 ](返回div类型的子元素)
$( "div.grandparent" ).children( "div" );
 
// Finding all elements within a selection that match the selector:
 
// returns [ div.child, div.parent, div.surrogateParent1, div.surrogateParent2 ]
$( "div.grandparent" ).find( "div" );
```

##### Siblings
```javascript
// Selecting a next sibling of the selectors:
 
// returns [ div.surrogateParent1 ]
$( "div.parent" ).next();
 
// Selecting a prev sibling of the selectors:
 
// returns [] as No sibling exists before div.parent
$( "div.parent" ).prev();
 
// Selecting all the next siblings of the selector:
 
// returns [ div.surrogateParent1, div.surrogateParent2 ]
$( "div.parent" ).nextAll();
 
// returns [ div.surrogateParent1 ]
$( "div.parent" ).nextAll().first();
 
// returns [ div.surrogateParent2 ]
$( "div.parent" ).nextAll().last();
 
// Selecting all the previous siblings of the selector:
 
// returns [ div.surrogateParent1, div.parent ]
$( "div.surrogateParent2" ).prevAll();
 
// returns [ div.surrogateParent1 ]
$( "div.surrogateParent2" ).prevAll().first();
 
// returns [ div.parent ]
$( "div.surrogateParent2" ).prevAll().last();
```

#### 操作css样式,元素大小(CSS,Styling,$Dimensions)
注意驼峰拼写的css属性,是推荐的写法,不过不赞成用.css()函数设置元素的样式
```javascript
// Getting CSS properties.
$( "h1" ).css( "fontSize" ); // Returns a string such as "19px".
$( "h1" ).css( "font-size" ); // Also works.

// Setting CSS properties.
$( "h1" ).css( "fontSize", "100px" ); // Setting an individual property.
// Setting multiple properties.
$( "h1" ).css({
    fontSize: "100px",
    color: "red"
});

// 赞成的设置css样式的方法如下
// Working with classes.
var h1 = $( "h1" );
h1.addClass( "big" );
h1.removeClass( "big" );
h1.toggleClass( "big" );
if ( h1.hasClass( "big" ) ) {
    ...
}

// Dimensions
// Basic dimensions methods.
 
// Sets the width of all <h1> elements.
$( "h1" ).width( "50px" );
 
// Gets the width of the first <h1> element.
$( "h1" ).width();
 
// Sets the height of all <h1> elements.
$( "h1" ).height( "50px" );
 
// Gets the height of the first <h1> element.
$( "h1" ).height();
 
// Returns an object containing position information for
// the first <h1> relative to its "offset (positioned) parent".
$( "h1" ).position();
```

#### Data Methods(将数据存储与有个DOM元素上)
页面刷新该数据将不会存在
```javascript
// Storing and retrieving data related to an element.
$( "#myDiv" ).data( "keyName", { foo: "bar" } );

// Returns { foo: "bar" } 
$( "#myDiv" ).data( "keyName" ); 
```

#### jquery的一些实用方法(utility methods)
在$命名空间中存储着一些辅助函数
```javascript
// $.trim()
// Returns "lots of extra whitespace"
$.trim( "    lots of extra whitespace    " );

// $.each()
$.each([ "foo", "bar", "baz" ], function( idx, val ) {
    console.log( "element " + idx + " is " + val );
});
$.each({ foo: "bar", baz: "bim" }, function( k, v ) {
    console.log( k + " : " + v );
});

// $.inArray()
// 返回元素在数组中的索引,如果没找到返回-1
var myArray = [ 1, 2, 3, 5 ];
if ( $.inArray( 4, myArray ) !== -1 ) {
    console.log( "found it!" );
}

// $.extend()
// Changes the properties of the first object using the properties of subsequent objects:
// 用后面的对象的属性更新第一对象的属性
var firstObject = { foo: "bar", a: "b" };
var secondObject = { foo: "baz" };
var newObject = $.extend( firstObject, secondObject );
 
console.log( firstObject.foo ); // "baz"
console.log( newObject.foo ); // "baz"

// If you don't want to change any of the objects you pass to $.extend(), pass an empty object as the first argument:
// 用$.extend()不想修改原来对象的属性,只是想在产生的新对象中更新属性,只需要在传递第一个参数为空对象即可
var firstObject = { foo: "bar", a: "b" };
var secondObject = { foo: "baz" };
var newObject = $.extend( {}, firstObject, secondObject );
 
console.log( firstObject.foo ); // "bar"
console.log( newObject.foo ); // "baz"

// $.proxy()
// Returns a function that will always run in the provided scope — that is, sets the meaning of this inside the passed function to the second argument.
var myFunction = function() {
    console.log( this );
};
var myObject = {foo: "bar"};
myFunction(); // window
var myProxyFunction = $.proxy( myFunction, myObject );
myProxyFunction(); // myObject

//If you have an object with methods, you can pass the object and the name of a method to return a function that will always run in the scope of the object.
var myObject = {
    myFn: function() {
        console.log( this );
    }
};
$( "#foo" ).click( myObject.myFn ); // HTMLElement #foo
$( "#foo" ).click( $.proxy( myObject, "myFn" ) ); // myObject

```

##### 判断变量类型
```javascript
$.isArray([]); // true
$.isFunction(function() {}); // true
$.isNumeric(3.14); // true

// $.type()
// 就相当于javascript的typeof
$.type( true ); // "boolean"
$.type( 3 ); // "number"
$.type( "test" ); // "string"
$.type( function() {} ); // "function"
 
$.type( new Boolean() ); // "boolean"
$.type( new Number(3) ); // "number"
$.type( new String('test') ); // "string"
$.type( new Function() ); // "function"
 
$.type( [] ); // "array"
$.type( null ); // "null"
$.type( /test/ ); // "regexp"
$.type( new Date() ); // "date"
```
