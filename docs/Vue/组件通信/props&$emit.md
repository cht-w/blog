<div align='center' ><font size='70'>父子组件之间的通信</font></div>

--------------

* 父组件A通过绑定的形式 `v-bind` 或者直接传入的方式给子组件B传递数据，子组件B 通过props 进行接收。
* 子组件B通过$emit的形式触发父组件A中的事件，通过事件传递数据。

### 1.父组件向子组件传值
```vue
<!--父组件-->
<template>
<div>
    我是父组件A
    <B :msg="arrayA"></B>  <!--通过v-bind形式向子组件传递数据-->
</div>
</template>
<script>
import B from '../components/B'
export default {
    components:{ B },
    data() {
        return {
            arrayA:['我是' , '父组件'  , '传递'  , '过来的' , '数组']
        }
    },
}
</script>
```

```vue
<!--子组件-->
<template>
    <div>
        我是子组件B
        <ul v-for="(item , index ) in msg" :key="index">
            <li>{{item}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    props:['msg'], // 用来接收父组件传递过来的数据
}
</script>
```
:::tip
总结：父组件通过props向下传递数据给子组件，这里使用的是props的数组的形式，严格讲应该要使用对象的形式标明类型，这里暂时不考虑，以后会专门针对props做深入理解。
:::

### 2.子组件向父组件传值（事件的形式）
* 我们先在父组件A中给子组件B绑定一个事件
* 然后给子组件中的按钮绑定一个事件，用这个事件来触发父组件上的事件，通过这种形式传参
```vue
<!--父组件-->
<template>
    <div>
        我是父组件A 
        <h2>{{title}}</h2>
        <B @changeTitle="changeTitle"></B>  <!-- 在父组件中，给子组件绑定一个changeTitle事件-->
    </div>
</template>
<script>
import B from '../components/B'
export default {
    components:{ B },
    data() {
        return {
            title:"中国"
        }
    },
    methods: {
        changeTitle(val) {
            this.title = val;
        }
    }
}
</script>
```
```vue
<!--子组件-->
<template>
    <div>
        我是子组件B
        <button @click="change">向父组件传值</button>
    </div>
</template>
<script>
export default {
    methods:{
        change() {
            this.$emit('changeTitle' , '崛起');  // 子组件通过 this.$emit(事件名 , 参数) 向父组件传值
        }
    }
}
</script>
```
**总结：子组件通过触发父组件绑定的事件的形式向父组件传递参数，this.$emit(事件名 , 参数)。**
