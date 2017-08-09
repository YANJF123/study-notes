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

#### 语句
if语句
```javascript
var i = 30;
if (i>25){
  //do some
} else if (i>30) {
  // do other
} else {
  // do else
}
```

do-while语句
```javascript
var i = 30;
do {
  //some
} while(i<30 );
```

while语句
```javascript
var i = 30;
while (i<30) {
  // do some
}
```

for语句
```javascript
for (var i =0; i<5; i++){
  //do some
}
```

for-in 语句,是一种精准的迭代语句,可用来枚举对象的属性.
```javascript
var arr = [1,2,3,4];
for (var item in arr ) {
  console.log(item);
}
```

label 语句,一般都是配合for等循环语句使用.
```javascript
start:
for (var i=0;i<count;i++){
  // some
}
```

break 和 continue 语句
```javascript
// break 语句会立刻退出循环,强制继续执行循环后面的语句
for (var i=1;i<10;i++){
  if(i==3){
    break;
  }
  console.log(i);
}
// 0 1 2 4 5

// continue 语句会退出当前循环,继续执行下次循环
for (var i=1;i<10;i++){
  if(i==3){
    continue;
  }
  console.log(i);
}
// 0 1 2
```

with 语句,其作用是将代码的作用域设置到一个特定的对象中. 严格模式下不允许使用with语句.所以这里在不做介绍.

switch语句,用来简化多重if else 语句来设计的,如果省略break关键字,就会导致执行完当前case,继续执行下一个case.
```javascript
var num =2;
switch (num) {
  case 1: console.log(num);break;
  case 2: console.log(num);break;
  case 3: console.log(num);break;
  case 4: console.log(num);break;
  default: console.log(num);
}
```
#### 函数
函数就是一组相关代码的集合,主要用来复用代码.  ECMAScript中函数参数保存在`arguments`对象中,访问参数可通过arguments[i] ,ECMAScript中函数没有重载的概念.  
与其他语言函数的区别:
+ 无需指定函数的返回值,任何ECMAScript函数都可以在任何时候返回任何值
+ 实际上,未指定任何返回值的函数返回的是`undefined`
+ ECMAScript没有函数签名的概念,因为函数参数是一个包含零个或多个值的数组形式
+ 可以向ECMAScript函数传递任意数量的参数,并通过arguments对象来访问这些参数.
+ 由于不存在函数签名的特性,ECMAScript函数不能重载.
```javascript
function sum(){
  return arguments;
}

```

## 第四章

#### 基本类型和引用类型的值
基本类型值指的是简单的数据段,而引用类型值指那些可能由多个值构成的对象.
+ 动态属性,对于引用类型值,我们可以为其添加属性和方法,但是对基本类型值是不能添加属性和方法的.
+ 复制变量,基本类型值在复制的时候复制值跟原值之间相互独立互不干扰,引用类型值在复制的时候他们同时指向一个对象,修该一个会影响另一个.
+ 传递参数,基本类型值传递如同基本类型变量复制一样,而引用类型值的传递则如同引用类型变量的复制一样.
+ 检测类型,检测基本类型数据用`typeof`,检测引用类型用`instanceof`

#### 执行环境及作用域
执行环境(execution content),执行环境定义了变量或函数有权访问的其他数据.每一个执行环境都有一个与之关联的变量对象,环境中定义的所有变量和函数都保存在这个对象中.全局执行环境是最外围的一个执行环境,根据ECMAScript实现的宿主不同,表示执行环境的对象也不同,在Web浏览器中,全区执行环境被认为是`window`对象,因此所有全局变量和函数都是作为window对象的属性和方法创建的.  

某个执行环境的所有代码执行完毕后,该环境被销毁,保存在其中的所有变量和函数定义也随之销毁.  

每个函数都有自己的执行环境,当执行流进入一个函数时,函数的环境就会被推入一个环境栈中.而在函数执行之后,栈将其环境弹出,把控制权返还给之前的执行环境.  

