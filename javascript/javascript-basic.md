## javascript basic 基础

### 语法
- ECMAScript中的一切都区分大小写
- 标识符就是变量,函数,属性的名字,或者函数的参考,第一个字符必须是一个字母,下划线或者$符号,建议驼峰表示法为最佳实践
- 注释
```javascript
// 我是单行注释
/*
 * 我是多行注释
 */
```
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

#### 类型
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
// 常用方法有
"hello".length; //5
"hello".charAt(0); // h
"hello".replace("h","M"); // Mello
"hello".toUpperCase(); // HELLO

```
- Boolean（布尔）
- Symbol（符号）（第六版新增）
- Object（对象）
  - Function（函数）
  - Array（数组）
  - Date（日期）
  - RegExp（正则表达式）
- Null（空）
- Undefined（未定义）
