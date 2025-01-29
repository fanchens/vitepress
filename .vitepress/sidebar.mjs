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
                {text: 'Python介绍', link: '/backend/python/python基础/index'},
                {text: '安装Python解释器', link: '/backend/python/python基础/python环境安装/安装py解释器'},
                {text: '安装Python编辑器', link: '/backend/python/python基础/python环境安装/安装py编辑器'},
            ],
        },
        {
           text: '数据类型',
           collapsible: true, // 启用了折叠功能
           collapsed: true,   // 初始状态下是折叠
           items: [
               {text: '编程规范', link: '/backend/python/python基础/数据类型/编程规范'},
               {text: '浮点型', link: '/backend/python/python基础/数据类型/01浮点型'},
               {text: '整形', link: '/backend/python/python基础/数据类型/02整形'},
               {text: '字符串', link: '/backend/python/python基础/数据类型/03字符串'},
               {text: '布尔', link: '/backend/python/python基础/数据类型/04布尔'},
               {text: '字符转换', link: '/backend/python/python基础/数据类型/05字符转换'},
               {text: '运算符', link: '/backend/python/python基础/数据类型/06运算符'},
               {text: '字符串格式化', link: '/backend/python/python基础/数据类型/07字符串格式化'},
            //    {text: '&quot;CSS&quot;', link: '/frontend/html/01浮点型'},
           ],
       },
       {
        text: '流程控制',
        collapsible: true, // 启用了折叠功能
        collapsed: true,   // 初始状态下是折叠
        items: [
            {text: 'if判断', link: '/backend/python/python基础/流程控制/01if判断'},
            {text: 'for循环', link: '/backend/python/python基础/流程控制/02for循环'},
            {text: 'while循环', link: '/backend/python/python基础/流程控制/03while循环'},
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
            {text: '列表', link: '/backend/python/python基础/数据结构/01列表'},
            {text: '元组', link: '/backend/python/python基础/数据结构/02元组'},
            {text: '字典', link: '/backend/python/python基础/数据结构/03字典'},
            {text: '集合', link: '/backend/python/python基础/数据结构/04集合'},
            // {text: '布尔', link: '/backend/python/python基础/流程控制/04布尔'},
            // {text: '字符转换', link: '/backend/python/python基础/流程控制/05字符转换'},
            // {text: '运算符', link: '/backend/python/python基础/流程控制/06运算符'},
            // {text: '字符串格式化', link: '/backend/python/python基础/流程控制/07字符串格式化'},
         //    {text: '&quot;CSS&quot;', link: '/frontend/html/01浮点型'},
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
           collapsible: true, // 启用了折叠功能
           collapsed: true,   // 初始状态下是折叠
           items: [

               {text: 'requests', link: '/backend/python/python爬虫基础/获取网页/requests'},
               {text: 'urllib', link: '/backend/python/python爬虫基础/获取网页/urllib'},
               {text: 'pyquery', link: '/backend/python/python爬虫基础/获取网页/pyquery'},
           ],
       },
       {
        text: '解析网页',
        collapsible: true, // 启用了折叠功能
        collapsed: true,   // 初始状态下是折叠
        items: [

            {text: 're正则', link: '/backend/python/python爬虫基础/解析网页/re'},
            {text: 'Xpath', link: '/backend/python/python爬虫基础/解析网页/xpath'},
            {text: 'BeautifulSouplxml', link: '/backend/python/python爬虫基础/解析网页/beautifulsouplxml'},
            {text: 'parsel', link: '/backend/python/python爬虫基础/解析网页/parsel'},
            
        ],
    },
    {
        text: '数据存储',
        collapsible: true, // 启用了折叠功能
        collapsed: true,   // 初始状态下是折叠
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