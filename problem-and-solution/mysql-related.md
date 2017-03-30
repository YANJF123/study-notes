## mysql related

#### 修改数据库密码
```
进入mysql命令行输入:
use mysql;
update user set password=PASSWORD('root') where user='root';
flush privileges;//记着一定要刷新权限,不然不会生效的

新版本的mysql密码存储字段变成了authentication_string,所以用下面的方法更新
update user set authentication_string=PASSWORD('root') where user='root';
flush privileges;
```


#### 另外
--添加唯一键
ALTER TABLE `test2` ADD UNIQUE ( `userid`)

--修改主键
ALTER TABLE `test2` DROP PRIMARY KEY ,ADD PRIMARY KEY ( `id` )

--增加索引
ALTER TABLE `test2` ADD INDEX ( `id` )
ALTER TABLE `category ` MODIFY COLUMN `id`  int(11) NOT NULL AUTO_INCREMENT FIRST ,ADD PRIMARY KEY (`id`);

删除某一字段
ALTER TABLE mytable DROP 字段 名;


#### mysql导入sql文件
```
source d:/datafilename.sql 
```

#### mysql 错误显示法语的解决办法
mysql.ini 文件里头有一个参数叫做 lc-messages
你把它的值 设成 lc-messages=en_US， 然后重启 mysql 服务，mysql错误提示就可以显示英文了。

#### 允许ubuntu下mysql远程连接
+ 第一步
//找到bind-address = 127.0.0.1
//改为bind-address = 0.0.0.0
//允许任意ip登录或者改成你自定义的
sudo vim  /etc/mysql/my.cnf
sudo service mysql restart

+ 第二步
//授权用户能进行远程登录
//进入mysql命令行
mysql -uroot -p
grant all privileges on *.* to root@"%" identified by "root" with grant option; 
flush privileges;

//上面的*.*代表任意数据库名
//"%"代表任意的IP地址
//"root"代表你root用户的密码,可以设置为其他的

#### mysql 10060错误
当远程连接MySQL数据库的时候显示Can't connect to MySQL server (10060)，我们从以下几个方面入手，找出错误的原因：

1.网络不通。

检查能不能ping通。

2.防火墙设置。

防火墙是否放过mysql的进程，是否屏蔽了mysql的3306端口。

3.mysql的账户设置。

mysql账户是否不允许远程连接。如果无法连接可以尝试以下方法：

mysql -u root -p    //登录MySQL  
 
mysql> GRANT ALL PRIVILEGES ON *.* TO 'root'@'%'WITH GRANT OPTION;     //任何远程主机都可以访问数据库  
 
mysql> FLUSH PRIVILEGES;    //需要输入次命令使修改生效  
 
mysql> EXIT    //退出
也可以通过修改表来实现远程：

mysql -u root -p  
 
mysql> use mysql;  
 
mysql> update user set host = '%' where user = 'root';  
 
mysql> select host, user from user;
其实错误的原因也不外乎以上几个方面，相信按照上面的思路找出原因，定能将问题解决掉

#### 级联
级联是用来设计一对多关系的。例如一个表存放老师的信息:表A（姓名，性别，年龄），姓名为主键。还有一张表存放老师所教的班级信息:表B（姓名，班级）。他们通过姓名来级联。级联的操作有级联更新，级联删除。 在启用一个级联更新选项后，就可在存在相匹配的外键值的前提下更改一个主键值。系统会相应地更新所有匹配的外键值。如果在表A中将姓名为张三的记录改为李四，那么表B中的姓名为张三的所有记录也会随着改为李四。级联删除与更新相类似。如果在表A中将姓名为张三的记录删除，那么表B中的姓名为张三的所有记录也将删除。



### mysql语句顺序
select 语句的完整形式:
```
select [all|distinct|distinctrow|top]
{*|table.*|[table.]field1[AS alias1][,[table.]field2[AS alias2][,...]]}
from tableExpression[,...][IN externaldatabase]
[where...]
[group by...]
[having...]
[order by...]
[limit ...]
[with ownerAccess option]

```

#### mysql find_in_set的相反用法是 not find_in_set
FIND_IN_SET returns the index of the match if it is found, 
and returns 0 if it is not found. 
Since 0 is FALSE you can just use NOT FIND_IN_SET('needle', 'haystack')

