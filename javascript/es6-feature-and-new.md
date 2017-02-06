## ES6新特性和一些陌生的知识

#### const, let
const 声明创建一个只读的常量。这不意味着常量指向的值不可变，而是变量标识符的值只能赋值一次。(译者注：JavaScript中的常量和Java，C++中的常量一个意思。注意区分常量的值和常量指向的值的不同)
```javascript
const name1 = value1 [,name2 = value2 [,...[,nameN = valueN]]];
```

let语句声明一个块级作用域的本地变量，并且可选的赋予初始值。  
let允许你声明一个作用域被限制在块级中的变量、语句或者表达式。与var关键字不同的是，var声明的变量只能是全局或者整个函数块的。
```javascript
let var1 [= value1] [, var2 [= value2]] [, ..., varN [= valueN]];
```

#### 默认参数(default parameter)
如果一个形参没有被传入对应的实参或者传入了undefined，则该形参会被赋予一个默认值
```javascript
function f(a,b=1){
  return a*b;
}
f(5); // 1
f(5,2); // 10
```

#### 剩余参数(rest parameter)
允许长度不确定的实参表示为一个数组,如果一个函数的最后一个形参是以 ... 为前缀的，则在函数被调用时,该形参会成为一个数组,数组中的元素都是传递给该函数的多出来的实参的值。
```javascript
function f(a,b,...args){
  return args;
}

f(1,2); // []
f(1,2,3,4,5); // [3,4,5]
```

#### 展开操作符(spread operator)
 扩展语法允许在需要多个参数（用于函数调用）或多个元素（用于数组文本）或多个变量（用于解构分配）的位置扩展表达式。
 ```javascript
// 用于函数
myFunction(...iterableOjb);
// 用于数组字面量
[...iterableObj,4,5,6]

// 例子
function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction(...args);


 ```

#### 解析赋值 (destructuring assignment)
解构赋值（destructuring assignment）语法是一个Javascript表达式，它使得从数组或者对象中提取数据赋值给不同的变量成为可能。
```javascript
var a,b,rest;
[a,b]=[1,2];
console.log(a); // 1
console.log(b); // 2

[a,b,...rest] = [1,2,3,4,5,6];
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3,4,5,6]

({a,b} = {a:1,b:2});
console.log(a); // 1
console.log(b); // 2
```

#### function* 声明
function*声明定义一个generator(生成器)函数，返回一个generator对象,生成器是一种可以从中退出并在之后重新进入的函数，生成器的环境会在每次执行后被保存，下次进入时可以继续使用。  
调用一个生成器函数并不马上执行它的主体，而是返回一个这个生成器函数的迭代器(iterator)对象，当这个迭代器的next()方法被调用时,生成器函数的主体会被执行直至第一个yield表达式.该表达式定义了迭代器返回的值，或者，被 yield*委派至另一个生成器函数。next()方法返回一个对象，该对象有一个value属性，表示产出的值，和一个done属性，表示生成器是否已经产出了它最后的值。
```javascript
function* idMaker(){
  var index = 0;
  while(index<3){
    yield index++;
  }
}
var gen=idMaker();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // undefined

```

#### yield
yield 关键字用来暂停和继续一个生成器函数(function*),yield 关键字使生成器函数暂停执行，并返回跟在它后面的表达式的当前值. 可以把它想成是 return 关键字的一个基于生成器的版本.
```javascript
function* foo(){
  var index=0;
  while(index<3){
    yield index++;
  }
}
var iterator=foo();
console.log(iterator.next()); // { value:0, done:false }
console.log(iterator.next()); // { value:1, done:false }
console.log(iterator.next()); // { value:2, done:false }
console.log(iterator.next()); // { value:undefined, done:true }
```

#### 箭头函数
箭头函数就是简写形式的函数表达式,并且它拥有词法作用域的this值(即不会产生自己作用域下的this,arguments,super...),箭头函数总是匿名的.
```javascript
(param1,param2,...,paramN) => { statements }
(param1,param2,...,paramN) => expression
// 如果只有一个参数,圆括号是可选的
(singleParam) => { statements }
singleParam => { statements }
// 无参数的函数
() => { statements }

// 返回对象字面量时应当用圆括号括起来
param => ({ foo:bar })
```

#### class 类
是es2015中引入的基于原型的继承的语法糖.并不是javascript里加入新的面向对象的继承模型.javascript中的类知识能让我们用更加简洁明了的语法创建对象以及处理相关继承.  
```javascript
// 定义方式: 类声明,类表达式
// 类声明,类声明不存在变量提升,必须先声明后使用
class Person {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }
}

// 类表达式是定义类的另一种方式,在类表达式中,类名是可有可无
// 匿名
var Person = class {
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
};

// 命名的
var Person = class Person {
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
}

// 原型方法
class Person {
    constructor (name,age) {
        this.name = name;
        this.age = age;
    }

    get info(){
        console.log(`Person Info: name(${this.name}) age(${this.age})`);
    }

    walk(){
        console.log('i am walking');
    }
}
const p = new Person('b7',22);
p.info; // The Info: name(b7) age(22)

// 静态方法
// static 关键字用来定义类的静态方法。静态方法是指那些不需要对类进行实例化，使用类名就可以直接访问的方法，
// 需要注意的是静态方法不能被实例化的对象调用。静态方法经常用来作为工具函数。
class Person {
    constructor (name,age) {
        this.name = name;
        this.age = age;
    }

    get info(){
        console.log(`Person Info: name(${this.name}) age(${this.age})`);
    }

    walk(){
        console.log('i am walking');
    }

    static sleep(){
        console.log(`i am sleeping`);
    }
}
Person.sleep(); // i am sleeping

// extends 关键字可以用在类声明或者类表达式中来创建一个继承了某个类的子类。
class Person {
    constructor (name,age) {
        this.name = name;
        this.age = age;
    }

    get info(){
        console.log(`Person Info: name(${this.name}) age(${this.age})`);
    }

    walk(){
        console.log('i am walking');
    }
}

class Child extends Person {
    walk() {
        console.log('child walking');
    }
}

const c =new Child('bob','8');
c.walk();

// super 关键字可以用来调用其父类的构造器或者类方法
class Person {
    constructor (name,age) {
        this.name = name;
        this.age = age;
    }

    get info(){
        console.log(`Person Info: name(${this.name}) age(${this.age})`);
    }

    walk(){
        console.log('i am walking');
    }
}

class Child extends Person {
    walk() {
        super.walk();
        console.log('child walking');
    }
}

const c =new Child('bob','8');
c.walk();
```

#### 对象字面量 object literals
对象字面量时封闭在花括号对({})中的一个对象的零个或者多个"属性名--值"对的列表,
```javascript
var car = {
  name: 'jeep',
  color: 'red',
  move: function(){
    console.log(`${this.name} moving`);
  }
};
car.move(); // jeep moving

// ES2015 增强的对象字面量
var obj = {
    // __proto__
    __proto__: theProtoObj,
    // Shorthand for ‘handler: handler’
    handler,
    // Methods
    toString() {
     // Super calls
     return "d " + super.toString();
    },
    // Computed (dynamic) property names
    [ 'prop_' + (() => 42)() ]: 42
};
```

#### 模板字面量(Template literals)
模板字面量(Template literals)是允许嵌入表达式的字符串字面量。并且支持多行字符串和字符串插补特性。在 ES2015 / ES6 规范中，其被称之为模板字符串(template strings)。  
模板字符串使用反引号 (` `) 来代替普通字符串中的用双引号和单引号。模板字符串可以包含特定语法(${expression})的占位符。
```javascript

`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`
```
