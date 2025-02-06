export const sidebar = {
    // ===================前端=====================

// **************************html***********************************
    '/frontend/html/': [
        {
            text: '环境安装',
            items: [
                { text: '学习说明', link: '/frontend/html/index' },
                { text: '软件安装', link: '/frontend/html/install' },
            ],
        },
        {
            text: 'HTML基础',
            items: [
                { text: '基础标签', link: '/frontend/html/html基础/01基础标签' },
                { text: '排版标签', link: '/frontend/html/html基础/02排版标签' },
                { text: '表格标签', link: '/frontend/html/html基础/03表格标签' },
                { text: '列表标签', link: '/frontend/html/html基础/04列表标签' },
                { text: '表单标签', link: '/frontend/html/html基础/05表单标签' },
            ],
        },
        {
            text: 'CSS基础',
            items: [
                { text: '基础标签', link: '/frontend/html/index' },
                { text: '排版标签', link: '/frontend/html/indexc' },
                { text: '排版标签', link: '/frontend/html/indexc' },

            ],
        },
    ],
// **************************JavaScript***********************************
    '/frontend/js': [
        {
            text: 'JavaScript',
            items: [
                // {text: '&quot;CSS&quot;', link: '/frontend/html/indexc'},
                { text: '&quot;HTML&quot;', link: '/frontend/js/index' },
                { text: '&quot;CSS&quot;', link: '/frontend/js/indexc' },
            ],
        },
        {
            text: '&quot;99&quot;',
            collapsible: true, // 启用了折叠功能
            collapsed: true,   // 初始状态下是折叠
            items: [
                // {text: '&quot;CSS&quot;', link: '/frontend/html/indexc'},
                { text: '&quot;HTML&quot;', link: '/frontend/html/index' },
                { text: '&quot;CSS&quot;', link: '/frontend/html/indexc' },
            ],
        },
    ],

// **************************vue2***********************************

    // '/frontend/vue2/': [
    //     {
    //         text: '环境安装',
    //         items: [
    //             { text: '学习说明', link: '/frontend/vue2/index' },
    //             // {text: 'html介绍', link: '/frontend/html/indexc'},
    //         ],
    //     },
        
    // ],

// **************************vue3***********************************

    '/frontend/vue3/': [
        {
            text: '环境搭建',
            items: [
                { text: 'Vue介绍', link: '/frontend/vue3/index' },
                { text: '环境搭建', link: '/frontend/vue3/环境搭建/index' },
                // {text: 'html介绍', link: '/frontend/html/indexc'},
            ],
        },
        {
            text: '创建方法',
            items: [
                { text: '创建项目', link: '/frontend/vue3/创建项目/创建项目' },
                { text: '项目目录', link: '/frontend/vue3/创建项目/项目目录' },
                { text: '基本使用', link: '/frontend/vue3/创建项目/基本使用' },
            ],
        },
        {
            text: '教程基础',
            items: [
                { text: 'APi风格', link: '/frontend/vue3/教程基础/01api风格' },
                { text: '模板语法', link: '/frontend/vue3/教程基础/02模板语法' },
                { text: 'Vue指令', link: '/frontend/vue3/教程基础/03指令' },
                { text: '侦听器', link: '/frontend/vue3/教程基础/04侦听器' },
                { text: '组件', link: '/frontend/vue3/教程基础/05组件' },
                { text: '模板引入', link: '/frontend/vue3/教程基础/06模板引入' },
                { text: '路由', link: '/frontend/vue3/教程基础/07路由' },
                { text: 'vuex状态管理', link: '/frontend/vue3/教程基础/08vuex状态管理' },
                { text: 'axios网络请求库', link: '/frontend/vue3/教程基础/09axios网络请求库' },
            ],
        },

    ],
    // ===================JAVA=====================


    // --------------------python-----------------------

    // **************************python基础***********************************
    '/backend/python/python基础/': [
        {
            text: '环境安装',
            items: [
                { text: 'Python介绍', link: '/backend/python/python基础/index' },
                { text: '安装Python解释器', link: '/backend/python/python基础/python环境安装/安装py解释器' },
                { text: '安装Python编辑器', link: '/backend/python/python基础/python环境安装/安装py编辑器' },
            ],
        },
        {
            text: '数据类型',
            collapsible: true, // 启用了折叠功能
            collapsed: true,   // 初始状态下是折叠
            items: [
                { text: '编程规范', link: '/backend/python/python基础/数据类型/编程规范' },
                { text: '浮点型', link: '/backend/python/python基础/数据类型/01浮点型' },
                { text: '整形', link: '/backend/python/python基础/数据类型/02整形' },
                { text: '字符串', link: '/backend/python/python基础/数据类型/03字符串' },
                { text: '布尔', link: '/backend/python/python基础/数据类型/04布尔' },
                { text: '字符转换', link: '/backend/python/python基础/数据类型/05字符转换' },
                { text: '运算符', link: '/backend/python/python基础/数据类型/06运算符' },
                { text: '字符串格式化', link: '/backend/python/python基础/数据类型/07字符串格式化' },
                //    {text: '&quot;CSS&quot;', link: '/frontend/html/01浮点型'},
            ],
        },
        {
            text: '流程控制',
            collapsible: true, // 启用了折叠功能
            collapsed: true,   // 初始状态下是折叠
            items: [
                { text: 'if判断', link: '/backend/python/python基础/流程控制/01if判断' },
                { text: 'for循环', link: '/backend/python/python基础/流程控制/02for循环' },
                { text: 'while循环', link: '/backend/python/python基础/流程控制/03while循环' },
                // {text: '字符串', link: '/backend/python/python基础/流程控制/03字符串'},
                // {text: '布尔', link: '/backend/python/python基础/流程控制/04布尔'},
                // {text: '字符转换', link: '/backend/python/python基础/流程控制/05字符转换'},
                // {text: '运算符', link: '/backend/python/python基础/流程控制/06运算符'},
                // {text: '字符串格式化', link: '/backend/python/python基础/流程控制/07字符串格式化'},
                //    {text: '&quot;CSS&quot;', link: '/frontend/html/01浮点型'},
            ],
        },

        {
            text: '数据结构',
            collapsible: true, // 启用了折叠功能
            collapsed: true,   // 初始状态下是折叠
            items: [
                { text: '列表', link: '/backend/python/python基础/数据结构/01列表' },
                { text: '元组', link: '/backend/python/python基础/数据结构/02元组' },
                { text: '字典', link: '/backend/python/python基础/数据结构/03字典' },
                { text: '集合', link: '/backend/python/python基础/数据结构/04集合' },
                // {text: '布尔', link: '/backend/python/python基础/流程控制/04布尔'},
                // {text: '字符转换', link: '/backend/python/python基础/流程控制/05字符转换'},
                // {text: '运算符', link: '/backend/python/python基础/流程控制/06运算符'},
                // {text: '字符串格式化', link: '/backend/python/python基础/流程控制/07字符串格式化'},
                //    {text: '&quot;CSS&quot;', link: '/frontend/html/01浮点型'},
            ],
        },


    ],

    // **************************python爬虫基础***********************************

    '/backend/python/python爬虫基础/': [
        {
            text: '爬虫简介',
            items: [
                { text: '简介', link: '/backend/python/python爬虫基础/index' },
                // {text: 'py2', link: '/backend/python/python基础/python环境安装/py介绍'},
                // {text: 'py3', link: '/backend/python/python基础/python环境安装/安装py解释器'},
            ],
        },
        {
            text: '获取网页',
            collapsible: true, // 启用了折叠功能
            collapsed: true,   // 初始状态下是折叠
            items: [

                { text: 'requests', link: '/backend/python/python爬虫基础/获取网页/requests' },
                { text: 'urllib', link: '/backend/python/python爬虫基础/获取网页/urllib' },
                { text: 'pyquery', link: '/backend/python/python爬虫基础/获取网页/pyquery' },
            ],
        },
        {
            text: '解析网页',
            collapsible: true, // 启用了折叠功能
            collapsed: true,   // 初始状态下是折叠
            items: [

                { text: 're正则', link: '/backend/python/python爬虫基础/解析网页/re' },
                { text: 'Xpath', link: '/backend/python/python爬虫基础/解析网页/xpath' },
                { text: 'BeautifulSouplxml', link: '/backend/python/python爬虫基础/解析网页/beautifulsouplxml' },
                { text: 'parsel', link: '/backend/python/python爬虫基础/解析网页/parsel' },

            ],
        },
        {
            text: '数据存储',
            collapsible: true, // 启用了折叠功能
            collapsed: true,   // 初始状态下是折叠
            items: [

                { text: 'text', link: '/backend/python/python爬虫基础/数据存储/text' },
                { text: 'csv', link: '/backend/python/python爬虫基础/数据存储/csv' },
                { text: 'json', link: '/backend/python/python爬虫基础/数据存储/json' },
                { text: 'mysql', link: '/backend/python/python爬虫基础/数据存储/mysql' },

            ],
        },
    ],

    // **************************python Web***********************************
    '/backend/python/django/': [
        {
            text: '安装Django',
            items: [
                { text: '简介', link: '/backend/python/django/index' },
                { text: '安装Django', link: '/backend/python/django/安装django/安装django' },

            ],
        },
        {
            text: '创建web项目',
            items: [
                { text: 'Django项目创建', link: '/backend/python/django/创建django项目/01创建django项目' },
                { text: '创建APP', link: '/backend/python/django/创建django项目/02创建app' },

            ],
        },
        {
            text: 'Django路由层',
            items: [
                { text: '路由函数path', link: '/backend/python/django/django路由层/01路由函数path' },
                { text: '处理动态url', link: '/backend/python/django/django路由层/02处理动态url' },
                { text: '路由函数re_path', link: '/backend/python/django/django路由层/03路由函数re_path' },
                { text: '创建页面', link: '/backend/python/django/django路由层/04创建页面' },

            ],
        },
        {
            text: 'Django视图层',
            items: [
                // { text: '路由函数path', link: '/backend/python/django/django路由层/01路由函数path' },
                // { text: '处理动态url', link: '/backend/python/django/django路由层/02处理动态url' },
                // { text: '路由函数re_path', link: '/backend/python/django/django路由层/03路由函数re_path' },
                // { text: '创建页面', link: '/backend/python/django/django路由层/04创建页面' },

            ],
        },
        {
            text: 'Django模板层',
            items: [
                // { text: '路由函数path', link: '/backend/python/django/django路由层/01路由函数path' },
                // { text: '处理动态url', link: '/backend/python/django/django路由层/02处理动态url' },
                // { text: '路由函数re_path', link: '/backend/python/django/django路由层/03路由函数re_path' },
                // { text: '创建页面', link: '/backend/python/django/django路由层/04创建页面' },

            ],
        },
        {
            text: 'Django静态文件',
            items: [
                // { text: '路由函数path', link: '/backend/python/django/django路由层/01路由函数path' },
                // { text: '处理动态url', link: '/backend/python/django/django路由层/02处理动态url' },
                // { text: '路由函数re_path', link: '/backend/python/django/django路由层/03路由函数re_path' },
                // { text: '创建页面', link: '/backend/python/django/django路由层/04创建页面' },

            ],
        },
        {
            text: 'Django模型层',
            items: [
                // { text: '路由函数path', link: '/backend/python/django/django路由层/01路由函数path' },
                // { text: '处理动态url', link: '/backend/python/django/django路由层/02处理动态url' },
                // { text: '路由函数re_path', link: '/backend/python/django/django路由层/03路由函数re_path' },
                // { text: '创建页面', link: '/backend/python/django/django路由层/04创建页面' },

            ],
        },

        {
            text: '后台管理组件admin',
            items: [
                // { text: '路由函数path', link: '/backend/python/django/django路由层/01路由函数path' },
                // { text: '处理动态url', link: '/backend/python/django/django路由层/02处理动态url' },
                // { text: '路由函数re_path', link: '/backend/python/django/django路由层/03路由函数re_path' },
                // { text: '创建页面', link: '/backend/python/django/django路由层/04创建页面' },

            ],
        },
        {
            text: 'Django中间件',
            items: [
                // { text: '路由函数path', link: '/backend/python/django/django路由层/01路由函数path' },
                // { text: '处理动态url', link: '/backend/python/django/django路由层/02处理动态url' },
                // { text: '路由函数re_path', link: '/backend/python/django/django路由层/03路由函数re_path' },
                // { text: '创建页面', link: '/backend/python/django/django路由层/04创建页面' },

            ],
        },
        {
            text: 'Django分页组件',
            items: [
                // { text: '路由函数path', link: '/backend/python/django/django路由层/01路由函数path' },
                // { text: '处理动态url', link: '/backend/python/django/django路由层/02处理动态url' },
                // { text: '路由函数re_path', link: '/backend/python/django/django路由层/03路由函数re_path' },
                // { text: '创建页面', link: '/backend/python/django/django路由层/04创建页面' },

            ],
        },



    ],


    // ===================数据库=====================


    // ===================Linux=====================


    // ===================教程=====================


    // -----------------------关于我  -------------
}