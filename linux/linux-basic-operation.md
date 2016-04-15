### basic linux operation 基础操作

#### 学会使用命令帮助
whatis info man which whereis
```linux

// 查看某个命令的简要说明
whatis commond

// 正则匹配,搜索含有local字符的命令
whatis -w "local*"

// 查看命令的详细说明
info commond

// 查看命令的说明文当
man commond

// 用来搜索只记住了部分关键字的命令
man -k commond

// 查看命令程序的binary安装路径
which commond

// 查看程序的搜索路径
whereis commond
```

#### files and directories manager 文件以及目录管理
文件管理即为文件或者目录的创建,删除,查询,移动,mkdir/rm/mv
```linux
// 创建mkdir
mkdir directoryname

// 创建文件 touch vi nano gedit (echo+content > filename)
touch filename
vi filename
nano filename
gedit filename
echo somecontent > filename

// 删除文件rm
rm filename

// 删除非空目录或者空目录,参数r为遍历删除其子目录以及子文件,参数f为强制删除
rm -rf directory

// 正则匹配删除多个文件,例如删除当前目录下后缀名为.txt的所有文件
rm *.txt

// 移动文件mv
mv filename destDirectory

// 复制文件cp
cp filename destDirectory

// 复制文件夹,参数r的意思为遍历复制其子目录以及文件
cp -r directory destDirectory

// 列出目录项 ls
ls

// 列出所有目录项(不胡略以.开头的文件)
ls -a

// 以列表的方式显示目录项
ls -lrt

// 给列出的项目前面加上id编号
ls | cat -n

// 查找目录以及文件find/locate,其中locate是在原来建立的索引中查找,find是实时查找
// 查找当前目录下是否有a.txt文件
find ./ -name a.txt

// 查找当前目录下后缀名为.txt的文件
find ./ -name "*.txt"

// 显示文件内容
// 显示a.txt文件内容到屏幕
cat a.txt

// 按列列表显示a.txt文件内容
cat -al|more a.txt

// 显示a.txt文件前5行内容
head -5 a.txt

// 显示a.txt文件最后2行
tail -2 a.txt

// 查找文件内容egrep
// 在a.txt中查找buuug7字符串
egrep 'buuug7' a.txt
// 在a.txt中查找buuug7字符串并定向输出到b.txt
egrep 'buuug7' a.txt > b.txt

// chmod命令用来改变文件的读写执行等权限
// 查看一个目录或者文件的权限用 ls -l 来看,左侧的十位数表示该文件的权限
// 其中下面的两个buuug7,第一个表示属主,第二个表示属主
-rwxrwxrwx 1 buuug7 buuug7 0 abr 15 06:57 m.txt

// 下面是用ls -l 命令显示文件的权限,总共十位数,对应关系如下
//    -        rw-        r--     r--
// 普通文件 文件拥有者 同组用户 其他用户
// 第一个-代表普通文件,d代表目录,接下来三位rw-代表文件拥有者的(读/写/执行),后面同理


// 设置文件或者目录的权限(数字法)
// 0表示没有权限，1表示可执行权限，2表示可写权限，4表示可读权限，然后将其相加。
// 所以数字属性的格式应为3个从0到7的八进制数，其顺序是（u）（g）（o）。
// 上面的u代表user,g代表group,o代表other

// 设置a.txt文件的权限为文件拥有者,同组用户,其他用户都具有最高的执行权限(读/写/执行)
chmod 777 a.txt

// 设置/test目录的及其子目录的权限为777
chmod -R 777 /test

// chown 改变文件的拥有者
// 语法：chown ［选项］ 用户或组 文件
// [选项]的说明如下:
// - R 递归式地改变指定目录及其下的所有子目录和文件的拥有
// - v 显示chown命令所做的工作。

// 把文件a.txt的所有者修改为buuug7
chown buuug7 a.txt

// 把目录/test及其下的所有文件和子目录的属主设置为buuug7,属组设置为buuug7
chown -R buuug7.buuug7 /test


// 给文件增加别名

// 硬连接,删除其中的一个,另一个仍旧可以使用
// ln cc ccAgian 

// 软连接,删除源,另一个无法使用
// ln -s cc ccTo

// 管道和重定向
// 批处理命令连接执行,使用 |
// 串联:使用分号
// 前面执行成功,则执行后面,否则不执行:&&
// 前面执行失败,则执行后面一条: ||

// 如果有home目录,则输出success,否则输出failed
ls /home && echo success! || echo failed

// 重定向
// 将信息buug7输出到a.txt
echo buuug7 > a.txt
// 将/home目录下面的信息存入a.txt中
ls /home > a.txt
//清空文件
 :> a.txt

// bash快捷键输入删除
// ctrl+u 删除光标到行首的字符,删除全行
// ctrl+w 删除光标前面的一个相邻字符串
// ctrl+H 删除光标前边的一个字符


```






























































