<div align='center' ><font size='70'>Ajax入门</font></div>

------

## ajax是什么

**Ajax是一种异步请求数据的web开发技术，在不需要刷新页面的前提下，通过异步请求像服务器请求数据，并呈现在页面上。
Ajax的目的是提高用户体验，较少网络数据的传输量。同时，由于AJAX请求获取的是数据而不是HTML文档，因此它也节省了网络带宽，让互联网用户的网络冲浪体验变得更加顺畅。**

## ajax原理

**举例：**

老师需要找小陈了解一些事情，就委托班长去找小陈，自己接着忙工作，直到班长把小陈喊过来，最后和小陈交谈。

Ajax工作流程和上面类似。其中核心就是用过**XMLHttpRequest**对象做为中间人，去做事情。使得浏览器可以发送http请求和接收http响应。浏览器可以专心做其他的事情，直到服务器返回数据后再渲染页面。

## Ajax的使用

### 1.创建Ajax核心对象

注意：兼容性 

```javascript
var xhr = null;
if(window.XMLHttpRequest) {
    // 高版本
    xhr = new XMLHttpRequest();
}else {
    // 低版本的IE
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
}
```

### 2.发送服务器请求

```javascript
1. xhr.open(method,url,async);  
2. send(string);//post请求时才使用字符串参数，否则不用带参数。 
```
* method: 请求的类型

* url: 文件再服务器上的位置

* async true(异步)  flase(同步)

**注意：post请求一定要设置请求头的格式内容**

**post请求参数放在send里面,即请求体**
```javascript
xhr.open("POST","test.html",true);  
xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
xhr.send("name=cht&name=hw");  //post请求参数放在send里面，即请求体
```
### 3.服务器响应处理（同步和异步）

responseText 获得字符串形式的响应数据。

responseXML 获得XML 形式的响应数据。

**同步处理**

```javascript
xhr.open("GET",'xxxx',false);
xhr.send();
document.getElementById("box").innerHTMl = xhr.responseText;  // 同步处理获取到数据后直接渲染到页面中
```
**异步处理**

```javascript
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4&& xhr.status===200) {
        document.getElementById("box").innerHTMl = xhr.responseText;
    }
}
```
**什么是onreadystatechange？**

请求状态改变事件

**什么是readyState？**
readyState是XMLHttpRequest对象的一个属性，用来标识当前XMLHttpRequest对象处于什么状态。
readyState总共有5个状态值，分别为0~4，每个值代表了不同的含义：

* 0：未初始化 -- 尚未调用.open()方法；
* 1：启动 -- 已经调用.open()方法，但尚未调用.send()方法；
* 2：发送 -- 已经调用.send()方法，但尚未接收到响应；
* 3：接收 -- 已经接收到部分响应数据；
* 4：完成 -- 已经接收到全部响应数据，而且已经可以在客户端使用了；

**什么是status？**

status是HTTP状态码

基本上可以分为五种类型：

* 1xx：请求收到，继续处理(信息提示)
* 2xx：操作成功收到，分析、接受(成功)
* 3xx：重定向
* 4xx：请求包含一个错误语法或不能完成(客户端错误)
* 5xx：服务器执行一个完全有效请求失败(服务器错误)

**常见状态码**

* 200 表示从客户端发来的请求在服务器端被正常处理了。
* 204 表示请求处理成功，但没有资源返回。
* 301 表示永久性重定向。该状态码表示请求的资源已被分配了新的URI，以后应使用资源现在所指的URI。
* 302 表示临时性重定向。
* 304 表示客户端发送附带条件的请求时（指采用GET方法的请求报文中包含if-matched,if-modified-since,if-none-match,if-range,if-unmodified-since任一个首部）服务器端允许请求访问资源，但因发生请求未满足条件的情况后，直接返回304Modified（服务器端资源未改变，可直接使用客户端未过期的缓存）
* 400 表示请求报文中存在语法错误。当错误发生时，需修改请求的内容后再次发送请求。
* 401 表示未授权（Unauthorized)，当前请求需要用户验证
* 403 表示对请求资源的访问被服务器拒绝了
* 404 表示服务器上无法找到请求的资源。除此之外，也可以在服务器端拒绝请求且不想说明理由时使用。
* 500 表示服务器端在执行请求时发生了错误。也有可能是Web应用存在的bug或某些临时的故障。
* 503 表示服务器暂时处于超负载或正在进行停机维护，现在无法处理请求。

**GET和POST区别**

* 使用Get请求时,参数在URL中显示,而使用Post方式,则放在send里面
* 使用Get请求发送数据量小,Post请求发送数据量大
* 使用Get请求安全性低，会被缓存，而Post请求相对安全。


[Ajax简介](https://www.ibm.com/developerworks/cn/web/wa-aj-ajaxhistory/index.html)

[POST和GET区别](https://juejin.cn/post/6844903526875791374)

