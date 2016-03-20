### HTML5
- 语义: 能够让你更恰当地描述你的内容是什么
- 连通性: 能够让你跟服务器之间通过新技术进行通讯
- 离线&储存: 能够让网页在客户端本地存储数据以高效地离线运行
- 多媒体: 使audio和video成为web中的一等公民
- 2D/3D绘图效果: 提供了一个更加分化范围的呈现选择
- 性能&集成 :提供了非常显著的性能优化和更有效的计算机硬件使用
- 设备访问Device Access: 能够处理各种输入和输出设备
- 样式设计: 让作者来创作更加复杂的主题吧


##### 用HTML5的doctype声明文件包含HTML5标记
```html
<!DOCTYPE html>
```

##### 用<meta charset>声明字符集
```html
<meta charset="UTF-8">
```

##### HTML5新增了几个新元素使得开发者可以用标准语义去描述web文档的结构
这些包括section,article,aside,footer,header,nav,hgrop

* <header>元素表示一组引导性的帮助，可能包含标题元素，也可以包含其他元素，像logo、分节头部、搜索表单等。
```html
<header>
  a logo
</header>
```

* <footer>表示最近一个章节内容或者根节点元素的页脚。一个页脚通常包含该章节作者、版权数据或者与文档相关的链接等信息。
```html
<footer>
  Some copyright info or perhaps some author info for an &lt;article&gt;?
</footer>
```
