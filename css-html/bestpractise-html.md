
#### 组织你的页面的元素有
+ `<header>` 你页面的第一个元素,包括你的logo或者标语
+ `<nav>` 包含去其他页面的导航
+ `<h1>-<h6>` 页面的标题
+ `<article>` 包含你页面的主要内容,比如你发表的博客信息
+ `<footer>`你页面的最后一个元素
 

#### 定义你的内容的元素
+ `<p>` 定义段落
+ `<ul>` 无需列表
+ `<ol>` 有序列表
+ `<li>` 单独的列表项
+ `<blockquote>` 引语
 

#### 区分你的内容
+ `<strong>` 加粗
+ `<em>` 着重
+ `<a>` 链接
+ `<small>` 不重要的单词
+ `<abbr>` 缩写
 
#### 普通的元素
尽管这些HTML没有实际的语义,但是很多布局都在使用
+ `<div>` 块级元素
+ `<span>` 行内元素
+ 

#### 掌握经常使用的标签
+ 结构
    + header
    + h1-h6
    + nav
    + footer
    + article
    + section
+ 内容
    + p
    + ul
    + ol
    + li
    + blockquote
+ 行内元素
    + a
    + strong
    + em
    + q
    + abbr
    + small

#### 网页结构
+ header 在各个页面相同,比如包含导航
+ main 网页的主要内容,在每个页面中会变动,比如你博客中的发布文章等
+ sidebar 一组链接到其他地方的相关信息 
+ footer 页脚,可以包含一些不重要的链接到其他页面的信息


```
<!--header-->
<header>
    <p>
        <a href=""><img src="logo.gif"></a>
    </p>
    <ul>
        <li><a href="#home">home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#contact">contact</a></li>
    </ul>
</header>

<!--footer-->
<footer>
    <p>buuug7 | copyright2019</p>
    <ul>
        <li><a href="#home">home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#contact">contact</a></li>
    </ul>
</footer>
```
