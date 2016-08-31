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


// ****组合使用构造函数模式和原型模式
// 构造模式用于定义实例属性,原型模式用于定义方法和共享属性.
// 这种模式目前在ECMAScript中使用最广泛,认同度最高的一种创建自定义类型的方法
// 可以说这种组合模式是用来定义引用类型的一种默认模式
function Person(name,age){
  this.name=name;
  this.age=age;
  this.friends=["b7","b8"]
}
Person.prototype={
  constructor:Person,
  say:function(){
    alert(this.name);
  }
}
var p1=new Person("buuug7",22);
var p2=new Person("buuug8",33);
p1.friends.push("b9"); 
p1.friends; // ["b7", "b8", "b9"]
p2.friends; // ["b7", "b8"]

// **** 动态原型模式
// 比上面的组合构造函数模式和原型模式 看起来更加有封装性
// 不过不能用对象字面量的方式来重写原型 
function Person(name,age){
  this.name=name;
  this.age=age;
  if(typeof this.say != 'function'){
    Person.prototype.say=function(){
      alert(this.name);
    }
  }
}
var p1=new Person("bob",22);
p1.say();

// ****寄生(parasitic)构造模式
// 基本思想是创建一个函数,该函数的作用仅仅是封装创建对象的代码,然后在返回新创建的对象
// 它除了用new操作符外跟工厂模式一模一样
// 返回的对象跟构造函数以及构造函数的原型没有没有关系
// 因此不能用instanceof操作符来确定对象
// 建议少用
function Person(name,age){
  var o=new Object();
  o.name=name;
  o.age=age;
  o.say=function(){
    alert(this.name);
  }
  return o;
}
var p=new Person("buuug7",99);
p.say();// buuug7

// **** 稳妥构造模式
// Douglas Crockford 发明的稳妥构造模式(durable objects)
// 适合一些安全环境中使用(这些环境中禁止使用this和new)
// 特定:
// 没有公共属性
// 其方法不会引用this对象
// 创建对象的实例方法不引用this
// 创建对象不用new操作符
function Person(name,age){
  //创建要返回的对象
  var o=new Object();
  
  // 可以在这里定义私有变量和函数
  
  // 添加方法
  o.say=function(){
    alert(name);
  }

  return o;
}
var p=Person("buuug7",22);
p.say(); //buuug7
// 上面的例子中除了使用say()方法外,没有其他办法访问name的值
// 即使有其他代码会给这个对象添加方法或者数据成员
// 但也不可能有别的方法访问传入到构造函数中原始数据
// 所有就可以说变量p中保存的是一个稳妥对象

// 继承
// 许多OO语言都支持两种继承:接口继承和实现继承
// 接口继承只继承方法签名
// 实现继承则继承实际的方法
// ECMAScript只支持实现继承,依靠原型链来实现
// 利用原型让一个引用类型继承另一个引用类型的属性和方法

// 回顾下构造函数,原型和实例的关系:
// 每个构造函数都有一个原型对象
// 原型对象包含一个指向构造函数的指针
// 实例包含一个指向原型对象的内部指针

// 原型链
// 让一个函数的原型等于另一个函数的实例,而另一个函数的原型又是另外一个函数的实例,
// 如此层层递进,就构成了实例与原型的链条,这就是所谓的原型链
// 实现原型链的基本模式的代码如下:

function SuperType(){
  this.property=true;
}
SuperType.prototype.getSuperValue=function(){
  return this.property;
}
function SubType(){
  this.subproperty=false;
}
SubType.prototype=new SuperType();
SubType.prototype.getSubValue=function(){
  return this.subproperty;
}
var instance=new SubType();
instance.getSuperValue(); // true

// 不过需要注意的是:
// 所有引用类型都继承了Object,而这个继承也是通过原型链来实现的
// 所以所有函数的默认原型都是Object的实例,因此默认原型都会包含一个内部指针,指向Object.prototype
// 这也正是所有自定义类型都击沉toString(),valueOf()默认方法的根本原因

// 确定原型和实例的关系
// instanceof
// isPrototypeOf()
instance instanceof Object; //true
instance instanceof SubType; // true
instance instanceof SuperType; // true

Object.prototype.isPrototypeOf(instance); // true
SuperType.prototype.isPrototypeOf(instance); //true

// 子类有时候需要重写超类中的方法,或者添加不存在的方法
// 给原型添加方法的代码一定要放在替换原型的语句后面
// 例如上面的代码
SubType.prototype=new SuperType();
// 必须放到替换原型语句的后面
SubType.prototype.getSubValue=function(){
  return this.subproperty;
}

// 还有一点需要注意的:
// 在通过原型链实现继承时,不能使用对象字面量创建原型方法
// 因为这样会重写原型链

// 原型链的问题
// 最主要的问题来自于包含引用类型值的原型,会被所有实例共享
// 第二个问题是在创建子类型的实例时,不能向超类型的构造函数中传递参数

// 正对原型链的缺点,下面有几种对应的优化策略

// 借用构造函数(constructor stealing)
// 原理是在子类型构造函数的内部调用超类型的构造函数
// 通常使用call或者apply绑定作用域
// 方法都在构造函数中定义,因此方法的复用无从谈起
// 所以该技术很少单独使用
function SuperType(){
  this.colors=['red','blue','green'];
}
function SubType(){
  //继承了SuperType
  SuperType.call(this);
}

var instance1=new SubType();
instance1.colors.push('black');
instance1.colors; // ["red", "blue", "green", "black"]
var instance2 =new SubType();
instance2.colors; // ["red", "blue", "green"]

