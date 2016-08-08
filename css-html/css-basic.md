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
the 3rd method of using a separate CSS file is preferred.

#### why not style directly in the HTML?
because we want to separate the content from its presentation(CSS).  
it makes maintenance easier as well : the same CSS file can be used for a whole website.  
it provides flexiblity:focus on the content on one side , the styling on the other.  


### CSS syntax
who{what:how}  
the purpose of CSS is to define the layout and styling of your HTML elements.
```
/* css rule */
selector{property:value;}
```
CSS have a 3-part process:
+ the selector defines who is targeted,which HTML element(s)
+ the property defines what characteristic to alter
+ the value defines how to alter that characteristic

#### quick example
```
blockquote{
  background:lightgreen;
  color:darkgreen;
}
<blockquote>sometings is ready.</blockquote>
```
#### comments
```
/* this is a css comment */
blockquote{
  background:lightgreen;
  color:darkgreen;
}
```

### CSS selectors
CSS selectors define which elements we want out styling to be applied to.  
CSS选择器用来定义我们的样式到具体的的元素  

#### generic tag selectors
generic HTML tag selector is something like below:
```
a{/* Links */}
p{/* Paragraphs */}
ul{/* Unordered lists */}
li{/* List items */}
```

#### classes
Of all HTML attributes,the class attribute is the most important for CSS.it allows us to define a group of HTML elements that we can target specifically.
```
.data{
  color:red;
}
<p class="data">something like ...</p>
```

#### IDs
you can also use the `id` attribute in your HTML,and target it with a hash `#` in your CSS
```
#tagline{
  color:red;
}
<p id="tagline">this is a text.</p>
```
#### combining selectors
see some examples in below:
```
.date{
  color:red;
}
em.date{
  color:blue;
}
<p class="date">i am paragraph.</p>
<p>i also a <em class="date">paragraph</em>.</p>
```
#### hierarchy selectors
a **space** in a selector defines a ancestor/descendant relationship.
```
header a{
  color:red;
}
```
this can be read from right to left as:"select all **a** elements that are within a **header** element". this will prevent all other links 
to remain unaffected.

#### Pseudo-class selectors
HTML elments can have different **states**,the most common case is when you hover over a link. it's possible in CSS to apply a different style when such an event occurs.  
HTML元素具有不同的状态,最常见的情况是你把鼠标悬置在超链接上的时候. 当此事件发生的时候应用不同的CSS样式是可能的.  
```
a{
  color:blue;
}
a:hover{
  color:red;
}
```

### CSS inheritance (CSS继承)
#### value propagation 值的传递
The *color* value can be inherited from an ancestor.
#### inherited properties
only a few CSS  properties can be inherited from ancestors.they are mainly text properties:
- text color
- font(family,size,style,weight)
- line-height 
