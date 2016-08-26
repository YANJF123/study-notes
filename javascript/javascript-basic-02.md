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










































































































































