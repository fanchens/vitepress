---
title: urllib
date: 2024-05-16
# sidebar: 'auto' # 是否开启侧边栏
categories:  # 所属分类
 - urllib基础学习
tags:        # 所属标签
 - urllib基础学习
publish: true  # 文章是否发布
---

# urllib库的使用（非常详细）

## urllib 库


```python
import urllib.request

```
urllib 库，它是 Python 内置的 HTTP 请求库，不需要额外安装即可使用，它包含四个模块


## urllib库的主要模块



| 属性和方法   |  描述  |
| ---- | ---- |
| `urllib.request`  | 请求模块，用于打开和读取URLs。它提供了简单的接口来发送`HTTP`请求  |
| `urllib.parse`    | 用于解析、构建、编码和解码URLs。它提供了一系列函数来处理URL  |
| `urllib.error`   | 异常处理模块，用于处理urllib模块在发送HTTP请求时可能引发的异常   |
| `urllib.robotparser`   | robots.txt解析模块，用于解析robots.txt文件   |


### request 模块

- `urlopen`：打开一个指定 URL，然后使用 read() 获取网页的 HTML 实体代码。

```python
import urllib.request
# 1、定义一个 url
url = 'http://www.baidu.com'

# 2、模拟浏览器向服务器发送请求
response = urllib.request.urlopen(url)

# 3、获取响应数据中的页面源码（注意：read() 返回的是字节形式的二进制数据，返回数据会被 b'xxx' 进行包裹）
content = response.read()

# 4、输出二进制数据 content
print(content)
# 5、将二进制数据转成字符串，这里需要网页对应的编码格式（例如：<meta http-equiv="Content-Type" content="text/html;charset=utf-8">），charset= 的就是编码格式 utf-8
content = content.decode('utf-8')

# 6、输出字符串 content
print(content)

```


- `response`：响应的数据对象 HTTPResponse 类型

```python
import urllib.request
# 1、定义一个 url
url = 'http://www.baidu.com'
# 2、模拟浏览器向服务器发送请求
response = urllib.request.urlopen(url)
# response 是 http.client.HTTPResponse 类型
print(type(response))
# read 方法是按照一个字节一个字节的去读取内容
content = response.read()
print(content)
# read 方法可以指定读取多少个字节
content = response.read(50)
print(content)
# 读取一行
content = response.readline()
print(content)
# 读取所有行
content = response.readlines()
print(content)
# 获取状态码
print(response.getcode())
# 获取访问的链接地址
print(response.geturl())
# 获取 headers
print(response.getheaders())

```
- `Request`：自定义请求对象

```python
import urllib.request

# 1、定义一个 https 的 url
url = 'https://www.baidu.com'

# 2、模拟浏览器向服务器发送请求
response = urllib.request.urlopen(url)

# 3、获取内容字符串
content = response.read().decode('utf-8')

# 4 会发现直接这么拿回来的数据不完整，这就是反扒的其中一种，代表给到服务器识别的信息不完整，比如 header 头里面的请求信息缺少。
print(content)


# 定义 header
headers = {
  # UA 最基本的防爬识别
  'User-Agent': 'Mozilla/5.0 '}
# 1、定义一个 https 的 url
url = 'https://www.baidu.com'

request = urllib.request.Request(url=url, headers=headers)

# 3、模拟浏览器向服务器发送请求
response = urllib.request.urlopen(request)
# 3、获取内容字符串
content = response.read().decode('utf-8')
# 4 输出
print(content)

```
- `urlretrieve`：下载（例如：图片、视频、网页源码…）

```python
import urllib.request

# 下载网页
url = 'http://www.baidu.com'

# 参数1：页面地址，参数2：文件名称（或路径与名称，不指定路径默认当前）
urllib.request.urlretrieve(url, 'baidu.html')


# 下载图片
url = 'https://img2.baidu.com/it/u=3565369971,2082314928&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=800'

# 参数1：页面地址，参数2：文件名称（或路径与名称，不指定路径默认当前）
urllib.request.urlretrieve(url, '01.jpg')

```
![image-20240521222339167](/assets/python%E7%88%AC%E8%99%AB/%E8%8E%B7%E5%8F%96%E7%BD%91%E9%A1%B5/05.png)


### parse 模块

- `quote`：（GET）参数进行 unicode 编码

quote 会对参数进行 unicode 编码，但是得一个一个参数的进行转换，在进行拼接，在多个参数时使用起来比较麻烦

