### jquery ajax
XMLHttpRequest是Ajax(asynchronous javascript and xml)的一部分,jquery提供了对其的封装,比如$.ajax(),$.get(),$.getScript(),$.getJSON(),$.post(),$().load(),通常,Ajax在跨域的时候并不能正常工作,比如一个网页从a.com发送Ajax请求是获取不到b.com数据的,以为他们违反同源策略(origin policy),不过不用担心,JSONP(JSON with padding)解决了这个问题

#### 关键概念(key concepts)
##### GET VS. POST
GET:用于(非破坏性操作),你仅仅从服务器获取数据,不能修改数据,
