## CSS position

##### postioning with floats
float属性允许我们把一个元素从文档正常流中移除,把它定位到其父元素左边或者右边,其他非浮动的元素就会环绕该浮动的元素,通常float属性有两个最常用的值left,right.  

浮动元素默认是块级元素,所以他会改变元素的默认显示样式,比如\<span\>是行内元素,但是给它设置float属性后它会自动变成块级元素. 
```css
div{
  float:left;
  /*float:right;*/
}
```

##### 清除浮动
清除浮动使用clear属性,其值用的最多的是left,right和both  
```css
div{
  clear:left;
  /*clear:right;*/
  /*clear:both;*/
}
```

