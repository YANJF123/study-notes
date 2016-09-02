### 函数表达式

```javascript
// 递归
// 递归函数是在一个函数通过名字调用自身.
// 不过在严格模式下会出错
function factorial(num){
  if(num<=1){
    return 1;
  }else{
    return num*arguments.callee(num-1);
  }
}

// 闭包
// 闭包是指有权访问另一个函数作用域的变量的函数
// 创建闭包的常见方式就是在一个函数内部创建另一个函数
// 建议只在绝对必要时在考虑使用闭包
function createComparisionFunction(propertyName){
  return function(object1,object2){
    var value1=object1[propertyName];
    var value2=object2[propertyName];
    if(value1<value2){
      return -1;
    }else if(value1>value2){
      return 1;
    }else{
      return 0;
    }
  }
} 

// 闭包和变量
// 考虑下面的函数
function createFunctions(){
  var result=new Array();
  for(var i=0;i<10;i++){
    result[i]=function(){
      return i;
    }
  }
  return result;
}
// 表面上,上面的函数会返回自己的索引值,即为0的返回0,1的返回1...
// 但是实际上每个函数都返回10

// 改进后的函数
function createFunctions(){
  var result=new Array();
  for(var i=0;i<10;i++){
    result[i]=function(num){
      return function(){
        return num;
      }
    }
  }
  return result;
}

// 关于this
// 在闭包中使用this对象也可能导致一些问题
// 看下面的例子
var name="the window";
var o={
  name:'my object',
  getNameFunc:function(){
    return function(){
      return this.name;
    }
  }
};
o.getNameFunc()();// the window

// 改进后
var name="the window";
var o={
  name:"my object",
  getNameFunc:function(){
    var that=this;
    return function(){
      return that.name;
    }
  }
}
o.getNameFunc()(); // my objectx


// 模仿块级作用域
// 由于JavaScript没有块级作用域的概念,通常用如下的形式来模拟块级作用域
(function(){
  // 这里是块级作用域
  })();
// 通过这种技术,从而限制了向全局作用域中添加过多的变量和函数
// 一般来说,我们都应该尽量少向全局作用域中添加变量和函数
// 在一个由多个开发人员共同参与的大型应用程序,过多的全局变量会导致命名冲突
// 而通过创建私有作用域,每个开发人员既可以使用自己的变量,又不必担心搞乱全局作用域

// 私有变量
// 任何在函数中定义的变量,都可以认为私有变量
// 私有变量包括函数的参数,局部变量和在函数内部定义的其他函数

// 如果在函数内部创建一个闭包,那么闭包通过自己的作用域链也可以访问这些变量
// 而利用这一点,就可以创建用于访问私有变量的公有方法

// 我们把有权访问私有变量的公有方法称为特权方法(privileged method)
// 创建方法:
// 第一种在构造函数中定义特权方法
function MyObject(){
  var privateVariable=10;
  function privateFunction(){
    return false;
  }
  // 特权方法
  this.publicMethod=function(){
    privateVariable++;
    return privateFunction();
  }
}
var m=new MyObject();
m.publicMethod(); // false;

// 第二种静态私有变量(原型模式)
// 通过在私有作用域中定义私有变量或函数,同样可以创建特权方法
(function(){
  // 私有变量和私有函数
  var name="";
  // 没加var的Person会自动变成全局变量
  // 在该代码运行完毕后在全局中可以访问Person
  Person=function(value){
    name=value;
  };
  Person.prototype.getName=function(){
    return name;
  }
  Person.prototype.setName=function(value){
    name=value;
  }
  })();

var p1=new Person('buuug7');
p1.getName(); // "buuug7"
p1.setName('bob');

var p2=new Person('bob');
p2.getName(); // bob
p1.getName(); //bob

// 以这种方式创建静态私有变量会因为使用原型增加代码复用,但是每个实例都没有自己的私有变量,所有不是很完美的方案

// 模块模式
// 而道格拉斯所说的模块模式(module pattern)则是为单例创建私有变量和特权的方法
// 所谓单例模式,值的是只有一个实例的对象
// 这种模式在需要对单例进行某些初始化,同时又需要维护其他私有变量时是非常有用的
var app=function(){
  // 私有变量和函数
  var components=new Array();
  // 初始化
  components.push(1,2,3,4);
  // 公共
  return {
    getComponentCount:function(){
      return components.length;
    },
    registerComponent:function(component){
      if(typeof component == 'number'){
        components.push(component);
      }
    }
  };
}();

app.getComponentCount();// 4
app.registerComponent(5);
app.getComponentCount(); //5

// 在Web应用程序中,经常需要使用一个单例来管理应用程序级的信息
// 上面的例子中创建了一个用于管理组件的app对象,在创建这个对象的过程中
// 首先声明了一个私有的components数组并向数组中添加新的信息
// 而返回的对象中的两个函数都是有权访问数组components的特权方法

// 所以,如果创建一个对象并以某些数据来初始化,同时还要公开一些能够访问这些私有数组的方法,就可以用模块模式


// 增强的模块模式
// 有人增强了模块模式,即在返回对象之前加入对其增强的代码
// 这种增强模式适合那些单例碧玺是某种类型的实例,同时还必须添加某些属性和方法对其增强的情况
var singleton=function(){
  // 私有变量和私有函数
  var privateValue=10;
  function privateFunction(){
    return false;
  }
  // 创建对象
  var objec=new CustomType();
  // 添加特权/公有属性和方法
  object.publicProperty=true;
  object.publicMethod=function(){
    privateValue++;
    return privateFunction();
  }
  // 返回对象
  return object;
}
```

### 总结
在JavaScript中,函数表达式是一种非常有用的技术,使用函数表达式无需对函数命名,从而实现动态编程,函数表达式的特点有:
+ 函数声明要有名字,而函数表达式不需要,没有名字的函数表达式也叫匿名函数
+ 在无法确定如何引用函数的情况下,递归函数就会变得比较复杂
+ 递归函数应该始终使用arguments.callee来递归调用自己,不要使用函数名(函数名可能会发生变化)

在函数内部定义了其他函数,就创建了闭包,闭包有权访问包含函数内部的所有变量
+ 闭包的作用域链包含着它自己的作用域,包含函数的作用域和全局作用域
+ 通常,函数的作用域以及其他变量在函数执行完毕后就会被销毁
+ 但是,当函数返回一个闭包时,这个函数的作用域将会一直在内存中保存到闭包不存在为止

使用闭包可以在javascript中模仿块级作用域
+ 创建并立即调用一个函数,这样既可以执行其中的代码,又不会在内存中留下对该函数的引用
+ 结果就是函数内部的所有变量都销毁,除非将某些变量赋值给了包含作用域(即外部作用域)中的变量

闭包还可以在对象中创建私有变量
+ 及时javascript中没有正式的私有对象属性的概念,但是可以使用闭包来实现公有方法,而通过公有方法可以访问在包含作用域中定义的变量
+ 有权访问私有变量的公有方法称为特权方法
+ 可以使用构造函数模式,原型模式来实现自定义类型的特权方法,也可以使用模块,增强模块模式来实现单例的特权方法









