### DOM2和DOM3
DOM1一级主要定义了HTML和XML文档的底层结构,DOM2和DOM3级则在这个结构的基础上引入更多的交互能力,
也支持更高级的XML特性.

#### DOM变化
DOM2级核心没有引入新类型,他只是在DOM1级的基础上通过增加新方法和新属性来增强既有类型.
DOM3级同样增强了既有类型,但也引入了一些新类型.
+ 针对XML命名空间的变化(主要针对的是XHTML,HTML不支持XML命名空间)
+ 其他方面的变化
    * DocumentType类型的变化(DocumentType新增加了3个属性,publicId,systemId和internalSubset)
    * Document类型的变化 
        - 新增加了一个importNode(),该方法的用途是从一个文档中取得一个节点,导入到另外一个文档,使其成为这个文档结构的一部分
        - 新添加了一个名为defaultView的属性,IE中用parentWindow,其中保存着一个指针,指向拥有给定文档的窗口或者框架,`var parentWindow=document.defaultView || document.parentWindow`
        - 为`document.implementation`对象规定了两个新方法,`createDocumentType()和createDocument()`,前者用于创建一个新的DocumentType节点,后者用于创建文档,为了方便创建一个完整的HTML文档,又为`document.implementation`新增了一个`createHTMLDocument()`方法, 用于创建一个完整的HTML文档
    + Node类型的变化
        * 添加了isSupported()方法,用于确定当前节点具有什么能力
        * 新增加isSameNode(),两个节点引用的是同一个对象,返回true
        * 新增加sEqualNode(),两个节点的类型相同,返回true
        * 新增加setUserData(),好多浏览器不支持
    + 框架的变化,框架和内框架分别用HTMLFrameElement和HTMLIFrameElement表示,他们在DOM2级中都有一个新方法contentDocument,这个属性包含一个指针,指向表示框架内容的文档对象,`var iframe=document.getElementById('myDiv'); var iframeDoc=iframe.contentDocument;`,由于content属性是Document类型的对象,可以是使用Document类型的所有属性和方法.
