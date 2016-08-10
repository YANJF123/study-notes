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
The **color** value can be inherited from an ancestor.
#### inherited properties
only a few CSS  properties can be inherited from ancestors.they are mainly text properties:
- text color
- font(family,size,style,weight)
- line-height 

### CSS Priority CSS优先级
An HTML elemnt can be targeted by **multiple css rules** .
#### order of CSS rules
if similar selectors are in your CSS,the last one defined will take priority.  
```
p{color:red;}
p{color:blue;}
/* paragraphs will be blue */
```
#### the 100 measure
the selector with the highest "score" will win
+ `#id` selectors are worth 100
+ `.class` selectors are worth 10
+ `tag` selectors are worth 1

#### how to avoid conflicts
+ only use class
+ avoid applying multiple classes on a single HTML element
+ don't use inline-styles


### CSS color units
different ways to define colors  
Colors are widely used in CSS,whether for text color,background color,gradients,shadows,borders...There are several ways to define colors in CSS.
#### color names
defined by color names,CSS provides 145 colors names,from the most basic (black,white,orange...) to the more specific(lawngreen,orchid...)  
because the color names are hard to remember,and because you probably want very specific colors,color names are not often used .
```
body{
  background:white;
}
a{
  color:red;
}
```
#### rgb
defined by rgb,computer monitors,TVs,mobile phones,all use the RGB color model to display colors,each color is defined by a combination of Red,Green,and Blue. There are 
256 possible values for Red,Green and Blue,from 0 to 255,so there are 256*256*256=16,777,216(1600万颜色) possible colors available.
```
/* the black color */
body{color:rgb(0,0,0)}

/* the white color */
body{color:rgb(255,255,255)}

/* the red color */
body{color:rgb(255,0,0)}

/* the green color */
body{color:rgb(0,255,0)}

/* the blue color */
body{color:rgb(0,0,255)}

```
#### rgba
The **rgba** color unit is **rgb** to which we add an alpha value(ranging from 0-1,in decimal values),which defines how transparent the color is.  
RGBA颜色的定义是在RGB的基础上添加了一个额外的透明通道,该值为小数从0到1,定义该颜色的透明度
```
body{color:rgba(0,0,0,0.5)}
```
#### hsl and hsla
HSL is another way to define a color,think of it is a color wheel.  
HSL是另外一种颜色的定义方式,把它看做一个颜色的轮子.通过H,S,L三个颜色通道的变化以及它们之间的叠加来得到各种各样的颜色.
+ the **Hue**(色调) a value ranging from 0 to 360,defines which color you want.
+ the **Saturation**(饱和度) percentage,ranging from 0% to 100% ,define how much of that color you want.
+ the **Lightness** percentage,rangring from 0% to 100%,defines how bright you want that color to be.

```
// the red color
hsl(0,100%,50%);
hsl(360,100%,50%);
// the green color
hsl(120,100%,50%);
// the blue color
hsl(240,100%,50%);
```
someone thinks the **HSL** is to be human-readable, where **RGB** is more computer-readable.  
**HSLA** is the same as **HSL** ,with the added value of being able to define an alpha value:
```
body{color:hsla(240,100%,50%,0.5);}
```
#### hexadecimal 十六进制
colors in CSS can also be defined with hexadecimal values,like `#ffffff`.  
in hexadecimal ,we have 16 symbols to form numbers.0-9,A-F. just like RGB,a hexadecimal color value is a combination of Red,Green,and Blue,each of them being represent as a hexadecimal 
value,like `DB` for Red,`4E` for green,and `44` for Blue. hexadecimal values are easier to copy and pase.

#### which one to pick?
+ if you don't intend to use any transparent color,stick to hexadecimal values, as they are easier to copy/paste and don't take much space in your code.
+ if you want some transparency , convert your color from hex to rgba,and use the `rgba` color unit.
+ if your want to play around with your color directly in the browser,try `hsl`.


### CSS Size units
sizing for content and space  
there many CSS properties that require size units:
+ **font-size** defines the size of the text
+ **border-width** defines the weight of element borders
+ **margin** defines the spacing between elements
+ **left/right/top/bottom** allow to position and move elements

The most used units are:
- `px` for pixels
- `%` for percentage
- `em` for sizing relative to the parent's `font-size` value
#### pixels
because computer screens use pixels to display the content,it is the most common size unit in CSS.
```
// define the width of the elements
body{width:200px;}
// set the text size
body{font-size:20px;}
```
pixels in CSS are straightforward because they define absolute values:they are not affected by other inherited CSS properties.  
They are also widely used for **positioning** and **spacing** purposes.

