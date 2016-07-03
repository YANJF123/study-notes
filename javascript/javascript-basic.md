## javascript basic 基础

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
- Boolean（布尔）
- Symbol（符号）（第六版新增）
- Object（对象）
  - Function（函数）
  - Array（数组）
  - Date（日期）
  - RegExp（正则表达式）
- Null（空）
- Undefined（未定义）
