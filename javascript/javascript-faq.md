## javascript FAQ

- Node.textContent 属性可以表示一个节点及其后代节点的文本内容
```javascript
var text = element.textContent;
element.textContent = "this is some sample text";
  
// 给定如下HTML:
//   <div id="divA">This is <span>some</span> text</div>
  
// 获得文本内容:
var text = document.getElementById("divA").textContent;
// |text| is set to "This is some text".
  
// 设置文本内容:
document.getElementById("divA").textContent = "This is some text";
// divA的HTML现在是这样的:
// <div id="divA">This is some text</div>
```

- 什么是弱类型的
Loose typing means that variables are declared without a type.
弱类型指的是在申明变量的时候不指定变量的类型
```JavaScript
/*JavaScript Example(loose typing)*/
var a=13;// Number declaration
var b="thirteen";// String declaration
```
```java
/*Java Example(Strong typing)*/
int a=13; // int declaration
string b="thirteen"; // String declaration
```
