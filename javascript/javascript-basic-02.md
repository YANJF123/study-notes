## javascript引用类型
在ECMAScript中引用类型是一种数据结构,用于将数据和功能组织在一起

### Object 类型
创建Object类型有两种方式:
```javascript
// 一种是使用`new`操作符后跟Object的构造函数
var person=new Object();
person.name="buuug7";
person.age=30;
// 另外一种是使用对象字面量
// 对象字面量是对象定义的一种简写形式
var person2={
  name:"buuug8",
  age:31
};

// 访问对象的属性的方法有.号和括号两种方式
person.name; // buuug7
person.age;// 30

person['name']; // buuug7
person['age']; //30
```

### Array类型
ECAMScript数组跟其他语言有点不同,它的数组中的每一项可以保存任何类型的数据,也就是第一项保存字符串,第二项可以保存数值,第三项保存对象..,而且ECMAScript数组的大小是可以动态调整的,可以随着数据的添加自动增长以容纳新的数据.  
```javascript
// 创建数组的方式有两种:

// 第一种用Array构造函数,其中的`new` 可以省略
var colors=new Array();

// 创建的时候传递数组的长度
var colors=new Array(20);

// 创建的时候传递具体的数组元素
 var colors=new Array("red","blue","green");

 // 第二种方式创建数组是使用数组字面量
 var colors=["red","blue","green"];
 
 // 创建一个空数组
 var colors=[];

 // 读取数组的值
 colors[0]; // red
 
 // 修改数组的值
 colors[0]="purple";
 
 // 获取数组的长度
 colors.length;//3;

// 利用length属性可以方便的在数组末尾添加新项
colors[colors.length]="darkgray";

// 检测数组
if(colors instanceof Array){
  // code
}
// ECMAScript5中新增的Array.isArray()方法更加有用,推荐用Array.isArray()
if(Array.isArray(colors)){
  // code
}

//数组继承的toLocaleString(),toString()和valueOf()方法,在默认情况下以逗号为分隔符的字符串的形式返回数组项
colors.toString(); // "red,blue,green"
colors.toLocaleString(); // "red,blue,green"

//数组的valueOf()默认返回数组本身
colors.valueOf(); // ["red", "blue", "green"]

//join()方法
colors.join("-"); //"red-blue-green"

// 栈方法
// 栈是一种LIFO(last in first out)的数据结构
// push()方法可以接受任意数量的参数,把它们逐个添加到数组末尾,并返回修改后的数组长度
// pop()方法从数组的末尾移出最后一项,减少数组的lenght并返回移除的项
var colors=new Array();
var count=colors.push("red","blue"); //2
count=colors.push("black"); //3
// 现在数组为 ["red","blue","black"]
colors.pop(); // black
colors; // ["red","blue"]
// 所以有了push()和pop()方法之后,对数组的操作可以看成是栈操作

// 队列方法
// 队列的数据结构的访问规则是FIFO(first in first out)
// 队列从列表的末端添加项,从列表的前端删除
// 实现队列的函数有push()跟shift()
// push()从数组的末端添加项,shift从数组的前端移除项并返回移除的项
var colors=new Array();
colors.push("red","blue"); //2
colors.push("black"); // 3
colors.shift(); //red
// 数组现在为 ["blue","black"]

// ECMAScript还为数组提供了一个unshift(),用法与shift()相反
// unshift()从数组的前端添加若干项并返回新数组的长度
colors.unshift("gray","lightred"); //4
//数组现在变为["gray","lightred","blue","black"]

// 数组的排序
// reverse()对数组进行反转
// sort()默认对数组进行升序排列
// sort()会调用每个数组项的toString()方法然后比较得到的字符串确定排序
// sort()方法接收一个比较函数作为参数来进行自定义排序
function compare(v1,v2){
  if(v1<v2){
    return -1;
  }else if(v1>v2){
    return 1;
  }else{
    return 0;
  }
}
var nums=[1,10,5,2,3,4];
nums.sort(); // [1,10,2,3,4,5]
nums.sort(compare); // [1,2,3,4,5,10]

// 更简洁的排序方法
function compare(v1,v2){
  return v2-v1;
}

// 关于数组的更多方法
// concat()可以基于当前数组创建一个新的数组,将接收到的参数添加到副本末尾
// 如果未传递参数,只是简单的将原数组copy一份副本
var arr=[1,2,3];
arr.concat(4,5,6); // [1,2,3,4,5,6]
arr.concat(); // [1,2,3]

// slice()
// 基于当前的数组中的一项或者多项创建一个新数组
// 可以接收一个或者两个参数
// 一个参数的时候,会返回从该参数指定位置到数组末尾的所有项
// 两个参数的时候,返回起始位置和结束位置之间的项,不包括结束项
var arr=[1,2,3,4];
arr.slice(1); //[2,3,4]
arr.slice(1,3); //[2,3]
// 如果slice()方法的参数中有一个负数,则用数组长度加上该负数来确定
// 如果length为4,slice(-2,-1)就相当于slice(2,3)
// 如果结束位置小于起始位置,则返回空数组

// splice()
// 主要用途就是向数组中部插入项
// 删除 可以删除任意数量的项,需指定两个参数,要删除的第一项位置和删除的项数
// 插入 指定三个参数,起始位置,0(要删除的项数)和要插入的项,如果要插入多项
// 可以再传入第四,第五,以至任意多个项
// 替换 指定三个参数,起始位置,要删除的项数和要插入的项数
// 插入的的项数不必与删除的项数相等
// 返回值为一个数组,包含了从元数组中删除的项
var arr=[1,2,3,4,5];
// 从数组中删除第二项
arr.splice(1,1); // 2
// 从第一项开始向数组中插入三项
arr.splice(1,0,'ra','rb','rc'); //[1, "ra", "rb", "rc", 3, 4, 5]
// 删除数组中的第二项,在插入三项
arr.splice(1,1,'ma','mb','mc'); // ['ra']
// 最后数组中为 [1, "ma", "mb", "mc", "rb", "rc", 3, 4, 5]

// 查找数组中的元素
// indexOf()和lastIndexOf()
// 两个函数都接受两个参数,要查找的元素和查找的起点索引
// indexOf()从数组的开头开始查找
// lastIndexOf()从数组的结尾开始查找
// 都返回要查找元素在数组中的位置,找不到返回-1
var arr=[1,2,3,4,5];
arr.indexOf(2); // 1
arr.lastIndexOf(2); //1
arr.indexOf(2,1); //1
arr.indexOf(2,2); //-1

// 5个迭代方法
// 5个迭代方法都接受两个参数,要在每一项上允许的函数和运行该函数的作用域对象,影响this值
// 传入这些方法的函数会接受三个参数,数组项的值,该项在数组中的位置,数组本身
// 其返回值因各个函数而异
// every()
// 对数组中的每一项运行指定函数,如果函数对每一项都返回true,则结果返回true
var arr=[1,2,3,4,5];
arr.every(function(item,index,array){
  return item>=2;
  });
  // 结果为false,因为1小于2

// filter()
// 对数组中的每一项运行给定函数,返回该函数会返回ture的项组成的数组
var arr=[1,2,3,4,5];
arr.filter(function(item,index,array){
  return item>=2;
  });
  // 结果为 [2,3,4,5]

// forEach()
// 对数组中的每一项运行给定函数,没有返回值
var arr=[1,2,3,4,5];
arr.forEach(function(item,index,array){
  // code
  });
  // 结果为你想要执行的code

// map()
// 对数组中的每一项运行给定函数,返回每次函数调用的结果组成的数组
var arr=[1,2,3,4,5];
arr.map(function(item,index,array){
  return item*2;
  });
  // 结果为[2,4,6,8,10]


// some()
// 对数组中的每一项运行给定函数,如果该函数对任一项返回true,则返回true
var arr=[1,2,3,4,5];
arr.some(function(item,index,array){
  return item>=2;
  });
  // 结果为true

// 缩小方法
// reduce(),reduceRight()
// 两个方法都会迭代数组中的所有项,然后构建一个最终返回值
// reduce()方法从数组的第一项开始,逐个,遍历到最后
// reduceRight()从数组的最后一项开始,向前遍历到第一项
// 两个方法都接收两个参数: 
// 一个在每一项上调用的函数和作为缩小基础的初始值
// 传递给reduce()和reduceRight()的函数接收4个参数:
// 前一个值,当前值,项的索引和数组对象
var arr=[1,2,3,4,5];
arr.reduce(function(pre,cur,index,array){
  return pre+cur;
  });
  // 结果为15
```

