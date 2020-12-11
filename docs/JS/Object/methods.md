<div align='center'><font size='70'>对象的基本操作</font></div>

---------------

## 1.new

使用 new 关键字调用的函数，是构造函数 constructor。**构造函数是专门用来创建对象的函数**
```javascript
var obj = new Object();
```
**注意：使用typeof检查一个对象的时候，会返回一个object**

## 2.添加属性

* 对象中保存的值称之为**属性**
* 对象.属性名 = 属性值

```javascript
var obj = new Object();
obj.name = 'cht';
obj.age = 12;
console.log(JSON.stringify(obj)) // 将 obj 以字符串的形式打印出来
```

## 3.属性获取

**方式一**
* 对象.属性名
* 如果不存在某一个属性，则返回 undefined
```javascript
var obj = new Object();
obj.name = 'cht';
obj.age = 12;

console.log(obj.name); // cht
console.log(obj.job); // undefined
```
**方式二**

* 使用[]操作属性

* 对象['属性名'] = 属性值;

* 使用`[]`这种形式去操作属性，更加的灵活，因为，我们可以在`[]`中直接传递一个**变量**。

```javascript
var obj = new Object();
obj.name = 'cht';
console.log(obj['name']); // cht
```

## 4.删除属性

```javascript
delete obj.name;
```

## 5.in运算符

* 通过该运算符可以检查一个对象中是否含有指定的属性。如果有则返回 true，没有则返回 false。

* '属性名' in 对象;

```javascript
//检查对象 obj 中是否含有name属性
console.log('name' in obj);

// 常用这种方法写
if(obj.name) {
}
```
## 6.for in遍历对象的属性

* for ... in主要用于遍历对象，不建议用来遍历数组。

```javascript
for (const key in obj){
   //对象中有几个属性，循环体就会执行几次。每次执行时，会将对象中的每个属性的 属性名 赋值给变量。
}
```

```javascript
for (var key in obj) {
    console.log(key); // 这里的 key 是：对象属性的键（也就是属性名）
    console.log(obj[key]); // 这里的 obj[key] 是：对象属性的值（也就是属性值）
}
```








