# HTTP

## Rrefrence
[the protocol every web developer must know](https://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177)

HTTP stands for Hypertext Transfer Protocol.It's a stateless,application-layer protocol for communicating between 
distributed systems,and is the foundation of the modern web. As a web developer,we all must have a strong 
understanding of this protocol.

HTTP代表超文本传输协议,它是一个无状态,应用层通信的协议,是现代web的基石.

### HTTP Basics
HTTP允许在不同的主机跟客户端之间通信,并且支持混合的网络配置,因此HTTP协议是一个无状态协议,通信通常基于TCP/IP,
不过任何可信的传输都可以使用HTTP协议来传输数据.TCP/IP默认端口为80端口,但是其他端口也可以使用.

主机跟客户端交流通过一对Request/Response来完成,客户端发起一个request,服务端会返回一个response来响应客户端的请求.
当前版本的协议是HTTP/1.1,在1.0的基础上添加了 一些新的特性,包括persistence connections(持久连接),chunked transfer-coding(分块编码)
等等.

##### URLs (统一资源定位符)请求消息是通过Uniform Resource Locators(URLs)发送的
```
http://www.domain.com:1234/path/to/resource?a=b&x=y
protocol = http
host = www.domain.com
port = 1234
resource path = path/to/resource
query = a=b&x=y
```

##### Verbs
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

##### Status Codes
客户端通过URLs和Verbs发送请求到服务器,服务器返回状态码和消息来响应客户端的请求.返回的状态码帮助客户端来解释服务器的响应.
+ `1xx:Informational Message` 代表请求已经被接受,需要继续处理.这类响应是临时响应,只包含状态行和某些可选的响应头信息,并以空行结束.由于HTTP/1.0中未定义任何1xx状态码,一般情况下服务器禁止向客户端发送该类状态码.
+ `2xx:Success` 代表请求已经被成功处理.最常见的状态码`200 OK`
    + `200 OK` 请求成功,请求所希望的响应头或者数据体将随此响应返回.
    + `202 Created` 代表接受请求,但是尚未处理,最终请求可能会也可能不会被执行.在异步操作下,没有比发送这个状态码更为合适的方法了.
    + `204 No Content` 服务器成功处理了请求,但不需要返回消息体(message body).
    + `205 Reset Content` 服务器成功处理了请求,且没有返回任何内容.要求请求者重置文档视图
    + `206 Partial Content` 服务器成功处理了请求,响应中仅仅包含了部分内容,额外的头信息中包含了精确的Range和内容截止的信息,通常的下载工具比如迅雷使用此类响应实现断点续传
+ `3xx:Redirection` 这类状态码代表客户端需要采取进一步的操作才能完成请求,通常用来重定向,后续的请求地址在本次响应的location域中指定
    * `301 Moved Permanently` 被请求的资源被永久移动到新位置了
    * `302 Moved Temporarily` 请求的资源临时从不同的URI响应请求
    * `303 See Other` 请求的响应可以在另一个URI上找到
    * `304 Not Modified` 服务器检查资源没有变动,客户端应该继续使用缓存的资源信息.这种通常是通过让客户端发送`ETag(Entity Tag)`的hash信息,与服务器上资源的hash信息比较来决定是否发送给状态码.
+ `4xx:Client Error` 用来告诉客户端自己可能发生了错误,妨碍了服务器的处理.比如请求一个不可用的资源或者发送一个坏请求.
    * `400 Bad Request` 请求无法被服务器理解
    * `401 Unauthorized` 请求需要被授权
    * `403 Forbidden` 服务器禁止访问资源
    * `404 Not Found` 请求的资源未被服务器发现
    * `405 Method Not Allowed` 指定的请求方法不能用于请求相应的资源.
    * `409 Conflict` 由于和被请求的资源的当前状态存在冲突,请求无法完成.比如客户端尝试修改资源的状态比客户端的时间戳还要新.该状态码通常发生在多个人用`PUT`请求更新一个资源.
+ `5xx:Server Error` 表名服务器在处理请求时发生错误或者异常.
    * `500 Internal Server Error` 服务器遇到了一个未曾预料的状况,导致了它无法完成对请求的处理.比如服务端的源码出错时.
    * `501 Not Implemented` 服务器不支持当前请求需要的某个功能.当服务器无法识别请求的方法,并且无法支持其对任何资源的请求.
    * `503 Service Unavailable` 服务器不可用,比如服务器超负荷无法响应新来的请求导致请求超时
