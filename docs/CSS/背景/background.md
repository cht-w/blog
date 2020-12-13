<div align='center' ><font size='70'>背景background</font></div>

-----

## 1.background-color

**设置背景颜色**

* 颜色的表示方法有三种：单词、rgb表示法、十六进制表示法。

```css
background-color: red;
background-color: rgb(255,0,0);
background-color: #ff0000;
```
* rgba 
```css
<!--最后一个表示透明度-->
background-color: rgba(0, 0, 255, 0.3);
```
* 透明度的其他表示方式：
```css
<!--会将整个盒子及子盒子设置透明度。也就是说，当盒子设置半透明的时候，会影响里面的子盒子。-->
opacity: 0.3;  

<!--可以单独设置透明度，但设置的是完全透明（不可调节透明度）。-->
background: transparent; 

```

## 2.background-repeat

**设置背景图片是否重复及如何重复，不加这个属性时：（即默认时）（背景图片会被平铺满）。**

**属性值：**
*  `no-repeat`（不要平铺）
*  `repeat-x`（横向平铺）
*  `repeat-y`（纵向平铺）

## 3.background-position

**背景定位**

**在描述属性值的时候，有两种方式：用像素描述、用单词描述**

* 像素描述
```css
background-position:向右偏移量 向下偏移量;
background-position:100px 200px;
```
* 单词描述
```css
background-position: 描述左右的词 描述上下的词;
background-position: left top;
```
* 描述左右的词：left、center、right
* 描述上下的词：top 、center、bottom

## 4.background-attachment 

**设置背景图片是否固定**

**属性值：**

- `fixed`（背景就会被固定住，不会被滚动条滚走）。
- `scroll`（与fixed属性相反，默认属性）。

## 5.background(综合)

**多个属性写在一起**

```css
background:red url(1.jpg) no-repeat 100px 100px fixed;

// 等价于
background-color:red;
background-image:url(1.jpg);
background-repeat:no-repeat;
background-position:100px 100px;
background-attachment:fixed;
```

## 6.background-size

**设置背景尺寸**

```css
	/* 宽、高的具体数值 */
	background-size: 500px 500px;

	/* 宽高的百分比（相对于容器的大小） */
	background-size: 50% 50%;   // 如果两个属性值相同，可以简写成：background-size: 50%;

	background-size: 100% auto;  //这个属性可以自己试验一下。

	/* cover：图片始终填充满容器，且保证长宽比不变。图片如果有超出部分，则超出部分会被隐藏。 */
	background-size: cover;

	/* contain：将图片完整地显示在容器中，且保证长宽比不变。可能会导致容器的部分区域为空白。  */
	background-size: contain;
```
**cover和conatin区别：**
- `cover`：图片始终**填充满**容器，且保证**长宽比不变**。图片如果有超出部分，则超出部分会被隐藏。
- `contain`：将图片**完整地**显示在容器中，且保证**长宽比不变**。可能会导致容器的部分区域留白。

## 7.background-origin

**控制背景从什么地方开始显示。**

```css
/* 从 padding-box 内边距开始显示背景图 */
	background-origin: padding-box;  //默认值

	/* 从 border-box 边框开始显示背景图  */
	background-origin: border-box;

	/* 从 content-box 内容区域开始显示背景图  */
	background-origin: content-box;
```
## 8.background-clip

**设置元素的背景（背景图片或颜色）是否延伸到边框下面**

```css
/* 超出的部分，将裁剪掉 */
background-clip: content-box;  
```
**属性值：**

- `border-box` 超出 border-box 的部分，将裁剪掉
- `padding-box` 超出 padding-box 的部分，将裁剪掉
- `content-box` 超出 content-box 的部分，将裁剪掉

## 9.background-image

**可以是背景图也可以是渐变色**

```css
    // 线性渐变
    background-image: linear-gradient(方向, 起始颜色, 终止颜色);
    background-image: linear-gradient(to right, yellow, green);
    
    // 径向渐变
    background-image: radial-gradient(辐射的半径大小, 中心的位置, 起始颜色, 终止颜色);
    background-image: radial-gradient(100px at center,yellow ,green);

    background-image: url(1.png)
```
**方向可以是：`to left`、`to right`、`to top`、`to bottom`、角度`30deg`（指的是顺时针方向30°）。**