### Date类型
ECMAScript中的Date类型是在早期的Java中的`java.util.Date`类基础上构建的.Date类型使用UTC(国际协调时间)1970年1月1日午夜(零时)开始经过的毫秒数来保存日期的.
```javascript
// 创建一个日期对象,不传参数默认为当前时间
var now=new Date();
// 传递参数返回具体的某个时间,其构造函数默认调用Date.parse()或者Date.UTC()进行转换为时间戳(毫秒数)
var now=new Date("2016-2-11"); //Thu Feb 11 2016 00:00:00 GMT+0800 (中国标准时间)
var now=new Date(2016,1,11); // Thu Feb 11 2016 00:00:00 GMT+0800 (中国标准时间)

// Date.parse()
// 接收一个表示日期的字符串的参数,然后尝试根据这个字符串返回相应的日期的毫秒数
// 非法的参数返回NAN
Date.parse("2016-2-11"); //1455120000000
Date.parse("2016/2/11"); //1455120000000

// Date.UTC()
// 接收一系列的参数,返回相应的日期毫秒数
// 传递参数的格式为年份,基于0的月份(一月0,二月1...),月中的那一天(1-31),小时数(0-23),分钟,秒,毫秒数
// 只有前两个参数是必须的,省略的 其他参数统统假设为0
// 非法的参数返回NAN
Date.UTC(2016,2,11); //1457654400000
new Date(1457654400000); // Fri Mar 11 2016 08:00:00 GMT+0800 (中国标准时间)
Date.UTC(2016,2,11,22,55,48); //1457736948000

// Date.now()
// 返回当前的时间

// Date类型重写了toLocaleString(),toString()和valueOf()方法
// 其中toLocaleString()返回与浏览器设置的地区相匹配的日期格式
// toString()通常返回带有时区信息的日期和时间
// valueOf()返回时间戳(毫秒数)

// 日期之间可以通过`>`,`<`,`=`进行比较

// 时间格式化
// toDateString()
// toTimeString()
// toLocaleDateString()
// toLocaleTimeString()
// toUTCString()
// 其中toUTCString()是推荐的日期格式化

// 日期/时间组件方法
// 比如 getTime(),setTime(),getFullYear()....

```

