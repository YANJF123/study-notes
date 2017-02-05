## for javascript 

### json

#### json的三种数据类型
+ 简单值，可以表示字符串，数值，布尔值和null，但是不支持undefined，其中字符串必须用双引号
+ 对象，作为一种复杂的数据类型，表示的是一组有序的键值对，属性名必须加上引号
+ 数组，是一种复杂的数据类型，表示一组有序的值的列表

#### json对象
+ JSON.stringify() 把javascript对象序列化为JSON字符串
+ JSON.parse() 把JSON字符串还原为原生javascript值

```javascript
/**
@param {*} value
@param {Function|[String|Number]} [replacer]
@param {Number|String} [space]
@static
*/
JSON.stringify = function(value,replacer,space) {};

/**
@param {string} jsonString
@param {Function} [reviver]
@static
*/
JSON.parse = function(jsonString,reviver) {};
```

JSON是一个轻量级的数据格式，可以简化表示复杂数据的工作量，JSON使用javascript语法的子集表示对象、数组、字符串、数值、布尔值和null。
