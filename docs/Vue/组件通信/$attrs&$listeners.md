<div align='center'><font size='70'>多级嵌套组件通信</font></div>

------

### 反思： 
* 多级嵌套组件需要传递数据，通常使用vuex。但是如果只是传递参数，并没有做中间的处理，使用vuex就显得多余。
* Vue2.4版本提供了另一种方式 $attrs & $listenters 

### 解释：

:::tip
**$attrs:** 包含了父作用域中不被 prop 所识别 (且获取) 的特性绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，
这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件。
:::


:::tip
**$listeners:** 包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件。
:::

**对于上面两个官方解释比较抽象，我的个人理解如下：**

* 下面两种情况都是基于嵌套组件来讲的: father组件里嵌套son组件，son组件里嵌套 grandson ，形成多级嵌套。
* $attrs: 父组件中通过v-bind绑定到子组件上的数据，在子组件中如果没有用props接收这些数据，则会将数据保存在子组件的$attrs中,子组件可以通过 v-bind的形式
继续传递给孙子组件。这样，父组件中的数据，就可以向下有选择性的发布，子组件们可以灵活的订阅。**注意：** class和style除外，是指:样式绑定传递给son组件的数据，不会向下传递。
* $listeners: 父组件中通过v-on绑定到子组件上所有事件，在子组件中都会保存在$listeners中，($listeners相当于父组件上的事件集合),子组件可以将$listeners通过v-on的形式
继续传递给孙子组件。孙子组件可以通过this.$emit()的方式触发事件。**注意：**父组件绑定到子组件上的事件是用.native修饰的不能传递。

### 代码展示：

```vue
<!--father 组件-->
<template>
  <div>
    <el-card>
      <Son :name="name" :age="age" :job="job" :style="{width:sty.width+'px',height:sty.height+'px'}" @click="myName" @fatherHandle="updateChange"></Son>
    </el-card>
  </div>
</template>
<script>
import Son from './son'
import InheriAttrs from './inheriAttrs'
export default {
  components:{ Son , InheriAttrs },
  data() {
    return {
      name:'cht',
      age:'23',
      job:'IT',
      sty:{
        height:200,
        width:800
      },
    }
  },
  methods:{
    updateChange(val) {
      this.name = val;
    },
    // 测试
    myName() {
      console.log('1')
    },
  }
}
</script>
```
**说明：**
* 父组件中 import 子组件 son
* 给子组件传递参数 name age job 绑定样式:style
* 给子组件绑定两个事件 一个是自定义事件 fatherHandle ，click事件。

```vue
<!--son 组件-->
<template>
  <div>
    <p class="bg">son组件拿到name----------{{name}}</p>
    <!-- 通过 v-bind 将 this.$attrs向孙子组件传递 ，  通过v-on将this.$listeners向孙子组件传递-->
    <Grandson v-bind="$attrs" v-on="$listeners"></Grandson>   
  </div>
</template>
<script>
import Grandson from './grandson'
export default {
  props:['name'], // 子组件中使用props接收父组件传递的数据 name , age 和 job虽然传递了，但是并没有接收
  components:{ Grandson },
  data(){
    return {}
  },
  methods:{},
  mounted() {
    console.log(this.$attrs);  // 加载的时候打印this.$attrs,两个未被接收的数据打印出来了。
    console.log("listeners==========",this.$listeners); // 加载时打印this.$listeners  , 父组件绑定的所有事件被打印出来
  }
}
</script>
```
**说明：**
* son组件通过没有接收的从父组件传递下来的数据，保存在子组件实例上的$attrs中
* 通过v-bind继续向孙子组件传递
* father组件绑定到son组件上的事件，都被保存在son组件实例上的$listeners中
* 通过v-on="$listeners"向孙子组件传递

```vue
<template>
  <div>
    <p class="bg">grandson组件拿到age----------{{age}}</p>
    <el-button type="primary" @click="changeName">修改father组件name</el-button>
  </div>
</template>
<script>
export default {
  props:['age'], // 因为 son 组件传递了$attrs,包含age，孙子组件可以拿到age
  data() {
    return {}
  },
  methods:{
    changeName() {
      this.$emit("fatherHandle",'hhhhhhh');  // 触发father 组件上的事件
    },
  }
}
</script>
```
:::tip
简单来说：$attrs与$listeners 是两个对象，$attrs 里存放的是父组件中绑定的非 Props 属性，$listeners里存放的是父组件中绑定的非原生事件。
:::