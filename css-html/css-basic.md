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

### CSS display
Changing the type of an HTML element  
we've seen how there are mainly 2 types of HTML elements:block-level elements and inline ones.the `display` property allows to change the type of HTML element.
#### why not use an HTML inline element,like `<span>` then?
because you choose an HTML element for its meaning ,not its rendering.  
因为你选择HTML元素主要是为了语义,而不是为了渲染样式的目的去选择特定的HTML元素,渲染交给CSS来做.
Each `display` options have specific rendering behaviors:
+ `block` will take up the whole width available
+ `inline` will act as plain text
+ `inline-block`, as its name suggests,a compound(复合) of block and inline behavior
+ `list-item` is similar to `block` as it takes up the whole width available,but shows an additional bullet point
+ `table`,`table-row` and `table-cell` all have very specific,albeit(尽管) unexpected,behavior that allow more interesting layouts
#### display:block
This will turn any element into a **block** element.  
This technique is often used on **links** in order to increase their clickable zone,which can be easily evaluated by setting a background color.  
为了增加可点击的区域,设置背景色,这项技术通常用于超链接标签  
```
.menu a{
  background:red;
  color:white;
  display:blcok;
}
```
#### display:inline
This turns any element into **inline** elements, as if they were just simple text.  
it is often used to create `horizontal navigations`,where list items are semantically but not visually useful.
```
<ul class="menu">
  <li><a href="#">Home</a></li>
  <li><a href="#">Features</a></li>
  <li><a href="#">About</a></li>
</ul>
.menu li{
  display:inline;
}
```
#### display:list-item
The only HTML elements displayed  as `list-item` are the **list-items `<li>`** but also the **definition descriptions `<dd>`** .  
A list item is rendered with a bullet point (if an unordered list `<ul>`) or with a incremental number(if within an ordered list `<ol>`).  
Because the rendering of these bullet points and numbers varies across browsers,and is also hard to style in CSS,the `display:list-item` rule
is never used.Actually,it is common for `<li>`s to be rendered as `display:block` or `display:inline`,as they are more flexible to style.

#### display:none
Applying `display:none;` to an HTML element removes it from your webpages.as if it never existed in your code.

#### visibility:hidden
The CSS property `visibility` is slightly similar to `dispaly`.Applying `visibility:hidden;`hidden an element from your page,but only turns it invisible:
it still takes up the space it was supposed to.
```
.vis{
  visibility:hidden;
}
```

### CSS height and width
Setting fixed dimensions to your rectangles  
The dimensions(or height and width)of an element are dynamic,as they fluctuate in order to fit the content.
```
blockquote{width:600px;}
```
The blockquote will not take up the whole width available,but will remain 600px wide in any situation:
- if the browser window is less wide than 600px,it will show a horizontal scrolling bar
- if the browser window is wider than 600px,the blockquote will stay 600px wide and not take up the whole space
because we have only set the width,the blockquote remians fluid in height,the height becomes the variable dimension to fit the blockquote's content.
#### Setting both height and width
#### CSS overflow
The `overflow` CSS property allows us to manage the case of content being longer than its container.  
The default value is `visible`:the content will be displayed anyway.By applying `overflow:hidden;`,your simply forbid any overflowing content to be seen.
#### Beware of fixed dimensions
+ make sure your content doesn't overflow
+ if it does,use `overflow:hidden` or `overflow:auto` to prevent your design from breaking

### CSS border
The edges of the rectangle  
Because an HTML elemnent is rendered as a rentangle, it can have up to 4 borders:top,bottom,left and right.your can set a border on all sides at once,or on each side individually.
#### border types and location
A CSS border has 3 properties:
+ `border-color`defined by using a color
+ `border-style` can be solid,dashed,dotted...
+ `border-width` defined by using a size unit
It also has 4 possible sides:
+ `border-top`
+ `border-bottom`
+ `border-left`
+ `border-right`
```
blockquote{
  border-color:blue;
  border-style:solid;
  border-width:1px;
}
/* The shorthand property border allows to define all 3 properties at once*/
blockquote{border:1px solid blue;}
```
#### Single border
If you want to set a border on only one of the four sides,you need to include the border's position in the CSS property.
```
blockquote{
  border-bottom-color:blue;
  border-bottom-style:solid;
  border-bottom-width:1px;
}
/* as for the border property,each side has its shorthand version */
blockquote{border-bottom:1px solid blue;}
```

### CSS padding
To give space to your inner content  
The **padding** is the space between an element's border and its content.  
```
blockquote{padding:20px;}
/* as for borders,the padding can be set individually for any of the 4 sides. */
blockquote{padding-top:20px;}
```

### CSS margin
To push away your neighbours  
If padding adds space inside an element(between its border and its content),margins adds space outside between and element and other elements.  
如果说内边距是在一个元素的内部的边框跟它的内容之间添加空间的话,外边距就是在元素与元素之间添加空间  
```
p{margin:40px;}
```
#### merging vertical margins
```
<h1 class="title">main title</h1>
<h2 class="subtitle">I am subtitle</h2>
.title{margin-bottom:30px;}
.subtitle{margin-top:15px;}
```
above example,the margin between the two elements will be `30px`,and not `45px`.That is because margins that "touch" each other will **merge** with each other.  
记着,相邻两个元素的外边距会重合.  
#### choosing between margin and padding
It is padding in the first case,margin in the second.also,considering how margins can **merge**.

