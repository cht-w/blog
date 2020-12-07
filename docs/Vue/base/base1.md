<div align='center' ><font size='70'>脚手架创建项目</font></div>

------

### 环境安装

**1.Node 环境（官网下载，安装即可）**

[Node安装](https://nodejs.org/en/)

**2.全局安装vue-cli**
* 版本查看 vue-V 
* 安装2.x版本: cnpm i vue-cli -g
* 安装3.x版本: cnpm  i @vue/cli -g   

:::warning
注意：vue-cli2.x和vue-cli3.x安装命令是不同的。创建项目的命令也不相同。 vue-cli3.x支持可视化面板配置项目。

安装指定版本号：

2.x命令:npm install -g vue-cli@版本号    

3.x命令:npm install -g @vue/cli@版本号安装指定版本

:::

### 创建项目

**创建基于webpack模板的项目:**

* 运行命令: vue init webpack vue-demo

```javascript
    //执行上述命令后会下载模板，然后有可供选择项具体如下：

	Project name (vue-demo)   //  项目名称 （回车默认）

	Project description (A Vue.js project)  //项目描述
	
	Author // 开发者
	
	Vue build (Use arrow keys) //  打包方式 （回车默认选择第一个）
	Runtime + Compiler: recommended for most users   // 运行时+编译器：推荐给大多数用户
	Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allowed in .vue files - render functions are required elsewhere
	//仅运行时：最小值为6KB，最小值为6KB，但模板（或任何特定于Vue的HTML）仅允许在.Vue文件中使用-其他地方需要呈现函数

	Install vue-router? // 是否 安装路由
	
	
	Use ESLint to lint your code? // 是否使用ESLint来规范代码

	Set up unit tests ? // 设置单元测试
	
	Should we run `npm install` for you after the project has been created? (recommended) (Use arrow keys)
	Yes, use NPM    推荐使用npm
	Yes, use Yarn

	// 选项结束后，就会下载模板 模板下载结束后 会提示：
		To get started:

		  cd vue-demo
		  npm run dev
	//意思是 cd vue-demo 进入刚刚我们创建的项目 ， 然后运行使用 npm run dev 启动命令
	
	//启动后我们就可以看到一个项目自带的模板，至此项目搭建运行成功。
```
* 进入文件夹 cd vue-demo
* 启动项目 cnpm run dev

**展示**

* 浏览器打开: http://localhost:8080/
* 展示默认页面就是项目创建成功。

**扩展**
:::tip
    一个项目用到的东西是多种多样的，例如 scss或less ，vuex ， UI框架，swiper插件 ， 网络请求库等，按照官网 运行命令安装即可。
    后续也会正对可扩性进行新增。
:::