当代码在一个环境中执行时,会创建变量对象的一个 **作用域** **scope chain**,作用域链的用途是保证对执行环境有权访问的所有变量和函数的有序访问.作用域链的前端始终都是当前执行代码所在环境的变量对象.作用域链中的下一个变量对象来自包含(外部)环境,而在下一个变量对象则来自下一个包含环境.这样一直延续到全局执行环境.全局执行环境的对象始终是作用域链中的最后一个对象.

标示符解析是沿着作用域链一级一级地搜索标示符的过程.搜索过程始终从作用域链的前端开始,然后逐级地向后回溯,直到找到标示符为止,如果找不到则发生错误.  

#### 延长作用域链
虽然执行环境的类型只有两种,全局和局部(函数),但还是有其他方法来延长作用域链,这么说是因为有些语句可以在作用域链的前端增加一个变量对象,该变量会在代码执行后被移出.
+ try-catch语句的catch块
+ with语句

对于`with`语句,现在都不建议过多使用with,我们就不介绍了,而`try-catch`,`catch`会创建一个新的变量对象,其中包含的是被抛出错误对象的声明.

#### 没有块级作用域
在Javascript中没有块级作用域,包裹在花括号中的代码不会有自己的作用域,常见的例如`if for`等语句.在声明一个变量的时候如果不用`var`会导致创建全局变量,所以在创建对象的时候务必使用`var`.  

查询标识符,在确定一个标识符的时候,搜索过程从作用域链的顶端开始,依次向上搜索.直到找到为止.如果找不到会发生错误.

#### 垃圾收集
Javascript是一门具有自动垃圾收集机制的编程语言,开发人员不必关心内存分配和回收问题.
+ 离开作用域的值将被自动标记为可以回收,因此将在垃圾手机期间被删除
+ **标记清除** 是目前主流的垃圾手机算法,其思想是给当前不使用的值加上标记,然后在回收其内存.
+ 另一种垃圾收集算法是 **引用计数** ,其思想是跟踪记录所有值被引用的次数,当引用次数变为0时,则说明在没有办法访问这个值了,因此就可以将其占用的内存空间回收.不过在代码存在循环引用现象时,该算法会导致问题.
+ 适当的解除变量的引用对垃圾回收机制有好处



## 第五章 引用类型
引用类型的值(对象)是引用类型的一个实例,引用类型是一种数据结构,用于将数据和功能组织在一起.这也常被称为类,但是javascript对类的概念跟其他语言略有不同.

#### object类型
到目前为止,我们看到的大多数引用类型值都是Object类型的实例,也是使用最多的一个引用类型.
```javascript
// new 操作符来创建
var person = new Object();
person.name = 'buuug7';
person.age = 22;

// 对象字面量来创建
var person = {
  name : 'buuug7',
  age : 22
};

// 访问 , 点表示法
person.name; // buuug7
person.age; // 22

// 访问, 方括号表示法
person['name']; // buuug7
person['age']; // 22
```