#### root密码找不到了-mysql下root密码重置方法
置root密码
方法一:在my.ini的[mysqld]字段加入：
skip-grant-tables
重启mysql服务，这时的mysql不需要密码即可登录数据库
然后进入mysql
mysql>use mysql;
mysql>update user set password=password('新密码') WHERE User='root';
mysql>flush privileges;
运行之后最后去掉my.ini中的skip-grant-tables，重启mysqld即可。
修改mysql密码方法二:
不使用修改my.ini重启服务的方法，通过非服务方式加skip-grant-tables运行mysql来修改mysql密码
停止mysql服务
打开命令行窗口，在bin目录下使用mysqld-nt.exe启动，即在命令行窗口执行: mysqld-nt --skip-grant-tables
然后另外打开一个命令行窗口，登录mysql，此时无需输入mysql密码即可进入。
按以上方法修改好密码后,关闭命令行运行mysql的那个窗口，此时即关闭了mysql，如果发现mysql仍在运行的话可以结束掉对应进程来关闭。
启动mysql服务。


#### mysql中添加外键出错的情况
+ 两个字段的类型或者大小不严格匹配。例如，如果一个是int(10)，那么外键也必须设置成int(10)，而不是int(11)，也不能是tinyint。另外，你还必须确定两个字段是否一个为 signed，而另一个又是unsigned（即：无符号），这两字段必须严格地一致匹配，更多关于signed和unsigned的信息，请参阅：http://www.verysimple.com/blog/?p=57
+ 试图设置外键的字段没有建立起索引，或者不是一个primary key（主键）。如果其中一个不是primary key的话，你必须先为它创建一个索引。
+ 其中一个或者两个表是MyISAM引擎的表。若想要使用外键约束，表必须是InnoDB引擎（实际上，如果两个表都是MyISAM 引擎的，这个错误根本不会发生，但也不会产生外键，只会建立索引）你需要检查表的引擎类型。
+ 外键的名字不能重复。你应该检查你的数据库以确保外健名字是唯一的，或者你在键名后面加上几个随机的字符以测试是否是这个原因。
+ 你可能设置了ON DELETE SET NULL，但是相关的键的字段又设置成了NOTS NULL值。你可能通过修改cascade的属性值或者把字段属性设置成allow null来解决。
+ 请确定你的Charset和Collate选项在表级和字段级上的一致。
+ 你可能设置为外键设置了一个默认值，如default=0。
+ ALTER声明中有语法错误


#### mysql_fetch_array和mysql_mysql_fetch_row
mysql_fetch_array() 是mysql_fetch_row() 的扩展版本。除了将数据以数字索引方式储存在数组中之外，还可以将数据作为关联索引储存，用字段名作为键名。 　　如果结果中的两个或以上的列具有相同字段名，最后一列将优先。要访问同名的其它列，必须用该列的数字索引或给该列起个别名。对有别名的列，不能再用原来的列名访问其内容（本例中的field）。 mysql_fetch_array -- 从结果集中取得一行作为关联数组，或数字数组，或二者兼有。

#### mysql日期处理
选定当前的日期：
select now();

格式化日期：
mysql> select date_format(now(),'%Y -%m-%d %H:%i:%s');

显示当前版本和日期
select version(), current_date;


#### 管理数据库的操作
+ `\s` 或者 `\status` 用来查看服务器状态,比如编码方式等....
+ 

#### mysql index key 区别

+ 如果只是key的话，就是普通索引。mysql的key和index多少有点令人迷惑，单独的key和其它关键词结合的key(primary key)实际表示的意义是不同，这实际上考察对数据库体系结构的了解的。

+ key 是数据库的物理结构，它包含两层意义和作用，一是约束（偏重于约束和规范数据库的结构完整性），二是索引（辅助查询用的）。包括primary key, unique key, foreign key 等。

+ primary key 有两个作用，一是约束作用（constraint），用来规范一个存储主键和唯一性，但同时也在此key上建立了一个index；

+ unique key 也有两个作用，一是约束作用（constraint），规范数据的唯一性，但同时也在这个key上建立了一个index；

+ foreign key也有两个作用，一是约束作用（constraint），规范数据的引用完整性，但同时也在这个key上建立了一个index；

