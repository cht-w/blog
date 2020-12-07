<div align='center' ><font size='70'>JS数据类型</font></div>

-------------

**JS中的变量没有数据类型，只有值才有类型。变量可以随时变换类型，随着我们的赋值。**

## 1.七大内置类型

* 空 （null）
* 未定义 （undefined）
* 布尔值 （boolean）
* 数字 （number）
* 字符串 （string）
* 对象 （object）
* 符号 （symbol）--- ES6新增

**按照值类型区分**
* 原始类型/基本类型：Undefined、Null、Boolean、String、Number、Symbol（共6种）
* 引用类型：对象(Object)：数组(Array)、函数(Function)、正则(RegExp)、日期(Date) Error

## 2.typeof运算符
```javascript
    console.log(typeof undefined); // undefined
    console.log(typeof true); //boolean
    console.log(typeof 12); // number
    console.log(typeof '12'); // string
    console.log(typeof {a: 1} ); // object
    console.log(typeof [1, 2, 3] ); // object
    console.log(typeof function(){}); // function
    console.log(typeof Symbol()); // symbol
    console.log(typeof null); // object
    
    // 判断特殊空值
    var a = null;
    console.log(!a && typeof a === 'object'); // true
    
    var a;
    // 未定义与未声明
    console.log(a); // undefined
    console.log(b); // ReferenceError: b is not defined
    
    // 安全机制
    console.log(typeof a); // undefined
    console.log(typeof b); // undefined
    
    // 两次typeof
    console.log(typeof typeof a);  // string
```
**说明：**
* typeof 用于类型判断，可以返回一个值的数据类型
* 两种写法：typeof 42 、typeof(42)
* 数值、字符串、布尔值分别返回number、string、boolean
* 函数返回function，是Object的子类型
* undefined返回undefined
* 对象返回object
* null返回object
* symbol返回symbol
* Object包括：引用数据类型 object、array、null
* typeof返回的是一个字符串
* 两次typeof返回一定是string

## 3.类型转换

**类型转换分为显示类型转换（强制类型转换）和隐式类型转换**

* 强制类型转换主要指使用Number()、String()和Boolean()三个函数，手动将各种类型的值，分别转换成数字、字符串或者布尔值。
* parseInt() 、 parseFloat() 、 toString()

1. Number(): 函数把对象的值转换为数字，如果对象的值无法转换成数字，那么Number（）函数返回 NaN。

```javascript
        var a = 'true';
        console.log(typeof(Number(a)) + '-' + Number(a)); // number-NaN
        var a = '1a';
        console.log(typeof(Number(a)) + '-' + Number(a)); // number-NaN
        var a = undefined;
        console.log(typeof(Number(a)) + '-' + Number(a)); // number-NaN
        var a = null;
        console.log(typeof(Number(a)) + '-' + Number(a)); // number-0
        var a = '123';
        console.log(typeof(Number(a)) + '-' + Number(a)); //number-123
        var a = true;
        console.log(typeof(Number(a)) + '-' + Number(a)); //number-1

```
2. String()把需要转换的值转换成字符串，并返回
```javascript
    console.log(typeof(String(123))); // String
    console.log(typeof (123 + '')); // String
```
3. Boolean()
```javascript
    console.log(Boolean(1)); // true
    console.log(Boolean(null)); // false    undefined NaN 0 空字符串 null
```
4. parseInt():将字符串参数作为有符号的十进制整数进行解析,如果方法有两个参数， 使用第二个参数指定的基数，将字符串参数解析为有符号的整数.
```javascript
    var a = '3.14';
    console.log(typeof(parseInt(a)) + '-' + parseInt(a));//number-3
    var a = true;
    console.log(typeof(parseInt(a)) + '-' + parseInt(a));//number-NaN
    var a = null;//undefined,NaN
    console.log(typeof(parseInt(a)) + '-' + parseInt(a));//number-NaN
    var a='10';
    console.log(parseInt(a,16));//16
    var a='b';
    console.log(parseInt('abc123'));//NAN
    var a='b';
    console.log(parseInt('123abc'));//123 

```
5. parseFloat():可解析一个字符串，并返回浮点数，有两个参数
```javascript
   console.log(typeof(parseFloat('3.14159')) + '-' + parseFloat('3.14159')) //  number-3.14159
   console.log(parseFloat("3.12abc")); // 3.12
```
6. toString():方法可把一个 Number 对象转换为一个字符串，并返回结果.
```javascript
    var a = 1;
    console.log(typeof(a.toString()) + '-' + a.toString()); // string-1

    var str = undefined; // null也没有toString()
    
    var str = 'abc';
    console.log0(typeof (str.toString()) + '-' + str.toString());  // string-abc
    
    var str = '100';
    console.log(parseInt(str, 2));//二进制100变十进制  4
    console.log(parseInt(str, 2).toString(16));// 4
```

## 4.隐式类型转换

1. +运算符内部会隐式调用String()
```javascript
    var a = 'a' + 1;  // String(1) => 'a' + '1'
    console.log(a); // a1
```
2. 运算符内部（-  *  /  %）会隐式调用Number()
```javascript
    var a = '3' * 2;  // str -> Number    [- * / %]
    console.log(a) // 6

    var b = '1' > 2   // str -> Number     > = <
    console.log(b); // false
    
    var c = 1 == '1';
    console.log(c)  // true    

    var d = 1 === '1';  // 不进行隐式转换
    console.log(d) // false 
```

3. 运算符内部(++/–,正负)会隐式调用Number()

```javascript
    var a = '123';
    a++;
    console.log(a); //124
    var num='123';
    console.log(typeof(+num));//number
    var num='abc';
    console.log(typeof(-num)+':'+-num);//number:NaN
```
4. isNaN() 需要经过Number()处理
```javascript
    console.log(isNaN(NaN));//true
    console.log(isNaN(undefined))//true
    console.log(isNaN(null));//false
    console.log(isNaN('ab'));//true
    console.log(isNaN('null'));//true
    console.log(isNaN(1));//false
```

[优质文章1](https://segmentfault.com/a/1190000017016407)
