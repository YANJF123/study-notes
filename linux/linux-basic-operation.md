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












```






























