可见，mysql的key是同时具有constraint和index的意义，这点和其他数据库表现的可能有区别。（至少在oracle上建立外键，不会自动建立index），因此创建key也有如下几种方式：
+ 在字段级以key方式建立， 如 create table t (id int not null primary key);
+ 在表级以constraint方式建立，如create table t(id int, CONSTRAINT pk_t_id PRIMARY key (id));
+ 在表级以key方式建立，如create table t(id int, primary key (id));

其它key创建类似，但不管那种方式，既建立了constraint，又建立了index，只不过index使用的就是这个constraint或key。


+ index是数据库的物理结构，它只是辅助查询的，它创建时会在另外的表空间（mysql中的innodb表空间）以一个类似目录的结构存储。索引要分类的话，分为前缀索引、全文本索引等；
因此，索引只是索引，它不会去约束索引的字段的行为（那是key要做的事情）。
如，create table t(id int, index inx_tx_id  (id));

总结，最后的释疑：
+ 我们说索引分类，分为主键索引、唯一索引、普通索引(只有这一种才是纯粹的index)等，也是基于是不是把index看作了key。
比如 create table t(id int, unique index inx_tx_id  (id));  --index当作了key使用

+ 最重要的也就是，不管如何描述，理解index是纯粹的index，还是被当作key，当作key时则会有两种意义或起两种作用。


#### mysql基本操作
+ 安装目录下的my.ini文件保存的是mysql的一些详细配置信息

+ 完整登陆mysql命令
```
mysql -h主机 -u用户名 -p密码 -P端口号 
```

+ 退出mysql几种命令 `exit quit ctrl+c \q`,`\g`跟;的功能一样,都代表命令分隔符


+ 修改命令提示符的两种方法：
  + 登陆的时候修改  --prompt=你想要修改的的字段
  + 登陆之后修改 prompt 你想要修改的提示符字段

+ 修改分隔符
  + 在登陆的时候修改 --delimiter==
  + 登陆之后修改 delimiter 命令分隔符


+ sql规范:
  + 数据库名,表名,关键字 一般大写
  + sql命令支持折行,当名称和mysql的保留字冲突的时候,需要加上''来区分

+ 用`\T` 可以将命令行的输出输入到指定文本文件中,最后以`\t`结束
```
\T c:\buug7\buuug7.txt
\t
```

+ 创建/查看/删除/...等基本操作
```
// 创建数据库
create {database|schema} [if not exists] db_name;

// 删除指定的数据库,mysql不支持一次删除多个数据库
drop database [if exists] db_name;

// 查看数据库
show {database};

// 显示所有数据库
show databases;

// 显示正在使用的数据库
select database();

// 查看上一步的警告
show warnings;

// 查看已经创建好的数据库的编码方式
show create database db_name;

// 创建数据库的同时指定编码方式
create {database|schema} [if not exists] db_name [default character set='utf8'];

// 修改已创建好的数据库的编码方式
alter {database|schema} db_name [default] character set [=]  '字符集';

// 打开指定的数据库
use db_name;

// 登陆的同时打开指定的数据库
mysql -u用户名 -p密码 -Ddb_name


// 在mysql数据库下的名字叫mysql的数据库user表存放着当前用户的一些信息

// 进入mysql数据库控制台:
mysql -u 用户名 -p

// 在插入中文之前临时转换客户端编码方式:set names gbk;
 
// 查看mysql手册方法:
?命令
help 命令


// 数据表是存储数据结构的表格

// 创建数据表语法:
create table [if not exists] table_name(
column_name column_type );

// 查看表结构
desc table_name
// 或者
show columns from table_name;

// 查看创建表的语句
show create table table_name;

// mysql中的注释
--注释内容,或者#注释内容

// 字段添加注释
字段后面 comment 注释内容

// 刷新数据库
flush privileges

// 用文本方式导入sql语句到mysql中：
// 命令：/. c:/data.sql
// 记着后面没有`;`号

// 清空表格记录
delete from 表名


```



###### 数据类型:一个值的集合以及定义在这个值集合上的一组操作
mysql中的数值类型:

+ 整型
  + tinyint 占用一个字节
  + smallint 占用二个字节
  + mediumint 占用三个字节
  + int 占用四个字节
  + bigint 占用8个字节

+ 浮点数
  + float(M,D)
  + double(M,D)
  + 定点数decimal(M,D)

> 定点数 和浮点数在mysql中的区别:
系统会自动四舍五入的时候float和double不会产生警告,而decimal会警告

