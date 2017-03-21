# HTTP

## Rrefrence
[the protocol every web developer must know](https://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177)

HTTP stands for Hypertext Transfer Protocol.It's a stateless,application-layer protocol for communicating between 
distributed systems,and is the foundation of the modern web. As a web developer,we all must have a strong 
understanding of this protocol.

HTTP代表超文本传输协议,它是一个无状态,应用层通信的协议,是现代web的基石.

#### HTTP Basics
HTTP允许在不同的主机跟客户端之间通信,并且支持混合的网络配置,因此HTTP协议是一个无状态协议,通信通常基于TCP/IP,
不过任何可信的传输都可以使用HTTP协议来传输数据.TCP/IP默认端口为80端口,但是其他端口也可以使用.

主机跟客户端交流通过一对Request/Response来完成,客户端发起一个request,服务端会返回一个response来响应客户端的请求.
当前版本的协议是HTTP/1.1,在1.0的基础上添加了 一些新的特性,包括persistence connections(持久连接),chunked transfer-coding(分块编码)
等等.

+ URLs (统一资源定位符)请求消息是通过Uniform Resource Locators(URLs)发送的
```
http://www.domain.com:1234/path/to/resource?a=b&x=y
protocol = http
host = www.domain.com
port = 1234
resource path = path/to/resource
query = a=b&x=y
```

+ Verbs
URLs指定我们想要通信的主机,具体执行什么动作由HTTP Verbs来指定.
请求的动词有:
+ GET 获取一个存在的资源
+ POST 创建一个新的资源
+ PUT 更新一个存在的资源
+ DELETE 删除一个存在的资源
以上的四个动词是最常用的,PUT和DELETE有时候被认为是POST的特殊情况

不常用的动词还有:
+ HEAD,类似于GET,但是没有消息体,经常用来获取服务器特定资源的header,检查资源是否变动,比如时间戳.
+ TRACE
+ OPTIONS 用于获取服务器的能力.在客户端,被用来修改基于服务器支持的请求参数
