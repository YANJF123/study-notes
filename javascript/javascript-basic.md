## javascript basic 基础

### JavaScript 的实现由下面三个不同的部分组成
- 核心ECMAscript()
```
// ECMA-262标准,ECMAscript是对该标准的语言描述
// JavaScript实现了ECMAScript
// ECMAScript最新版为第6版
// ECMAScript 6 (简称ES6)是JavaScript语言的下一代标准，已经在2015年6月正式发布了。
// ES6 它的目标，是使得JavaScript语言可以用来编写复杂的大型应用程序，成为企业级开发语言
// ES6=ECMAScript2015
```
- 文档对象模型DOM(Document Object Model)是针对XML但是经过扩展用于HTML的编程接口
```
// DOM就是把文档看做一个对象来对待
// 文档中的各个组件,可以通过object.attribute这种形式来访问
// 一个DOM会有一个根对象,这个对象通常就是document
// 上文所说的「像操作对象一样」，最主要就是指访问对象的属性和调用对象的方法。
// 对象的属性可以通过 object.attribute 这种形式来访问，对象的方法可以通过 object.method(arguments) 这种形式来调用。
```
- 浏览器对象模型BOM(Browser Object Model),通过该模型对象可以访问和操作浏览器的组件,例如导航条,历史记录等
```
// BOM通常有:
// 弹出新浏览器窗口的功能
// 移动,缩放和关闭浏览器窗口的功能
// 提供浏览器详细信息的navigator对象
// 提供用户浏览器加载页面的详细信息的location对象
// 提供用户显示器分辨率详情信息的screen对象
// 对cookies的支持
// 像XMLHttpRequest和IE的ActiveXObject这样的自定义对象
```

### 在HTML中使用JavaScript
- 把JavaScript插入到HTML页面中要用\<script\>元素,在包含外部JavaScript文件时,必须将src属性设置为指向相应的URL,这个文件既可以是与包含它们页面位于同一个服务器上的文件,也可以是其他任何域的文件
- 所有\<script\>元素都会按照它们在页面中出现的先后顺序依次被解析.
- \<noscript\>元素可以指定在不支持脚本的浏览器中显示替代的内容

### 语法
- ECMAScript中的一切都区分大小写
- 标识符就是变量,函数,属性的名字,或者函数的参考,第一个字符必须是一个字母,下划线或者$符号,建议驼峰表示法为最佳实践
- 注释,分为单行注释,块级注释
- 严格模式 strict mode,在严格模式下,ECMAscript3中的一些不确定行为得到了处理,而且对某些不安全的操作会抛出错误
```javascript
// 在整个脚本中启用严格模式,添加如下代码在脚本顶端
"use strict";

// 可以在函数内部用严格模式
function doSomething(){
  "use strict";
  // 函数体
}
```
- 语句,一个语句以分号结尾,
- 关键字和保留字
```
// 关键字
// break do instanceof typeof case else new var catch finally return void continue 
// for switch while debugger function this with default if throw delete in try
// 保留字(第五版)
// class enum extends super const export import 
```
- 变量
```
// 变量是松散类型的,也就是可以保存任何类型的数据,换句话说,每个变量仅仅是一个用于保存值的占位符而已
// 变量的申明需要注意var
// var 一般申明局部变量,全局变量的申明不带var
```

### 数据类型
- typeof 操作符
```
// 对一个变量使用typeof操作符可能返回下列某个字符串
// undefied 未定义
// boolean 如果这个值是布尔
// string 如果这个值是字符串
// number 如果这个值是数值
// object 如果这个值是对象或者null
// function 如果这个值是函数

// 其中函数在ECMAScript中从技术角度来说是对象,而不是一种数据类型
// 不过函数由于有一些特殊的属性,因此通过typeof操作符来区分函数和其他对象是有必要的
```

- Undefined 类型
```
// 该类型的值只有undefined一个,使用var 申明变量但是未对其初始化时,这个变量值就是undefined
// 
```
  
- Null 类型
```
// 该类型是第二个只有一个值的数据类型,这个特殊的值是null
// 从逻辑角度来看,null值表示一个空对象指针
// 从typeof检测null值会返回object
// 如果定义的变量准备在将来用于保存对象,那么最好将该变量初始化为null而不是其他值
// 实际上undefined的值是派生自null值的 
```

- Boolean 类型
```
// 该类型只有两个值 true 和 false
```

