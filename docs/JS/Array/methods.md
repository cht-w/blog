<div align='center' ><font size='70'>数组方法</font></div>

--------------

## for循环
```javascript
    const arr = [ 1, 2 , 3 , 4 , 5];
    for (let i = 0 ; i < arr.length ; i++) {
        console.log(arr[i]);
    }
    // for 循环中存在 continue 和 break 可以控制循环流程
```

## forEach
```javascript
    const arr = [ 1, 2 , 3 , 4 , 5];
    arr.forEach((item , index)=> {
        console.log(item , index);
    })
    // 不支持 continue 和 break。
```

## every

**所有元素都满足返回true, 有一个不满足返回false**

> every() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）。 
> every() 方法使用指定函数检测数组中的所有元素：
> 如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。
> 如果所有元素都满足条件，则返回 true。
> 注意： every() 不会对空数组进行检测。
> 注意： every() 不会改变原始数组。

```javascript
    const arr = [ 1, 2 , 3 , 4 , 5];
    arr.every((item) => {
        if(item === 2 ) {
            return false
        }else {
            console.log(item)
            return true
        }
    })
```

## for in 

**是为对象来设计的  数组也是一个Object**

> 1. 使用for in会遍历数组所有的可枚举属性，包括原型。
> 2. index索引为字符串型数字，不能直接进行几何运算。
> 3. 遍历顺序有可能不是按照实际数组的内部顺序。

```javascript
    for ( let index in arr) {
        console.log(index , arr[index]);
    }
```
## for of

> 1. for... of适用遍历数组/数组对象/字符串/map/set等拥有迭代器对象的集合.但是不能遍历对象,因为没有迭代器对象.与forEach()不同的是，它可以正确响应break、continue和return语句。
> 2. for... of无法遍历对象。
> 3. for... of 的循环可以避免我们开拓内存空间，增加代码运行效率。

```javascript
    const arr = ["jack" , 'tom' , "andy"];
    const arr1 = [
        {name:'jack' , age:18},
        {name:'tom' , age:14},
        {name:'andy' , age:13}
    ]
    for (let item of arr) {
        console.log(item)
    }
    for(let item of arr1) {
        console.log(item)
    }
```
## for in 和 for of 区别

> 1. for of 无法循环遍历对象，而for in 就是为对象设计的。

> 2. for in 遍历的key (键值)  而for of 遍历的是item (数组值)

> 3. for in 会遍历自身属性(这一点对数组不友好)  而for of 不会



# 伪数组转换 

**arguments参数、nodeList**
```javascript
    // ES5  
    let args = [].slice.call(arguments); // collection
    let imgs = [].slice.call(document.querySelectorAll("img")); // NodeList
    // ES6   Array.prototype.from()
    let args = Array.prototype.from(arguments);
    let imgs = Array.prototype.from(document.querySelectorAll("img"));
    
```
## Array.from
**Array.from ( arrayList , mapFn , thisArg )**
```javascript
    // 初始化并填充数组的值
    let array = Array.from({length:5} , function() { return 1})
```
# 数组生成
```javascript
    //ES5
    let arr = new Array(5) // 生成一个数组并指明长度
    let arr = [] 
    //ES6  
    // Array.prototype.of
    let arr = Array.of(1,2,3,4,5)
    // Array.prototype.fill(value , start , end) 填充
    let arr = Array(5).fill(1)
```
# 数组元素查找

## filter 

**无论是否存在都返回一个数组  关注的是满足条件的所有值（都返回到一个数组）**

```javascript
    let arr = Array.of("js" , "css" , "html" ,"node")
    let res = arr.filter((item)=> item === 'css')  // 存在返回 [ 'css']  不存在返回 []
```
## find  

**存在返回该元素  不存在返回 undefind  关注的是满足条件的第一个值，找到就返回**

```javascript
    let arr = Array.of("js" , "css" , "html" ,"node")
    let res = arr.find((item)=> item==='html') // 'html'
```
## findIndex 

**存在就返回该元素索引,不存在就返回 -1   关注的是：满足条件的第一个值，找到就返回索引**

```javascript
    let arr = Array.of("js" , "css" , "html" ,"node")
    let res = arr.findIndex((item)=> item==='html')
```
## 高阶函数

### 1.filter

**filter用于把数组的某些元素过滤掉，返回符合条件的元素的集合。对于每一个传入filter=数组元素，根据返回值进行决定是否过滤**

```js
let arr = [
    {name:'css' , age:30 , sex:'男'},
    {name:'cht1' , age:25 , sex:'女'},
    {name:'hw' , age:17 , sex:'女'},
    {name:'cht2' , age:5 , sex:'男'},
]

let newArr = arr.filter((item)=> {
    let res = item.age > 20
    return res
})

console.log(newArr); 
// [ {name: "css", age: 30, sex: "男"} , {name: "cht1", age: 25, sex: "女"} ]
```

### 2.map

**map接收一个回调函数，第一个参数最常用的，即数组里的每一项，然后我们可以计算数组中的内容，返回一个新的数组**

```js
// 举例 一
let arr = [1,2,3,4,5,6,7];

let newArr = arr.map((n)=> {
    return n*2
})
console.log(newArr);

// 举例 二
let arr = [
    {name:'css' , age:30 , sex:'男'},
    {name:'cht1' , age:25 , sex:'女'},
    {name:'hw' , age:17 , sex:'女'},
    {name:'cht2' , age:5 , sex:'男'},
]
let newArr = arr.map((n)=> {
    return {
        name:n.name+'!'
        age:n.age+10
    }
})
console.log(newArr);
// [ { name: 'css!', age: 40 },
//   { name: 'cht1!', age: 35 },
//   { name: 'hw!', age: 27 },
//   { name: 'cht2!', age: 15 } ]
```

### 3.reduce

**这个函数必须接收两个参数，reduce()把结果继续和序列的下一个元素做累积计算。**

> 1. 回调函数, 回调函数的参数： prev cur curIndex arr
> 2. 迭代初始值,也就是第一次迭代的时候 prev的值

```js

let arr = [1,2,3,4,5,6];

let newArr = arr.reduce((prev ,cur , curIndex , arr)=> {
    console.log(prev , cur , curIndex , arr);  // 这里打印 reduce 参数详细值
    return prev+cur
} , 0)
console.log(newArr);  // 21  累加
```
**reduce功能很强大，后面会多总结一些使用场景**