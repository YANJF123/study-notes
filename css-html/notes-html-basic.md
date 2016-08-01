## html basic

HTML stands for HyperText Markup Language:
* HyperText means that is uses the HTTP part of the internet
* Markup means the code you write is annotated with keywords
* Language means it can be read by both human and a computer

### HTML Syntax
#### attributes
attributes act like extra information tied to an HTML element.they are written within an HTML tag.
they are not displayed by the browser either.
属性为关联的html元素提供额外的信息,它们写在HTML标签之内,它们不会被浏览器显示出来

#### comments
if you write something in your code without disrupting how the browser will display your page,you can
write comments,they will be ignored by the browser,and are only useful for us hunmans who wirte the code.
```html
<!-- i am a comment -->
```
#### self-enclosing elements
they only have an opening tag
```html
<br>
<input type="text">
<img src="/a.jpg">
```

### html block and inline emlement
#### two main types of HTML emlements
Block elements are meant to structrue the main parts of your page
Inline elements are meant to differentiate part of a text,to give it a particular function or meaning.
inline elements usually comprise a single or few words.

Block elements: ul ol div article section blockquote
Inline elements: a em strong q abbr input br img

#### other types of HTML elements
there are several exceptions to the block/inline elements ,but the ones you will most often encounter are:
- list items : li
- table,table rows,table cells for : table,tr,td

### HTML Hierarchy : it is a big family tree
An HTML documents is like a big family tree,with parents,siblings,children,ancestors,and descendants.
it comes from the ability to nest HTML elements within one another.
- Nesting 嵌套,元素之间可以嵌套
- Order 次序,外层内层嵌套顺序不能颠倒
- Depth 深度,外层可以嵌套内层,内层也可以嵌套
- Block and inline nesting ,一般是按照块级元素嵌套行内元素,但是有个例外就是a元素

### HTML Sematics HTML语义(HTML is about meaning)
the purpose of HTML tags is to deliver meaning to a document
Don't be concerned about how your webpage looks like.Focus on the significance of each tag you'll use.

#### Structure elements:organizing your page
structure elements allow you to organize the main parts of your page,they usually contain other HTML elements.
- \<header\> as the first element of the page,that can include the logo and the tagline.
- \<nav\> as a list of links that go to the different pages of the website.
- \<h1\> as the title of the page.
- \<article\> as the main content ,like a blog post
- \<footer\> as the last element of the page, located at the bottom

#### Text elements:defining your content
inside these structure elements,you usually find text delements meant to define the purpose of your content
- \<p\> for paragraphs
- \<ul\> for (unordered) lists
- \<ol\> for (ordered) lists
- \<li\> for individual list items
- \<blockquote\> for quotes

#### Inline elements:distinguishing your text
inline elements allow to distinguish parts of your text.
- \<strong\> for important words
- \<em\> for emphasized words
- \<a\> for links
- \<small\> for less important words
- \<abbr\> for abbreviations like W3C

#### generic elements
尽管这些HTML元素没有实际的意义,但是有很多布局都是使用div+span来布局的
- \<div\> for block-level elements
- \<span\> for inline elements

#### don't thinkover semantics
尽管HTML中有语义的元素很多,但是你只要掌握下面列出的这些就已经足够了
- structure
  - header
  - h1
  - h2
  - h3
  - nav
  - footer
  - article
  - section
- text
  - p
  - ul
  - ol 
  - li
  - blockquote
- inline 
  - a
  - strong
  - em 
  - q
  - abbr
  - small

### HTML Formatting
when whitespace doesn't matter
- line-breaks (换行符),换行和空行都会被浏览器忽略
- tabulations(tab制表符),同样也被浏览器忽略
- tree format , 建议书写HTML的时候用树形的格式,以便于阅读

Tabulations, empty lines, successive spaces, and line-breaks, are dismissed by the computer, and are all converted into a single space.
制表符,空行,连续的空格,换行,都被当做一个空格来处理

### A Valid HTML document
some boilerplate
- Doctype
- the \<html\> element,all your HTML document must be wrapped inside an \<html\> element
- the \<head\> element,give additional for an HTML element
- the \<body\> element,everything inside the \<body\> will be displayed in the brower window
#### a complete valid HTML documet
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>your title</title>
    <meta name="description" content="simple html">
  </head>
  <body>
    <p>hello world!</p>
  </body>
</html>
```

## HTML Content
HTML content is 90% text

### HTML Text
- Paragraphs,paragrahps \<p\> are the most used HTML elements,as they act as the default block-level element and are quick to write.
- List, lists come in 3 variations: ul ,ol,dl
- Blockquotes,blockquotes are used to identify a citation.
- Headings,there are 6 levels of headings available,ranging from h1 to h5,1 being the most inportant one

### inline sematics
the small parts within a block of text块级元素的一部分
- Strong,for important words,use \<strong\> tag
- Emphasis,for emphasis words,use the \<em\> tag
- Abbreviations,abbreviations like W3C or CD can use the \<abbr\> element
```html
<p>
  I just bought a <abbr title="compact Disc">CD</abbr>.
</p>
```
- Inline quotes,the \<blockquote\> element is a block-level element,it has an inline version \<q\>
```html
<p>
  he said <q>"hello world"</q> and just left.
</p>
```
- Other inline elements,there are plenty of other inline-elements to choose from ,but it is enough if you know above we introduced. 

### HTML Links
the core of  the web
Links are essential in HTML,as the web was initially designed to be an information network of documents linked between each other.
in HTML,links are inline elements written with the `<a>`,the `href` attribute 
