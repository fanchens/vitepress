// nav.mjs
export const    nav= [

    // ===================首页=====================
    
          { text: '首页',   icon: 'tool',link: '/' },
        //   { text: 'Examples', link: '/markdown-examples' },
    
    // ===================前端=====================
    
          {
            text: '前端',
          
            items: [
              { text: '前端基础', items:[
                { text: 'HTML & CSS', link: '/frontend/html/' },
                { text: 'JavaScript', link: '/frontend/js/' },
              ]},
    
              { text: 'Vue', items:[
                // { text: 'Vue2', link: '/frontend/vue2/' },
                { text: 'Vue3', link: '/frontend/vue3/' },
                // { text: 'Java学习笔记', link: '/guide/japanese/' }
              ]},
             
            ]
        },
    // ===================JAVA=====================
        {
            text: 'JAVA',
            items: [
              { text: 'JAVA', items:[
                { text: 'HTML & CSS', link: '/guide/前端学习笔记/' },
                { text: 'JavaScript', link: '/guide/japanese/' },
                { text: 'Vue', link: '/guide/japanese/' },
              ]},
    
              { text: 'Spring', items:[
                { text: '前端学习笔记', link: '/guide/前端学习笔记/' },
                { text: 'Java学习笔记', link: '/guide/japanese/' }
              ]},
             
            ]
        },
    // ===================Python=====================
        {
            text: 'Python',
            items: [
              { text: 'Python基础', items:[
                { text: '基础知识', link: '/backend/python/python基础/' },
                // { text: '面向对象', link: '/backend/python/python基础/py面向对象' },
                // { text: '进阶内容', link: '/guide/japanese/' },
              ]},
    
              { text: 'Python爬虫', items:[
                // { text: 'Django', link: '/backend/python/django' },
                { text: '爬虫基础', link: '/backend/python/python爬虫基础' },
                // { text: '爬虫进阶', link: '/backend/python/django' },
                
                // { text: 'Java学习笔记', link: '/guide/japanese/' }
              ]},
             

              { text: 'Python Web', items:[
                { text: 'Django', link: '/backend/python/django' },
                // { text: 'Java学习笔记', link: '/guide/japanese/' }
              ]},
             
            ]
        },
    
        // ===================数据库=====================
    
        {
            text: '数据库',
            items: [
              { text: '数据库基础', items:[
                // { text: '基础知识', link: '/guide/前端学习笔记/' },
                // { text: '面向对象', link: '/guide/japanese/' },
                // { text: '进阶内容', link: '/guide/japanese/' },
              ]},
    
              { text: 'Python Web', items:[
                { text: 'Django', link: '/guide/前端学习笔记/' },
                // { text: 'Java学习笔记', link: '/guide/japanese/' }
              ]},
             
            ]
        },
    
        // ===================Linux=====================
        {
            text: 'Linux',
            items: [
              { text: 'Linux基础', items:[
                // { text: '基础知识', link: '/guide/前端学习笔记/' },
                // { text: '面向对象', link: '/guide/japanese/' },
                // { text: '进阶内容', link: '/guide/japanese/' },
              ]},
    
              { text: 'Python Web', items:[
                { text: 'Django', link: '/guide/前端学习笔记/' },
                // { text: 'Java学习笔记', link: '/guide/japanese/' }
              ]},
             
            ]
        },
    
        // ===================教程=====================
        {
            text: '教程',
            items: [
              { text: 'vitepress', items:[
            //     { text: '基础知识', link: '/guide/前端学习笔记/' },
            //     { text: '面向对象', link: '/guide/japanese/' },
            //     { text: '进阶内容', link: '/guide/japanese/' },
              ]},
    
            //   { text: 'Python Web', items:[
            //     { text: 'Django', link: '/guide/前端学习笔记/' },
            //     // { text: 'Java学习笔记', link: '/guide/japanese/' }
            //   ]},
             
            ]
        },
    
     // -----------------------关于我  -----------------------//
        // { text: '关于我', link: '/about/about.md' }
    
        // { text: '友情链接', link: '/about/friendship' },
        { text: '关于', link: '/about/about' },
        ]
    