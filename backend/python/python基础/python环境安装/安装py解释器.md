# 一、安装Python解释器

## 1、去官网下载安装包
<p>Python 的解释器是开源免费的，可以直接去官方网站进行下载</p>


下载地址 [Python官网](https://www.python.org/ ) 然后点击 Downloads

![image-20240521222339167](/public/assets/python%E5%9F%BA%E7%A1%80/py%E5%AE%89%E8%A3%85/01.png)

然后选择需要的解释器版本

![image-20240521222339167](/public/assets/python%E5%9F%BA%E7%A1%80/py%E5%AE%89%E8%A3%85/02.png)

根据你电脑系统以及的位数

![image-20240521222339167](/public/assets/python%E5%9F%BA%E7%A1%80/py%E5%AE%89%E8%A3%85/03.png)

## 2、安装解释器

下载到本地后，双击打开开始安装
![image-20240521222339167](/public/assets/python%E5%9F%BA%E7%A1%80/py%E5%AE%89%E8%A3%85/04.png)

<p>记得勾选 Add Python 3.9 to PATH，这是把你的 Python 路径加入到系统环境变量中。如果不想自定义选择安装路径，可以直接点击 Install Now，如果要选择安装路径，点击下图位置</p>

![image-20240521222339167](/public/assets/python%E5%9F%BA%E7%A1%80/py%E5%AE%89%E8%A3%85/05.png)

然后全部选上，然后点击 Next

![image-20240521222339167](/public/assets/python%E5%9F%BA%E7%A1%80/py%E5%AE%89%E8%A3%85/06.png)

<P>这里根据需要进行打勾，一般默认就行，然后点击 Browse ，选择你想要把 Python 安装到的哪那个目录里。</P>

<p>然后再直接点击 Install 开始安装。</p>

![image-20240521222339167](/public/assets/python%E5%9F%BA%E7%A1%80/py%E5%AE%89%E8%A3%85/07.png)

安装过程只要几分钟就行

![image-20240521222339167](/public/assets/python%E5%9F%BA%E7%A1%80/py%E5%AE%89%E8%A3%85/08.png)


出现如下界面，说明安装过程已经结束

![image-20240521222339167](/public/assets/python%E5%9F%BA%E7%A1%80/py%E5%AE%89%E8%A3%85/09.png)

<p>安装是安装上了，那么如何验证呢？</p>


使用 windows搜索 `cmd`，选择 `命令提示符` (我们把这个称之为你的终端)

![image-20240521222339167](/public/assets/python%E5%9F%BA%E7%A1%80/py%E5%AE%89%E8%A3%85/10.png)

然后敲入 python ，若出现如下界面，则说明 Python 已经成功安装到你的机器上

![image-20240521222339167](/public/assets/python%E5%9F%BA%E7%A1%80/py%E5%AE%89%E8%A3%85/11.png)

## 3、pip 的使用
安装软件包：`pip install 包名`


- 升级 pip 自身：`pip install --upgrade pip`
- 查看已经通过 pip 安装的包：`pip list`
- 显示当前已经通过 pip 安装的包及版本号：`pip freeze`
- 安装本地的安装包：`pip install` 目录|文件名

##  4、pip 镜像源

pip 国内的一些镜像

- 阿里云 [http://mirrors.aliyun.com/pypi/simple/](http://mirrors.aliyun.com/pypi/simple/) 
- 中国科技大学 [https://pypi.mirrors.ustc.edu.cn/simple/](https://pypi.mirrors.ustc.edu.cn/simple/) 
- 豆瓣 [http://pypi.douban.com/simple/](http://pypi.douban.com/simple/) 
- 清华大学 [https://pypi.tuna.tsinghua.edu.cn/simple/](https://pypi.tuna.tsinghua.edu.cn/simple/) 
- 中国科学技术大学 [http://pypi.mirrors.ustc.edu.cn/simple/](http://pypi.mirrors.ustc.edu.cn/simple/) 

注：使用国内的镜像源，安装各种包速度会快一些
