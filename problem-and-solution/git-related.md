## git related

### create github repository from CLI
```
curl -u 'username' https://api.github.com/user/repos -d '{"name":"RepoName"}'
```

#### generating a new ssh key 
```
https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/
```

#### git常用操作
+ 添加远程仓库地址 `git remote add origin https://github.com/buuug7/some.git`
+ 修改远程仓库地址 `git remote set-url origin https://github.com/...`
+ 查看远程仓库地址 `git remote -v`

#### git ssh连接到aws
```
 ssh -i 'c:\Users\Administrator\.ssh\MyKeyPair.pem' ubuntu@35.166.185.172

```

#### git常用命令
+ 设置你的用户名跟电子邮件`git config --global --edit`


#### Git pull 强制覆盖本地文件
```shell
git fetch --all  
git reset --hard origin/master
git pull
```

#### old mode 100755 new mode 100644让git忽略掉文件权限检查
100644让git忽略掉文件权限检查：
```
// 让git忽略掉文件权限检查：
git config --add core.filemode false
```

#### Git:代码冲突常见解决方法

如果系统中有一些配置文件在服务器上做了配置修改,然后后续开发又新添加一些配置项的时候,
在发布这个配置文件的时候,会发生代码冲突:
```
error: Your local changes to the following files would be overwritten by merge:
        protected/config/main.php
Please, commit your changes or stash them before you can merge.
```
如果希望保留生产服务器上所做的改动,仅仅并入新配置项, 处理方法如下:
```
git stash
git pull
git stash pop
```
然后可以使用git diff -w +文件名 来确认代码自动合并的情况.

反过来,如果希望用代码库中的文件完全覆盖本地工作版本. 方法如下:
```
git reset --hard
git pull
```
其中git reset是针对版本,如果想针对文件回退本地修改,使用
在CODE上查看代码片派生到我的代码片
```
git checkout HEAD file/to/restore  
```

##### github搜索格式
+ `stars:>50000` 搜索星星大于50000的项目
+ 

#### 查看自己watch的项目
https://github.com/watching

#### github token

```
getting-start
bbd6f9d98ef839eb237353d59de4c2f056a242a3



buuug7
1c715dbf865a64f846881aa4b46510967120d8d2

ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCzDmq0txcp1bI7I6Wt843nE3qL0R9CKPTWU5ZDGUF1Jf4XdEdRxBNpU57Ftu8ie2AxIDfhTb5DwdY4X3REf2T+OM0B6hE89rboRLhA5Rw16P38BIcMhMQ+mUTYulhsc3iofPUtkfhnbnKJTWkIhrjHiuDjI8G0f0W2lB3QGUjE9j1O3rNDiZfVyvoLNPLeo1giTfzd/J99pMqkPeu4aLXCMMzoNw5Zpb7Q0r6QO+cLo2ALJJLIPi07nrHM6jX4dPoJ5ZK30iEMVvH2slJoyRAv6sO1SM67bOO+SYR3aul4BxcgChuVhEEsXoNBbmXFAyuRubWtzTwqzE2M2+qoaYq/oLA1ft13eZH0DnF97/PIdpctn5Rt/eSRSX8nT31piCS7H8eiu2HfqXHbDYXbZs5OKnoI6cIz80nJJZDpowwYl1tQlz97jJt2dX9xpaYClOy10eTBuZp5iLDURgQOXo+VkAouWAiErdw6kYCx+Qrh4ZsmkpeNfOJV6RIKC03tDKFApMU36aLs3zQ0nfF5QDxwpU/XHkjTKHw3eOfhhmnHdCcOPUNNkbhyq7PHeDZApanp07U2u7F1C/I4cIxBLUqP1KAKylu73ThdslT5SHW3k3PVuvSZlkyGT2MBnTAeS1NNfRax+NkOQ0SHhbIK/q52HbFuKHFe+LqAoMj6RKtjTw== youpp@126.com
```

#### 新建的一个项目推到github仓库的操作
```
echo # game4039 >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/buuug7/game4039.git
git push -u origin master
```

#### window下 git的全局配置文件和composer的全局配置文件
window下 git的全局配置文件在用户主目录下.gitconfig文件中
composer的全局配置文件在用户主目录下的composer.json中

#### 配置（windows系统的）git环境变量
4、配置（windows系统的）git环境变量，在Path后面追加（复制下面代码改下git的安装路径就可以了）
;D:\Program Files\Git\bin;D:\Program Files\Git\libexec\git-core;

#### git简易指南地址
http://www.bootcss.com/p/git-guide/

#### windows使用git时出现：warning: LF will be replaced by CRLF
windows中的换行符为 CRLF， 而在linux下的换行符为LF，所以在执行add . 时出现提示，解决办法
```
// 删除.git 
rm -rf .git  

//禁用自动转换 
git config --global core.autocrlf false  
```

然后重新执行

```
git init    
git add
```


#### Bad owner or permissions on .ssh/config的解决
```
Bad owner or permissions on /home/haowt/.ssh/config
fatal: The remote end hung up unexpectedly  
```
经网上查是因为ssh config文件权限的问题，修改config文件权限即可。在.ssh目录下，执行下面的语句：
```
sudo chmod 600 config
```
