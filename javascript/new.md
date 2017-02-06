## 一些陌生的知识

#### 剩余参数(rest parameter)
允许长度不确定的实参表示为一个数组,如果一个函数的最后一个形参是以 ... 为前缀的，则在函数被调用时,该形参会成为一个数组,数组中的元素都是传递给该函数的多出来的实参的值。
```javascript
function f(a,b,...args){
  return args;
}

f(1,2); // []
f(1,2,3,4,5); // [3,4,5]
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
