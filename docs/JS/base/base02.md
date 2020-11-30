<div align='center' ><font size='70'>基本语法</font></div>

## 1.语句的执行顺序
**javascript程序是一行一行的执行，正常情况下，一行就是一个语句**

* 区分大小写
* 代码块用{}包裹
* 弱类型，变量无类型，值有类型

## 2.注释
```javascript
    // 单行注释

    /* 一段注释 */

    /**
    *
    * 多行注释
    **/
```
## 3.变量

**变量声明**

js中变量声明通常使用 var。 ES6中新增 const 和 let
```javascript
   // 变量的基本形式：变量声明 加 变量赋值

    var  name; // 变量声明
    name = 'cht'; // 变量赋值

    var name = 'cht1';// 变量声明加赋值
    
    var a = 6 , b=6;  // 同时声明多个变量
```
**命名规范：**

* 不能用数字开头
* 能字母、下划线（_）、$开头
* 可以用字母、数字、下划线、$命名
* 不能用关键字、保留字
* 语义化
* 推荐小驼峰（helloWrold）

## 4.保留字和关键字
[保留字](https://www.w3school.com.cn/js/pro_js_reservedwords.asp)

[关键字](https://www.w3school.com.cn/js/pro_js_keywords.asp)

[保留关键字](https://www.runoob.com/js/js-reserved.html)

## 5.条件语句

```javascript
    // if 语句
    if(condition) {
        // 只有当condition 为true时候执行
    }   

    // if ... else 语句
    if(condition) {
        // 只有当condition 为true时候执行
    }else {
        // 当condition 为false时执行
    }

    // if...else if ... else语句
    if(condition1) {
        // 只有当condition1 为true时候执行
    }else if(condition2) {
        // 只有当condition2 为true时候执行
    }else {
        // 只有当条件均为fasle时候执行
    }

    // switch 语句
    switch(n) {
        case 1:
        console.loog('1');
        break;

        case 2:
        console.log('2');
        break;
        
        // 只有再case匹配失败的时候才会执行，或者 case 匹配成功但是缺少break 也会走default
        default:
        console.log('3');
    }
    
```
**default什么时候会执行？default的位置对执行结果有什么影响？**

* default 只有在case匹配失败的时候才会执行。
* 特殊情况case匹配成功，但是缺少break语句。
* default的位置对执行结果没有影响。

-------------
## 6.循环语句

```javascript
    // for - 循环代码块指定的次数
    for(初始化;条件;递增/递减表达式) {
        
    }
    
    // for/in - 循环对象的属性
    var person = {
        name:"cht",
        age:23,
        job:"IT"
    }

    // for in 循环 遍历对象
    for(key in person) { // key为属性名
        console.log(person[key]);
    }
    
    // while 循环
    while(condition) {
        // 执行的代码
    }
    
    // do while 循环
    do {
        // 执行的代码
    }while(condition)
```

## 7.Break 和 Continue 语句

* break 语句用于跳出循环
* continue 用于跳出循环中的一个迭代




