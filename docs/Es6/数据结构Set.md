<div align='center' ><font size='70'>数据结构</font></div>

----------------


**在Es5 中，存储数据我们总能想到数组、对象， 但是Es6中新增了许多新的数据结构供我们存储数据。**


## 1. Set对象

* Set存储数据必须是唯一的 （Set结构中的成员必须是唯一的）。
* 如果有重复的成员，Set会自动过滤掉。


**声明一个Set对象**
```js
let s = new Set()
```

**初始化数据**

* Set中并不是只能传递数组做为参数，而是传递一个可遍历的对象。 牢记！！！！！！！！！！！！！
* 官方说的就是  迭代器 iterator
```js
let s = new Set([1,2,3,4]);
```

**方法**

* 添加成员 

* .add() , 该方法可以连续使用
```js
let s = new Set();
s.add('hello');
console.log(s); // Set(1) {"hello"}
s.add('123').add('456').add('789');
```

* 删除成员
* .delete()
```js
let s = new Set([1,2,3,4,5]);
// 删除指定成员
s.delete('1');
```

* 全部清空
* .clear()
```js
let s = new Set([1,2,3,4,5]);
s.clear();
```

* 是否拥有某个成员
* .has()  返回一个 布尔值， 存在返回 true ， 不存在返回 false
```js
let s = new Set(['a' , 'b' , 'c' , 'd']);
console.log(s.has('a')); // true 
console.log(s.has('aaa')); // false 
```

* 成员的个数
* .size 

```js
let s = new Set(['2' , 'b' , 'd']);
console.log(s.size); // 3
```

* 成员的遍历(读取)
* .keys()
* .values()
* .entries()
* forEach()
* for ... of 

```js
let s = new Set([1,2]);
console.log(s.keys());  //  SetIterator {1, 2}
console.log(s.values()); // SetIterator {1, 2}
// 返回键值对形式
console.log(s.entries());// SetIterator {1 => 1, 2 => 2}

s.forEach(function(item) {
    console.log(item); // 1, 2
})

for ( let item of s) {
    console.log(item); // 1, 2
}
```