### RegExp 类型
javascript中,一个正则表达式是一个模式与三个标志的组合体,定义正则表达式有字面量形式,也可以通过构造函数来,前者实用简单推荐使用
`var expression=/pattern/flags;`
+ **g**:表示全局模式,模式将被应用于所有字符,而非在发现第一个匹配项的时候立刻停止
+ **i**:表示不区分大小写
+ **m**:表示多行模式,即在到达一行文本末尾会还会继续查找下一行中是否存在与模式匹配的项
```javascript
// 匹配字符中所有"at"实例
var pattern=/at/g;
// 匹配第一个"bat"或"cat",不区分大小写
var pattern=/[bc]at/i;
// 匹配所有以"at"结尾的3个字符的组合,不区分大小写
var pattern=/.at/gi;

// exec()
// RegExp的主要方法是exec(),专门为捕获组设计的
// 接受一个参数,即要应用模式的字符串
// 返回包含第一个匹配项信息的数组,没有匹配则返回null
// 返回的数组中包含两个额外的属性,input和index
// index表示匹配项在字符串中的位置
// input表示应用正则表达式的字符串
var text="sat cat fat";
var pattern=/.at/i;
var matches=pattern.exec(text); // ['sat']
matches.index; // 0
matches.input; // "sat cat fat"

// test()
// 正则表达式的第二个方式是test()
// 接受一个参数,在模式与该参数匹配的情况下返回true
var text="000-00-000";
var pattern=/\d{3}-\d{2}-\d{3}/i;
if(pattern.test(text)){
  console.log("matched");
}
// 正则表达式的valueOf()返回正则表达式本身
```