- Number（数字）
```
// Javascript不区分整数跟浮点数，所有数字均采用浮点数表示
// 内置对象Math用于处理更多的高级数学函数和常数
Math.sin(3.5);
var d=Math.PI*(r+r);

// 转换整形的内置函数parseInt(),第二个参数表示字符串所表示的数字的进制
parseInt('123',10); //123
parseInt('010',10); //10
parseInt('11',2); //3
parseInt('hello',10) //NaN

// parseFloat()用以解析浮点数字字符串，切只适用于解析十进制数字
parseFloat('123.333'); //123.333


// +运算符可以把数字字符串转换成数值
+ "123"; // 123
+ "010"; // 10

```
- String（字符串）
```
// javascript 中的字符串是一串unicode字符序列,每一个unicode字符由一个或者两个编码单元来表示

// 常见的转义序列,这些字符可以出现在字符串的任何位置,而且也将被作为一个字符来解析
// 例如:var text="this is the letter sigma: \u03a3.";
\n 换行
\t 制表
\b 空格
\r 回车
\\ 反斜杠
\' 单引号,用在单引号表示的字符串中使用,例如:'he say \'hey\''
\" 双引号,用在双引号表示的字符串中使用,例如:"he say \"hey\""
\xnn 以十六进制代码nn表示的一个字符串(其中n为0~F),例如:\x41表示"A"
\unnn 以十六进制代码nnn表示的一个Unicode字符(其中n为0~F),例如 \u03a3表示希腊字母ε

// 字符串的特点
// 一旦创建,它的值就不能改变,要改变某个标量保存的,首先要销毁原来的字符串,然后在用另一个包含新值的字符串填充该变量

// 把一个值转换为字符串,第一种使用toString()方法,数值,布尔值,对象和字符串值都有toString()方法,但是null和undefined没有这个方法

// 在使用toString()的时候,如果是number,可以指定输出的进制
var num=-12;
alert(num.toString(2)); //  -1100



// 常用方法有
"hello".length; //5
"hello".charAt(0); // h
"hello".replace("h","M"); // Mello
"hello".toUpperCase(); // HELLO

```
- Object 类型
```
// ECMAScript中的对象其实就是一组数据和功能的集合
// 对象可以通过new 操作符后跟要创建的对象类型的名称来创建
// 创建object类型的实例后就可以为其添加属性和方法

// Object的每个实例都具有下路的属性和方法
// Constructor 保存着用于创建当前对象的函数
// hasOwnProperty(propertyName)用于检查给定的属性在当前对象实例中是否存在
// 其中propertyName必须以字符串的形式指定
// 例如 o.hasOwnProperty('name');
// isPrototypeOf(object) 用于检查传入的对象是否是另一个对象的原型
// propertyIsEnumerable(propertyName) 用于检查给定属性是否能够使用for-in语句枚举 
// toLocaleString() 返回对象的字符串表示,该字符串与执行环境的地区对应
// toString()返回对象的字符串表示
// valueOf()返回对象的字符串,数值或者布尔值表示,通常与toString()返回值相同
```

- Number(数字)
- String(字符串)
- Boolean（布尔）
- Symbol（符号）（第六版新增）
- Object（对象）
  - Function（函数）
  - Array（数组）
  - Date（日期）
  - RegExp（正则表达式）
- Null（空）
- Undefined（未定义）

### 操作符
- 一元操作符
```
// 递增 ++
// 递减 --

// 一元加操作符 +
// 在对非数值应用一元加操作符时,该操作对象会想Number()转型函数一样对这个值执行转换
// false转换为0,true转换为1,字符串会按照一组特殊的规则进行解析
// 对象先调用他们的valueOf()和toString()方法,在转换得到值

// 一元减操作符 -
// 主要用于表示负数
// 在将一元减操作符用于数值时,该值会变成负数
// 而应用于非数值时,一元减操作符遵循与一元加操作符相同的规则
var s1="01";
var s2="1.1";
-s1; // -1
-s2 ; // -1.1

```
- 位操作符
```
// 位操作符用于最基本的层次,即按照内存中表示数值的位来操作数值
// ECMAScript中所有数据都以IEEE-754 64位格式存储
// 但是位操作并不直接操作64位,而是先将64位的值转换为32位的整数,然后执行操作
// 执行完毕后在转换为64位

// 对于有符号的整数,32位中的前31位用于表示整数的值,第32位用于表示数值的符号,0表示正数,1负数
// 对于非数值应用位操作符,会先使用Number()函数将该值转换为一个数值,然后在应用位操作符,得到的结果是一个数值

// 按位非(not)
// 位非操作符用一个波浪线 ~ 表示,执行按位非得操作的结果就是返回数值的反码
var num=25;
var num2=~num;
alert(num2); // -26
// 按位非操作的本质是:操作数的负值减1

// 按位于(and)
// 用符号 & 表示,按位操作只在两个数的对应位都为1时返回1,任何一位都是0,结果都是0
var result=25 & 3;
alert(result); // 1

// 按位或(or)
// 用符号 | 表示,在有一个位为1的情况下返回1,在两个位都为0的时候才返回0
var result=25|3;
alert(result); //27

// 按位异或(xor)
// 用符号 ^ 表示,相同则为0,不同则为1
var result=25 ^ 3;
alert(result); // 26  

// 左移 <<
// 这个操作会将数值的所有位向左移动指定的位数,如果将数值2向左移动5位,就是64
var resutl=2<<5; 
alert(result); // 64
// 向左移动后空出来的位子用0填充,左移不会影响数值的符号

// 有符号数右移 >>
// 这个操作符会将数值向右移动,但保留符号位,有符号的右移操作与左移操作正好相反,即将64向右移动5位,结果为2
// 右移空出的位子用符号位来填充
var result=64>>5;
alert(result); // 2

// 无符号数右移 >>>
// 对正数来说,有符号右移与无符号右移相同
// 对负数来说,就不一样了
var result=-64>>>5;
alert(result); // 134217726

```

