# Professional javascript for web developers 3rd Edition

## 第一章

javascript组成的三个部分:
+ ECMAScript ,由ECMA-262定义的一个标准,目前各大浏览器都已经完整支持第五版,改标准最新的版本为ES6=ECMAScript2015
+ DOM,文档对象模型,提供访问和操作网页内容的方法和接口
+ BOM,提供与浏览器交互的方法和接口

## 第二章

在HTML中引入Script标签的位置:  
全部放入head标签的缺点:  
+ 必须要等到所有的JavaScript代码下载,解析,执行之后,在能呈现页面的内容(浏览器遇到<body>标签时才呈现页面内容)
+ 对于那些需要很多JavaScript代码的页面来说会导致浏览器在呈现页面时出现明显的延迟,而延迟期间浏览器的窗口将是一片空白

现代WEB应用的做法:
+ 把全部的JavaScript文件应用放在body标签结束之前
+ 在解析JavaScript代码之前,页面的内容将完全呈现在浏览器中
+ 用户因为浏览器窗口显示空白页面的时间缩短而感到打开页面的速度加快了