### Function类型
函数实际上是对象,每个函数都是Function类型的实例,而且都与其他类型一样具有属性和方法.由于函数都是对象,因此函数名实际上是一个
指向函数的对象指针,不会与某个函数绑定.
```javascript
// 函数的定义方式一
function sum(a,b){
  return a+b;
}
// 函数的定义方式二
var sum=function(a,b){
  return a+b;
}
// 通过构造函数定义
var sum=new Function('a','b','return a+b');

//由于函数名仅仅是指向函数的指针,函数名与包含对象指针的其他变量没有什么不同
function sum(a,b){
  return a+b;
}
console.log(sum(1,1)); //2
var another=sum;
console.log(another(1,1)); // 2
sum=null;
console.log(another(1,1)); //2

// 函数没有重载,后面定义的同名函数覆盖前面定义的

// 函数申明与函数表达式的区别
// 解析器会率先读取函数申明,并使其在执行任何代码之前可用
// 之语函数表达式,则必须等到解析器执行它所在的代码行,才会被真正解析执行
// 解析器通过函数申明提升(function declaration hoisting)的过程,把函数申明提升到顶部

// 如下的代码能够正常运行
console.log(sum2(1,1)); //2
function sum2(a,b){
  return a+b;
}

// 如下代码产生错误
console.log(sum2(1,1));
var sum2=function(a,b){
  return a+b;
}

// 函数也可以作为值来使用
// 不仅可以像传递参数一样把一个函数传递给另一个函数
// 而且还可以将一个函数作为另一个函数的结果返回
function add5(num){
  return num+5;
}
function callSomeFunction(someFunction,args){
  return someFunction(args);
}
callSomeFunction(add5,5); //10

// 来看一个函数返回另一函数的例子
function createComparisonFunction(propertyName){
  return function(obj1,obj2){
    var v1=obj1[propertyName];
    var v2=obj2[propertyName];
    if(v1<v2){
      return -1;
    }else if(v1>v2){
      return 1;
    }else{
      return 0;
    }
  };
}

var data=[
  {name:"lucy",age:20},
  {name:"bob",age:22}
];

data.sort(createComparisonFunction('name'));
data[0].name; // bob
data.sort(createComparisonFunction('age'));
data[0].name; // lucy

// 函数内部属性
// 函数内部的两个特殊对象: arguments,this
// arguments
// arguments的主要用途是保存函数的参数
// arguments有一个名叫callee的属性,保存了拥有这个arguments对象的函数
// 例如在递归函数中,通过使用arguments.callee可以解除函数名的紧密耦合的现象
function factorial(num){
  if(num<=1){
    return 1;
  }else{
    return num*arguments.callee(num-1);
  }
}

// this
// 与java中this类似
// this引用的是函数执行的环境对象,在网页全局作用域中调用函数时,this对象引用的是window
window.color="red";
var o={color:"blue"};
function sayColor(){
  return this.color;
}
sayColor(); // red;
o.sayColor=sayColor;
o.sayColor;// blue

// ECMAScript5规范了另一个函数对象的属性 : caller
// 该属性保存着调用当前函数的函数的引用
function outer(){
  inner();
}
function inner(){
  console.log(arguments.callee.caller);
}
outer(); // function outer(){inner();}

// 函数属性和方法
// 每个函数都包含两个属性:length和prototype
// length
// length属性表示函数希望接收命名的参数个数
function sum(a,b){
  return a+b;
}
sum.length; // 2

// prototype
// 保存他们说有实例的方法,诸如toString(),valueOf()
// prototype属性是不可枚举的,因此用for-in无法发现

// 每个函数包含两个非继承而来的方法:apply()和call()
// 这两个方法用途都是在特定的作用域中调用函数,实际上等于设置了函数体内的this
// apply()方法接收两个参数,一个是在其中运行函数的作用域,另一个是参数组
// 其中第二个参数可以是Array的实例,也可以是arguments对象
function sum(a,b){
  return a+b;
}
function callSum1(num1,num2){
  return sum.apply(this,arguments);
}
function callSum2(num1,num2){
  return sum.apply(this,[num1,num2]);
}
console.log(callSum1(3,4)); // 7
console.log(callSum2(3,4)); // 7

// call()
// call()方法与apply()方法作用相同,只是接收参数的方式不同
// call()的第二个参数必须一一列举出来
function callSum3(num1,num2){
  return sum.call(this,num1,num2);
}
callSum3(3,4); // 7

// call()和apply()真正强大的地方在于能够扩充函数运行的作用域
window.color="red";
var o={color:"blue"};
function sayColor(){
  return this.color;
}
sayColor(); //red
sayColor.call(this); //red
sayColor.call(window); //red
sayColor.call(o); //blue

// ECMAScript5定义的新方法:bind()
// bind()
// 这个方法会创建函数的一个实例
// 其this值会被绑定给传给bind()函数的值
window.color="red";
var o={color:"blue"};
function sayColor(){
  return this.color;
}
sayColor(); //red
var someObj=sayColor.bind(o); 
someObj(); //blue

// 每个而函数继承的toLocaleString(),toString(),valueOf()都返回函数代码
```

