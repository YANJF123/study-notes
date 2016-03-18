## javascript中操作Array和String的常用方法整理
### String
其中它的属性有两个(String.length和String.prototype)

##### fromCharCode()根据指定的Unicode编码中的序号值来返回一个字符串
```javascript
// 语法: String.fromCharCode(num1, ..., numN) 
String.fromCharCode(65,66,67) //ABC
```

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

##### trim()删除字符串两端的空白
```javascript
// 语法: str.trim()
var orig = '   foo  ';
console.log(orig.trim()); // 'foo'

// 另一个.trim()例子，只从一边删除
var orig = 'foo    ';
console.log(orig.trim()); // 'foo'
```

### Array
Array有两个属性(Array.length和Array.prototype)
##### Array.isArray()用来判断某个值是否是数组
```javascript
// 语法: Array.isArray(value)
// 下面的函数调用都返回 true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
// 鲜为人知的事实：其实 Array.prototype 也是一个数组。
Array.isArray(Array.prototype); 

// 下面的函数调用都返回 false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray({ __proto__: Array.prototype });
```

##### concat()将传入的数组或者非数组与原来数组合并,组成一个新的数组并返回
```javascript
// 语法: array.concat(value1, value2, ..., valueN)
// 连接两个数组
var alpha = ["a", "b", "c"];
var numeric = [1, 2, 3];
// 组成新数组 ["a", "b", "c", 1, 2, 3]; 原数组 alpha 和 numeric 未被修改
var alphaNumeric = alpha.concat(numeric);

// 连接三个数组
var num1 = [1, 2, 3];
var num2 = [4, 5, 6];
var num3 = [7, 8, 9];
// 组成新数组[1, 2, 3, 4, 5, 6, 7, 8, 9]; 原数组 num1, num2, num3 未被修改
var nums = num1.concat(num2, num3);
```


##### filter()方法使用指定的函数测试所有元素,并创建一个包含所有通过测试的元素的新数组
```javascript
// 语法: arr.filter(callback[, thisArg])
// 参数: 用来测试数组的每个元素的函数。调用时使用参数 (element, index, array)。返回true表示保留该元素（通过测试），false则不保留。
function isBigEnough(element) {
  return element >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
```

##### find()方法返回数组中满足测试条件的一个元素,如果没有满足条件的元素,返回undefined
```javascript
// 语法: arr.find(callback[, thisArg])
// 参数: callback在数组每一项上执行的函数，接收 3 个参数：element当前遍历到的元素,index当前遍历到的索引,array数组本身
// 下面的例子展示了如何从一个数组中寻找质数（如果找不到质数则返回undefined）

function isPrime(element, index, array) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) return false;
    }
    return (element > 1);
}

console.log( [4, 6, 8, 12].find(isPrime) ); // undefined, not found
console.log( [4, 5, 8, 12].find(isPrime) ); // 5
```


##### forEach()方法让数组的每一项都执行给定的函数
```javascript
// 语法: array.forEach(callback[, thisArg])
// 参数: callback接受三个参数,currentValue当前项的值,index当前项的索引,array数组本身
function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}
[2, 5, 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[2] = 9
```


##### indexOf()方法返回给定元素在数组中能找到的第一个索引值,否则返回-1
```javascript
// 语法: arr.indexOf(searchElement[, fromIndex = 0])
// 参数: searchElement要查找的元素,fromIndex开始查找的位置
var array = [2, 5, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
```

##### join() 方法将数组中的所有元素连接成一个字符串。
```javascript
// 语法: str = arr.join([separator = ','])
// 参数: separator用于指定连接每个数组元素的分隔符,默认为逗号
var a = ['Wind', 'Rain', 'Fire'];
var myVar1 = a.join();      // myVar1的值变为"Wind,Rain,Fire"
var myVar2 = a.join(', ');  // myVar2的值变为"Wind, Rain, Fire"
var myVar3 = a.join(' + '); // myVar3的值变为"Wind + Rain + Fire"
var myVar4 = a.join('');    // myVar4的值变为"WindRainFire"
```


##### lastIndexOf()方法返回指定元素在数组中的最后一个索引,不存在返回-1,从数组的后面向前面查找
```javascript
// 语法: arr.lastIndexOf(searchElement[, fromIndex = arr.length - 1])
// 参数: searchElement被查找的元素,fromIndex从此位置开始逆向查找
var array = [2, 5, 9, 2];
var index = array.lastIndexOf(2);
// index is 3
index = array.lastIndexOf(7);
// index is -1
index = array.lastIndexOf(2, 3);
// index is 3
index = array.lastIndexOf(2, 2);
// index is 0
index = array.lastIndexOf(2, -2);
// index is 0
index = array.lastIndexOf(2, -1);
// index is 3
```

##### map()方法返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组
```javascript
// 语法: array.map(callback[, thisArg])
// 参数: callback原数组中的元素经过该方法后返回一个新元素,currentValue数组中当前被传递的元素,index元素索引,array调用map()方法的数组
// 求数组中每个元素的平方根
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
/* roots的值为[1, 2, 3], numbers的值仍为[1, 4, 9] */
```


##### pop() 方法删除一个数组中的最后的一个元素，并且返回这个元素
```javascript
// 语法: array.pop()
var myFish = ["angel", "clown", "mandarin", "surgeon"];
console.log("myFish before: " + myFish);
var popped = myFish.pop();
console.log("myFish after: " + myFish);
console.log("Removed this element: " + popped);
```

##### push()方法添加一个或多个元素到数组的末尾，并返回数组新的长度（length 属性值）
```javascript
// 语法: arr.push(element1, ..., elementN)
// 参数: elementN被添加到数组末尾的元素
var sports = ["soccer", "baseball"];
var total = sports.push("football", "swimming");
console.log(sports); // ["soccer", "baseball", "football", "swimming"]
console.log(total);  // 4
```


##### reduce()方法接收一个函数作为累加器（accumulator），数组中的每个值（从左到右）开始合并，最终为一个值
```javascript
// 语法: arr.reduce(callback,[initialValue])
// 参数: callback执行数组中的每个值的函数,四个参数:
// 参数: previousValue上次调用回调返回的值,或者提供的初始值,currentValue数组中当前被处理的值,
// 参数: index当前元素在数组中的索引,array调用reduce()的数组
[0,1,2,3,4].reduce(function(previousValue, currentValue, index, array){
  return previousValue + currentValue; //10
});
```
##### reverse() 方法颠倒数组中元素的位置。第一个元素会成为最后一个，最后一个会成为第一个
```javascript
// 语法: arr.reverse()
var myArray = ['one', 'two', 'three'];
myArray.reverse(); 
console.log(myArray) // ['three', 'two', 'one']
});
```

##### shift() 方法删除数组的第一个元素，并返回这个元素。该方法会改变数组的长度
```javascript
// 语法: arr.shift()
var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];
console.log('调用 shift 之前: ' + myFish);
// "调用 shift 之前: angel,clown,mandarin,surgeon"
var shifted = myFish.shift(); 
console.log('调用 shift 之后: ' + myFish); 
// "调用 shift 之后: clown,mandarin,surgeon" 
console.log('被删除的元素: ' + shifted); 
// "被删除的元素: angel"
```


##### slice()方法把数组中的一部分复制存入一个新的数组中,并返回该新的数组
```javascript
// 语法: arr.slice([begin[,end]])
var fruits=["Banana","Orange","Lemon","Apple","Mango"];
var citrus=fruits.slice(1,3); // ["Orange","Lemon"]

```





