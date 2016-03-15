### jquery ajax
XMLHttpRequest是Ajax(asynchronous javascript and xml)的一部分,jquery提供了对其的封装,比如$.ajax(),$.get(),$.getScript(),$.getJSON(),$.post(),$().load(),通常,Ajax在跨域的时候并不能正常工作,比如一个网页从a.com发送Ajax请求是获取不到b.com数据的,以为他们违反同源策略(origin policy),不过不用担心,JSONP(JSON with padding)解决了这个问题

#### 关键概念(key concepts)
##### GET VS. POST
GET:用于非破坏性操作(non-destructive operations),你仅仅从服务器获取数据,不能修改数据,其请求的数据通常能被浏览器缓存,GET请求通常在一个查询字符串中包含所有数据  
POST:用于破坏性操作(destructive operations),可以更改服务器数据,浏览器通常不会缓存该数据,查询字符串是URL中的一部分,数据和查询字符串分离
##### Data Types
text: for transporting simple string  
html: for transporting blocks of HTML to be placed on the page  
script: for adding a new script to the page  
json: for transporting JSON-formatted data,which can include strings,arrays,and objects
jsonp: for transporting JSON data from another domain  
xml: for transporting data in a custom XML schema.  
大多数的情况下用JSON格式传输数据  

##### A is Asynchronous
```javascript
//The asynchronicity of Ajax catches many new jQuery users off guard. Because Ajax calls are asynchronous by default, the response is not immediately available. Responses can only be handled using a callback. So, for example, the following code will not work:
var response;
$.get( "foo.php", function( r ) {
    response = r;
});
console.log( response ); // undefined

//Instead, we need to pass a callback function to our request; this callback will run when the request succeeds, at which point we can access the data that it returned, if any.
$.get( "foo.php", function( response ) {
    console.log( response ); // server response
});

```
##### same-origin policy and JSONP
In general, Ajax requests are limited to the same protocol (http or https), the same port, and the same domain as the page making the request. This limitation does not apply to scripts that are loaded via jQuery's Ajax methods.  

The other exception is requests targeted at a JSONP service on another domain. In the case of JSONP, the provider of the service has agreed to respond to your request with a script that can be loaded into the page using a \<script\> tag, thus avoiding the same-origin limitation; that script will include the data you requested, wrapped in a callback function you provide.

##### Ajax and Firebug

#### jQuery's Ajax-related Methods
$.ajax()
```javascript
// Using the core $.ajax() method
$.ajax({
 
    // The URL for the request
    url: "post.php",
 
    // The data to send (will be converted to a query string)
    data: {
        id: 123
    },
 
    // Whether this is a POST or GET request
    type: "GET",
 
    // The type of data we expect back
    dataType : "json",
})
  // Code to run if the request succeeds (is done);
  // The response is passed to the function
  .done(function( json ) {
     $( "<h1>" ).text( json.title ).appendTo( "body" );
     $( "<div class=\"content\">").html( json.html ).appendTo( "body" );
  })
  // Code to run if the request fails; the raw request and
  // status codes are passed to the function
  .fail(function( xhr, status, errorThrown ) {
    alert( "Sorry, there was a problem!" );
    console.log( "Error: " + errorThrown );
    console.log( "Status: " + status );
    console.dir( xhr );
  })
  // Code to run regardless of success or failure;
  .always(function( xhr, status ) {
    alert( "The request is complete!" );
  });
```