#### percentage
percentages are relative units:they rely upon the element's parent and/or ancestor.
```
// set block-level elements
p{width:50%;}
// set other CSS properties,like text size
strong{font-size:150%;}
```
#### Em
`em` is the relative unit:it depends upon the value of the element's `font-size`.  
例如父元素字体大小为20px,而子元素的字体大小定义为`font-size:0.5em`,则子元素的字体大小为10px,该单位通常用来定义具有伸缩响应的网页,当你改变
网页`body`的字体大小的时候,其他的比如`h1`,`h2`...,`p`等元素字体的大小会跟着变化,这样更能保证你的网页的**视觉平衡**.

#### Rem
The `rem` unit is similar to `em`,but instead of depending upon the parent's value,it relies upon the root element's value,which is the `<html>` element.
```
html{font-size:15px;}
body{font-size:1rem;}       /* = 15px*/
h1{font-size:2rem;}           /* = 30px */
h2{font-size:1.5rem;}        /* = 22.5px */
```
#### which one to use?
recommend **pixels** to use : as they're absolute values,they aren't affected by the element's context. 

### CSS Reset
Removing default browser styling  
Every webpage use at least one CSS: the **User agent Stylesheet**.
#### the user agent stylesheet
this CSS file is included in the browser and is called.
+ **every time** a webpage is rendered
+ **before** any of our CSS is applied  