#### Array类型
ECMAScript中的数组与其他语言中的数组区别较大,ECMAScript中的每一项可以保存任何类型的数组.其数组长度可以动态的调整.
```javascript

//
// 创建数组
//
// 使用Array构造函数
var numbers = new Array(); // 创建一个空数组
var numbers = new Array(5); // 创建指定长度的数组
var numbers = new Array("red","blue","green"); // 创建并初始化数组

// 使用数组字面量表示法
var numbers = [];
var numbers = [1,2,3];

//
// 读取数组
//
var numbers = [1,2,3];
numbers[0]; // 1
numbers[1]; // 2

//
// 数组长度
//
var numbers = [1,2,3];
numbers.length; // 3

//
// 检测数组
//
// 不推荐 instanceof 如果网页中包含多个框架,导致检测不准确
// 推荐用ES5的Array.isArray()
var numbers = [1,2,3];
Array.isArray(numbers); // true

//
// 转换方法
//
// toLocalString() toString() valueOf()
// toString() 返回由数组中每个值的字符串形式拼接而成的一个逗号分隔的字符串
// valueOf() 返回数组本身
// 用join()方法也可以实现toString()方法的功能
var numbers = [1,2,3];
numbers.join(','); // 1,2,3

//
// 栈方法
//
// 数组可以表现的像栈一样,LIFO(Last-In-First-Out,后进先出)
// 栈中项的插入叫推入,移除叫弹出,只发生在栈的顶部.
// ECMAScript专门提供了push()和pop()方法,以便实现类似栈的行为
var numbers = [1,2,3];
numbers.push(4); // 4
numbers.pop(); // 4

//
// 队列方法
//
// 队列数据结构的访问规则是FIFO(First-In-First-Out,先进先出)
// 结合使用shift()和push()数组可以实现队列方法
var numbers = [1,2,3];
numbers.push(4); // 4
numbers.shift(); // 1
alert(numbers); // 2,3,4
// unshift()与shift()作用相反,它可以在数组的前端添加任意个项并返回数组的长度
numbers.unshift(0,1); // 5
alert(); // 0,1,2,3,4

//
// 重排序方法
//
// reverse() 取反
// sort() 默认按照升序排列,不过通常情况下并不是我们想要的结果,它接受一个函数
var numbers = [1,2,3,10,4];
numbers.sort(function(value1,value2){
  return value2-value1;
});

//
// concat()方法
//
// 基于当前数组中的所有项创建一个新数组
var numbers = [1,2,3];
var numbers2 = numbers.concat(4,5,6); // [1, 2, 3, 4, 5, 6]

//
// slice()方法
//
// 基于当前数组中的一个或者多个创建一个新数组
// 如果slice方法的参数为负数,则用数组长度加上该数来确定相应的位置
// 例如数组长度为8, slice(-4,-2)与slice(4,6)相同
var numbers = [1,2,3,4,5,6];
var numbers2 = numbers.slice(1); // [2,3,4,5,6]
var numbers3 = numbers.slice(1,3); // [2,3]

//
// splice()方法
//
// 删除: 可以删除任意项,只需要指定两个参数,要删除的第一项位置和要删除的项数
var numbers = [1,2,3,4,5,6];
// 从第一项开始,总共删除1项
var removed = numbers.splice(0,1); // 1
alert(numbers); // 2,3,4,5,6

// 插入: 向指定位置插入多个项,提供参数:起始位置,0(要删除的项数),和要插入的项
var numbers = [1,2,3,4,5,6];
// 向位置1插入8,9,10
var removed = numbers.splice(1,0,8,9,10); // []``
alert(numbers); // 1, 8, 9, 10, 2, 3, 4, 5, 6

// 替换: 可以向指定位置插入任意数量的项,同时可删除任意数量的项
// 删除三项,插入三项
var numbers = [1,2,3,4,5,6];
var removed = numbers.splice(1,3,7,8,9); // [2,3,4]
alert(numbers); // 1,7,8,9,5,6

//
// 位置方法
//
// indexOf() 和 lastIndexOf()
// 接受两个参数,要查找的项和表示查找起点位置的索引
var numbers = [1,2,3,4,2,5,6];
numbers.indexOf(2); // 1
numbers.lastIndexOf(2); // 4

//
// 迭代方法
//
// 每个方法都接受两个参数:要在每一项运行的函数和(可选)运行该函数的作用域对象(this)
// 传入这些方法中的函数会接收三个参数:数组项的值,该项在数组中的值和数组对象本身
// every() 对数组中的每一项运行给定函数,如果该函数对每一项都返回true,则返回true
// some() 对数组中的每一项运行给定函数,如果该函数任一项返回true,则返回true
// filter() 对数组中的每一项运行给定函数,返回该函数返回true的项组成的数组
// forEach() 对函数中的每一项运行给定函数,没有返回值
// map() 对数组中的每一项运行给定函数,返回每次函数调用的结果组成的数组

var numbers = [1,2,3,4,5,4,3,2,1];
var everyResult = numbers.every(function(item,index,array){
  return item>2;
});
alert(everyResult); // false

var someResult = numbers.some(function(item,index,array){
  return item>2;
});
alert(someResult); // true

var filterResult = numbers.filter(function(item,index,array){
  return item>2;
});
alert(filterResult); // 3,4,5,4,3

numbers.forEach(function(item,index,array){
  // 执行某些操作
});

var mapResult = numbers.map(function(item,index,array){
  return item*2;
});
alert(mapResult); // 2, 4, 6, 8, 10, 8, 6, 4, 2


//
// 缩小方法
//
// reduce() reduceRight()
// 这两个方法都会迭代数组的所有项,然后构建一个最终返回的值
// reduce()方法从数组的第一项开始,逐个遍历到最后
// reduceRight() 方法从数组的最后一项开始,向前遍历到第一项
// 这两个方法都接收两个参数: 一个在每一项上调用的函数和(可选的)作为缩小基础的初始值
// 传给reduce()和reduceRight()的函数接收四个参数:前一个值,当前值,项的索引和数组对象
// 这个函数返回的任何值都会作为第一个参数自动传给下一个项,第一次迭代发生在第二项上,因此第一个参数是数组的第一项,第二个参数是数组的第二项
var numbers = [1,2,3,4,5];
var sum = numbers.reduce(function(prev,cur,index,array){
  return prev+cur;
});
alert(sum); // 15
```

