<div align='center' ><font size='70'>JS运算符</font></div>

-------------
## 1.加法运算（+）

```javascript
    
    // 数学运算：相加
    console.log(100+100); // 200

    // 对象先转化成字符串再拼接
    console.log(1+ {}) // 1[object Object]

    // 字符串拼接 ： 任意数据类型加上字符串都是字符串
    console.log(1 + 'str'); // 1str
    console.log('str' + 1); // str1
    console.log('str' + 'str'); // strstr
    console.log('str' + undefined); // strundefined
    console.log('str' + true); // strtrue
    console.log('str' + NaN); // strNaN
    console.log('str' + 1 + 1); //str11
    console.log('str' + (1 + 1)); // str2
    console.log(1 + 1 + 'str' + (1 + 1)); // 2str2

    // 布尔值
    console.log(true + true); // 2

    // null 会被转化成 0 后做加法
    console.log(1 + null); // 1
    
    // undefined 转化成NaN后做加法
    console.log(1 + undefined); // NaN    
```
## 2.除法运算（/）

* NaN : Not a Number 非数   
* NaN : 是数字类型   typeof NaN ： number
* 当出现错误时会出现 NaN
* infinity > 正无穷大 > 数字类型
* -infinity > 负无穷大 > 数字类型
```javascript
    console.log(10 / 2) // 5
    console.log(1 / 2)  // 0.5
    console.log(0 / 0)  // NaN
    // 任意一个非数字类型做除法运算都是NaN ， NaN出现必然是NaN  
    console.log(NaN / NaN) // NaN
    console.log(1 / NaN); // NaN
    console.log('a' / 'b'); // NaN
    console.log(1 / 0); // Infinity
    console.log(-1 / 0); // -Infinity
```

## 3.取余（%）
```javascript
    console.log(3 % 2); // 1
    console.log(4 % 6); // 4
    console.log(0 % 6); // 0
```

## 4.一元运算符（++ --）
```javascript
    var a = 1;
    console.log(a++);  // 1
    console.log(a); // 2
    console.log(++a); // 3
    
    var a = 1;
    console.log(a = a + 1); // 2
    
    var a = 5;
    console.log(a--); // 5
    console.log(a); // 4
    console.log(--a); // 3
    
    var b;
    
    var a = 5,
    b = a++ +1; // => b = 1 + a++;
    console.log(a, b); // 6 6
    
    var a = 5,
    b = ++a +1;
    console.log(a, b); // 6 7
    
    var a = 5,
    b = a-- + --a;  // => --a + a--;
    console.log(a, b); // 3 8
    
    var a = 5,
    b = --a + --a;
    console.log(a, b); // 3 7
    
    var a = 5,
    b = --a + a++;
    console.log(a, b); // 5 8

```

## 5.比较运算符
```javascript
    // >、<、>=、<=、==、===、!=、!===
    
    // number - number
    console.log(1 > 2); // false
    
    // number - string   string-> number
    console.log(1 > '2'); // false
    
    /* 
    * 字符串对比-字符串相对应的ASCII码（字符相对应的十进制代码）多个字符的，
    * 从左到右依次对比，直到比较出ASCII码的大小为止
    */
    console.log("a" > "b"); // false
    console.log("4.5" > "11"); // true
    console.log("1.5" > "11"); // false
    
    // 相等是不看数据类型
    console.log(1 == 1); // true
    console.log(1 == "1"); // true
    console.log(1 != 1); // false
    console.log(1 != "1"); // false
    
    // 全等是需要看数据类型是否相等
    console.log(1 ==="1"); // false
    console.log(1 !=="1"); // true
    
    // NaN与包括自己在内的任何东西都不相等
    console.log(NaN == NaN); // false
```

## 6.逻辑运算符

**JS中为假情况：undefined、null、NaN、””、0、 false，除此以外全部是真**

**与&&**
```javascript
    // 遇到真就往后走，遇到假或走到最后就返回当前值
    console.log(1 && 2); // 2
    console.log(1 && 2 && undefined && 10); // undefined
```
::: warning
遇到假或走到最后就返回当前值，遇到真就往后走
:::

**总结：**

表达式|返回值|真或假
--|:--:|--:
1&&1|返回1|真
0&&1|返回0|假
1&&0|返回0|假
0&&0|返回0|假

**或||**
```javascript
    // 遇到假就往后走，遇到真或者走到最后就返回当前值
    console.log(1 || 2); // 1
    console.log(0 || null || 1 || 0); // 1
```
**总结：**

::: warning
遇到真或走到最后就返回当前值，遇到假就往后走
:::

表达式|返回值|真或假
--|:--:|--:
1或1 | 返回1 | 真
0或1 | 返回1 | 真
1或0 | 返回1 | 真
0或0 | 返回0 | 假

**举例：**
```javascript
    oDiv.onclick = function(e) {
        var e = e || window.event;
    }
```
**非!**
```javascript
    console.log(!1); // 1 true 》 !1 false
    console.log(!!1); // true
```

## 7.值交换
```javascript
    var a = 1;
    var b = 2;
    
    // 通过中间变量方式
    var c = a;
    a = b ;
    b = c ; 
    console.log(a , b) ; // 2  1

    // 运算方式

    a = a+b; // 3
    b = a-b; // 3- 2 = 1
    a = a - b // 3 - 1 = 2
    console.log(a,b); // 2 1
```
[运算符详解](https://www.runoob.com/js/js-operators.html)

[运算符详解1](https://www.df5d.com/show/bhizgb.html)