### 基本包装类型
为了便于操作基础类型值,ECMAScript提供了3个特殊的引用类型:Boolean,Number和String.这些类型与其他引用类型相似,但同时也具备
有各自的基本类型相应的特殊行为.实际上,每当读取一个基本类型值的时候,后台就会创建一个对应的基本包装类型的对象,从而让我们
能够调用一些方法来操作这些数据.  
引用类型和基本包装类型的区别是对象的生存期,使用new操作符创建的引用类型的实例,在执行流离开当前作用域之前都一直保存在内
存中,而自动创建的基本包装类型的对象,则只存在于一行代码执行的瞬间,然后被立即销毁,着就意味着我们不能在运行时为基本类型添
加属性和方法.  
```javascript
var s1="some text";
s1.color="red";
console.log(s1.color); // undefined
```
**不建议显式地创建基本包装类型的对象**
```javascript

// Boolean 类型
// 由于容易造成误解,所以在ECMAScript中Boolean对象用处不大
// 尽量避免少用
var booleanObject=new Boolean(true);
var booleanValue=true;
typeof booleanObject; // Object
typeof booleanValue; // boolean

// Number类型
// 同样建议不用显式的创建Number类型
var numberObject=new Number(10);
// Number类型也重写了valueOf(),toLocaleString()和toString()方法
// valueOf()方法对象表示的基本类型的数值
// 另外两个返回字符串形式的数值,可以为toString()方法传递一个表示基数的参数,告诉返回几进制的字符串形式
var num=10;
console.log(num.toString(2)); // 10
console.log(num.toString(8)); // 12

// toFixed()方法
// 会按照指定的小数位返回数值的字符串表示,并且支持舍入特性
var num=10;
console.log(num.toFixed(2)); // 10.00

// toExponential()
// 该方法返回指数表示法表示的数值字符串形式
// 也接收一个指定输出结果小数位数的参数
var num=10;
console.log(num.toExponential(1)); //1.0e+1

// String 类型
// 继承的valueOf(),toLocaleString(),toString()都返回对象所表示的基本字符串值
var stringObject=new String("hello world");
// String()类型的每个实例都有一个length属性
var stringValue="hello world";
stringValue.length; // 11
var myName="王强强";
myName.length; //3

// charAt()
// 返回给定位置的字符
var str="'hello world";
charAt(1); // e
// charCodeAt()
// 返回给定位置字符编码
charCodeAt(1); // 101

// ECMAScript中新定义的访问个别位置的字符的方法
str[1]; //e 

// concat()
// 字符串连接方法,但是用的少,人们更倾向于用 + 
var str="hello";
str.concat(" world"); // hello world
// 可以传递更多的参数
str.concat(" alias"," baby"," code"); // hellow alias baby code

// slice() substr() substring()
// 着三个方法都会返回被操作字符串的一个子字符串,而且都会接受一个或者两个参数
// 第一个参数指定子字符串的开始位置,第二个参数表示字符串到哪里结束
// 具体来说,slice()和subString()的第二个参数指定的是字符串最后一个字符后面的位置
// 而substr()第二个参数指定返回字符串的个数
// 如果未传递第二个参数,则将字符串的长度作为结束位置
// 而在传递负值参数的情况下各不相同,这里不再介绍了
var stringValue="hello world";
stringValue.slice(3); // lo world
stringValue.substring(); // lo world
stringValue.substr(3); // lo world

stringValue.slice(3,7); //lo w
stringValue.substring(3,7); // lo w
stringValue.substr(3,7); //lo worl

// 字符串位置方法
// indexOf()和lastIndexOf()
// 两个方法都从一个字符串中搜索给定的子字符串,然后返回子字符串的位置,未找到返回-1
var stringValue="hello world";
stringValue.indexOf("o"); // 4
stringValue.lastIndexOf("o"); //7
// 这两个方法都可以接受第二个参数,表示从字符串中那个位置开始搜索
stringValue.indexOf("o",6); // 7
stringValue.lastIndexOf("o",6); //4

// trim()方法
// ECMAScript中新定义的方法
// 该方法会创建一个字符串的副本,删除前置及后缀的所有空格,然后返回结果
var str="  hello world  ";
str.trim(); //hello world

// 字符串大小写转换
// toLowerCase()
// toLocaleLowerCase()
// toUpperCase()
// toLocaleUpperCase()

// 字符串模式匹配方法
// match()
// 接受一个参数,要么是一个正则表达式,要么是一个RegExp对象
var text="cat, sat, bat, fat";
var pattern=/.at/;
var matches=text.match(pattern);
matches[0]; // cat
matches.index; // 0
pattern.lastIndex; // 0

// search
// 与match()方法的参数相同
// 返回字符串中第一个匹配项索引,没找到返回-1,它始终从字符串开头向结尾查找
var text="cat, sat, bat, fat";
text.search(/at/); // 1

// 为了简化替换字符串操作,ECMAScript提供了replace()方法
// 接受两个参数
// 第一个参数可以是一个RegExp对象或者一个字符串,第二个参数可以是一个字符串或者一个函数
// 如果第一个参数只是一个字符串,那么只会替换第一个子字符串
// 想要替换掉素有子字符串,唯一的办法就是提供一个正则表达式,而且要指定全局(g)标志
var text="cat, sat, bat, fat";
text.replace("at","ond"); // cond, sat, bat, fat
text.replace(/at/g,"ond"); // cond, sond, bond, fond

// 其中replace()方法传递函数的例子
function htmlEscape(text){
  return text.replace(/[<>"&"]/g,function(match,pos,originaltext){
    switch(match){
      case "<" : return "&lt;";
      case ">" : return "&gt;";
      case "&" : return "&amp;";
      case "\"" : return "&quot;";
    }
    });
}
var p="<p class=\"container\">hello world</p>";
htmlEscape(p); // "&lt;p class=&quot;container&quot;&gt;hello world&lt;/p&gt;"

// split()
// 这个方法可以基于指定的分隔符将一个字符串分割成多个子字符串,并将结果放到一个数组中
// 分隔符既可以是字符串,也可以是RegExp(不会将字符串看成正则表达式)
// 接受的第二个参数用于指定数组的大小,以便确保返回的数组不会超过既定大小
var colorText="red,blue,green,yellow";
undefined
colorText.split(","); // ["red", "blue", "green", "yellow"]
colorText.split(",",3); //["red", "blue", "green"]
colorText.split(/[, -]/); // ["red", "blue", "green", "yellow"]

// localCompare()方法
// 比较两个字符串,并返回下列的值中的一个:
+ 如果字符串在字母表中应该排在字符串参数钱,返回负数(-1)
+ 如果字符串等于字符串参数,返回0
+ 如果字符串在字母表中应该排在字符串参数之后,返回正数(1)

var stringValue="yellow";
stringValue.localeCompare("brick"); // 1
stringValue.localeCompare("yellow"); // 0
stringValue.localeCompare("zoo"); // -1

// fromCharCode()方法
// 接受一或多个字符编码,转换成一个字符串
// 与charCodeAt()执行相反的操作
String.fromCharCode(104,101,108,108,111); // "hello"

```

