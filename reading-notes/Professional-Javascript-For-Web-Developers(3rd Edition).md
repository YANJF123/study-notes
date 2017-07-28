# Professional javascript for web developers 3rd Edition

## 第一章

javascript组成的三个部分:
+ ECMAScript ,由ECMA-262定义的一个标准,目前各大浏览器都已经完整支持第五版,改标准最新的版本为ES6=ECMAScript2015
+ DOM,文档对象模型,提供访问和操作网页内容的方法和接口
+ BOM,提供与浏览器交互的方法和接口

## 第二章

在HTML中引入Script标签的位置:  
全部放入head标签的缺点:  
+ 必须要等到所有的JavaScript代码下载,解析,执行之后,在能呈现页面的内容(浏览器遇到`<body>`标签时才呈现页面内容)
+ 对于那些需要很多JavaScript代码的页面来说会导致浏览器在呈现页面时出现明显的延迟,而延迟期间浏览器的窗口将是一片空白

现代WEB应用的做法:
+ 把全部的JavaScript文件应用放在body标签结束之前
+ 在解析JavaScript代码之前,页面的内容将完全呈现在浏览器中
+ 用户因为浏览器窗口显示空白页面的时间缩短而感到打开页面的速度加快了

#### 延迟脚本
```JavaScript
<script defer src="example.js"></script>
```
script标签的defer表示脚本可以延迟到文档完全被解析和显示之后执行,只对外部脚本有效.  

#### 异步脚本
```JavaScript
<script async src="example.js"></script>
```
指定async属性的目的是不让页面等待脚本下载和执行,从而异步加载页面其他内容,只对外部脚本有效.

#### 内嵌代码与外部文件
并不存在硬性的规定必须使用外部文件,但是支持使用外部文件的人多会强调如优点:  
+ 可维护性,可集中管理JavaScript代码
+ 可缓存,浏览器能够根据具体的设置缓存链接的所有外部JavaScript文件
+ 适应未来

#### 文档模式
html5,的文档模式为
```
<!DOCTYPE html>
```

#### `<noscript>`元素
用于在不支持JavaScript的浏览器中显示替代的内容,在如下情况下才会显示出noscript元素内的内容:
+ 浏览器不支持脚本
+ 浏览器支持脚本,但脚本被禁用

```html
<noscript>
  <p>本页面需要浏览器支持JavaScript.</p>
</noscript>
```

## 第三章
任何语言的核心都必然会描述这门语言最基本的工作原理.ECMA-262通过叫做ECMAScript的伪语言为我们描述JavaScript的基本概念.

#### 语法
严格模式(strict mode),严格模式是为JavaScript定义了一种不同的解释与执行模型,在严格模式下,ECMAScript3中一些不确定的行为将得到处理,而且对某些不安全的操作会抛出错误.可以在脚本顶部或者函数内部的上方添加`"strict mode";`
```JavaScript
"strict mode";

// or
function(){
  "strict mode";
  // 函数体
}
```
#### 变量
ECMAScript的变量是松散类型的,是可以用来保存任何类型的数据.使用`var`操作符定义的变量将成为定义该变量作用域中的局部变量.省略`var`会导致创建全局变量,我们不建议通过省略`var`来定义全局变量,因为在局部作用域中定义的全局变量很难维护.

#### 数据类型
