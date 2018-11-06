# Weex 简单学习

## 项目搭建

+ 安装：Java 等系统环境自行解决，`yarn global add weex-toolkit` 安装全局工具，`weex create project-name` 初始化项目，`weex platform add iod/android` 安装平台环境所需资源包

+ 开发：`npm run serve` 开启供 native 调用 bundle 的 hotReload 服务系统，手机上安装 playground 即可扫描 serve 对应的二维码进行开发

+ 调试：安装 weex-devtool，可能会建立一个 socket 和一个调试页面，用 playground 扫描调试页的二维码后，即可进行代码断点及页面节点调试

+ 模拟器调试：`weex run ios`、`weex run android`，需要加载很多内容，容易被墙？报了些错，慢慢来

## 项目开发

### 项目配置

+ 新版本 weex，想搭建一个多页应用，似乎需要在 `configs/webpack.common.conf.js` 里修改 entry。因为有 weexConfig 和 webConfig，每次加一个页面改两处太繁琐，后续考虑做个自动化文件入口加载。暂时只加载 weex 多入口，网页调试会有问题，为啥 router 文件会配置在 config 里，全局只有一个 router 么，通过 router 自动划分 navigator ？

+ 不知道是不是我使用方式错误的问题，总感觉每次增加一个 navigator 和 router 页面文件都需要去配置，是一件很麻烦的事情

### Vue-router 及 Vuex

+ Weex 使用原生的 navigator 来管理页面实例，多个实例之间的状态是隔离的。也就是说，Vuex 和 vue-router 只能作用于当前一个页面，无法在多个页面间共享状态

+ `router-link` 基于 DOM 特性，所以在 Weex 中需要使用编程式导航
