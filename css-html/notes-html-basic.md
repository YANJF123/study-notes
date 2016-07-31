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
