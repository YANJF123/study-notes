## jquery extend 插件

#### 类级别
可以理解为扩展jquery类,比如$.ajax(),相当于静态方法,使用$.extend(object)
```javascript
$.extend({
  add:function(a,b){return a+b;},
  minus:function(a,b){return a-b}
});
```
