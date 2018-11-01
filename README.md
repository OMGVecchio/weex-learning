# Weex 简单学习

## 项目搭建

+ 安装：Java 等系统环境自行解决，`yarn global add weex-toolkit` 安装全局工具，`weex create project-name` 初始化项目，`weex platform add iod/android` 安装平台环境所需资源包

+ 开发：`npm run serve` 开启供 native 调用 bundle 的 hotReload 服务系统，手机上安装 playground 即可扫描 serve 对应的二维码进行开发

+ 调试：安装 weex-devtool，可能会建立一个 socket 和一个调试页面，用 playground 扫描调试页的二维码后，即可进行代码断点及页面节点调试

+ 模拟器调试：`weex run ios`、`weex run android`，需要加载很多内容，容易被墙？报了些错，慢慢来

## 项目开发

### Vue-router

+ `router-link` 基于 DOM 特性，所以在 Weex 中需要使用编程式导航
