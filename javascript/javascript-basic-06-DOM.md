### DOM
DOM(文档对象模型)是针对HTML和XML文档的一个API(应用程序编程接口).

#### 节点层次
DOM可以将任何HTML或XML文档描绘成一个由多层节点构成的结构.
**文档元素**,文档元素是文档的最外层元素,文档中的其他所有元素都包含在文档元素中.每个文档都只能有一个文档元素.在HTML页面中,文档元素始终都是`<html>`元素.

###### Node类型
DOM1级定义了一个Node接口,该接口将由DOM中的所有节点类型来实现.这个Node接口在javascript中时作为Node类型来实现的,javascript中所有节点类型都继承与Node类型,每一个节点都有一个nodeType属性,用于表名节点的类型.
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
</body>
</html>
```

```javascript
var bodyNode=document.querySelector('body');
bodyNode.nodeType; // 1
bodyNode.nodeName; // "BODY"
bodyNode.nodeValue; // null
var childNodes=bodyNode.childNodes;
childNodes.length; // 9
childNodes[0] ; // 返回body节点的第一个子节点
childNodes[0].parentNode; // <body>​…​</body>​
childNodes[0].nextSibling; // <p>​…​</p>​
childNodes[0].previousSibling; // null

bodyNode.firstChild; // #text
bodyNode.lastChild; // #text

// appendChild()
// 用于向childNodes列表的末尾添加一个节点
// 添加后,childNodes相互的指针关系会得到更新
// 返回新增加的节点.
// 如果传入的节点是文档中的一部分,结果就是该节点从原来位置转移到新位置
bodyNode.appendChild(childNodes[1]);// 将childNodes的第一个节点转移到末尾

// insertBefore()
// 替换节点
// 该方法会把节点放在childNodes列表中某个特定的位置上,而不是像appendChild()放在末尾.
// 接受两个参数:
// 第一个是确定要插入的节点
// 第二个是作为参考的节点
bodyNode.insertBefore(childNodes[1],null); // 把childNodes第二个节点​放到第一个节点上

// replaceChild()
// 接受两个参数,要插入的节点和要替换的节点
// 要替换的节点将由这个方法返回并从文档中移出
bodyNode.replaceChild(childNodes[1],bodyNode.lastChild); // 把childNodes第一个节点插入到最后一个节点,并移出最后一个节点

// removeChild()
// 移除节点
// 接收一个参数,即要移除的节点
bodyNode.removeChild(bodyNode.lastChild); // 移除childNodes最后一个节点

// 前面介绍的四个方法操作的都是某个节点的子节点
// 其中childNodes会返回一些空白的元素,比如换行符,空格等
// 而用children返回的子节点中不会包含换行符和空白元素,所以建议使用children
// 

// coneNode()
// 克隆一个节点
// 接受一个布尔型参数,在参数为false的情况下执行浅复制,即只复制节点本身
// 在参数为true的情况下,执行深复制,也就是复制节点及其整个节点树
// 返回节点的副本信息
document.getElementById('a1').children[1].cloneNode();

// normalize()
// 处理文档树中的文本节点
```
