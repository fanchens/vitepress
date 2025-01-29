---
title: Xpath
date: 2024-05-16
# sidebar: 'auto' # 是否开启侧边栏
categories:  # 所属分类
 - Xpath基础学习
tags:        # 所属标签
 - Xpath基础学习
publish: true  # 文章是否发布
---

<h1>Xpath库的使用（非常详细）</h1>

## 1、Xpath的安装
在电脑主界面Windows+R，然后输入“cmd”进入命令行窗口

```python
# 安装lxml库
pip -m install lxml

# 引入模块
from lxml import etree
```

## 2、XPath 插件

`chrome`安装xpath插件

### 2-1.插件下载地址：

百度网盘下载地址：[chrome_Xpath](https://pan.baidu.com/s/1lUe3jU-CY0bLmkC1A98ZKw?pwd=5uft) 
<br/>
百度网盘下载地址：[xpath for mac](https://pan.baidu.com/s/1qZUUJw_uyt4FXlOR-TA3PQ?pwd=22k9)
<br/>
GitHub下载地址：[xpath](https://github.com/eliasdorneles/xpath_helper)

### 2-2.解压后安装
更多->更多工具->扩展程序->加载已解压的扩展程序->浏览->选择xpath包
![image-20240521222339167](/assets/python%E7%88%AC%E8%99%AB/%E8%A7%A3%E6%9E%90%E7%BD%91%E9%A1%B5/03.png)


## 3、Xpath语法节点选择

| 表达式      | 描述                           |
| -------- | ---------------------------- |
| `Nodename` | 选取此节点的所有子节点                  |
| `/`        | 从根节点选取                       |
| `//`       | 从匹配选择的当前节点选择文档中的节点，而不考虑它们的位置 |
| `.`        | 选取当前节点                       |
| `..`       | 选取当前节点的父节点                   |
| `@`        | 选取属性                         |


## 4、路径表达式

### 4-1.
```python
from lxml import etree

xml_content = '''
<html>
    <head>
         <title>Harry Potter</title>
    </head>
    <body>
         <li class="author">JK.Rowing</li>
         <li class="year">2005</li>
         <li class="price">29</li>
         <div>
             <li class="book">harry potter</li>
         </div>
         <span>
         <li class="price">29</li>
         <div>
             <li class="book">harry potter</li>
         </div>
         </span>
    </body>
</html>
'''
tree = etree.HTML(xml_content)

# /表示层级关系 第一个/是根节点
# 根节点查询
bookstore_html = tree.xpath('/html') 
print(bookstore_html)

# 标题文本查询  # text()获取文本内容的
title_html = tree.xpath('/html/head/title/text()') 
print(title_html)

# 取单个文本内容  # [0]把列表里面的数据取出 
tit_html = tree.xpath('/html/head/title/text()')[0] 
print(tit_html)

# 所有<li>元素的文本内容。查询选取了<body>元素下直接作为子节点的所有<li>元素的文本内容，不会选取嵌套在<div>或<span>内的<li>元素。
li_html = tree.xpath('/html/body/li/text()') 
# ['JK.Rowing', '2005', '29']
print(li_html)

# 特定<div>内的<li>文本内容：
div_html = tree.xpath('/html/body/div/li/text()')  
print(div_html)


# //用于查找节点内部所有的子节点（后代）
# 所有后代<li>元素的文本内容。使用//轴，这个查询选取了<body>元素下所有后代<li>元素的文本内容，无论它们嵌套在多少层内。
li_div = tree.xpath('/html/body//li/text()') 
print(li_div)

# <span>内所有后代<li>元素的文本内容。查询选取了<span>元素下所有后代<li>元素的文本内容。
span_li = tree.xpath('/html/body/span//li/text()') 
print(span_li)

# 使用通配符*匹配任意节点下的<li>文本内容
div_span_li = tree.xpath('/html/body/*/li/text()') 
print(div_span_li)


```


### 4-2.

```python
from lxml import etree

# 网页源代码
html = '''
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>test2</title>
    </head>
    <body>
        <div id="songs-list">
            <h2 class="title">经典老歌</h2>
            <p class="introduction">经典老歌列表</p>
            <ul id="list" class="list-group">
                <li><a href="/1.mp3" singer="任贤齐">沧海一声笑</a></li>
                <li><a href="/2.mp3" singer="齐秦">往事随风</a></li>
                <li><a href="/3.mp3" singer="beyond">光辉岁月</a></li>
                <li><a href="/4.mp3" singer="陈慧琳">记事本</a></li>
                <li><a href="/5.mp3" singer="邓丽君">但愿人长久</a></li>
            </ul>
        </div>
    </body>
</html>
'''
tree = etree.HTML(html)

# 选择所有歌曲名称
a_result = tree.xpath('/html/body/div/ul/li/a/text()')
print(a_result) # ['沧海一声笑', '往事随风', '光辉岁月', '记事本', '但愿人长久']


# 一般用于没有属性值，或者说属性值重复 不太方便定位属性的就会使用位置定位
# 通过节点位置进行定位，定位到某些节点

# 通过位置定位第一个歌曲名称   # 节点下标从1开始
b_result = tree.xpath('/html/body/div/ul/li[1]/a/text()')
print(b_result) # ['沧海一声笑']

# 通过列表索引获取第一个歌曲名称  # 列表下标从零开始
c_result = tree.xpath('/html/body/div/ul/li/a/text()')[0]
print(c_result) # 沧海一声笑

# 通过属性值定位特定歌曲名称 # 通过节点里面的属性值定位到具体的节点
d_result = tree.xpath('/html/body/div/ul/li/a[@href="/1.mp3"]/text()')
print(d_result) # ['沧海一声笑']

# @href 用于获取属性值
a_href = tree.xpath('/html/body/div/ul/li/a/@href')
print(a_href)  # ['/1.mp3', '/2.mp3', '/3.mp3', '/4.mp3', '/5.mp3']

# 找到所有<li>节点，并迭代以获取<a>的href属性    # 找到ul下面所有的li节点
e_result = tree.xpath('/html/body/div/ul/li')
# print(e_result)
for li in e_result:
    # print(li)
    # . 表示在当前li节点的基础上
    # xpath 一般是把符合xpath语句的数据 放在列表里面统一返回
    li_result = li.xpath('./a/text()')
    # print(li_result)
    # @href 用于获取属性值
    a_href = li.xpath('./a/@href')
    # print(a_href)


```


## 5、实例

### 5-1.语法结构  小说名称

```python
import requests
from lxml import etree

headers = {'User-Agent': 'Mozilla/5.0'}
url = 'https://b.faloo.com/Rank_1.html'
# 获取响应
# timeout设置超时    verify关闭证书
req = requests.get(url, headers=headers, timeout=5)
# print(req.text)
# 解析数据
parer = etree.HTML(req.text)
# 使用XPath获取所有符合条件的a标签的文本内容
links = parer.xpath('//*[@id="Tab1"]/div/div/div/a/text()')
for link in links:
    print(link.strip())

```

![image-20240521222339167](/assets/python%E7%88%AC%E8%99%AB/%E8%A7%A3%E6%9E%90%E7%BD%91%E9%A1%B5/04.png)



### 5-2.图片

```python
import requests
from lxml import etree

url='https://www.jdlingyu.com/tuji?archiveSearch=%E7%BE%8E%E5%A5%B3'
headers={'user-agent': 'Mozilla/5.0 '}
req=requests.get(url=url,headers=headers)

# print(html)

# 提取数据
parer=etree.HTML(req.text)
# 主页图片链接
lista=parer.xpath('//*[@id="post-list"]/ul/li')

for li in lista:
    pic_title=li.xpath('.//h2/a/text()')[0] # 标题
    pic_url = li.xpath('.//h2/a/@href')[0]  # 图片链接
    # print(pic_title,pic_url)

    # 详情页图片数据
    response_pic=requests.get(url=pic_url,headers=headers).text
    # print(response_pic)

    # 获取图片的链接
    parerst = etree.HTML(response_pic)
    # 主页图片
    url_list = parerst.xpath('//div[@class="entry-content"]//img/@src')
    # print(url_list)       # 得到图片的链接

    for pic_url in url_list:
        # 发送图片链接请求 获取图片数据   图片是二进制 content提取二进制数据
        img =requests.get(url=pic_url,headers=headers).content

        # 保存数据

        # 数据分割  图片名称
        name=pic_url.split('/')[-1]
        print(name)


        with open('ing\\'+name,'wb') as fp:
            fp.write(img)
            print('图片保存成功',name)
```