```python
import urllib.request

# 定义 header
headers = {
  # UA 最基本的防爬识别
  'User-Agent': 'Mozilla/5.0'
}

# 这种中文写法会报错，因为 ascii 检索不到
# url = 'https://www.baidu.com/s?wd=卡尔特斯CSDN'

# 也就是需要 `卡尔特斯CSDN` 变成 unicode 编码格式，例如这样：
# url = 'https://www.baidu.com/s?wd=%E5%8D%A1%E5%B0%94%E7%89%B9%E6%96%AFCSDN'

# （不能整个链接去进行 quote 转换）(GET)
url = 'https://www.baidu.com/s?wd='

# 通过 urllib.parse.quote() 进行转换
wd = urllib.parse.quote('卡尔特斯CSDN')
# print(wd) # %E5%8D%A1%E5%B0%94%E7%89%B9%E6%96%AFCSDN

# 拼接起来
url = url + wd

# 2、定义一个 Request 对象，urlopen 方法并不能直接带 header。

request = urllib.request.Request(url=url, headers=headers)

# 3、模拟浏览器向服务器发送请求
response = urllib.request.urlopen(request)

# 3、获取内容字符串
content = response.read().decode('utf-8')

# 4 输出
print(content)

```

- `urlencode`：（GET）参数进行 unicode 编码

urlencode 会对多个参数进行 unicode 编码

```python
# 使用 urllib
import urllib.request

# 定义 header
headers = {
  # UA 最基本的防爬识别
  'User-Agent': 'Mozilla/5.0 '
}

# 准备基础地址（不能整个链接去进行 quote 转换）(GET)
url = 'https://www.baidu.com/s?'

# 参数
params = {
  'wd': '卡尔特斯CSDN',
  'sex': '男'
}

# 通过 urllib.parse.urlencode() 进行转换（多个参数）
str = urllib.parse.urlencode(params)
# print(str) # wd=%E5%8D%A1%E5%B0%94%E7%89%B9%E6%96%AFCSDN&sex=%E7%94%B7

# 通过 urllib.parse.quote() 进行转换（单个参数）
# wd = urllib.parse.urlencode('卡尔特斯CSDN')
# print(wd) # %E5%8D%A1%E5%B0%94%E7%89%B9%E6%96%AFCSDN

# 拼接起来
url = url + str

request = urllib.request.Request(url=url, headers=headers)

# 3、模拟浏览器向服务器发送请求
response = urllib.request.urlopen(request)

# 3、获取内容字符串
content = response.read().decode('utf-8')

# 4 输出
print(content)

```


- `urlencode`：（POST）参数进行 unicode 编码


```python
import urllib.request
# 使用 json
import json

# 定义 header
headers = {
  # UA 最基本的防爬识别
  'User-Agent': 'Mozilla/5.0'
}

# 请求地址（POST）
url = 'https://fanyi.baidu.com/sug'

# 参数
params = {
  'kw': '名称'
}

# post 请求，参数不能进行拼接，需放到请求对象指定的参数对象中

# 通过 urllib.parse.urlencode() 进行转换（多个参数）
# str = urllib.parse.urlencode(params)
# 直接使用转换的参数字符串会报错：POST data should be bytes, an iterable of bytes, or a file object. It cannot be of type str.
# request = urllib.request.Request(url=url, data=str, headers=headers)

# 上面直接使用参数字符串会报错，是因为 post 请求参数必须要要进行编码，指定编码格式
data = urllib.parse.urlencode(params).encode('utf-8')
# 模拟浏览器向服务器发送请求
request = urllib.request.Request(url=url, data=data, headers=headers)

# 模拟浏览器向服务器发送请求
response = urllib.request.urlopen(request)

# 获取内容字符串
content = response.read().decode('utf-8')

# 将字符串转成 json
obj = json.loads(content)

# 输出 json
print(obj)

```





### error 模块（URLError 与 HTTPError）


### 
HTTPError 类是 URLError 类的子类。

导入包分别是：urllib.error.URLError、urllib.error.HTTPError。

通过 urllib 发送请求的时候，有可能发送失败，可以通过 try-except 进行异常捕获，异常有两类：URLError 与 HTTPError 类。


### robotparser 模块

# 待看csdn
https://blog.csdn.net/yuan2019035055/article/details/144647250?ops_request_misc=%257B%2522request%255Fid%2522%253A%25228965e7a28981ed9125806b2f7165364b%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fcommercial.%2522%257D&request_id=8965e7a28981ed9125806b2f7165364b&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~insert_commercial~default-3-144647250-null-null.142^v101^pc_search_result_base8&utm_term=urllib%E8%AF%A6%E7%BB%86&spm=1018.2226.3001.4187




https://blog.csdn.net/zz00008888/article/details/127867808?ops_request_misc=&request_id=&biz_id=102&utm_term=urllib%E5%85%A5%E9%97%A8&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-1-127867808.142^v101^pc_search_result_base8&spm=1018.2226.3001.4187