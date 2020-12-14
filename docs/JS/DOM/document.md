<div align='center' ><font size='70'>document对象</font></div>

----

## 什么是DOM

Document Object Model，文档对象模型。DOM 为文档提供了结构化表示，并定义了如何通过脚本来访问文档结构。目的其实就是为了能让js操作html元素而制定的一个规范。

* 当浏览器载入 HTML 文档, 它就会成为 Document 对象。
* Document 对象是 HTML 文档的根节点。
* Document 对象使我们可以从脚本中对 HTML 页面中的所有元素进行访问。

提示：Document 对象是 Window 对象的一部分，可通过 window.document 属性对其进行访问。

```
document 构造函数 -> HTMLDocument
HTMLDocument 构造函数 -> Document

document.__proto__ = HTMLDocument.prototype
HTMLDocument.__proto__ = Document.prototype

最终：
document 》HTMLDocument 》Document 》Node 》 EventTarget 》 Object
```
## 获取元素的方法

```javascript
// 获取元素的方法
getElementById()  //  返回单个元素

getElementsByTagName()  //  返回一组元素，类数组
getElementsByTagName('*')  //  获取所有的元素


getElementsByClassName() // 返回一组元素，类数组 IE8及以下不支持
getElementsByName()  // 返回一组元素，类数组. 很少用

querySelector(参数为CSS选择器一样)  // 返回单个元素
querySelectorAll(参数为CSS选择器一样)  //  返回一组元素，类数组 
// 缺点: 1、性能比getElement 系列慢; 2、不实时，有缓存片段
```
## 其他常用方法

```javascript
document.createDocumentFragment() // 创建文档碎片
document.createElement()  // 创建元素节点
document.createComment() // 创建注释节点
document.createTextNode() // 创建文本节点
document.open() // 打开一个流
document.write() // 向文档写 HTML 表达式 或 JavaScript 代码。
document.close() // 关闭用 document.open() 方法打开的输出流，并显示选定的数据。
```
## 文档碎片

```javascript
// document.createDocumentFragment(); 创建文档片段(碎片), 不在DOM树中，只存在内存中
var oUl = document.getElementById('list');
var oFrag = document.createDocumentFragment();
for(var i = 0; i < 10000; i++) {
    var oLi = document.createElement('li');
    oLi.innerHTML = i + '、这是第' + i + '个项目';
    oLi.className = 'list-item';
    oFrag.appendChild(oLi);
}
oUl.appendChild(oFrag);
```







