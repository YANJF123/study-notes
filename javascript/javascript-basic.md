## javascript basic 基础

### JavaScript 的实现由下面三个不同的部分组成
- 核心ECMAscript()
- 文档对象模型DOM(Document Object Model)是针对XML但是经过扩展用于HTML的编程接口
```
// DOM就是把文档看做一个对象来对待
// 文档中的各个组件,可以通过object.attribute这种形式来访问
// 一个DOM会有一个根对象,这个对象通常就是document
// 上文所说的「像操作对象一样」，最主要就是指访问对象的属性和调用对象的方法。
// 对象的属性可以通过 object.attribute 这种形式来访问，对象的方法可以通过 object.method(arguments) 这种形式来调用。
```
- 浏览器对象模型BOM(Browser Object Model),通过该模型对象可以访问和操作浏览器的组件,例如导航条,历史记录等
```
// BOM通常有:
// 弹出新浏览器窗口的功能
// 移动,缩放和关闭浏览器窗口的功能
// 提供浏览器详细信息的navigator对象
// 提供用户浏览器加载页面的详细信息的location对象
// 提供用户显示器分辨率详情信息的screen对象
// 对cookies的支持
// 像XMLHttpRequest和IE的ActiveXObject这样的自定义对象
```
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
