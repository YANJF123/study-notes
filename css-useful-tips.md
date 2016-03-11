# css-useful-tips
some useful css tips(一些有用的css技巧,大部分来自wtfhtmlcss.com)
***
### updating(更新中)...
***

### content(正文)
##### 永远声明文档类型(always include a doctype)
强烈建议用HTML5的doctype,缺少文档类型声明会使你的网页有些地方出现莫名其妙的显式bug
```html
<!DOCTYPE html>
```


##### 使用盒子模型的border-box
额外的padding和border-width会使元素所占用的空间超出它本身的大小,为了避免这种情况,请设置box-sizing:border-box后,padding和border-width不会增加元素额外所占用的空间,下面是一个通用的做法,复制粘贴到你的css文件即可生效
```css
/* apply a natural box layout model to all elements, but allowing components to change */
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
```


##### 浮动元素优先(floats first)
浮动元素的文档顺序应该是第一位的,浮动元素需要被包裹,负责会引起文档结构颠倒,请参考下面的例子
```html
<div class="parent">
  <div class="float">Float</div>
  <div class="content">
    <!-- ... -->
  </div>
</div>
```


##### 浮动和清除(floats and clearing)
任何内容后面跟着的浮动元素会环绕在该内容的周围直到你清除该浮动,用下面给出的代码来解决你的浮动问题
```css
/*  use micro clearfix to clear your floats with a seperate class */
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
```


##### 浮动元素高度计算
父元素包含浮动的子元素会导致浏览器计算其高度为0,添加clearfix来阻止浏览器计算其高度


#### 浮动元素会将该元素变成块级元素
浮动元素会自动转换display:block;所以不要在一个元素设置浮动属性后在设置其display:block,没有必要
```css
.element {
  float: left;
  display: block; /* Not necessary */
}
```

##### 垂直相邻元素的margin边界会重叠到一起
在很多情况中,垂直对齐的元素的上边界和底边界会重叠一起,对于浮动元素或者绝对(absolutely)元素来说是永远不会重叠的,当然水平相邻的元素的边界也不会重叠

##### 永远设置\<button\>的type
\<button\>的type默认是submit,通过设置\<button\>的type="button"来阻止其提交表单的功能


##### 关于定位的解释(position explained)
- position:fixed; 是基于浏览器视图来定位元素
- position:absolute; 是根据它最近的父元素来定位的,配合TRBL(top right bottom left)来定位(如果父元素没有设置position,则以浏览器左上角为原点定位)
- position:relative; 参照父元素左上角结合TRBL来定位


##### 定位与宽度(position and width)
在定位position:absolute|fixed;的时候不要设置width:100%;因为width:100%;就相当于设置left:0;right:0;


##### fixed定位与transforms
当一个元素的父元素有transform设置的时候,会用transforms创建一个新的包含块,强制设置父元素的positon:relative,position:fixed;的元素会具有positon:absolute;属性,可以参考该例子 [demo](http://output.jsbin.com/yabek/1/)

