<div align='center' ><font size='70'>字符串方法</font></div>

------------

## 1.charAt
> charAt() 方法 返回字符串中指定位置的字符

> str.charAt(index) --- index 为字符串索引（0 - length-1）如果超出范围，则返回空

```javascript
    var str = "abcdefg";
    var s = str.charAt(5);
    console.log(s) // f
```

## 2.charCodeAt
> charCodeAt() 返回指定位置的字符串的unicode数值

> str.charCodeAt(index) 

> index 为一个 从 0 到 str.length-1 的整数，如果不是一个数值 则默认为 0, 如果小于 0或者大于字符串长度，则返回NaN

## 3.concat 

> concat() 将一个或多个字符串拼接在一起，组成一个新的字符串并返回

> str.concat(string1 , string2) 

> concat() 的性能表现不佳， 没有赋值操作符快(+ 或者 +=) 

```javascript
    let str = "abc";
    let str1 = str.concat("d" , "e" , "fgh");
    console.log(str1);
```

## 4.indexOf 和 lastIndexOf

> indexOf() 用于查找子字符串在字符串中首次出现的位置，并返回所在位置下标，没有则返回 -1 (该方法严格区分大小写),从左向右查找。

> lastIndexOf() 与其相反，从右向左查找

> str.indexOf(searchVal , [,formIndex=0])

> str.lastIndexOf(searchVal , [,formIndex=0])

> searchVal 表示被查找的字符串，formIndex 表示开始的下标，默认为0,如果小于0,则查找整个字符串，若超过字符串长度则返回-1

> 如果被查找的是空字符串，则返回字符串长度

```javascript
    console.log("我是中国人".indexOf("中国")); // 2  
    console.log("".indexOf("1")); // -1
    console.log("".indexOf("1" , 100)); // -1
    console.log("".indexOf("",100)); // 0 
```

## 5.slice

> slice() 用于提取字符串的一部分，并返回一个新的字符串(空格也算是字符串)

> str.slice(start , end)

> end 参数可选, start 既可以是真值也可以是负数

> 取正值时候,表示从索引为start得位置截取到end位置(不包括end) , 如果end省略,则截取到字符串末尾。

> 取负值时候,表示从索引为length+start位置截取到end位置

```javascript
    let str = "Are you ok?";
    str.slice(1) ; // "re you ok?"
    str.slice(1,4); // "re "
    str.slice(-1); // k?
```
## 6.split
> splite 用来分割一个字符串，并组成一个新的数组返回

> str.splite(separator , limit)

> separator 表示分隔符，可以是一个字符串也可以是一个正则表达式

> limit 表示从返回的数组中截取前 limit 个元素,限定返回数组的长度

> 如果忽略separator,则返回的数组包含一个由原来字符串组成的数组

> 如果separator为一个空串,则被分割成一个由原字符串中字符组成得数组
```javascript
    let str = "我要 努力 学习提升 自己的能力";

    console.log(str.split(" "));  // [ '我要', '努力', '学习提升', '自己的能力' ]    

    console.log(str.split()); // [ '我要 努力 学习提升 自己的能力' ]

    console.log(str.split("")); //[ '我','要',' ','努','力',' ','学','习','提','升',' ','自','己','的','能',力' ]

    console.log(str.split(" " , 1)); // [ '我要' ]
```

## 7.substr 
> substr 返回指定位置开始的指定数目的字符

> str.substr(start[,length])

> start表示开始截取字符的位置，可以取正值或者负值，去正值表示start位置索引，取负值表示 length + start位置的索引

> length 可选可不选，必须为数值，如果省略，则一直截取到结尾

```javascript
    var str = "我是cht";
    console.log(str.substr(0)); // 我是cht
    console.log(str.substr(0,2)); // 我是
```

## 8.substring
> substring 返回字符串两索引之间的字串
> str.substring(indexA[,indexB])
> indexA indexB 表示字符串索引，其中indexB可选(不包括indexB)，如果省略，则返回indexA到结尾

**规律：**

* 若indexA == indexB,则返回一个空字符串
* 若省略indeB,则提取字符一直到字符串末尾
* 若任一参数小于0或NaN,则被当作0
* 若任一参数大于 length，则被当作length  表示indexA 一直到结尾的索引
* 而如果indexA > indexB,则substring的执行效果就像是俩个参数调换一般。比如：str.substring(0,1) == str.substring(1,0)

```javascript
    var str = 'abcdefg';
    console.log(str.substring(0)); // abcdefg  只有一个参数时，返回 这个参数的索引到最后
    console.log(str.substring(0,3)); //abc  返回 索引 1-3 的字串
    console.log(str.substring(1,1)); // ""  返回空字符串
    console.log(str.substring(0,str.length)); // abcdefg    出现length或大于length 表示末尾
    console.log(str.substring(-1,str.length)); // abcdefg   出现 0 或 NaN 当作0
    console.log(str.substring(0,1) == str.substring(1,0)); // 参数调换
```
## 9.toLowerCase 和 toUpperCase
> 这两个方法返回字符串的小写 和大写形式。

```javascript
    var str = 'ABCDE';
    console.log(str.toLowerCase()); // abcde
    var str1 = 'abcde'
    console.log(str1.toUpperCase()); // ABCDE
```
## 10.toString 和 valueOf
> 这两个方法返回字符串本身
```javascript
    var str = 'cht';
    console.log(str.toString()); // cht
    console.log(str.valueOf()); // cht
```

## 11.trim
> 这个方法用于去除字符串首尾空白并返回
```javascript
    var str = " a b c ";
    console.log(str.trim()); //"a b c"
```