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
                    { text:'Webpack' , link:'/Webpack/'}
                ]
            }
        ],
        // 为以下路由添加左侧边栏
        sidebar: {
            '/JS/': [
                {
                    title:'基础',
                    collapsable: true,
                    children:[
                        { title:'js栈内存和堆内存', path:'/JS/base/base01'},
                        { title:'js语法', path:'/JS/base/base02'},
                        { title:'js运算符', path:'/JS/base/base03'},
                        { title:'js数据类型', path:'/JS/base/base04'},
                    ]
                },
                {
                    title:'字符串',
                    collapsable: true,
                    path:'/JS/String/methods'
                },
                {
                    title:'数组',
                    collapsable: true,
                    path:'/JS/Array/methods'
                },
                {
                    title:'对象',
                    collapsable: true,
                    path:'/JS/Object/methods'
                },
                {
                    title:'函数',
                    collapsable: true,
                    children:[
                        { title:'函数声明', path:'/JS/Function/函数声明'},
                        { title:'参数及返回值',path:'/JS/Function/参数及返回值'}
                    ]
                },
                {
                    title:'DOM',
                    collapsable: true,
                    children: [
                        { title:'节点对象', path:'/JS/DOM/methods'}
                    ]
                },
                {
                    title:'Event',
                    collapsable: true,
                    children:[
                        { title:'事件1', path:'/JS/Event/a'}
                    ]
                },
                {
                    title:'Ajax',
                    collapsable: true,
                    children:[
                        { title:'ajax', path:'/JS/Ajax/a'}
                    ]
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
        sidebarDepth: 1,//左侧导航显示的层级
        lastUpdated: 'Last Updated'
    }
}
