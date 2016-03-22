# 读sass-guidelines的一些记录

### 字符串
##### 建议在入口文件中通过@charset指令使用UFT-8的编码格式
~~~
@charset 'utf-8';
~~~

##### 在Sass中字符串始终要被单引号包裹
```sass
// Yep
$direction: 'left';

// Nope
$direction: left;
```

##### 作为css的值
关于字体的引用无需用引号括起来
```sass
// Yep
$font-type: sans-serif;

// Nope
$font-type: 'sans-serif';
```
##### 包含引号的字符串
避免使用转义字符,用双引号包裹更好
```sass
// Okay
@warn 'You can\'t do that.';

// Okay
@warn "You can't do that.";
```

#### URLS
最好也用引号包裹起来
```sass
// Yep
.foo {
  background-image: url('/images/kittens.jpg');
}

// Nope
.foo {
  background-image: url(/images/kittens.jpg);
}
```













