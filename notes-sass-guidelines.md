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

###  数字
##### 零值
当数字小于1,应该在小数点前写出零,但是小数点后不要出现0
```sass
// Yep
.foo {
  padding: 2em;
  opacity: 0.5;
}

// Nope
.foo {
  padding: 2.0em;
  opacity: .5;
}
```

##### 单位
定义单位长度为0后面不需要加单位
```sass
// Yep
$length: 0;

// Nope
$length: 0em;
```

##### 计算
高级运算始终应该包裹在括号中,这么做是为了提高可读性
```sass
// Yep
.foo {
  width: (100% / 3);
}

// Nope
.foo {
  width: 100% / 3;
}
```

### 颜色
选择表示方法HSL值>RGB值>十六进制
其中HSL(H,S,L)中  
H(hue)色调,取值返回(0-360),120表示绿色,240表示蓝色,0或者360表示红色  
S(saturation)饱和度,取值(0%-100%)  
L(lightness)亮度,取值(0%-100%)







































