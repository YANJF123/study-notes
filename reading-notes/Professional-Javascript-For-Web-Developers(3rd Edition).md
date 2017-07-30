# Professional javascript for web developers 3rd Edition

## 第一章

javascript组成的三个部分:
+ ECMAScript ,由ECMA-262定义的一个标准,目前各大浏览器都已经完整支持第五版,改标准最新的版本为ES6=ECMAScript2015
+ DOM,文档对象模型,提供访问和操作网页内容的方法和接口
+ BOM,提供与浏览器交互的方法和接口

## 第二章

在HTML中引入Script标签的位置:  
全部放入head标签的缺点:  
+ 必须要等到所有的JavaScript代码下载,解析,执行之后,在能呈现页面的内容(浏览器遇到`<body>`标签时才呈现页面内容)
+ 对于那些需要很多JavaScript代码的页面来说会导致浏览器在呈现页面时出现明显的延迟,而延迟期间浏览器的窗口将是一片空白

现代WEB应用的做法:
+ 把全部的JavaScript文件应用放在body标签结束之前
+ 在解析JavaScript代码之前,页面的内容将完全呈现在浏览器中
+ 用户因为浏览器窗口显示空白页面的时间缩短而感到打开页面的速度加快了

#### 延迟脚本
```JavaScript
<script defer src="example.js"></script>
```
script标签的defer表示脚本可以延迟到文档完全被解析和显示之后执行,只对外部脚本有效.  

#### 异步脚本
```JavaScript
<script async src="example.js"></script>
```
指定async属性的目的是不让页面等待脚本下载和执行,从而异步加载页面其他内容,只对外部脚本有效.

#### 内嵌代码与外部文件
并不存在硬性的规定必须使用外部文件,但是支持使用外部文件的人多会强调如优点:  
+ 可维护性,可集中管理JavaScript代码
+ 可缓存,浏览器能够根据具体的设置缓存链接的所有外部JavaScript文件
+ 适应未来

#### 文档模式
html5,的文档模式为
```
<!DOCTYPE html>
```

#### `<noscript>`元素
用于在不支持JavaScript的浏览器中显示替代的内容,在如下情况下才会显示出noscript元素内的内容:
+ 浏览器不支持脚本
+ 浏览器支持脚本,但脚本被禁用

```html
<noscript>
  <p>本页面需要浏览器支持JavaScript.</p>
</noscript>
```

## 第三章
任何语言的核心都必然会描述这门语言最基本的工作原理.ECMA-262通过叫做ECMAScript的伪语言为我们描述JavaScript的基本概念.

#### 语法
严格模式(strict mode),严格模式是为JavaScript定义了一种不同的解释与执行模型,在严格模式下,ECMAScript3中一些不确定的行为将得到处理,而且对某些不安全的操作会抛出错误.可以在脚本顶部或者函数内部的上方添加`"strict mode";`
```JavaScript
"strict mode";

// or
function(){
  "strict mode";
  // 函数体
}
```
#### 变量
ECMAScript的变量是松散类型的,是可以用来保存任何类型的数据.使用`var`操作符定义的变量将成为定义该变量作用域中的局部变量.省略`var`会导致创建全局变量,我们不建议通过省略`var`来定义全局变量,因为在局部作用域中定义的全局变量很难维护.

#### 数据类型
typeof操作符用来检测给定变量的数据类型,返回值有:
+ undefined 未定义
+ boolean 布尔值
+ string 字符串
+ number 数值
+ object 数值是对象或null
+ function 函数

undefined 类型,值只有一个就是undefined,使用var声明变量但是未初始化,该变量就为undefined,同样未申明的变量用typeof检测也会返回undefined,所有我们在定义一个变量的时候一定要初始化,这是一个明智的选择,可以避免很多问题.  

null类型是第二个只有一个值的数据类型,这个特殊的值就是null.null值表示一个空对象指针.null == undefined ,会返回true.  

