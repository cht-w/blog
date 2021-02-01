<div align='center' ><font size='70'>数据结构Map</font></div>


---------------


1. Map 的基本结构

```js
let map = new Map([[1,2] , [3,4]]);
console.log(map); // Map(2) {1 => 2, 3 => 4}
```
* Map 对象保存键值对，并且能够记住键的原始插入顺序。任何值(对象或者原始值) 都可以作为一个键或一个值。
**注意： Map的key可以是字符串、函数、对象**

2. Map 与 object 的区别

* Map的键可以是任意值
* Map的键（key）是有序的
* Map的键值对个数可以通过 size 属性获取到
* Map 是 iterable 的，所以可以直接被迭代
* 在频繁操作 增加或删除键值对的时候，Map性能比object好


3. set方法

* 增加数据，修改数据。
```js
// 增肌数据
let objKey = {};

let str = 'a String';

let fn = function () {};

let map = new Map();
map.set(objKey, '一个对象');
map.set(str , '一个字符串');
map.set(fn , '一个方法');
console.log(map) //  Map(3) {{…} => "一个对象", "a String" => "一个字符串", ƒ => "一个方法"}
// 修改数据
map.set(objKey , '我是被修改的值')
console.log(map);// Map(3) {{…} => "我是被修改的值", "a String" => "一个字符串", ƒ => "一个方法"}
```

4. delete方法
* 删除某个键值对, 方法中传入的是 key

```js
// 删除
map.delete(objKey); // Map(2) {"a String" => "一个字符串", ƒ => "一个方法"}
```

5. clear方法

* 清空Map中的所有值

```js
map.clear(); // Map(0) {}
```

6. size 

* Map中的键值对个数

```js
console.log(map.size); 
```

7. has方法

* 查找是否有某个值， has方法传入的是 key

```js
map.has(objKey);
```

8. get方法

* 拿到某一个key的值

```js
map.get(objKey); // 返回  "一个对象“
```

9. keys values entries 方法

```js
map.keys();
map.values();
map.entries();
```
9. 遍历 

* forEach()
* for of 

```js
map.forEach(function (item , key) {
  console.log(item , key); 
  // 我是被修改的值 {}
  // 一个字符串 a String
  // 一个方法 ƒ () {}
})

for(let [key , item] of map) {
    console.log(key , item);
}
```