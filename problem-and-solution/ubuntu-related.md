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



#### ubuntu查看apache2 版本号
```
apachectl -v
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

#### ubuntu 安装php7
```
// You can do the following:
sudo apt-get install python-software-properties software-properties-common
sudo LC_ALL=C.UTF-8 add-apt-repository ppa:ondrej/php
sudo apt-get update

// Optionally purge(清除) PHP 5:
sudo apt-get remove php5-common -y
// Or directly purge it including configuration files:
sudo apt-get purge php5-common -y

// And finally install PHP 7:
sudo apt-get install php7.0 php7.0-fpm php7.0-mysql -y

// Optionally clean up unneeded packages afterwards:
sudo apt-get --purge autoremove -y

// PHP5 has now been replaced with PHP7 as the default PHP in Ubuntu 16.4 so, to install PHP7 on Ubuntu 16.04:
sudo apt-get install php7.0 
// or
sudo apt-get install php
```

#### ubuntu 安装php5.6
```
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update
sudo apt-get -y install php5.6 php5.6-mcrypt php5.6-mbstring php5.6-curl php5.6-cli php5.6-mysql php5.6-gd php5.6-intl php5.6-xsl php5.6-zip
```
