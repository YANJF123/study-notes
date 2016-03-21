## javascript FAQ
Node.textContent 属性可以表示一个节点及其后代节点的文本内容
```javascript
var text = element.textContent;
element.textContent = "this is some sample text";
```
与innerText的区别  
Internet Explorer 引入了 element.innerText，目的是相似的，不过有下面几点不同之处：
- textContent 会获取所有元素的内容，包括<script> 和 <style> 元素，然而 IE 专有属性 innerText 不会。
- innerText 会受样式的影响，它不返回隐藏元素的文本，但 textContent 返回。
- 由于 innerText 受 CSS 样式的影响，它会触发重排（reflow），但textContent 不会。
与innerHTML的区别  
正如它的名字，innerHTML 返回 HTML 文本。很多时候，当需要往一个元素里面写文本的时候，人们使用 innerHTML，但其实应该使用 textContent，因为文本不会被解析为 HTML，所以它很可能在性能表现上会更好，同时还能够避免XSS攻击。

