## JavaScript Scope and Hoisting

#### JavaScript拥有函数级别的作用域
```JavaScript
// 块级别的作用域对于JavaScript来说不起作用
var x = 1;
console.log(x); // 1
if (true) {
	var x = 2;
	console.log(x); // 2
}
console.log(x); // 2

// JavaScript拥有函数级别的作用域
var x=1;
function foo() {
  var x=2;
  console.log(x); // 2
}
foo(); // 2
console.log(x); // 1
```
#### 变量,函数申明提升
```JavaScript
function foo(){
  bar();
  var x=1;
}

// 上面的函数会被JavaScript解析器解析为下面的,变量的申明会被提前到函数开头地方
function foo(){
  var x;
  bar();
  x=1;
}

// 下面的两个函数是相等的
function foo() {
	if (false) {
		var x = 1;
	}
	return;
	var y = 1;
}
function foo() {
	var x, y;
	if (false) {
		x = 1;
	}
	return;
	y = 1;
}


// 试看下面的两个函数,第二个是被JavaScript解析器解析之后的
function test() {
	foo(); // TypeError "foo is not a function"
	bar(); // "this will run!"
	var foo = function () { // function expression assigned to local variable 'foo'
		alert("this won't run!");
	}
	function bar() { // function declaration, given the name 'bar'
		alert("this will run!");
	}
}

// foo变量和函数申明会被提升到函数的开头处
function test() {
  var foo;
  function bar() { // function declaration, given the name 'bar'
		alert("this will run!");
	}
	
	foo(); // TypeError "foo is not a function"
	bar(); // "this will run!"
	foo = function () { // function expression assigned to local variable 'foo'
		alert("this won't run!");
	}
}
test();
```

#### 我们该如何编码
首先申明变量必须用var,并且放在最顶部申明,建议在一个作用域中用单个var申明变量
I recommend using JSLint with the onevar option to enforce this,your code should be look like below:
```JavaScript
/*jslint onevar: true [...] */
function foo(a, b, c) {
    var x = 1,
    	bar,
    	baz = "something";
}
```

#### 标准上如何说的

If the variable statement occurs inside a FunctionDeclaration, the variables are defined with function-local scope in that function, as described in section 10.1.3. Otherwise, they are defined with global scope (that is, they are created as members of the global object, as described in section 10.1.3) using property attributes { DontDelete }. Variables are created when the execution scope is entered. A Block does not define a new execution scope. Only Program and FunctionDeclaration produce a new scope. Variables are initialised to undefined when created. A variable with an Initialiser is assigned the value of its AssignmentExpression when the VariableStatement is executed, not when the variable is created.
