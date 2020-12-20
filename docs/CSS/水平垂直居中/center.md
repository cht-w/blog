<div align='center' ><font size='70'>水平垂直居中</font></div>

-------


## 1.行内元素居中


* 行内元素水平居中

给父容器设置：
```css
 text-align: center;
```

* 行内元素垂直居中

让**文字的行高** 等于 **盒子的高度**，可以让单行文本垂直居中。比如：

```css
.box {
    height: 20px;
    line-height: 20px;
}
```

## 2.块级元素水平垂直居中

在 CSS 中对元素进行水平居中是非常简单的：

* 如果它是一个行内元素，就对它的父容器应用 `text-align: center`；

* 如果它是一个块级元素，就对它自身应用 `margin: auto`或者 `margin: 0 auto`。

**1.绝对定位+margin**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        .father{
            position: relative;
            min-height: 500px;
            background: pink;
        }
        .son {
            position: absolute;
            width: 200px;
            height: 100px;
            background: red;
            top: 50%;
            left: 50%;
            margin-top: -50px;
            margin-left: -100px;
        }
    </style>
</head>
<body>
    <div class="father">
        <div class="son">子元素的内容</div>
    </div>
    <script></script>
</body>
</html>
```
**代码解释**：

先让子元素的左上角居中，然后向上移动宽度的一半(50px)，就达到了垂直居中的效果；水平居中的原理类似。


**不足之处**：

要求指定子元素的宽高，才能写出 `margin-top` 和 `margin-left` 的属性值。但是，在通常情况下，对那些需要居中的元素来说，其宽高往往是由其内容来决定的，不建议固定宽高。


**2.绝对定位+translate**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        .father{
            position: relative;
            min-height: 500px;
            background: pink;
        }
        .son {
            position: absolute;
            background: red;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    </style>
</head>
<body>
    <div class="father">
        <div class="son">子元素的内容</div>
    </div>
</body>
</html>
```
**代码解释：**

在没有指定子元素宽高的情况下，也能让其在父容器中垂直居中。因为 translate() 函数中使用百分比值时，是以这个元素自身的宽度和高度为基准进行换算和移动的


**3.flex布局**

这种方式最简单

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        .father{
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: pink;
        }
        .son {
            background: red;
        }
    </style>
</head>
<body>
    <div class="father">
        <div class="son">子元素的内容</div>
    </div>
</body>
</html>
```

**4.flex布局+margin**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        .father{
            display: flex;
            min-height: 100vh;
            background: pink;
        }
        .son {
            margin: auto;
            background: red;
        }
    </style>
</head>
<body>
    <div class="father">
        <div class="son">子元素的内容，想水平垂直居中</div>
        <div class="son2">这个元素不想水平垂直居中</div>
    </div>
</body>
</html>

```