#### Date 类型
Date类型使用UTC(Coordinated Universal Time,国际协调时间)1970-01-01零时开始经过的毫秒数来保存日期.
```javascript
// 创建一个日期对象
var now = new Date();

//
// Date.parse();
// 该函数接受一个表示日期的字符串参数,然后尝试根据这个字符串返回相应日期的毫秒数
// 2017-08-02 00:00:00
Date.parse('2017-08-02'); // 1501632000000

// Date.UTC();
// 返回对应日期的毫秒数,接受的参数为:年份,基于0的月份(0-11),月中的那一天(1-31),小时(0-23),分钟,秒以及毫秒数
// 其中只有年跟月是必须的
// 2017-08-02 00:00:00
Date.UTC(2017,7,2); // 1501632000000

// 当然创建一个日期对象的时候会自动调用Date.parse()或者Date.UTC()
var now = new Date(2017,7,2);
var now = new Date('2017-08-02');

// Date.now()返回当前时间时间表示的毫秒数,而不是时间对象

//
// 继承方法
//
// toString(),toLocaleString(),valueOf()
// toString() 返回带有时区信息的日期和时间,一般以军用时间表示
// toLocaleString() 返回与浏览器设置的地区相适应格式的时间和日期
// valueOf() 返回毫秒表示数

//
// 常用日期格式化方法
//
// toDateString() 显示: 星期几 月 日 年
// toLocaleDateString() 特定于地区的
// toTimeString() 显示: 时 分 秒 时区信息
// toLocaleTimeString() 特定与地区的
// toUTCString() 完整的UTC日期
// toLocaleString()
// 以上的几种方法输出的字符串格式因浏览器而异,没有哪一种方法能够在用户界面中显示一致的日期信息

//
// 获取和设置日期
//
// getTime() setTime()
// getFullYear() setFullYear()
// getUTCFullYear() setUTCFullYear()
// 很多... 自己查API,这里就不罗列了
```

#### RegExp 类型
ECMAScript通过RegExp类型来支持正则表达式.

