<div align='center' ><font size='70'>跨组件通信-事件中心</font></div>

--------

### 反思：

* 当我们想要实现父子组件之间的通信的时候，是非常方便的。如果是跨组件之间的通信呢？
* 这篇记录的是中央事件总线的方式实现兄弟，父子，跨组件之间的通信，项目比较大建议使用vuex。
* 优点：轻量，巧妙，跨组件通信。

### 1.新建一个.js文件,创建eventBus

* 在eventbus中创建一个vue的空的实例对象，并导出，做为事件中心。

```javascript
    // eventBus.js
    import Vue from 'vue'
    export default new Vue()        
```
### 2. 在需要使用事件总线的组件中引入 eventBus.js文件
```javascript
import EventBus from '../../utils/eventbus'
```

**下面是模拟爷爷组件和孙子组件之间的通信，爷爷组件（father.vue）, 孙子组件（grandson.vue）**

**3. 孙子组件 grandson.vue**

```vue
<template>
    <el-button type="primary" @click="changeDate">触发爷爷组件上的方法</el-button>
</template>
<script> 
import EventBus from '../../utils/eventbus'
export default {
  methods:{
      changeDate() {
          // 传参
          EventBus.$emit('change', 100);
          // 不传参
          //EventBus.$emit('change');
      } 
 }
}
</script>
```
:::tip
这里我们在孙子组件中每次点击，都会在EventBus中触发这个名为’changeDate’的事件，并将点击事件的参数 100 顺着事件传递出去。当然我们也可以通过 事件对象（event.target）传递事件信息。
接着，我们要在父组件中的created()钩子中调用EventBus监听这个事件，并接收参数使用。
:::

**4. 爷爷组件 father.vue**

```vue
<template>
  <p>money:{{money}}元</p>
</template>
<script> 
import EventBus from '../../utils/eventbus'
export default {
   data() {
     return { money:1}
   },
   created() {
      EventBus.$on('change',(num)=> {
          console.log("这是孙子组件通过EventBus触发的事件")
          this.money += num;
      })
    },
}
</script>
```
:::tip
eventBus的使用还是非常便捷的,也很好理解，找一个中间人负责管理我们的所有事件，通过中间人实现全局的通信。但是如果是中大型项目，通信比较复杂，最好使用vuex。
:::