### CSS size shorhand wheel
A circle shorthand method  
#### setting 4 values
```
blockquote{padding:20px;}
/* it equal as below */
blockquote{padding:20px 20px;}
/* it equal as below */
blockquote{padding:20px,20px,20px,20px;}
/* it equal as below */
blockquote{padding:20px,20px,20px;}
```
The order is `top`,`right`,`bottom` and `left`.  
If you eneter 3 values(top/right/bottom),your omit setting `left`.As `right` is counterpart(对应),it will use its value.  
#### Other properties that can act as "wheel" shorthand
+ `margin`
+ `padding`
+ `border-width`

Indeed,`border` is(in that order) a shorthand for:
+ `border-width`
+ `border-style`
+ `border-color`

### CSS Positioning
Breaking the flow  
Even without applying any CSS,an HTML document is already styled.Its content follows a nature Flow,directly dependent on the HTML Structure.  
尽管没有用CSS样式文件装饰,但是HTML文档已经是被默认样式装饰过的.它的内容跟随文档流,而方向是根据HTML结构决定的.  
But webpages often want elements to be positioned in a certain way to accomodate(容纳) for particular design needs,which requires breaking the Flow.  
为了设计的需求网页通常需要将某些元素定位到特定的地方,这样就不得不打破原有的文档流.  

### The Flow
The default behavior of a webpage  
An HTML document is a **living** document  
Even without any CSS applied ,an HTML document already has its own rules:
+ **fluidity**:how the content adapts to browser dimensions 流动性
+ **ordering**:in which order elements appear 有序性
+ **stacking**: how elements appear on top of each other 堆叠性

#### Fluidity 流动性
In HTML,the content is king.all `block` elements are fluid,they will naturally adapt their layout to accommodate their inner content:
+ **width:100%** a block will take up the whole width available
+ **word wrap** if a block's inline content doesn't fit on a single line,it will continue on a new line
+ **height:auto** a block's height varies automatically to match its  content's size
+ A **block** si by default in full width
+ Its **height** is the height of its content

#### Ordering 有序性
HTML elements are displayed in the order in which they are written in the code.First in the code -> first in the browser.  
Each block appears in the order in which they appear in the HTML code, from top to bottom.  
```
<p>First</p>
<p>Second</p>
<p>Thrid</p>
<p>Fourth</p>

/* The result */
First
Second
Third
Fourth
```

#### Stacking
A browser has 3 dimensions.  
Each HTML element belongs to an imaginary layer.  
The stack order depends on how elements are nested:child elements appear on top of their respective(各自) parents.  
- Each nested element appears on top of its parent.
- The deeper in the hierarchy,the higher in the stack.
```
<div>
  This parent is behind
  <p>This nested child appears<strong>on top</strong> of its parent</p>
</div>
```
`<strong>` tag is on top,after is `<p>`,and the last is `<div>`tag

#### Breaking the flow
Several CSS properties allow to disrupt the Flow:
+ `height` and `width` can alter an element's fluidity
+ `float` disrupts an element's behavior as well as its surroundings
+ `position` `absolute` and `fixed` remove an element from the Flow
+ `z-index` can alter the order in which elements are stacked

### CSS position
Going manual  
要手动  
The CSS `position` property is versatile and powerful.It allow to set or alter an element's position.It has 4 possible value:
- `static`(default value)
- `relative`
- `absolute`
- `fixed`
It's often used alongside the 4 coordinates properties:
+ `left`
+ `right`
+ `top`
+ `bottom`

#### Static
This is the default `position` value:static elements just follow the natural flow.They aren't afffected by any `left`,`right`,`top` or `bottom` value.

#### relative
when the `position` is set to `relative` ,an element can move according to its current position.  
当将一个元素设置为`position:relative`,它会脱离文档流,具体偏移的位置根据其`left`,`right`,`top` and `bottom`的值来决定,偏移是相对于其原始位置,其相邻的其他元素并未察觉到该元素已经偏移了  

#### absolute
when the `position` is set to `absolute`,an element can move according to the **first positioned ancestor**.  
a **positioned** element is one whose `position` value is either `relative`,`absolute` or `fixed`.so unless the position is not set or static,an element is `positioned`.  
The characteristic of a positioned element is that it can act as a **reference point for its child elements**.  
your can use `left`,`right`,`top` and `bottom` to move it in a position container.  
**what happens if we set both left AND right?**  
+ if the `width` is not set,applying `left:0` and `right:0` will stretch the element across the whole width.it is the equivalent of setting `left:0` and `width:100%`.
+ if the `width` is set , then the `right` value is discarded(忽略).

#### fixed
when the `position` is set to `fixed`,it acts like `absolute`:you can set left/right and top/bottom coordinates.  
The only difference is that the **point of reference is the viewport** . it means that a fixed element won't scroll with the page; it is fixed on the screen.  
被设置为`position:fixed`的元素与设置`position:absolute`十分相似,只是它参考的是当前**视口**

### CSS float
The most unpredictable(无法预知) property  
Behind the word `float`,an endless sea of possibilities(and misbehaviors).  
`float` is probably the most difficult CSS concept to grasp. Its behavior can be intriguing(有趣的),unexpected,and magical(神奇的).  
Probably because ,of all positioning properties there are ,it is the one that most influences its surroundings.  
In other words,applying a float not only modifies the element it's applied upon **but also alter its ancestors,siblings,descendants,and following elements.**  
`float` can only have one of these 3 values:
+ `left` and `right` turns an element into a `floating` one
+ `none` removes the floating aspect

#### when to use float
The purpose of floating an element is to push it to one side and make the next wrap around it.

#### float=block
floating elements will have a `display:block` applied to them automatically,and will mostly behave like block:
- you can set a specific height and width
- if no height is set,the element's height is that of the line-height
- if a `width:100%` is applied,it will look like a block-level element

#### clearing the float
The clear property allows to **push elements** after **the float**.it can only be applied on ***block** elements.