尽管每一种浏览器都有自己的用户代理CSS默认样式,但是它们都是类似的
#### applying a CSS reset
浏览器默认的样式会干扰我们想应用的样式,这就是为什么要设计**CSS样式重置**为所有浏览器提供一致的表现方式.  
你可以使用最流行的HTML5 Reset,将其放置于你的`<head>`之中即可,这里推荐的是[normalize.css](https://github.com/necolas/normalize.css)

### CSS font-familly
choosing a font  
CSS provides several font properties,that directly affectly text rendering . the `font-familly` property defines which font to use.
#### generic font families
have 5 generic families:
+ serif
+ sans-serif
+ monospace
+ cursive
+ fantasy
because the `font-famiily` property is inherited by all HTML children elements,you can apply a font for the whole HTML document by applying 
it on the ancestor fo all HTML elements:the `<body>` element.
```
body{font-familly:sans-serif;}
```
#### web-safe fonts
通常你设置的字体如果在用户的机子上不可用,浏览器会使用默认的字体来代替,所以你应该考虑你所采用的字体应该具有通用性,以便你的网页的字体在
任何计算机上都看起来一样  
有9种web安全字体你可以参考:
- Arial
- Arial Black
- Comic Sans MS
- Courier New
- Georgia
- Impact
- Times New Roman
- Trebuchet MS
- Verdana
#### applying a list of fonts
尽管使用单一的web安全字体是安全的,但是最佳实践是给`font-family`赋予多个字体,因为当赋予的第一个字体不可用的话,浏览器会采用第二个...依次类推,如
果你提供的所有字体都不可用的话,最后才使用浏览器默认的字体,这样给浏览器更多的选择以至于使你的网页更加强壮.

### CSS font properties
For bold and italic text
#### font-size
used to set the font size among other things.
```
h2{font-size:18px;}
```
#### font-style
this property can make your text italic.
```
/* default value is normal */
h2{font-style:italic;}
```
#### font-weight
this property can make your text bold.
```
h2{font-weight:bold;}
```
default value is `font-weight:normal`,depending on the `font-family` used,there is a range of font weights available,fromt **100** to **900**.  
very few fonts provide all 9 weights.your will mostly find 400(normal) and 700(bold),and sometimes 300(light) and 500(medium).
#### font-variant
this property turn your text into small caps:
```
h2{font-variant:small-caps;}
```
会让你的文本变成小型的大写字母,默认值是`font-variant:normal;`  
this is not a widely used property.

### CSS line-height
for readibility concerns,the `line-height` is **the height of each line**.  
the `line-height` property uses the following units:
+ `px`
+ `em`
+ `%`
+ unitless-umbers,like `1.5`
The unitless values basically act like percentages,so `150%` is equal to `1.5` .the latter is just more compact and readable.
#### why line-height is important
the purpose of the `line-height` is to define a readable line spacing for your text.because readibility is dependent upon the size of the text,
it is recommended to use a dynamic value that is relative to the size of the text.use `px` is not recommended because it defines a static value.
the recommened method is unitless-numbers.  
+ for body text,a line height of 1.5 times the size of the text is recommended.
+ for heading, a line height of 1.2 is recommended.
```
body{
  font-size:16px;
  line-height:1.5;
}
```
above the computed height will thus be **16*1.5=24px**
#### line-height inheritance 
because the `line-height` property is inheritanced by the child elements,it will remain consistent no matter what `font-size` is subsequently applied.
```
body{
  font-size:16px;
  line-height:1.5;
}
blockquote{font-size:18px}
```
The `blockquote` element will have a line height of `27px`.

### CSS font shorhand
a shortcut  for several font properties  
it groups with this particular order:
+ `font-style`
+ `font-variant`
+ `font-weight`
+ `font-size`
+ `line-height`
+ `font-family`
you can thus define 6 properties through a single one:
```
body{font:italic small-caps bold 16px/1.5 Arial,sans-serif;}
```
they have to be written in this particular order and there must be a slash `/` between the `font-size` and the `line-height`. the `font-size` and `font-family` are 
mandatory(强制性的),others is optional.  
Other shorhand properties exist,like `background` , `border` and `margin`.

### CSS text properties
Other text alterations  
Alongside(根据) the several `font-*` properties,CSS provides many `text-*` properties.
#### text-align 
the `text-align` property must be applied on a block-level element and defines how its text and children inline elements are horizontally aligned.  
该属性必须应用到块级元素,它定义了内部的文本和行内元素水平对齐的方式.  
最常用的值有:
+ left
+ right
+ center
+ justify
the `text-align` default value is `start`,basically,`start` can either be `left` or `right` ,depending on the direction set on the HTML document.  
**direction** is a CSS propery that can either `ltr`(left to right) or `rtl`(right to left):
- if `ltr` is chosen,`start` equals to `left`
- if 'rtl' is chosen,`start` equals to `right`
#### text-decoration
the `text-decoration` property is used to add a line on your text.default value is `none`.  
```
.deleted{text-decoration:line-through;}
```
possible values:
- overline (上划线)
- underline (下划线)
- line-through (删除线)
##### text-indent
the `text-indent` property allows to add space before the first letter of the first line of a block-level element.default value is `0`.
```
blockquote{text-indent:30px;}
```
#### text-shadow
define:
- `` the horizontal offset 水平偏移
- `` the vertical offset 垂直偏移
- the `blur` 模糊的距离
- the `color` 颜色

### CSS box model
how rectangles are made 矩形是如何制造的?  
在HTML中所有元素都是矩形,矩形的尺寸会根据具体元素的内容动态调整,你可以认为这些矩形是流体类的东西,根据内容来调整自己的形状.  
块级元素会占尽它所在的行的所有宽度,例如段落,

### CSS background
how your rectangle is filled  
the background of an HTML element is what appears behind the text.  
HTML元素的背景指的是出现在文本后面的内容.
#### background-color
default value: `transparent` inherited by children elements:no.
```
body{background:#ffffff;}
```
#### background-image
applying a background image only requires to specify its URL:
```
body{background-iamge:url(path/to/image.png)}
```
the behavior of the image(how it repeats itself,where it is positioned,how it is sized) is defined by other background properties.
the `background-image` only defines which image to use.
#### the difference between HTML images `<img>` and CSS background images
the HTML `<img>` element is for images that are part of the content,while CSS background images are purely decorative.  
the logo of a company ,the thumbnail of a gallery ,the picture of a product ... These are all considered **content** and should use the HTML `<img>` element.  
a beautiful landscape,a cart icon...These can be considered as **decorative**,as they support the content but are not part of it.if they were to disappear,
the webpage would still  make sense(有道理的).
因为有多重的的选择,在内容和样式之间的界限很模糊,一些视觉技术很容易通过CSS的`background`来实现,所以如果你使用的图片是你页面的本质,主要内容的话,就用`<img>`.
##### gradients
CSS also allow to define **color gradients** as background images,in 2 different shapes:
+ `linear-gradient` for gradients in a single direction,in a rectangular shape
+ `radial-gradient` for gradients in all directions,in a circular shape
#### background-position
by default,a background image will repeat itself indefinitely(无限期).you can specify where its **original position** ,by choosing a horizontal `x` value,and a vertical `y` value.
+ pixel values `px`
+ percentages,relative to the HTML element's dimensions
+ keywords like `center`,'left','bottom'...
```
body{background-position:right bottom;}
```
you can mix different coordinate units:
```
body{background-position:center 20px;}
```
#### background-repeat
by default,a background image will repeat itself indefinitely.you can choose to make it repeat only horizontally,only vertically,or not at all.
```
body{background-repeat:repeat-x;} /* only horizontally */
body{background-repeat:repeat-y;} /* only vertically */
body{background-repeat:no-repeat;} /* the background image will only appear once */
```
