## CSS basic
painting with code  
while HTML is about defining the content of a webpage,CSS is about styling a webpage.it 
means setting colors,fonts,dimensions,margins,positions,of a webpage's elements.  
CSS brings a webpage to life ,by applying a coat of paint on its static content.

### why CSS exists 
for separating content and styling

#### why avoid tables
+ HTML表格是累赘的,需要很多的样板代码
+ 语义错误,`<table>`是用来展现多维数据的
+ 改变布局需要修改HTML的结构,很不友好
+ 容易引起语法错误
+ 可读性很差

#### what CSS is
CSS stands for Cascading Style Sheets(层叠式样式表).its purpose is to style markup languages(like HTML or XML).  
Therefore,CSS is worthless on its own,unless associated with an HTML document.
(因此,CSS自身并没有什么用处,除非与HTML文档关联.)  
CSS brings an HTML documents to life.

#### how CSS works
how CSS works is by selecting an HTML element(like a paragraph),choosing a property to alter (like the color),and applying 
a certain value(like red).
```
p{color:red;}
```

#### where do  i write CSS?
+ CSS as an attribute,you can write CSS directly on an HTML elements,by using the sytle attribute.
```html
<p style="color:red;">this text is important.</p>
```

+ CSS in the `<head>`,use `<style>` tag in the `<head>` of your HTML document.
```html
<html>
  <head>
    <title>hello world</title>
    <style>
      p{color:red;}
    </style>
  </head>
  <body>
    <p>this text is important.</p>
  </body>
</html>
```

+ CSS in a separate file, you can write your CSS in a separate file with a `.css` extension,and then link it to your HTML by using 
the `<link>` HTML tag.
```html
<html>
  <head>
    <title>Hello world</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <p>this text is important.</p>
  </body>
</html>
```
