## javascript中操作Array和String的常用方法整理
#### String
##### slice()方法提取字符串中的一部分,并返回新的字符串  
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
#####replace()使用一个值替换掉一个匹配模式,并返回替换后的字符串,替换模式可以是字符串或者RegExp,替换值可以是一个字符串或者一个函数
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
#####charAt()方法返回字符串中指定位置的字符
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

##### charCodeAt()返回指定索引处字符的Unicode数值
```javascript
// 语法: str.charCodeAt(index)
"ABC".charCodeAt(0) // returns 65
```

##### concat()方法将一个或者多个字符串与原来字符串连接并结合,形成一个新的字符串并返回
```javascript
// 语法: str.concat(string2, string3[, ..., stringN])
var hello = "Hello, ";
console.log(hello.concat("Kevin", " have a nice day.")); /* Hello, Kevin have a nice day. */
```

##### indexOf()方法返回指定值在字符串对象中首次出现的位置,如果不存在返回-1,indexOf()方法区分大小写
```javascript
// 语法: str.indexOf(searchValue[, fromIndex])
"Blue Whale".indexOf("Blue");     // returns  0
"Blue Whale".indexOf("Blute");    // returns -1
"Blue Whale".indexOf("Whale", 0); // returns  5
"Blue Whale".indexOf("Whale", 5); // returns  5
"Blue Whale".indexOf("", 9);      // returns  9
"Blue Whale".indexOf("", 10);     // returns 10
"Blue Whale".indexOf("", 11);     // returns 10

"Blue Whale".indexOf("blue") // returns -1
```

##### match()当字符串匹配到正则表达式时,match()方法会提取匹配项
```javascript
// 语法: str.match(regexp);
var str = "For more information, see Chapter 3.4.5.1";
var re = /(chapter \d+(\.\d)*)/i;
var found = str.match(re);//["Chapter 3.4.5.1", "Chapter 3.4.5.1", ".1"]
```

##### repeat()构造并返回一个重复当前字符串若干次的新字符串
```javascript
// 语法: var newString = string.repeat(count);
"abc".repeat(-1)     // RangeError: repeat count must be positive and less than inifinity
"abc".repeat(0)      // ""
"abc".repeat(1)      // "abc"
"abc".repeat(2)      // "abcabc"
"abc".repeat(3.5)    // "abcabcabc" 参数count将会被自动转换成整数.
"abc".repeat(1/0)    // RangeError: repeat count must be positive and less than inifinity
```

##### split()构造并返回一个重复当前字符串若干次的新字符串
```javascript
// 语法: str.split([separator][, limit])
var s="my name is bob";
var result=s.split(" "); //["my","name","is","bob"]
```

##### substr()方法返回字符串中从指定位置开始到指定长度的字符串
```javascript
// 语法: str.substr(start[, length])
var str = "abcdefghij";
console.log("(1,2): "    + str.substr(1,2));   // (1,2): bc
console.log("(-3,2): "   + str.substr(-3,2));  // (-3,2): hi
console.log("(-3): "     + str.substr(-3));    // (-3): hij
console.log("(1): "      + str.substr(1));     // (1): bcdefghij
console.log("(-20, 2): " + str.substr(-20,2)); // (-20, 2): ab
console.log("(20, 2): "  + str.substr(20,2));  // (20, 2):
```

##### substring()返回字符串两个索引之间的子串
```javascript
// 语法: str.substring(indexStart[, indexEnd])
var anyString = "Mozilla";

// 输出 "Moz"
console.log(anyString.substring(0,3));
console.log(anyString.substring(3,0));

// 输出 "lla"
console.log(anyString.substring(4,7));
console.log(anyString.substring(7,4));

// 输出 "Mozill"
console.log(anyString.substring(0,6));

// 输出 "Mozilla"
console.log(anyString.substring(0,7));
console.log(anyString.substring(0,10));
```

##### toLowerCase()会将调用该方法的字符串值转换为小写的形式,并返回
```javascript
// 语法: str.toLowerCase()
​console.log( "ALPHABET".toLowerCase() ); // "alphabet"
```

##### toUpperCase()会将调用该方法的字符串值转换为大写的形式,并返回
```javascript
// 语法: str.toUpperCase()
​console.log( "alphabet".toUpperCase() ); // "ALPHABET"
```



