Boolean类型只有两个字面值:true和false,任何类型的值都可以转换为Boolean值,空字符串,0,NaN,null,undefined被转换为false,其余的都被转换为true.

Number类型
+ 浮点数,其保存值所需要的内存空间是整数的两倍,可用e表示法,浮点数值计算会产生舍入误差,所以永远不要测试某个特定的浮点数值.
+ 数值范围,由于内存限制,不可能保存世界上所有数值,ECMAScript能够表示的最小和最大数值保存在`Number.MIN_VALUE`和`Number.MAX_VALUE`中,超出该范围的值会被自动转换为特殊的Infinity,正无穷(Infinity),负无穷(-Infinity).
+ NaN(Not a Number),这个数值用于表示一个本来要返回数值的操作未返回数值的情况,比如`1/0`会返回NaN,任何与NaN涉及的操作都会返回NaN,NaN与任何值不相等,包括自身.`isNaN()`函数用来判断NaN.
+ 数值转换
  - Number()函数,转换的规则比较复杂
  - parseInt()函数,转换为整数
  - parseFloat(),转换为浮点数
+ String类型,用于表示由零个或多个Unicode字符组成的字符序列,即字符串.
  - 转义字符
    * `\n` 换行
    * `\t` 制表
    * `\b` 空格
    * `\r` 回车
    * `\f` 进纸
    * `\\` 斜杠
    * `\'` 单引号
    * `\"` 双引号
    * `\xnn` 以十六进制代码nn表示的一个字符
    * `\unnnn` 以十六进制代码nnnn表示的一个Unicode字符
  - 转换为字符串,使用`toString()`方法,用String()也可以
+ Object类型,对象是一组数据和功能的集合,Object的每个实例都具有下列属性和方法
  - Constructor, 保存着用于创建当前对象的函数
  - hasOwnProperty(propertyName),用于检测给定的属性在当前对象实例中是否存在.
  - isPrototypeOf(Object),用于检查传入的对象是否是另一个对象的原型
  - propertyIsEnumerable(propertyName),用于检查给定的属性是否能够使用for-in语句来枚举.
  - toLocalString(),返回对象的字符串表示,该字符串与执行环境的地区对应.
  - toString(),返回对象的字符串表示
  - valueOf(),返回对象的字符串,数值或布尔值表示

#### 操作符
包括算是操作符,位操作符,关系操作符,相等操作符
+ 一元操作符
  - 递增递减操作符
  - 一元加减操作符
+ 位操作符
  - 位非(NOT),操作符为`~`,结果为操作数的负值减1
  - 位与(AND), 操作符为`&`
  - 位或(OR),操作符为`|`
  - 异或(XOR),操作符为`^`
  - 左移,操作符`<<`,空缺位置用0填充,
  - 有符号右移,操作符`>>`,空缺的位用符号位来填充
  - 无符号右移,操作符`>>>`
+ 布尔操作符
  - 逻辑非`!`
  - 逻辑与`&&`,短路操作符
  - 逻辑或`||`,短路操作符
+ 乘性操作符
  - 乘法`*`
  - 除法`/`
  - 求模`%`
+ 加性操作符
  - 加法`+`,如果两个操作数中有一个是字符串,则会将两个字符串拼接
  - 减法`-`
+ 关系操作符,小于`<`,大于`>`,小于等于`<=`,大于等于`>=`.在比较之前会如果类型不同会进行转换.
+ 相等操作符
  - 相等和不相等,`==`,`!=`,其中`null == undefined`,比较的时候回进行转换
  - 全等和不全等,`===`,`!==`,直接比较不进行转换
+ 条件操作符 condition ? true_value : false_value;
+ 赋值操作符`=`
  - 复合赋值操作符
    * `*=`
    * `/=`
    * `%=`
    * `+=`
    * `-=`
    * `<<=`
    * `>>=`
    * `>>>=`
+ 逗号操作符,`var num=1,num=2,num=3;`用于声明多个变量,也可以赋值.