```javascript
// 创建正则表达式
// var expression = /pattern/flags;
// 任何一个正则表达式都可以带一个或者多个表示(flags)
// g: 表示全局模式(global),即模式将应用于所有字符串,而非在发现第一个匹配项时立刻停止
// i: 表示不区分大小写(case-insensitive)
//m: 表示多行(multiline)模式

// 创建正则表达式的方式有:字面量形式,使用RegExp构造函数
// RegExp的实例属性: global,ignoreCase,lastInex,multiline,source

// exec()
var pattern = /[bc]a/i;
pattern.global; // false
pattern.ignoreCase; // true
// RegExp的实例方法: exec(),test()
// exec()接受一个参数,即要应用模式的字符串,然后返回包含第一个匹配项信息的数组
var pattern = /[ab]c/gi;
var matches = pattern.exec('bbac');
matches.index; // 2
matches.input; // bbac
matches[0]; // ac

// test()
// 模式与参数匹配的情况下返回true
var pattern = /\d{3}-\d{3}-\d{2}/;
var text = '210-337-18';
if (pattern.test(text)){
  alert('yes!');
}

// RegExp实例继承的toLocaleString()和toString()方法都会返回正则表达式的字面量

//
// RegExp构造函数的属性
//
// input 最近一次匹配的字符串
// lastMatch 最近一次的匹配项
// lastParen 最近一次匹配的捕获组
// leftContext input字符串lastMatch之前的文本
// rightContext input字符串lastMatch之后的文本
// multiline 布尔值,表示是否所有表达式都是用多行模式
// 9个用于存储捕获组的构造函数属性,RegExp.$1,RegExp.$2 ... RegExp.$9
var text = 'this has been a short summer';
var pattern = /(.)hort/g;
if (pattern.test(text)){
  alert(RegExp.input); // this has been a short summer'
  alert(RegExp.lastMatch); // short
  alert(RegExp.lastParen); // s
  alert(RegExp.leftContext); // this has been a
  alert(RegExp.rightContext); // summer
  alert(RegExp.multiline); // false
}
```

#### javascript 正则表达式
```javascript
// 元字符
// ( [ { \ ^ $ | ) ? * + .

// 常用特殊字符
// \t 制表符
// \n 换行符
// \r 回车符
// \f 换页符
// \b 退格符

//
// 字符类
//
// 原则上正则的一个字符对应一个字符,可以用[]括起来,着[]整体对应一个字符
var pattern = /[ab]/i;
pattern.test('a'); // true
pattern.test('b'); // true

// 取反
// [^ab]
var pattern = /[^ab]/i;
pattern.test('a'); // false
pattern.test('b'); // false
pattern.test('c'); // true

// 范围
// [a-z]
var pattern = /[a-z]/i;
pattern.test('m'); // true
pattern.test(9); // false

// 组合
// [^a-z]
// [a-z1-5\n]
// [a-zA-Z]

// 预定义
// . 除了换行和回车之外的任意字符
// \d 数字字符
// \D 非数字字符
// \s 空白字符
// \S 非空白字符
// \w 单词字符(所有的字母)
// \W 非单词字符

// 量词
// ? 出现零次或者一次
// * 出现零次或者多次
// + 一次或者多次
// {n} 对应出现零次或者n次
// {n,m} 至少出现n次,但不超过m次
// {n,} 至少出现n次

// 分组
// 用小括号表示
// /(dog){2}/g;
var pattern = /(dog){2,}/g;
pattern.test('dogdogpppp'); //true

// 方向引用
// 用 \编号 表示法来引用
/(dog)\1/.test('dogdog'); // true ,这里的\1 就表示第一个捕获组

// 候选
// 用 | 表示
/(red|black|yellow)/.test('red'); // true
/(red|black|yellow)/.test('yellow'); // true

// 前瞻
// ?=exp 正向前瞻 匹配exp前面的位置
// ?!exp 负向前瞻 匹配后面不是exp的位置
var str1 = "bedroom";
var str2 = "bedding";
var reBed = /(bed(?=room))///在我们捕获bed这个字符串时，抢先去看接下来的字符串是不是room
alert(reBed.test(str1));//true
alert(RegExp.$1)//bed
alert(RegExp.$2 === "")//true
alert(reBed.test(str2))//false

var str1 = "bedroom";
var str2 = "bedding";
var reBed = /(bed(?!room))/  //要来它后面不能是room
alert(reBed.test(str1))//false
alert(reBed.test(str2))//true


// 边界
// ^ 开头,注意不能紧跟于左中括号的后面
// $ 结尾,
// \b 单词边界,指[a-zA-Z_0-9]之外的字符
// \B 非单词边界

```
