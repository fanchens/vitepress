---
title: re
date: 2024-05-16
# sidebar: 'auto' # 是否开启侧边栏
categories:  # 所属分类
 - re基础学习
tags:        # 所属标签
 - re基础学习
publish: true  # 文章是否发布
---


<h1>re正则表达式的使用（非常详细）</h1>


## 1、元字符

`.`    匹配除换行符以外的任意字符

`\w`    匹配字母或数字或下划线

`\s `   匹配任意的空白符

`\d `  匹配数字

`\n`  匹配一个接行符-----——不常用

`\t`  匹配一个制表符-----——不常用

`^`  匹配字符串的开始-----——不常用

`$`  匹配字符串的结尾-----——不常用

`\W`  匹配非字母或数字或下划线

`\D`  匹配非数字

`\S`  匹配非空白符

`a|b`  匹配字符a或者是字符b

`()`   匹配括号内的表达式，也表示一个组

`[...]`  匹配[]中的字符

`[^...]` 匹配除了[]中字符的所有字符

##  2、量词：控制前面的元字符出现的次数

`*`	 重复零次或更多次

 `+`	 重复一次或更多次

 `？`  重复零次或一次

 `{n}`  重复n次

 `{n,}`  重复n次或更多次

 `{n,m}`  重复n到m次

## 3、贪婪匹配和惰性匹配

`.*`  贪婪匹配

`.*？` 惰性匹配

 ## 4、re模块常用的函数

| 属性   |  描述  |
| ---- | ---- |
| `re.match`  | 从起始位置开始匹配 		一次匹配   |
| `re.search`    | 从搜索第一个位置开始匹配		一次匹配  |
| `re.findall`    | 全部匹配	 返回列表      |
| `re.finditer`    | 遍历所有匹配  |
| `re.sub()`    | 替换   |
| `re.split`   |  对字符串进行分割成列表   |
| `re.compile()`   | 预加载正则表达式内容单独提取 |
| `?p < >`   |别名 |

### 4-1.re.match

```python
# 匹配某字符串以字符h开头
import re

text = "hello world"
res = re.match("h", text)
print(res.group())

# 输出: h

```
- **功能**：从字符串的开头匹配模式。
- **返回值**：如果匹配成功，返回一个匹配对象；否则返回 `None`。

### 4-2.re.search

```python
import re

result = re.search(r'World', 'Hello, World!')

# 只输出第一个匹配的World
print(result.group())  

# 输出: World
```
- **功能**：在字符串中搜索模式，返回第一个匹配的对象。
- **返回值**：如果匹配成功，返回一个匹配对象；否则返回 None。

### 4-3.re.findall


```python
# 匹配所有结果

import re

matches = re.findall(r'\d+', 'abc123def456')
print(matches)

# 输出: ['123', '456']
```

### 4-4.re.finditer

```python
import re

for match in re.finditer(r'\w+', 'Hello, World!'):
    print(match.group())  
    
# 输出: 
# Hello  
# World
```
### 4-5.re.sub()


```python
import re

s ='< I love programming ！> < you love python ! >'

result =re.sub(r'< (I.*?)>','Marry love python',s)

print(result)  

# 输出: Marry love python < you love python ! >
```
### 4-6.re.split


```python
import re

result = re.split(r',\s*', 'Hello, World,Python,Programming')
print(result)

# 输出: ['Hello', 'World', 'Python', 'Programming']
```

### 4-7.re.compile()

```python
import re
s ='< I love programming ！> < you love python ! >'
pattern = re.compile('< (I.*?)>')
print(pattern.findall(s))

# 输出: ['I love programming ！']
```

### 4-8.?p < >别名

```python
import re

# 使用re.search()搜索字符串，并包含命名捕获组
res = re.search('a(?P<id>b)(?P<name>c)', 'abcabcabcabc')

# 打印整个匹配的字符串
print(res.group())  
# 输出: abc

# 打印第一个捕获组的匹配（按索引）
print(res.group(1))  
# 输出: b


# 打印名为'id'的捕获组的匹配
print(res.group('id'))  
# 输出: b


# 打印名为'name'的捕获组的匹配
print(res.group('name'))  
# 输出: c

```



## 5、案例

### 5-1.案例


```python
import re

s="""
<div class='ja'><span id='1'</span></div>
<div class='js'><span id='2'>范畴</span></div>
<div class='jsya'><span id='3'>阿达</span></div>
<div class='saa'><span id='4'>撒旦撒</span></div>
"""
#   (?P<分组名字>正侧)
obj=re.compile(r"<div class='.*?'><span id='\d'>(?P<name>.*?)</span></div>",re.S)

res=obj.finditer(s)
for i in res:
    print(i.group("name"))


# 输出
# 范畴
# 阿达
# 撒旦撒


```

### 5-2.短租房的价格


```python
短租房的价格都是在<span class="result_price">&#165;<i>(价格)</i>/晚</span>这个标签中。
```
<br/>

```python
import re
import requests
res=requests.get ('http://bj.xiaozhu.com/')
req=res.text
prices =re.findall('<span class="result_price">&#165;<i>(.*?)</i>/晚</span>',req)
#正则获取价格
for price in prices:
    print(price)
```
![image-20240521222339167](/assets/python%E7%88%AC%E8%99%AB/%E8%A7%A3%E6%9E%90%E7%BD%91%E9%A1%B5/01.png)


###  5-3.豆瓣top

```python
import requests
import re

url='https://movie.douban.com/top250'

headers={'User-Agent': 'Mozilla/5.0'}
# 发起请求 返回响应    timeout设置超时
res=requests.get(url=url,headers=headers)
req=res.text
# 解析数据
obj=re.compile(r'<li>.*? <div class="info">.*?<span class="title">(?P<name>.*?)</span>',re.S)
# 开始匹配
res=obj.finditer(req)
for i in res:
    print('电影名：',i.group("name").strip())
```

![image-20240521222339167](/assets/python%E7%88%AC%E8%99%AB/%E8%A7%A3%E6%9E%90%E7%BD%91%E9%A1%B5/02.png)