### Global 对象
不属于任何其他对象的属性和方法,最终都是Global的属性和方法,诸如isNaN(),isFinite(),parseFloat()...等都是Global对象的方法
```javascript
// URI编码方法
// encodeURI() 不会对本身属于URI的特殊字符进行编码,例如冒号,正斜杠,问好和井号
// encodeURIComponent() 对它发现的任何非标准字符进行编码
var uri="https://github.com/buuug7/study-notes/readme.md#contribute";
encodeURI(uri); //"https://github.com/buuug7/study-notes/readme.md#contribute"
encodeURIComponent(uri); // "https%3A%2F%2Fgithub.com%2Fbuuug7%2Fstudy-notes%2Freadme.md%23contribute"

// 对应的解码方法
// decodeURI() 解码用encodeURI()编码过的URL
// decodeURIComponent() 解码用encodeURIComponent()编码过的URI
// 而escap()和unescape()方法已经废弃了

// eval()方法
// 只接受一个参数,即要执行的ECMAScript字符串
// 它会将传入的参数当做实际的ECMAScript语句来解析,然后把执行后的结果插入到原位置
eval("alert('hi!')"); 
// 等价于
alert("hi!");

eval("function say(){alert('hi');}");
say(); // 在eval外部可以调用其内部定义的函数

// 在严格模式下
// 外部访问不到eval()中创建的任何变量和函数
// 同样对eval赋值也会导致错误
"use strict";
eval=123;

// Global对象的属性
// 好多 这里省略了


// window对象
// ECMAScript虽然没有指出如何直接访问Global对象,但Web浏览器都是将这个全局对象作为window对象的一部分加以实现的.
// 因此,在全局作用域中声明的所有变量和函数,都成为window对象的属性
// 其中一种取得Global对象的方法是:
var global=function(){
  return this;
}();


// Math对象
// Math对象属性
Math.E;  //自然对数的底数,即常量e的值
Math.LN10; // 10的自然对数
Math.LN2; // 2的自然对数
Math.LOG2E; // 以2为底e的对数
Math.LOG10E; //以10为底e的对数
Math.PI; //π的值
Math.SQRT1_2; // 1/2的平方根(即2的平方根的倒数)
Math.SQRT2; // 2的平方根

// min()和max()方法
// 其中min()和max()方法用于确定一组数值中的最小值和最大值.
Math.max(2,44,565,9); //565
Math.min(343,6,33.32); //6
// 例如找出数组中最大或最小值,可以用apply()方法
var values=[1,2,3,4,5,6,7,8];
Math.max.apply(Math,values); //8

// 舍入方法
// Math.ceil()执行向上舍入
// Math.floor() 执行向下舍入
// Math.round() 执行标准舍入,四舍五入

// random()方法
// Math.random()方法返回介于0跟1之间的一个随机数,不包括0和1
// 一个通用的从某个整数范围内随机选择一个值
// 值=Math.floor(Math.random()*可能值的总数+第一个可能的值);

// Math对象的其他方法
// 查手册,这里不再罗列
```

### 总结
对象在Javascript中被称为引用类型的值,而且有一些内置的引用类型可以用来创建特定的对象
+ 引用类型与传统面向对象程序设计中的类相似,但实现不同
+ Object是一个基础类,其他所有类型都从Object继承了基础的行为
+ Array类型是一组值的有序列表,同时还提供了操作和转换这些值的功能
+ Date类型提供了有关日期和时间的信息
+ RegExp类型是ECMAScript支持正则表达式的一个接口,提供了最基本的和一些高级的正则表达式功能

函数实际上是Function类型的实例,因此函数也是对象;  
因为有了基本包装类型,所以Javascript中的基本类型值可以被当做对象来访问.三种包装类型分别是:
+ Boolean
+ Number
+ String

在所有代码执行之前,作用域中就已经存在两个内置对象:Global和Math,在大多数的Javascript实现中都不能直接访问Global对象,不过web浏览器实现了承担该角色的window对象,全局变量和函数都是global对象的属性.  

Math对象提供了很多属性和方法,用于辅助完成复杂的数学计算.
