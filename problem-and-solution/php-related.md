## php related

#### 如何用composer加载自己写的类(PSR-4)
比如你项目文件机构
+ src
    + Email.php
+ tests
    + EmailTest.php
+ vendor
    + autoload.php
+ composer.json

```php

// 在composer.json中配置psr-4
  "autoload": {
    "psr-4": {
      "App\\": "src/"
    }
  },
  "autoload-dev": {
    "psr-4": {
      "Tests\\": "tests/"
    }
  }

// 注意调用下面命令让你的更改生效
composer update
  
// 在Email中你可以这样写
namespaces App;
class Email{
    //
}

// 在其他地方调用Emaill类
require 'vendor/autoload.php';
$email= new App\Email;
```
