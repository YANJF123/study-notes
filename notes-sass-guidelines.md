# 读sass-guidelines的一些记录

## 语法格式
### 字符串
##### 建议在入口文件中通过@charset指令使用UFT-8的编码格式
~~~
@charset 'utf-8';
~~~

##### 在Sass中字符串始终要被单引号包裹
```scss
// Yep
$direction: 'left';

// Nope
$direction: left;
```

##### 作为css的值
关于字体的引用无需用引号括起来
```scss
// Yep
$font-type: sans-serif;

// Nope
$font-type: 'sans-serif';
```
##### 包含引号的字符串
避免使用转义字符,用双引号包裹更好
```scss
// Okay
@warn 'You can\'t do that.';

// Okay
@warn "You can't do that.";
```

#### URLS
最好也用引号包裹起来
```scss
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
```scss
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
```scss
// Yep
$length: 0;

// Nope
$length: 0em;
```

##### 计算
高级运算始终应该包裹在括号中,这么做是为了提高可读性
```scss
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

##### 颜色格式
选择表示方法HSL值>RGB值>十六进制
HSL(H,S,L)中H(hue)色调,取值返回(0-360),120表示绿色,240表示蓝色,0或者360表示红色.S(saturation)饱和度,取值(0%-100%).L(lightness)亮度,取值(0%-100%)  
RGB(R,G,B),三个参数的取值为0-255,百分比取值为0%-100%,其中红色为RGB(255,0,0),绿色RGB(0,255,0),蓝色RGB(0,0,255)
```scss
// Yep
.foo {
  color: hsl(0, 100%, 50%);
}

// Also yep
.foo {
  color: rgb(255, 0, 0);
}
```

##### 颜色和变量
当一个颜色被多次调用时,最好用一个变量来保存它
```scss
$sass-pink: hsl(330, 50%, 60%);
```
##### 变亮变暗颜色
lighten和darken函数使通过增加或者减小HSL颜色的亮度来实现调节颜色的,但是它们没有预期的效果,可以通过使用mix函数混合白色或者黑色来实现变亮变暗是一个不错的方法
```scss
/// Slightly lighten a color
/// @access public
/// @param {Color} $color - color to tint
/// @param {Number} $percentage - percentage of `$color` in returned color
/// @return {Color}
@function tint($color, $percentage) {
  @return mix(white, $color, $percentage);
}

/// Slightly darken a color
/// @access public
/// @param {Color} $color - color to shade
/// @param {Number} $percentage - percentage of `$color` in returned color
/// @return {Color}
@function shade($color, $percentage) {
  @return mix(black, $color, $percentage);
}
```

### 列表
列表就是Sass的数组,是个一维数组,可以用逗号跟空格符来分隔,索引是从1开始的,一般单行显示可读性比较高
```scss
// Yep
$font-stack: (
  'Helvetica',
  'Arial',
  sans-serif,
);

// Nope
$font-stack: 'Helvetica' 'Arial' sans-serif;
```

### Maps
map数据结构,冒号之后添加空格,每一个键值对单独一行
```scss
// Yep
$breakpoints: (
  'small': 767px,
  'medium': 992px,
  'large': 1200px,
);

// Nope
$breakpoints: ( small: 767px, medium: 992px, large: 1200px );
```

### 声明顺序
以字母顺序表来声明或者以类型来声明（position, display, colors, font, miscellaneous…,具体看个人爱好


### 选择器嵌套
嵌套最大的问题是使代码难以阅读,建议嵌套不要超过三层
#### 伪类推荐使用嵌套
```scss
.foo {
  color: red;

  &:hover {
    color: green;
  }

  &::before {
    content: 'pseudo-element';
  }
}
```

## 命名约定
























