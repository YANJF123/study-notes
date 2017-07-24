## phpstrom related

### IntelliJ IDEA phpstorm 注册码
IntelliJ IDEA 注册码
http://idea.lanyus.com/

### 常用快捷键
+ OSX
  - command+shift+a 搜索设置
  - command+shift+n 打开文件
  - command+n 浏览类文件
  - command+shift+r 预览文件结构(自定义)
  - control+n 新建文件
  - shift+option+comand+t 重构代码
  - option+enter 导入类
  - control+enter 弹出生成菜单,比如构造函数,getter,setter等
  - shift+option+shif+n navigating symbol
  - shift+command+d 多重光标选择 all occurences
  - command+d add selection for next occurence 选择下一个出现的光标点

### phpstorm xdebug

#### OSX

```
// install xdebug with homebrew
brew search xdebug
brew install homebrew/php/php71-xdebug

//config xdebug
sudo vi /usr/local/etc/php/7.1/conf.d/ext-xdebug.ini

// config like below
[xdebug]
zend_extension="/usr/local/opt/php71-xdebug/xdebug.so"
xdebug.remote_enable=1
xdebug.remote_host=localhost
xdebug.remote_port=9000
xdebug.remote_autostart=1
xdebug.profiler_enable=1
xdebug.idekey=PHPSTORM

// add new server in phpstorm
// path: Languages & Frameworks > PHP > Servers
// mark the (Use path mappings)
// specific Absolute path on the Servers

// run debug
// first Editor Configurations
// click '+' add new PHP Web Application
// select the server you add before

```  
