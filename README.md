# 个人用的fis3demo
## 项目介绍  
初始化用demo项目
> ## 注意事项 
个人用fis3初始化目录
## 项目操作
### 依赖文件安装
#### 安装npm的淘宝源
`npm install -g cnpm --registry=https://registry.npm.taobao.org`
#### 用淘宝源安装依赖
`cnpm i -g fis3`  
在项目目录中运行1
`cnpm i`
### 运行项目
`npm run dev`
### 打包项目
`npm run build`
## 项目说明
src为项目根目录  
通用的静态文件包括css、img、js放置于assets中  
各自的代码在pages中新建文件夹，放置其中，例如demo
widgets中存放公共的部分，例如header、footer这些，引用的示例可以看demo中的代码
