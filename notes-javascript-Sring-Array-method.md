## javascript中操作Array和String的常用方法整理
#### String
slice()方法提取字符串中的一部分,并返回新的字符串  
```javascript
// 语法: str.slice(beginSlice[, endSlice])
// 正值
var str1 = 'The morning is upon us.';
var str2 = str1.slice(4, -2);
console.log(str2); // OUTPUT: morning is upon u

// 负值
var str = 'The morning is upon us.';
str.slice(-3);     // returns 'us.'
str.slice(-3, -1); // returns 'us'
str.slice(0, -1);  // returns 'The morning is upon us'
```
replace()使用一个值替换掉一个匹配模式,并返回替换后的字符串,替换模式可以是字符串或者RegExp,替换值可以是一个字符串或者一个函数
```javascript
// 语法: str.replace(regexp|substr,newSubStr|function[,flags])
var re = /apples/gi;
var str = "Apples are round, and apples are juicy.";
var newstr = str.replace(re, "oranges");
print(newstr);

var str = "Apples are round, and apples are juicy.";
var newstr = str.replace("apples", "oranges", "gi");
print(newstr);
```
charAt()方法返回字符串中指定位置的字符
```javascript
// 语法: str.charAt(index)如果index超出返回,返回一个空字符串
var anyString = "Brave new world";
console.log("The character at index 0   is '" + anyString.charAt(0)   + "'");
console.log("The character at index 1   is '" + anyString.charAt(1)   + "'");
console.log("The character at index 2   is '" + anyString.charAt(2)   + "'");
console.log("The character at index 3   is '" + anyString.charAt(3)   + "'");
console.log("The character at index 4   is '" + anyString.charAt(4)   + "'");
console.log("The character at index 999 is '" + anyString.charAt(999) + "'");
```

charCodeAt()返回指定索引处字符的Unicode数值
```javascript
// 语法: str.charCodeAt(index)
"ABC".charCodeAt(0) // returns 65
```

concat()方法将一个或者多个字符串与原来字符串连接并结合,形成一个新的字符串并返回
```javascript
// 语法: str.concat(string2, string3[, ..., stringN])
var hello = "Hello, ";
console.log(hello.concat("Kevin", " have a nice day.")); /* Hello, Kevin have a nice day. */
```