// 组合继承(combination inheritance),也称为伪经典继承
// 将原型链和借用构造函数的技术柔和到一块
// 背后的思路是使用原型链实现对原型属性和方法的继承
// 而通过口借用构造函数来实现对实例属性的继承
// 这样既保证了在原型上定义方法实现了函数复用
// 又保证了每个实例都有它自己的属性
// 称为ECMAScript中最常用的继承模式
function SuperType(name){
  this.name=name;
  this.colors=['red','blue','green'];
}
SuperType.prototype.sayName=function(){
  alert(this.name);
};
function SubType(name,age){
  // 继承属性
  SuperType.call(this,name);
  this.age=age;
}
// 继承方法
SubType.prototype=new SuperType();
SubType.prototype.sayAge=function(){
  alert(this.age);
}
var instance1=new SubType('buuug7',22);
instance1.colors.push('black');
instance1.colors; // ["red", "blue", "green", "black"]
instance1.sayName(); // buuug7
instance1.sayAge(); //22

var instance2=new SubType('bob',15);
instance2.colors; // ["red", "blue", "green"]
instance2.sayName(); // bob
instance2.sayAge(); // 15

// 原型式继承
// 克罗克福德发明的,他的想法是基于已有的对象创建新的对象
// 他给出的函数:
function object(o){
  function F(){}
  F.prototype=o;
  return new F();
}

// 在ECMAScript5中新增的Object.create()方法规范了原型式继承
// 该方法接收两个参数:
// 一个用作新对象原型的对象
// 另外一个(可选的)为新对象定义额外属性的对象

var person={
  name:"buuug7",
  friends:['b8','b9']
}

var anotherPerson=Object.create(person);
anotherPerson.name="bob";
anotherPerson.friends.push('tmas');
// 不过,包含引用类型值的属性始终都会共享相同的值


// 寄生式继承
// 寄生式继承的思路与寄生式构造函数和工厂模式类似
// 创建一个仅用于封装继承过程的函数
// 该函数在内部以某种方式来增强对象
// 最后再像它做了所有工作一样返回对象
// 同样该模式不能做到函数复用而降低效率,用的场景不多
function object(o){
  function F(){}
  F.prototype=o;
  return new F();
}
function createAnother(original){
  var clone=object(original); // 通过调用函数来创建一个对象
  clone.sayHi=function(){ // 以某种方式增强这个对象
    alert('Hi');
  };
  return clone; // 返回该对象
}

// 寄生组合式继承
// 由于寄生组合继承在什么情况下都会调用超类构造函数两次
// 而寄生组合模继承好可以解决这个问题
// 所谓寄生组合继承,通过借用构造函数来继承属性
// 通过原型链的混成形式来继承方法
// 背后思路:
// 不必为了指定子类型的原型而调用超类型的构造函数
// 我们所需要的无非就是超类型原型的一个副本而已
// 本质上就是使用寄生式继承来继承超类型的原型
// 然后将结果指定给子类型的原型
function inheritPrototype(subType,superType){
  var prototype=object(superType.prototype);
  prototype.constructor=subType;
  subType.prototype=prototype;
}

function SuperType(name){
  this.name=name;
  this.colors=['red','blue'];
}
SuperType.prototype.sayName=function(){
  alert(this.name);
}
function SubType(name,age){
  SuperType.call(this,name);
  this.age=age;
}
inheritPrototype(SubType,SuperType);
SubType.prototype.sayAge=function(){
  alert(this.age);
}

// 开发人员普遍认为寄生组合继承是引用类型最理想的继承范式
// YUI的YAHOO.lang.extend()方法采用寄生组合继承
```

### 总结
ECMAScript支持面向对象OO编程,对象可以在代码执行过程中创建和增强,因此具有动态性而非严格定义的实体,在没有类的情况下,采用
下列模式创建对象.
+ **工厂模式** 使用简单的函数创建对象,为对象添加属性和方法,然后返回对象.这个模式被构造函数模式取代
+ **构造函数模式** 可以创建自定义类型,可以像创建内置对象一样使用new操作符,缺点是,即每个成员都无法得到复用,包括函数 
+ **原型模式** 使用构造函数的prototype属性来指定那些应该共享的属性和方法,组合使用构造函数模式和原型模式时,使用构造函数定义实例属性,而使用原型定义共享的属性和方法

JavaScript主要通过原型链来实现继承.原型链的构建是通过将一个类型的实例赋值给另一个构造函数的原型来实现的.这样,子类就能够访问超类的所有属性和方法,这一点与基于类的继承很相似.原型链的问题是对象实例共享所有继承的属性和方法,因此不适合单独使用.解决这个问题的技术是借用构造函数,在子类的构造函数内部调用超类构造函数.这样就可以做到每个实例都具有自己的属性,同时还能保证只使用构造函数模式来定义类型.使用最多的继承模式是组合继承,这种模式使用原型链继承共享的属性和方法,而通过借用构造函数继承实例属性.  

此外,还存在下列可供选择的继承模式:
+ **原型链继承** 可以在不必预先定义构造函数的情况下实现继承,本质是执行对给定对象的浅复制,而复制的副本还可以进一步的改善
+ **寄生式继承** 与原型继承很相似,也是基于某个对象或某些信息创建一个对象,然后增强对象,最后返回对象.
+ **寄生组合式继承** 结合寄生式和组合继承的优点与一身,是实现基于类型继承最有效的方式
