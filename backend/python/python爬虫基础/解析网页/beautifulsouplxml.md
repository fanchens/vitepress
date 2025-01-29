---
title: beautifulsouplxml
date: 2024-05-16
# sidebar: 'auto' # 是否开启侧边栏
categories:  # 所属分类
 - beautifulsouplxml基础学习
tags:        # 所属标签
 - beautifulsouplxml基础学习
publish: true  # 文章是否发布
---

<h1>一、beautifulsouplxml的使用（非常详细）</h1>

## 1、BeautifulSoup的安装
在电脑主界面Windows+R，然后输入“cmd”进入命令行窗口

```python
# 安装lxml库
 pip install bs4
 pip install lxml

# 引入模块
from bs4 import BeautifulSoup
```
## 2、Tag对象

```python
from bs4 import BeautifulSoup

html = """
<title>The Kevin's story house</title>
<span>这里是小宇Python系列文章</span>
<a href="https://fanchens.github.io/vitepress/">小宇的博客</a
"""
soup = BeautifulSoup(html, 'html.parser')
print(soup.title.text)
print(soup.span.text)
print(soup.a['href'])

# 输出:
# The Kevin's story house
# 这里是小宇Python系列文章
# https://fanchens.github.io/vitepress/

```


## 3、find和find_all

### 3-1.方法
```python
find_parent：查找父节点
find_parents：递归查找父节点
find_next_siblings：查找后面的兄弟节点
find_next_sibling：查找后面满足条件的第一个兄弟节点
find_all_next：查找后面所有节点
find_next：查找后面第一个满足条件的节点
find_all_previous：查找前面所有满足条件的节点
find_previous：查找前面第一个满足条件的节点
```


###  3-2.find   只返回第一个匹配到的对象

```python
from bs4 import BeautifulSoup

html_doc = """  
<html><body>  
    <p class="title">Title</p>  
    <p>Paragraph</p>  
</body></html>  
"""

# soup = BeautifulSoup(html_doc, 'html.parser')
soup = BeautifulSoup(html_doc, 'lxml')

# 查找第一个 <p> 标签  
first_p = soup.find('p')
print(first_p.get_text())  
 

# 查找具有特定 class 的 <p> 标签  
title_p = soup.find('p', class_='title')
print(title_p.get_text()) 
 
# 输出: 
# Title 
# Title

```


### 3-3.find_all    返回所有匹配到的结果

```python
from bs4 import BeautifulSoup

html_doc = """  
<html><body>  
    <p class="title">Title</p>  
    <p>Paragraph 1</p>  
    <p>Paragraph 2</p>  
</body></html>  
"""

# soup = BeautifulSoup(html_doc, 'html.parser')
soup=BeautifulSoup(html_doc,'lxml')
# 查找所有 <p> 标签
all_p = soup.find_all('p')
for p in all_p:
    print(p.get_text())  # 输出: Title, Paragraph 1, Paragraph 2
print('****************************************')
# 查找前两个 <p> 标签
first_two_p = soup.find_all('p', limit=2)
for p in first_two_p:
    print(p.get_text())  

# 输出: Title, Paragraph 1

# 输出结果：

# Title
# Paragraph 1
# Paragraph 2
# ****************************************
# Title
# Paragraph 1
```

## 4、结合实战
<p>select()是选择满足所有条件的元素，select_one()只选择满足条件的第一个元素。</p>
<p>通过一个案例，来学习find()、find_all()、select()、select_one()的用法。</p>

```python
from bs4 import BeautifulSoup

text = '''
<li class="subject-item">
    <div class="pic">
      <a class="nbg" href="https://mycollege.vip/subject/25862578/">
        <img class="" src="https://mycollege.vip/s27264181.jpg" width="90">
      </a>
    </div>
    <div class="info">
      <h2 class=""><a href="https://mycollege.vip/subject/25862578/" title="解忧杂货店">解忧杂货店</a></h2>
      <div class="pub">[日] 东野圭吾 / 李盈春 / 南海出版公司 / 2014-5 / 39.50元</div>
      <div class="star clearfix">
        <span class="allstar45"></span>
        <span class="rating_nums">8.5</span>
        <span class="pl">
            (537322人评价)
        </span>
      </div>
      <p>现代人内心流失的东西，这家杂货店能帮你找回——僻静的街道旁有一家杂货店，只要写下烦恼投进卷帘门的投信口，
      第二天就会在店后的牛奶箱里得到回答。因男友身患绝... </p>
    </div>
</li>
'''

soup = BeautifulSoup(text, 'lxml')

print(soup.select_one("a.nbg").get("href"))
print(soup.find("img").get("src"))
title = soup.select_one("h2 a")
print(title.get("href"))
print(title.get("title"))

print(soup.find("div", class_="pub").string)
print(soup.find("span", class_="rating_nums").string)
print(soup.find("span", class_="pl").string.strip())
print(soup.find("p").string)

```

## 5、实例
### 5-1.语法结构


```python
import requests
from bs4 import BeautifulSoup
#  获取数据
url = 'https://b.faloo.com/m_1_index.html'
# 使用代理IP
headers = {'http': '212.129.251.84:8888'}
req = requests.get(url, headers=headers)
# # 解析
soup = BeautifulSoup(req.text, 'lxml')
# books = soup.find('li',{'class': 'channel'})
# 使用get_text()返回纯文本内容
books =soup.find('div', class_="c_l_detail c_l_detail1").get_text()
print(books)
```

### 5-2.豆瓣top


```python
import requests
from bs4 import BeautifulSoup

url = 'https://movie.douban.com/top250'
headers = {'User-Agent': 'Mozilla/5.0'}

req=requests.get(url=url, headers=headers)
res=req.text
# print(res)
soup=BeautifulSoup(res,'lxml')
books=soup.find_all('div',class_='info')
# print(books)
for i in books:
    title=i.find('span',class_='title').text
    direct=i.find('p',class_='').text
    direct=direct.replace('   ','')
    print('电影名：',title)
    print('导演',direct.strip())
```

![image-20240521222339167](/assets/python%E7%88%AC%E8%99%AB/%E8%A7%A3%E6%9E%90%E7%BD%91%E9%A1%B5/05.png)