+ 日期类型:
  + time 3 HH:mm:ss
  + date 3 yyyy:MM:dd
  + datetime 8
  + timestamp 4
  + year

> 时间戳（timestamp），通常是一个字符序列，唯一地标识某一刻的时间


+ 字符型
  + char(M) 定长0~255,后面用空格填充制定长度
  + varchar(M) 变长 0~65536
  + text
    + tinytext
    + text
    + mediumtext
    + longtext 

+ enum 枚举类型最多65535个值,其存储的是你枚举值得编号,在插入的时候可以插入枚举的值或者其对应的编号,每次只能插入其中的一个值

+ set 集合,最多64个成员,可以是多个值的一个集合






###### 约束:表级约束,字段约束

+ 主键约束(primary key),主键是每一条信息的唯一标识
+ 自增长约束(auto_increment)
+ 非空约束(not null)
+ 默认值约束(default)
+ 无符号unsigned 
+ 零填充zerofill
+ 唯一约束unique，特例是null值不认为相同

###### mysql中的存储引擎
默认的一般为innodb,常见的三种存储引擎的优缺点
+ innodb 存储格式为.frm,支持事务,支持外键,安全,缺点是读写效率差,占用空间大
+ myisam 存储格式为.frm,.myd,.myi,show varilables,占用空间小,处理速度快,缺点是不支持事务,适合插入读取
+ memory 存储格式为.frm,处理速度快,缺点是异常无法恢复,适合一次性存储,如果需要快速读取,对安全性要求不高可以选择该引擎

修改存储引擎:
修改配置文件中的default-storage-engine,记着修改后需要重启mysql
也可以再创建表的时候指定存储引擎,例如:
```
create table testengine2(
id int primary key auto_increment
);engine=memory
```

###### 一个例子
创建数据库用户表包含以下字段 编号、用户名、密码、邮箱、性别、年龄、薪水、是否结婚、头像、注册时间 
给字段选择合适的数据类型以及约束条件
```
create database if not exists kaikeba;
use kaikeba;
create table if not exists user_info
(
id int primary key auto_increment,
name varchar(22) not null,
password varchar(22) not null,
email varchar(30) not null,
sex enum('boy','girl','secret'),
age int unsigned,
salary float(6.2),
maried enum('1','0'),
portrait mediumblob,
registtime datetime
);
insert into user_info values(null,'buuug','123456','xxxx@124.com','boy',22,22222.34,1,0xCCDD00CCDD,'2013-12-11 11:20');
```

###### 统计函数
```
SELECT COUNT(column) FROM tb_name
SELECT AVG(column) FROM tb_name
SELECT SUM(column) FROM tb_name
SELECT MAX(column) FROM tb_name
SELECT MIN(column) FROM tb_name
```


###### 别名
在 SQL 语句中,可以为表名称及字段（列）名称指定别名（Alias）,别名是 SQL 标准语法,几乎所有的数据库系统都支持通过关键字 AS 来指定
表别名语法：
```
SELECT column FROM table AS table_alias
```

字段别名
同本文前文讲述的表别名一样，SQL（MySQL） 也支持对表的字段（列）设置别名。
字段别名语法：
```
SELECT column AS column_alias FROM table
```

###### 备份数据库
在命令提示行首先进入MySQL目录下的bin或者吧mysqldump所在路径加入系统path里，
然后输入命令：
```
// 这里mydata是数据库名称，root是用户名，c:\\temp\\tes.sql是输出到指定文件夹的文件
mysqldump -u root -p mydata>c:\\temp\\tes.sql
```

导入备份的
```
mysql -u root -p root dbname<c:\\temp\\tes.sql
```

也可以用mysqldump导入数据库:
```
mysqldump -u 用户名 -p 数据库名称 < [路径]脚本.sql
```

也可以用mysql命令导入,先进入cmd到bin:
```
mysql -u 用户名 -p -D 数据库名称 < [路径]脚本.sql
```

###### 创建用户
用工具创建用户很方便的可以用工具创建用户：
比如用Navicat for mysql

这里是手动创建，不方便
创建用户:
```
create user '用户名'@"host" identified by '密码';
```

用户授权:
```
grant usage
on 数据库名.*
to 用户名@host
grant all privileges on 数据库名称.* to 用户名@localhost 
```

修改用户密码:
```
update mysql.user set password=password(新密码) where user="用户名" and host="";
```

权限
```
usage 赋予登陆权限
```
