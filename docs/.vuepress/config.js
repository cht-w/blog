module.exports = {
    title: '个人笔记',
    description: '用心整理记录前端知识细节',
    search:true, // 开启搜索功能默认
    searchMaxSuggestions: 8, // 搜索显示条数
    smoothScroll: true, // 开启页面滚动效果
    themeConfig: {
        // 添加导航栏
        nav: [
            { text: '主页', link: '/' },
            { text:'指南', link:'/Guide/'},
            {
                text:'前端',
                items:[
                    { text:'CSS' , link:'/CSS/'},
                    { text:'JS' , link:'/JS/'},
                    { text:'Webpack' , link:'/Webpack/'},
                    { text:'Git' , link:'/Git/'},
                    { text:'Vue', link:'/Vue/'}
                ]
            }
        ],
        // 为以下路由添加左侧边栏
        sidebar: {
            '/CSS/':[
                {
                    title:'CSS',
                    collapsable:false,
                    children:[
                        { title:'浮动' , path:'/CSS/浮动/float'},
                        { title:'定位' , path:'/CSS/定位/position'}
                    ]
                },

            ],
            '/JS/': [
                {
                    title:'基础',
                    collapsable: false,
                    children:[
                        { title:'js栈内存和堆内存', path:'/JS/base/base01'},
                        { title:'js语法', path:'/JS/base/base02'},
                        { title:'js运算符', path:'/JS/base/base03'},
                        { title:'js数据类型', path:'/JS/base/base04'},
                    ]
                },
                {
                    title:'函数',
                    collapsable: false,
                    children:[
                        { title:'函数声明', path:'/JS/Function/函数声明'},
                        { title:'参数及返回值',path:'/JS/Function/函数参数'},
                        { title:'立即执行回调递归', path:'/JS/Function/立即执行回调递归'},
                        { title:'预编译', path:'/JS/Function/预编译'},
                        { title:'作用域', path:'/JS/Function/作用域'},
                        { title:'作用域链', path:'/JS/Function/作用域链'},
                        { title:'闭包', path:'/JS/Function/闭包'},
                        { title:'this指向问题', path:'/JS/Function/this指向问题'},
                        { title:'call,apply,bind', path:'/JS/Function/改变this'}
                    ]
                },
                {
                    title:'对象',
                    collapsable: false,
                    children:[
                        { title:'对象创建及构造函数', path:'/JS/Object/对象的创建及构造函数'},
                        { title:'对象基本操作',path:'/JS/Object/methods'},
                        { title:'深浅拷贝', path:'/JS/Object/深浅拷贝'}
                    ]
                },
                {
                    title:'DOM',
                    collapsable: false,
                    children: [
                        { title:'文档加载', path:'/JS/DOM/文档加载'},
                        { title:'document对象', path:'/JS/DOM/document'},
                        { title:'节点关系', path:'/JS/DOM/节点关系及操作'},
                        { title:'节点操作',path:'/JS/DOM/节点操作'}
                    ]
                },
                {
                    title:'Event',
                    collapsable: false,
                    children:[
                        { title:'事件级别', path:'/JS/Event/事件级别'}
                    ]
                },
                {
                    title:'Ajax',
                    collapsable: false,
                    children:[
                        { title: "Ajax入门", path:'/JS/Ajax/ajax入门'},
                        { title:'网络请求封装', path:'/JS/Ajax/封装'}
                    ]
                },
                {
                    title:'数组方法',
                    collapsable: false,
                    path:'/JS/Array/methods'
                },
                {
                    title:'字符串方法',
                    collapsable: false,
                    path:'/JS/String/methods'
                }
            ],
            '/Vue/': [
                {
                    title:'Vue基础',
                    collapsable:false,
                    children: [
                        { title:'项目创建',path:'/Vue/base/base1'},
                        { title:'指令系统一',path:'/Vue/base/base2'},
                        { title:'指令系统二',path:'/Vue/base/base3'}
                    ]
                },
                {
                    title:'组件通信',
                    collapsable: false,
                    children:[
                        { title:'父子组件通信', path:'/Vue/组件通信/props&$emit'},
                        { title:'跨组件通信' , path:'/Vue/组件通信/$emit&$on'},
                        { title:'多级嵌套组件通信', path:'/Vue/组件通信/$attrs&$listeners'},
                        { title:'$refs & $root' , path:'/Vue/组件通信/$refs&$root'},
                        { title:'Vuex-状态集' , path:'/Vue/组件通信/vuex' }
                    ]
                },
                {
                    title:'路由相关',
                    collapsable: false,
                    children:[
                        { title:'路由基础' , path:'/Vue/router/基础.md'},
                        { title:'路由传参' , path:'/Vue/router/传参.md'},
                        { title:'路由懒加载' , path:'/Vue/router/路由懒加载.md'}
                    ]
                }
            ],
            '/Webpack/': [
                {
                    title:'webpack介绍',
                    collapsable:false,
                    path:'/Webpack/介绍'
                },
                {
                    title:'五大核心',
                    collapsable:false,
                    path:'/Webpack/五大核心'
                },
                {
                    title:'初体验',
                    collapsable:false,
                    path:'/Webpack/初体验'
                },
                {
                    title:'打包样式资源',
                    collapsable:false,
                    path:'/Webpack/打包样式资源'
                },
                {
                    title:'打包图片资源',
                    collapsable:false,
                    path:'/Webpack/打包图片资源'
                },
                {
                    title:'打包html文件',
                    collapsable:false,
                    path:'/Webpack/打包html文件'
                },
                {
                    title:'打包其他文件',
                    collapsable:false,
                    path:'/Webpack/打包其他文件'
                },
                {
                    title:'devServer',
                    collapsable:false,
                    path:'/Webpack/devServer'
                }
               
            ]

            // 下面注释的是：仅仅配置基础侧边栏，上面是导航栏联动侧边栏。
            // '/': [
            //     {
            //         title: 'js基础',
            //         collapsable: true,
            //         children: [
            //             { title: '1.堆与栈', path: '/base/base01' },
            //             { title: '2.基本语法', path: '/base/base02' },
            //             { title: '3.JS运算符', path: '/base/base03' },
            //             { title: '4.JS数据类型', path: '/base/base04' },
            //         ]
            //     },
            //     {
            //         title:'字符串',
            //         collapsable: true,
            //         children: [
            //             {title:'1.字符串方法' , path: '/String/methods'}
            //         ]
            //     },
            //     {
            //         title:'数组',
            //         collapsable: true,
            //         children: [
            //             {title:'1.数组方法' , path: '/Array/methods'}
            //         ]
            //     },
            //     {
            //       title:'对象',
            //       collapsable: true,
            //       children: [
            //
            //       ]
            //     },
            //     {
            //         title:'函数',
            //         collapsable: true,
            //         children:[
            //             {title:'1.函数声明' , path:'/Function/函数声明'},
            //             {title:'2.参数及返回值', path:'/Function/参数及返回值'}
            //         ]
            //     },
            //     {
            //         title:'DOM',
            //         collapsable: true,
            //         children:[
            //             { title:'1.节点对象' , path:'/DOM/节点对象'}
            //         ]
            //     },
            //     {
            //         title:'2.事件',
            //         collapsable: true,
            //         children: [
            //
            //         ]
            //     },
            //     {
            //         title: '网络请求',
            //         collapsable: true,
            //         children: [
            //
            //         ]
            //     }
            // ],
        },
        sidebarDepth: 2,//左侧导航显示的层级
        lastUpdated: 'Last Updated'
    }
}
