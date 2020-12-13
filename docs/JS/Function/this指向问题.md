<div align='center' ><font size='70'>this指向问题</font></div>

----------------

## this指向的五种情况

### 情况一
**1.函数执行时首先看函数名前面是否有"."，有的话，"."前面是谁,this就是谁；没有的话this就是window**
```javascript
// 一：
function fn() {
    console.log(this);
}
fn();  // this -> window

// 二：
function foo() {
    fn(); // this -> window
}
foo()

// 三：
function fn() {
    console.log(this);
}
var obj = { fn:fn };
obj.fn();  // this -> obj

// 四：
var obj={
 sum:function(){
 console.log(this);//this->obj
       fn();//this->window
  }
};
oo.sum();
```
### 情况二

**2.自执行函数中的this永远指向window**
```javascript
(function(){
    console.log(this);   // this -> window
})()
```
### 情况三

**3.事件绑定中的this永远指向当前元素**
注意： Ie中的attachEvent指向window

* DOM零级事件绑定
```javascript
 oDiv.onclick=function(){
     //this->oDiv
  };
```
* DOM二级事件绑定
```javascript
 oDiv.addEventListener('click',function(){
     // this -> oDiv
 })
```
* 在IE6~8下使用attachEvent，默认的this就是指的window对象

```javascript
 oDiv.attachEvent("click",function(){
       //this->window
  });
```
### 情况四

**4.在构造函数模式中，类中(函数体中)出现的this.xxx=xxx中的this是当前类的一个实例**

```javascript
function Person(name , age) {
    // this -> p1  实例对象（p1 , p2 , p3）
    this.name = name;
    this.age = age;
    this.say = function () {
        console.log(this.name);
    }
}
const p1 = new Person('cht',10);
p1.say(); // cht
```
**注意：类中某一个属性值(方法)，方法中的this需要看方法执行的时候，前面是否有"."**

```javascript
function Person(name,age) {
    this.name = name;
    this.age = age;
    this.say = function(){
        console.log(this.name);
    }
}
const p1 = new Person('cht');

// say前面是 p1 所以 this->p1s
p1.say(); // cht  


var f = p1.say
// f 方法中的this是window
f(); // undefined
```
### 情况五

**5.call、apply和bind**

这三个能改变this的指向。

如何将this绑定到obj对象上去？？？

**尝试将this绑定到obj对象上去**
```javascript
let obj = {};
function fn(){
    console.log(this);
}
fn();  // this-> window

obj.fn(); // 报错  obj.fn is not a function
```
很天真的以为这样就能绑定上，其实思考一下就知道，obj的堆内存中并没有 fn 这个属性，所以直接报错了。

**使用call、apply、bind都能改变this的指向。**

* call的使用

```
fn.call(想要将this指向哪里, 函数实参1, 函数实参2,...);
```

**首先我们让原型上的call方法执行，在执行call方法的时候，我们让fn方法中的this变为第一个参数值obj；然后再把fn这个函数执行。**

严格模式和非严格模式是不同的。

```javascript
// 非严格模式下
var obj={name:"cht"};
function fn(num1,num2) {
    console.log(num1+num2);
    console.log(this);
}
fn.call(100,200);//this->100 num1=200 num2=undefined
fn.call(obj,100,200);//this->obj num1=100 num2=200
fn.call();//this->window
fn.call(null);//this->window
fn.call(undefined);//this->window

// 严格模式下
fn.call();//在严格模式下this->undefined
fn.call(null);// 在严格模式 下this->null
fn.call(undefined);//在严格模式下this->undefined
```

* apply的使用
```
fn.call(想要将this指向哪里, [...args]);
```
**和call的唯一区别是:apply第二个参数接收一个数组**
```javascript
fn.call(obj,100,200);
fn.apply(obj,[100,200]);
```

* bind使用
bind 的区别在于只改变this的指向，而并没有执行,(通俗点讲就是：我把你this改变了，参数传递了，但是不给你结果，你要自己再手动执行一次)。这个方法在IE6～8下不兼容。

**对比：**
```javascript
fn.call(obj,1,2);//->改变this和执行fn函数是一起都完成了
fn.bind(obj,1,2);//->只是改变了fn中的this为obj，并且给fn传递了两个参数值1、2，
                     但是此时并没有把fn这个函数执行
var tempFn=fn.bind(obj,1,2);
tempFn(); //这样才把fn这个函数执行
```

```javascript
  var a ={
        name : "cht",
        fn : function (a,b) {
            console.log( a + b )
        }
    }
  var b = a.fn; // 此时this指向window
  b.bind(a,1,2) // 此时只改变了this，以及传入了参数

  b.bind(a,1,2) // 执行
```
:::warning
**注意：call、apply、bind最牛x，遇到这三个前面的所有都失效。**
:::

### 箭头函数中的this(ES6)

箭头函数的优点： **1.语法简单   2.不绑定this**

```javascript
var obj = {
    birth: 1990,
    getAge: function () {
        var b = this.birth; // 1990
        var fn = function () {
            return new Date().getFullYear() - this.birth; // this指向window或undefined
        };
        return fn();
    }
};
```

**箭头函数没有自己的this，箭头函数的this不是调用的时候决定的，而是在定义的时候处在的对象就是它的this。
换句话说，箭头函数的this看外层的是否有函数，如果有，外层函数的this就是内部箭头函数的this，如果没有，则this是window。**

```html
<button id="btn1">测试箭头函数this_1</button>
    <button id="btn2">测试箭头函数this_2</button>
    <script type="text/javascript">   
        let btn1 = document.getElementById('btn1');
        let obj = {
            name: 'kobe',
            age: 39,
            getName: function () {
                btn1.onclick = () => {
                    console.log(this);//obj
                };
            }
        };
        obj.getName();
    </script>
```