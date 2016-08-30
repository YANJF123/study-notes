## 面向对象的程序设计(object-oriented,OO)
ECMA-262把对象定义为:**无序属性的集合**,其属性可以包含基本值,对象或者函数.  
严格的来说,这就相当于说对象是一组没有特定顺序的值,对象的每一个属性或者方法都有一个名字,而每个名字都映射到一个值
```javascript
// 创建对象
var person=new Object();
person.name="buuug7";
person.age=22;
person.say=function(){
  alert(this.name);
}
// 不过上面创建对象的方式用的很少,而对象字面量的创建方式成为主流
var person={
  name:"buuug71",
  age:22,
  say:function(){
    alert(this.name);
  }
};
// 对象属性的类型:
// 包含数据属性和访问器属性

// 数据属性
// + [[Configurable]] 表示能否通过delete删除属性而重新定义属性,能否修改属性的特性,默认值为true
// + [[Enumerable]] 表示能否通过for-in循环返回属性,默认为true
// + [[Writable]] 表示能否修改属性的值,默认为true
// + [[Value]] 包含这个属性的数据值,默认为undefined

// 要修改属性的默认特性,必须使用ECMAScript5的Object.defineProperty()方法
// 该方法接收三个参数: 属性所在的对象,属性的名字和一个描述符对象
// 其中描述符对象的属性必须是:configurable,enumerable,writable和value
var person={};
Object.defineProperty(person,"name",{
  writable:false,
  value:"buuug7"
  });

person.name; // buuug7
person.name="bob";
person.name; // buuug7
// 在严格模式下为不可写属性赋值会抛出错误

// 如果把configurable设置为false之后,再次调用defineProperty方法除了能修改writable之外,修改其他特性都会出错
// 在调用Object.defineProperty()方法时,如果不指定configurable,enumerable和writable特性默认为false

// 访问器属性
// 访问器属性不包含数据值,它包含一对儿getter和setter函数
// + [[Configurable]]
// + [[Enumerable]]
// + [[Get]] 在读取属性时调用的函数,默认为undefined
// + [[Set]] 在写入属性时调用的函数,默认为undefined

var book={
  _year:2004,
  edition:1
};
Object.defineProperty(book,"year",{
  get:function(){
    return this._year
    },
  set:function(newvalue){
    if(newvalue>2004){
      this._year=newvalue;
      this.edition+=newvalue-2004;
      }
    }
});

book.year; // 2004
book.edition; // 1
book.year=2016; // 2016
book.edition; // 13

// 定义多个属性
var book={};
Object.defineProperties(book,{
  _year:{
    writable:true,
    value:2004
    },
    edition:{
      writable:true,
      value:1
      },
      year:{
        get:function(){
          return this._year;
          },
        set:function(newValue){
          if(newValue>2004){
            this._year=newValue;
            this.edition+=newValue-2004;
            }
            }
          }
});

// 读取属性的特性
// 通过getOwnPropertyDescriptor
// 如上面定义的例子
Object.getOwnPropertyDescriptor(book,"_year"); //Object {value: 2016, writable: true, enumerable: false, configurable: false}

// 创建对象

// **工厂模式 : 一种广为人知的设计模式,这种模式抽象了创建具体对象的过程
function createPerson(name,age){
  var o=new Object();
  o.name=name;
  o.age=age;
  o.say=function(){
    alert(this.name);
  }
  return o;
}
var person1=createPerson("buuug7",29);
var person2=createPerson("bob",22);

// **构造函数模式
function Person(name,age){
  this.name=name;
  this.age=age;
  this.sya=function(){
    alert(this.name);
  }
}
person1=new Person("buuug7",22);
person2=new Person("bob",29);
// 它与工厂模式的区别:
// + 没有显式地创建对象
// + 直接将属性和方法赋给this
// + 没有return

// 要创建Person的新实例,必须用new关键字
// 用调用构造函数创建对象经历以下4个步骤:
// 1 创建一个新对象
// 2 将构造函数的作用域赋给新对象(因此this指向了这个新对象)
// 3 执行构造函数中的代码(为这个新对象添加属性)
// 4 返回新对象

// 检测对象类型
person1 instanceof Object; //true
person1 instanceof Person; // ture

// 构造函数胜过工厂模式的一个主要原因 :
// 创建自定义的构造函数意味着可以将它的实例标识为一种特定的类型

// 构造函数与一般函数的区别:
// 调用方式不同,其他都一样,构造函数用new来创建新对象

// 构造函数的缺点:
// 每一个方法都要在实例上创建一遍
// 名字相同的两个方法不是同一Function的实例

// **原型模式
// 我们创建按的每一个函数都有一个prototype(原型)属性,这个属性是一个指针,指向一个对象
// 而这个对象的用途就是时包含可以由特定类型的所有实例共享的属性和方法
// 使用原型的好处是可以让所有对象实例共享它包含的属性和方法
function Person(){}
Person.prototype.name="buuug7";
Person.prototype.age=22;
Person.prototype.say=function(){
  alert(this.name);
}
var p1=new Person();
p1.say(); // buuug7
var p2=new Person();
p2.say(); // buuug7
p1.say()===p2.say(); //ture

// 上面的例子中
// Person.prototype指向它的原型对象
// Person.prototype.constructor指向Person

// ECMAScript 新增加的Object.getPrototypeOf()
// 返回对象的原型
Object.getPrototypeOf(p1); //Object {name: "buuug7", age: 22}

// 关于属性搜索:
// 先搜索实例中是否有指定的方法,然后在原型中搜索
// 实例中同名的方法或者属性会屏蔽原型中的属性和方法

// 使用hasOwnProperty()方法可以检测一个属性是存在于实例中,还是原型中
p1.hasOwnProperty("name"); // false
p1.name="buuug8"; 
p1.hasOwnProperty("name"); // true

// 原型与in操作符
// 单独使用时,in操作符会在通过对象能够访问给定属性时返回ture,无论该属性在实例中还是在原型中
"name" in p1; //true

// 使用for-in
// 返回的是能够通过对象访问的,可枚举的的属性,包括存在与实例或者原型中
p1.walkSpeed=100;
for(var i in p1){
console.log(i);
}
// walkSpeed
// name
// age
// say

// 要取得对象上所有可枚举的实例属性,ECMAScript5中给出了Object.keys()方法
// 方法接收一个对象作为参数,返回一个包含所有可枚举属性的字符串数组
p1.job="web desiner" 
Object.keys(p1); //["walkSpeed", "job"]
Object.keys(Person.prototype); // ["name", "age", "say"]

// 如果想要得到所有实例的属性,无论枚举是否,可以用Object.getOwnPropertyNames()
Object.getOwnPropertyNames(Person); // ["length", "name", "arguments", "caller", "prototype"]
Object.getOwnPropertyNames(Person.prototype); // ["constructor", "name", "age", "say"]
Object.getOwnPropertyNames(p1); // ["walkSpeed", "job"]

// 其中Object.keys()和Object.getOwnPropertyNames()方法都可以用来替代for-in

// 更简单的原型语法
function Person(){}
Person.prototype={
  constructor:Person, // 设置constructor,不设置会指向Object,不过constructor的[[Enumerable]]变成了true了,默认为false
  name:"buuug7",
  age:22,
  say:function(){
    alert(this.name);
  }
}
// 用下面的方法可以将constructor设置正确
Object.defineProperty(Person.prototype,"constructor",{
  enumerable:false,
  value:Person
  });
p1=new Person();
p1 instanceof Person; // true
p1.constructor; // function Person(){}

// 完整的一个简单的原型语法的例子
function Person(){}
Person.prototype={
  name:"buuug7",
  age:22,
  say:function(){
    alert(this.name);
  }
}
Object.defineProperty(Person.prototype,"constructor",{
  enumerable:false,
  value:Person
  });

// 原型对象的问题
// 共享的本性导致对于包含引用类型值的属性来说不是很灵活
// 如下的例子所示
function Person(){}
Person.prototype={
  constructor:Person,
  name:"buuug7",
  age:22,
  friends:["b8","b9"],
  say:function(){
    alert(this.name);
  }
}
var p1=new Person();
var p2=new Person();
p1.friends.push("b10");
p1.friends; // ["b8", "b9", "b10"]
p2.friends; // ["b8", "b9", "b10"]
p1.friends===p2.friends; // true
```
