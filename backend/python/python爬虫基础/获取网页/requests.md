---
title: requests
date: 2024-05-16
# sidebar: 'auto' # 是否开启侧边栏
categories:  # 所属分类
 - requests基础学习
tags:        # 所属标签
 - requests基础学习
publish: true  # 文章是否发布
---

# 一、requests库的使用（非常详细）

##  1、Requests的安装
在电脑主界面Windows+R，然后输入“cmd”进入命令行窗口
```python
# 安装requests库 
pip install requests

# 引入模块
import requests
```
我这里已经下载过了
![image-20240521222339167](/assets/python%E7%88%AC%E8%99%AB/%E8%8E%B7%E5%8F%96%E7%BD%91%E9%A1%B5/01.png)
<!-- ![image-20240521222339167](/assets/html/01.png) -->


相关链接
- GitHub：https://github.com/psf/requests

- PyPI：https://pypi.org/project/requests/

- 官方文档：https://docs.python-requests.org/en/latest/

- 中文文档：https://docs.python-requests.org/zh_CN/latest/user/quickstart.html

##  2、Requests 基本使用

``` python
import requests

url = 'http://www.baidu.com/'  # 生成get请求
req = requests.get(url)
# 查看结果类型
print('查看结果类型：',type(req))
# 查看状态码
print('状态码：',req.status_code)
# 查看编码（注意：这里可能返回None，因为有些服务器不在响应头中明确指定编码）
print('编码：',req.encoding)
# 查看响应头
print('响应头：',req.headers)
# 打印查看网页内容（注意：这可能会输出大量文本）
# 如果只想查看部分内容，可以修改下面的切片操作
print('查看网页内容（前1000个字符）：')
print(req.text[:1000])  # 只打印前1000个字符作为示例
# 如果要打印整个网页内容，可以使用下面的行替换上面的打印语句
print('查看网页内容：')
print(req.text)

```
![image-20240521222339167](/assets/python%E7%88%AC%E8%99%AB/%E8%8E%B7%E5%8F%96%E7%BD%91%E9%A1%B5/02.png)

## 3、Requests基本请求方式


| 方法名称          | HTTP 请求类型 | 描述                         |
|-------------------|---------------|----------------------------|
| requests.get()    | GET           | 用于从服务器请求资源。       |
| requests.head()   | HEAD          | 类似于 GET，但不返回响应体。 |
| requests.post()   | POST          | 用于向服务器提交数据。       |
| requests.put()    | PUT           | 用于更新服务器上的资源。     |
| requests.patch()  | PATCH         | 用于对服务器上的资源进行部分更新。 |
| requests.delete() | DELETE        | 用于请求服务器删除指定资源。 |


### 3-1.get请求

```python
# requests.request()

import requests  # 导入requests库  
  
# 构造一个GET请求到httpbin.org的get接口  
url = 'https://httpbin.org/get'  
response = requests.request('GET', url)  # 使用requests.request()方法发送GET请求  
print(response.text)  # 打印响应的文本内容
```


```python
# requests.get()

import requests  # 导入requests库  
  
# 发送GET请求到httpbin.org的get接口  
url = 'https://httpbin.org/get'  
response = requests.get(url)  # 使用requests.get()方法发送GET请求  
print(response.text)  # 打印响应的文本内容
```
### 3-2.head请求

```python
# requests.head()

import requests  # 导入requests库  
  
# 发送HEAD请求到httpbin.org的get接口，只获取头部信息  
url = 'https://httpbin.org/get'  
response = requests.head(url)  # 使用requests.head()方法发送HEAD请求  
print(response.headers)  # 打印响应的头部信息
```

### 3-3.post请求

```python
# requests.post()

import requests  # 导入requests库  
  
# 发送POST请求到httpbin.org的post接口，并附带表单数据  
url = 'https://httpbin.org/post'  
payload = {'key1': 'value1', 'key2': 'value2'}  
response = requests.post(url, data=payload)  # 使用requests.post()方法发送POST请求，并附带表单数据  
print(response.text)  # 打印响应的文本内容
```

### 3-4.put请求

```python
# requests.put()

import requests  # 导入requests库  
  
# 发送PUT请求到httpbin.org的put接口，并附带数据以更新资源  
url = 'https://httpbin.org/put'  
payload = {'key1': 'value1', 'key2': 'value2'}  
response = requests.put(url, data=payload)  # 使用requests.put()方法发送PUT请求，并附带数据  
print(response.text)  # 打印响应的文本内容
```

### 3-5.patch请求

```python
# requests.patch()

import requests  # 导入requests库  
  
# 发送PATCH请求到httpbin.org的patch接口，并附带数据以局部更新资源  
url = 'https://httpbin.org/patch'  
payload = {'key1': 'newValue1'}  
response = requests.patch(url, data=payload)  # 使用requests.patch()方法发送PATCH请求，并附带数据  
print(response.text)  # 打印响应的文本内容
```

### 3-6.delete请求

```python
# requests.delete()

import requests  # 导入requests库  
  
# 发送DELETE请求到httpbin.org的delete接口，以删除资源  
url = 'https://httpbin.org/delete'  
response = requests.delete(url)  # 使用requests.delete()方法发送DELETE请求  
print(response.text)  # 打印响应的文本内容
```
## 4、常用属性和方法



| 属性和方法   |  描述  |
| ---- | ---- |
| `res.text`   | 响应的文本内容    |
| res.content    | bytes 以字节形式（二进制）返回    |
| res.encoding     |响应内容的编码方式     |
| res.content    | bytes 以字节形式（二进制）返回    |
| res.content.decode('utf-8')    | utf-8编码   |
| res.status_code    |  HTTP响应的状态码（如200, 404等）    |
| res.url     | 数据url地址            |
|  res.headers    |  请求头     |
|  res.cookies   |  cookies      |



```python
import requests

# 发送一个请求
response = requests.get('https://httpbin.org/get')

# 访问属性
print(f"响应文本内容: {response.text}")
print(f"响应原始内容（字节串）: {response.content}")
print(f"响应内容编码: {response.encoding}")
print(f"HTTP响应状态码: {response.status_code}")
print(f"请求的URL: {response.url}")
print(f"响应头部信息: {response.headers}")
```

![image-20240521222339167](/assets/python%E7%88%AC%E8%99%AB/%E8%8E%B7%E5%8F%96%E7%BD%91%E9%A1%B5/03.png)


## 5、语法格式

```python
import requests  # 导入requests库，这是一个用于发送HTTP请求的Python库

# 输入网站 设置请求
url = 'https://www.baidu.com'  # 定义一个变量url，并将其设置为百度网站的网址

# 设置请求头，模拟的浏览器用户代理信息，以避免被网站识别为爬虫而拒绝服务
headers = {'User-Agent': 'Mozilla/5.0 '}  # 定义一个字典headers，用于设置HTTP请求头中的User-Agent字段

# 发送HTTP请求，使用requests库的get方法，向指定的url发送GET请求，并带上自定义的请求头headers
res = requests.get(url, headers=headers,timeout=5)  # 发送GET请求，并将响应对象赋值给变量res

# 设置响应内容的编码格式为utf-8，以确保中文字符能够正确显示
res.encoding = 'utf-8'  # 设置响应内容的编码为utf-8

# 打印响应内容，即网站的HTML代码
print(res.text)  # 输出响应的文本内容 
```

![image-20240521222339167](/assets/python%E7%88%AC%E8%99%AB/%E8%8E%B7%E5%8F%96%E7%BD%91%E9%A1%B5/04.png)
