<h1>循环语句：for</h1>

## 1、循环语句：for

### 1-1.基本for循环

**语法格式：**
```python
for 元素 in 可迭代对象:
    程序代码区块
```
**实例：**
```python
players = [ ' Curry', ' Jordan', 'James ', 'Durant', 'Obama ' ]
for player in players:
    print(player)
```

![image-20240521222339167](/public/assets/python%E5%9F%BA%E7%A1%80/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/04.png)

### 1-2.将for循环应用在列表区间元素

**实例：列出列表前3位和后3位的球员名称**
```python
players = ['Curry', ' Jordan', 'James ', ' Durant', '0bama']
print("打印前3位球员")
for player in players[: 3]:
    print(player)
print("打印后3位球员")
for player in players[-3:]:
    print(player)
```
![image-20240521222339167](/public/assets/python%E5%9F%BA%E7%A1%80/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/05.png)

### 1-3.将for循环应用在数据类别的判断

**实例：**
```python
files = ['da1.c', 'da2.py', 'da3.py', 'da4.java']
py = []
for file in files:
    if file.endswith('py'):  # 以.py为扩展名
        py.append(file)  # 加人列表
print(py)
```

![image-20240521222339167](/public/assets/python%E5%9F%BA%E7%A1%80/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/06.png)

### 1-4.删除列表内所有元素

**实例：**
```python
fruits = ['苹果', '香蕉', '西瓜', '水蜜桃', '百香果']
print("目前fruits列表:", fruits)

for fruit in fruits[:]:  # 这里使用fruits[:]创建了一个列表的浅拷贝来遍历
    fruits.remove(fruit)
    print("删除%s" % fruit)

print("目前fruits列表:", fruits)  # 由于逻辑错误，这里的结果可能不是您预期的
```
![image-20240521222339167](/public/assets/python%E5%9F%BA%E7%A1%80/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/07.png)

## 2、range( )函数
range( )的用法与列表的切片(slice)类似。

**语法格式如下：**

```python
range (start,stop,step)
```

- `start`: 计数从 `start` 开始。默认是从 0 开始。例如`range(5)`等价于`range(0, 5)`;
- `stop`: 计数到 `stop` 结束，但不包括 `stop`。例如：`range(0, 5)` 是 `[0, 1, 2, 3, 4]` 没有 5
- `step`：步长，默认为1。例如：`range(0, 5)` 等价于 `range(0, 5, 1)`

### 2-1.只有一个参数的range( )函数的应用
**实例：** 输入数字，本程序会将此数字当作打印星号的数量。

```python
n = int(input("请输人星号数量:"))	#定义星号的数量
for number in range(n):		#for循环
    print("*",end="")				#打印星号
```
![image-20240521222339167](/public/assets/python%E5%9F%BA%E7%A1%80/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/08.png)


### 2-2.有2个参数的range( )函数
**实例：**输入正整数值n，这个程序会计算从0加到n之值。


```python
n= int(input("请输入n值:"))
sum = 0
for num in range(1,n+1):
    sum +=num
print("总和= ", sum)
```

![image-20240521222339167](/public/assets/python%E5%9F%BA%E7%A1%80/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/09.png)

### 2-3.有3个参数的range( )函数
range(start,end,step)	#start是起始值，end是终止值，step是间隔值

## 3、进阶的for循环应用

### 3-1.嵌套for循环
**语法格式：**

```python
for变量in对象:	#外层打印行数
    ···
for 变量in对象:	#里层打印每行的个数
    ···
```
**实例：** 打印9*9的乘法表

```python
for i in range(1, 10):
    for j in range(1, 10):
        result = i * j
        print("%d*%d=%-3d" % (i, j, result), end="")
    print()  # 换行输出，放在内部循环结束后
```
![image-20240521222339167](/public/assets/python%E5%9F%BA%E7%A1%80/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/10.png)


## 3、break
从内部中断循环，在循环过程中，如果 某一个条件满足后，不再希望 循环继续执行，可以使用 `break` 退出循环
**语法格式：**
```python
for变量in对象:
   程序代码区块1
   if条件表达式:	#判断条件表达式
      程序代码区块2
      Break			#如果条件表达式是True则离开for循环
程序代码区块3
```
**实例：** 登录账号

循环一直输入账号密码，输入成功之后跳出循环s
```python
while True:

    password = input("请输入密码")
    if password == '123456':
        # 当满足条件时 中断循环
        print('密码输入正确，跳出循环')
        break

    # 重复执行的代码
    print("输入的密码错误，请重新输入")
```
![image-20240521222339167](/public/assets/python%E5%9F%BA%E7%A1%80/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/11.png)

## 4、continue
在循环过程中，如果某一个条件满足后，不希望执行循环代码，但是又不希望退出循环，可以使用 `continue`
**语法格式：**
```python
for变量in对象:
    程序代码区块1
    if条件表达式:			#如果条件表达式是True，则不执行程序代码区块3
       程序代码区块2
       Continue
    程序代码区块3
```

**实例：** 
```python
while True:

    password = input("请输入密码")
    if password == '123456':
        # 当满足条件时 终止后续的操作
        print('密码输入正确，终止后续的操作,重新进入循环')
        continue

    print("输入的密码错误，请重新输入")
```
![image-20240521222339167](/public/assets/python%E5%9F%BA%E7%A1%80/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/12.png)
