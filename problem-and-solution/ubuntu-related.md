## ubuntu related

#### 查看是那个发行版，比如是centos或者ubuntu
```
lsb_release -a
```

#### ubuntu 安装php7+nginx+mysql
```
add-apt-repository ppa:ondrej/php 添加php源
apt-get update

sudo apt-get install php7.1-fpm php7.1-mysql php7.1-common php7.1-curl php7.1-cli php7.1-mcrypt php7.1-mbstring php7.1-dom

sudo apt-get install php7.1-cgi 单独安装cgi


// 安装nginx
sudo apt-get install nginx

// 编辑 vim /etc/nginx/sites-available/default

location ~ \.php$ {
        include snippets/fastcgi-php.conf;
    #
    #   # With php7.0-cgi alone:
    #   fastcgi_pass 127.0.0.1:9000;
    #   # With php7.1-fpm:
        fastcgi_pass unix:/run/php/php7.1-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    }


// 安装mysql
sudo apt-get install msyql-server mysql-client

// 修改mysql密码
update user set authentication_string=password('yourpassword') where user='root';

```

#### ubuntu转换php5跟php7
```
a2dismod php5
a2enmod php7
```

#### ubuntu 卸载apache2
```
sudo apt-get remove apache2*
```

#### ubuntu 安装php5 php7
```
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update
// php5.6
sudo apt-get -y install php5.6 php5.6-mcrypt php5.6-mbstring php5.6-curl php5.6-cli php5.6-mysql php5.6-gd php5.6-intl php5.6-xsl php5.6-zip php5.6-fpm

// php7.1
sudo apt-get -y install php7.1 php7.1-mcrypt php7.1-mbstring php7.1-curl php7.1-cli php7.1-mysql php7.1-gd php7.1-intl php7.1-xsl php7.1-zip php7.1-fpm
```
#### apache2
[官网文档](http://httpd.apache.org/docs/)
```
// 查看版本
apache2 -v

// 切换站点
a2ensite 
a2dissite
// 例如切换 000-default.conf
a2ensite 000-default
a2dissite 000-default

// 切换模块
a2enmod
a2dismod

// 例如切换php版本
a2dismod php5.6
a2enmod php7.1
service apache2 restart

// 切换配置
a2enconf
a2disconf
```
