## JavaScript Useful Hacks

#### 使用!!操作符转换布尔值  
有时候我们需要对一个变量查检其是否存在或者检查值是否有一个有效值，如果存在就返回true值。为了做这样的验证，我们可以使用!!操作符来实现是非常的方便与简单。对于变量可以使用!!variable做检测，只要变量的值为:0、null、" "、undefined或者NaN都将返回的是false，反之返回的是true。比如下面的示例：
```JavaScript
function Account(cash) {
    this.cash = cash;
    this.hasMoney = !!cash;
}
var account = new Account(100.50);
console.log(account.cash); // 100.50
console.log(account.hasMoney); // true

var emptyAccount = new Account(0);
console.log(emptyAccount.cash); // 0
console.log(emptyAccount.hasMoney); // false
```
在这个示例中，只要account.cash的值大于0，那么account.hasMoney返回的值就是true。

#### 使用+将字符串转换成数字
```JavaScript
function toNumber(strNumber) {
    return +strNumber;
}
console.log(toNumber("1234")); // 1234
console.log(toNumber("ACB")); // NaN

// 这个也适用于Date，在本例中，它将返回的是时间戳数字：
console.log(+new Date()) // 1461288164385

// 同样将数字转换成字符串只需要+""即可
var num=123;
var str=num+"";
console.log(typeof str); // string
```

#### 使用||运算符
在ES6中有默认参数这一特性。为了在老版本的浏览器中模拟这一特性，可以使用||操作符，并且将将默认值当做第二个参数传入。如果第一个参数返回的值为false，那么第二个值将会认为是一个默认值。如下面这个示例：
```JavaScript
function User(name, age) {
    this.name = name || "Oliver Queen";
    this.age = age || 27;
}
var user1 = new User();
console.log(user1.name); // Oliver Queen
console.log(user1.age); // 27

var user2 = new User("Barry Allen", 25);
console.log(user2.name); // Barry Allen
console.log(user2.age); // 25
```

#### 在循环中缓存array.length
这个技巧很简单，这个在处理一个很大的数组循环时，对性能影响将是非常大的。基本上，大家都会写一个这样的同步迭代的数组：
```JavaScript
for(var i = 0; i < array.length; i++) {
    console.log(array[i]);
}
```
如果是一个小型数组，这样做很好，如果你要处理的是一个大的数组，这段代码在每次迭代都将会重新计算数组的大小，这将会导致一些延误。为了避免这种现象出现，可以将array.length做一个缓存：
```JavaScript
var length = array.length;
for(var i = 0; i < length; i++) {
    console.log(array[i]);
}
```
你也可以写在这样：
```JavaScript
for(var i = 0, length = array.length; i < length; i++) {
    console.log(array[i]);
}
```
