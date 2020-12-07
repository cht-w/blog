<div align='center' ><font size='70'>Vuex-状态集</font></div>

------

## 介绍
:::tip
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
:::
**个人理解:**

* 一个用于存放全局共享数据的仓库，仓库有专属的管理员，按照一定的规则处理存放在这个仓库的数据。实现：数据的共享。
* state:唯一的数据源。
* getters:getters 可以衍生出新的状态。
* mutations:更改vuex的store中的状态的唯一方法是提交 mutaition ， mutation必须是同步操作。		
* actions:action提交mutation，action可以包含任何异步操作。
* 操作步骤:当组件中的状态发生变化的时候，通过dispatch函数提交到Action,Action在通过commit函数提交到Mutations，此时状态发生改变都会实时渲染组件。

## 安装命令

* cnpm i vuex --save =>安装到运行依赖

## 规范

1. 在根目录下新建 store文件夹
2. 在store中新建 index.js------------作为入口文件
3. 在store中新建 actions.js----------提交mutation
4. 在store中新建 getters.js----------派发state状态值，通过计算属性获取值
5. 在store中新建 state.js------------存放唯一数据源及所有的状态
6. 在store中新建 mutations.js--------提交state的唯一状态

## Vuex注册

**1.store文件夹下:**
```javascript
    // store 文件夹下的 index.js
	import Vue from 'vue' 
	import Vuex from 'vuex'
	Vue.use(Vuex);  // 别忘记 Vue.use否则不生效

    import state from './state'
    import mutations from './mutations'
	import actions from './actions'
	import getters from './getters'

	export default new Vuex.store({
		state ,
		mutations,
		actions,
		getters
	})
```
:::tip
分模块,各个部分的功能更加清晰。最后都集中导入到index.js中，暴露出去。
:::
**2.全局入口文件 main.js**
```javascript
    // 全局入口文件 main.js
	import Vue from 'vue'
	import App from './App'
	import store from './store'   // 导入store 
	import router from './router'

	Vue.config.productionTip = false

	new Vue({
	    el: '#app',
		router,
		store,  // 注册到根实例上
	    components: { App },
		template: '<App/>'
	})
```
## 访问state两种方式：
* this.$store.state.xxx
* mapState  映射为computed计算属性 

```javascript
    // 方式一 this.$store.state
    this.$store.state.username 
    // 方式二使用 mapState  映射为computed计算属性 
    // 1. 从vuex中按需导入 mapState 函数。
    // 2. 通过mapStat函数，将当前组件需要的全局数据，映射为当前组件的computed计算属性。
		
    <div>{{count}}</div>			
	import { mapState }  from 'vuex';
    computed:{
        ...mapState([ 'count' ])
    }
```
## Getters
* Getter 用于对Store中的数据进行加工处理形成新的数据,类似于计算属性。
* Getter 可以对Store中已有的数据加工处理之后形成新的数据，类似于Vue中的计算属性。
* Store 中的数据发生变化，Getter的数据也会跟着变化。

**操作:**
```javascript
    // 方法一:
        this.$store.getters.名称
				
	// 方法二:
	// 1. 从vuex 中按需导入 mapGetter			
	import { mapGetter } from 'vuex'
				
	// 2. 将 getters 中的方法映射成  组件中的computed中的方法		
    <div>{{showNum}}</div>
	computed:{
        ...mapGetter(['showNum'])
    }
```
				
## Mutations
   		
* 只能通过 mutation 变更Store数据，不可以直接操作Store中的数据。
   			
* 通过这种方式虽然操作起来繁琐一些，但是可以集中监测所有数据变化。

* mutations中的方法， 接收两个参数: 1.state 2.参数。

* 触发 mutations中的函数,this.$store.commit()。
   			
* mutaition的函数中，不能书写异步代码。

:::warning
记住一句话： Mutation用于变更Store中的数据。牢记： 只有Mutation中的函数才有权力修改state中的值。
:::

**操作1:**

```javascript
    // 1.在mutations 中声明方法, 方法有两个参数 1.state数据 2，参数
    mutations:{
        add(state) {
    		state.count++;
    	}
        // 第一个参数
        addN(state , step) {
            state.count+=step ; 
        }	
    }
    //	2. 在组件绑定的事件上， 触发 mutations上的方法   this.$store.commit				
    methods:{
        handle() {
            // 触发 mutations 的第一种方式
      	    this.$store.commit("add");
      	}
    }
```

**操作2:**
1. 从vuex 中按需导入 mapMutations 函数。  import mapMutations from 'vuex'		
2. 将指定的 mutations 函数，映射为当前组件的 methods 方法。

```javascript
    import mapMutations from 'vuex'
    methods:{
        ...mapMutations(['add' , 'addN']);		
    	handle() {
           this.add();
           // this.addN(3)
        }
    }
```

## Actions 

* 用于处理异步任务   
* 如果通过异步操作变更数据，必须通过Action，而不能使用mutation
* 但是在Action中还是要触发mutation的方式间接变更数据。
* Action函数接受一个与 store 实例具有相同方法和属性的 context 对象。
* 调用 context.commit 提交一个 mutation。
* 通过 context.state 和 context.getters 来获取 state 和 getters
* 触发 actions里的方法 this.$store.dispatch()
 			
:::warning
牢记： 在 Action中 不能直接修改state中的值，必须通过 context.commit() 来触发某个 mutaition 中的函数。
:::

**操作1:**

```javascript
	// 1. 在 actions 中 定义异步方法			
	actions : {
        asyncAdd(context){
            setTimeout(()=> {
                context.commit('add');  // 异步操作只能在 action中执行
             }, 1000)
        }
    }
    // 2. 在 组件中 触发actions上的方法   使用:this.$store.dispatch('asyncAdd')			
	addBtn2() {
        this.$store.dispatch('asyncAdd');
    }
    // 同样可以传递参数，和上面类似
```
**操作2:**
```javascript

	// 1. 从 vuex 中按需导入 mapActions 			
		import { mapActions } from 'vuex'		
    // 2. 将actions中的方法映射成当前组件 methods 中的方法	
        methods:{
            ...mapActions(['asyncAdd']);
            handle() {
                this.asyncAdd();
            }
        }       
```


