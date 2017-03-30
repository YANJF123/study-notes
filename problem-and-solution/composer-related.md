## composer realted

#### windows中composer的config.json位置
`C:\Users\buuug7\AppData\Roaming\Composer\`

#### composer常用命令
+ 升级composer本身 `composer selfupdate`
+ 显示详细的安装信息 `composer update -vvv` 
+ 安装composer在composer.json中的依赖 `composer install`

#### 当composer运行的时候出现xdebug ennabled的时候
打开php.ini然后找到zend_extension,在前面加上`;`注释掉

