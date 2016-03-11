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





