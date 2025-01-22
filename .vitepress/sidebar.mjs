export const    sidebar= {
 // ===================前端=====================
    '/frontend/html/': [
         {
             text: '环境安装',
             items: [
                 {text: '学习说明', link: '/frontend/html/index'},
                 {text: '软件安装', link: '/frontend/html/install'},
             ],
         },
         {
            text: 'HTML基础',
            items: [
                {text: '基础标签', link: '/frontend/html/html基础/01基础标签'},
                {text: '排版标签', link: '/frontend/html/html基础/02排版标签'},
                {text: '表格标签', link: '/frontend/html/html基础/03表格标签'},
                {text: '列表标签', link: '/frontend/html/html基础/04列表标签'},
                {text: '表单标签', link: '/frontend/html/html基础/05表单标签'},
            ],
        },
        {
            text: 'CSS基础',
            items: [
                {text: '基础标签', link: '/frontend/html/index'},
                {text: '排版标签', link: '/frontend/html/indexc'},
                {text: '排版标签', link: '/frontend/html/indexc'},
            
            ],
        },
     ],

     '/frontend/js':[
         {
             text: 'JavaScript',
             items: [
                // {text: '&quot;CSS&quot;', link: '/frontend/html/indexc'},
                 {text: '&quot;HTML&quot;', link: '/frontend/js/index'},
                 {text: '&quot;CSS&quot;', link: '/frontend/js/indexc'},
             ],
         },
         {
            text: '&quot;99&quot;',
            collapsible: true, // 启用了折叠功能
            collapsed: true,   // 初始状态下是折叠
            items: [
               // {text: '&quot;CSS&quot;', link: '/frontend/html/indexc'},
                {text: '&quot;HTML&quot;', link: '/frontend/html/index'},
                {text: '&quot;CSS&quot;', link: '/frontend/html/indexc'},
            ],
        },
     ],



     '/frontend/vue/': [
        {
            text: '环境安装',
            items: [
                {text: '学习说明', link: '/frontend/vue/index'},
                // {text: 'html介绍', link: '/frontend/html/indexc'},
            ],
        },
        {
           text: 'HTML基础',
           items: [
               {text: '基础标签', link: '/frontend/html/index'},
               {text: '排版标签', link: '/frontend/html/indexc'},
               {text: '表格标签', link: '/frontend/html/indexc'},
               {text: '列表标签', link: '/frontend/html/indexc'},
               {text: '表单标签', link: '/frontend/html/indexc'},
           ],
       },
    ],
 // ===================JAVA=====================


// --------------------python-----------------------
     '/backend/python/python基础/': [
        {
            text: '环境安装',
            items: [
                {text: '学习说明', link: '/backend/python/python基础/index'},
                {text: 'py2', link: '/backend/python/python基础/python环境安装/py介绍'},
                {text: 'py3', link: '/backend/python/python基础/python环境安装/安装py解释器'},
            ],
        },
        {
           text: '数据类型',
           items: [
              // {text: '&quot;CSS&quot;', link: '/frontend/html/indexc'},
               {text: '数据类型', link: '/backend/python基础/数据类型/py数据类型'},
            //    {text: '&quot;CSS&quot;', link: '/frontend/html/indexc'},
           ],
       },
    ],


    
    '/backend/python/python爬虫基础/': [
        {
            text: '爬虫简介',
            items: [
                {text: '简介', link: '/backend/python/python爬虫基础/index'},
                // {text: 'py2', link: '/backend/python/python基础/python环境安装/py介绍'},
                // {text: 'py3', link: '/backend/python/python基础/python环境安装/安装py解释器'},
            ],
        },
        {
           text: '获取网页',
           items: [

               {text: 'requests', link: '/backend/python/python爬虫基础/获取网页/requests'},
               {text: 'urllib', link: '/backend/python/python爬虫基础/获取网页/urllib'},
               {text: 'pyquery', link: '/backend/python/python爬虫基础/获取网页/pyquery'},
           ],
       },
       {
        text: '解析网页',
        items: [

            {text: 're正则', link: '/backend/python/python爬虫基础/解析网页/re'},
            {text: 'Xpath', link: '/backend/python/python爬虫基础/解析网页/xpath'},
            {text: 'BeautifulSouplxml', link: '/backend/python/python爬虫基础/解析网页/beautifulsouplxml'},
            {text: 'parsel', link: '/backend/python/python爬虫基础/解析网页/parsel'},
            
        ],
    },
    {
        text: '数据存储',
        items: [

            {text: 'text', link: '/backend/python/python爬虫基础/数据存储/text'},
            {text: 'csv', link: '/backend/python/python爬虫基础/数据存储/csv'},
            {text: 'json', link: '/backend/python/python爬虫基础/数据存储/json'},
            {text: 'mysql', link: '/backend/python/python爬虫基础/数据存储/mysql'},
            
        ],
    },
    ],


// ===================数据库=====================


// ===================Linux=====================


// ===================教程=====================


// -----------------------关于我  -------------
 }