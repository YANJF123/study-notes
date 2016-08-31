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
o.getNameFunc()(); // my object
```












