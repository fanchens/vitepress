<h1>循环语句：while</h1>

## 1、while循环
**语法格式：**
```python
while条件运算:
  程序区块
```

**实例：** 
```python
# while 循环
i = 0  # 限制条件
while i < 5:  # 循环申明 判断条件
    print('我喜欢 Python !')  # 程序执行的内容
    i += 1  # 限制条件
```
![image-20240521222339167](/public/assets/python%E5%9F%BA%E7%A1%80/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/13.png)

## 2、死循环

```python
i = 0
while i < 5:
    print('我喜欢 Python !')
    # i += 1  # 忘记给限制条件就会造成死循环
```
## 3、while - else 语句

**实例：** 猜数字游戏
```python
answer=30		#正确数字
guess = 0		#设定所猜数字的初始值
while guess != answer:
    guess = int(input("请猜1-100间的数字="))
    if guess > answer:
      print("请猜小一点")
    elif guess < answer:
         print("请猜大一点")
    else:
         print("恭喜答对了")
```
 
![image-20240521222339167](/public/assets/python%E5%9F%BA%E7%A1%80/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/14.png)

## 4、嵌套while循环
**语法格式：**

```python
while条件运算:			#外层while循环
   ···
       while条件运算:	#内层while循环
       ···
```

**实例：** 打印九九乘法表

```python
i =1				#设定i初始值
while i <=9:		#当i大于9跳出外层循环
    j =1			#设定j初始值
    while j <= 9:	#当j大于9跳出内层循环
        result = i* j
        print("%d*%d=%-3d"%(i,j,result),end="")
        j +=1		#内层循环加1
    print()		#换行输出
    i +=1			#外层循环加1
```