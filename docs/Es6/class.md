<div align='center' ><font size='70'>class</font></div>

--------

## 1. ES5类的实现

```js
  // 构造函数，也叫构造器。实例对象的constructor属性指向这个构造器
    function Person (name , age) {
        // 实例属性
        this.name = name;
        this.age = age;
        // 实例方法
        this.say = function (){
            console.log(this.name, this.age);
        }

        // 静态属性
        Person.color = 'yellow';
        Person.like = 'eat';
        // 静态方法
        Person.walk = function() {
            console.log('walk');
        }
    }
    // 通过 new 关键字可以创建一个实例,实例享有构造函数上的实例属性和方法
    let p = new Person('cht' , 10);
    p.say(); // cht , 10
    console.log(p);  // age:10 , name:cht

    // 静态属性只能通过 对象.的方式调用，并且静态属性不能被实例对象所共享

    console.log(Person.color, Person.like); // yellow eat
    Person.walk(); // walk

    // p.walk(); // Uncaught TypeError: p.walk is not a function
    console.log(p.color, p.like); // undefined undefined
```

**个人理解：**


ES5中没有直接声明类的方法，但是我们可以通过构造函数的方式创建一个类，通过new一个类得到一个实例对象，实例对象能够享有使用类上面的实例属性和方法。

## 2.ES5实现简单的继承

**ES5实现简单的继承步骤：**

* 在子类中借助 call或 apply 借用父类的构造函数。
* 将子类的原型对象设置为父类的实例对象。

```js
// 父类
function Person(myName , myAge) {
    this.name = myName;
    this.age = myAge;
    this.sayName = function () {
        console.log(this.name, this.age);
    }
}
// 给父类的原型对象添加方法
Person.prototype.sing = function () {
    console.log("I like sing");
}

// 父类的实例对象
let p = new Person('cht' , 18);
p.sayName();
function Son(myName , myAge , myNumber) {
    // 1. 在子类中 通过 call 或者 apply 方法借用父类的构造函数
    Person.call(this , myName , myAge);
    this.number = myNumber;
    this.play = function () {
        console.log('hahahah');
    }
}

// 2. 将子类的原型对象设置为 父类的实例对象
Son.prototype = new Person();
Son.prototype.constructor  = Son ;
Son.prototype.get = function () {
    console.log('get money');
}

// 子类的实例对象
let son1 = new Son('hw' , 20 , 100);
son1.sayName();
son1.get(); // 子类的实例对象继承父类上的所有实例方法，也包括父类原型上的方法
```

## 3.ES6实现类
```js
 class Person {
        // 实例属性
        constructor(name , age) {
            this.name = name;
            this.age = age;
            this.say = function(){
                console.log(this.name, this.age);
            }
        }
        // 静态属性
        // static color = 'red';  // 不符合标准
        // static like = 'eat';   // 符合标准
        static walk = function () {
            console.log('walk');
        }
        // 添加到类的原型上
        sing() {
            console.log("I am sing");
        }
    }
    Person. color = 'red'
    let p = new Person('cht' , 10);
    console.log(p);

    Person.walk(); // walk
    console.log(Person.color, Person.like); // red eat
```

**理解及注意点：**

* 1. 在 ES6 中添加实例属性 必须在 构造器constructor中添加，每次通过new 创建的对象都会调用构造器方法，将参数传递给构造器。 （也可以直接在打括号中添加但是有兼容性问题）。

* 2. 使用static 定义静态方法是符合ES6标准的，而使用static定义静态属性是不符合标准的（大部分浏览器中不支持：火狐等）。

* 3. 直接在大括号中添加方法，是将方法添加到类的原型上


## 4.ES6实现继承

* 1. 使用extends  
* 2. 子类中 通过 super 借用父类构造函数

```js
  class Person {
        constructor(myName , myAge) {
            this.name = myName ;
            this.age = myAge;
        }
        say() {
            console.log(this.name, this.age);
        }
    }
    // 1. 使用extends实现继承
    class Son extends Person {
        constructor(myName  , myAge , myNumber) {
            // 2. 借用父类构造函数， super 相当于 call/ apply
            super(myName , myAge);
            this.number = myNumber;
        }
        play() {
            console.log(this.number);
        }
    }

    // 创建一个子类得实例对象
    let son1 = new Son('cht' , 10 , 12345);
    son1.say();  // 调用 son1 --->  Son ---> Person
    son1.play();



```
