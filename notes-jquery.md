#jquery notes
***
### 基础

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



