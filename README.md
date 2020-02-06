# Egret Webpack开发模板

## 模板特性
* 采用Webpack开发，支持Dev server和Live reload，支持Source map调试 *（VSCode内部或Chrome调试）*
* 采用Webpack主入口打包代码，可以使用标准的ES6模块化开发，打包速度也更快，这也是[Egret Pro](http://pro.egret.com/docs/guide/getting-started-from-egret2d/)开始支持的开发打包方式
* 生产环境打包支持文件名增加hash后缀用于线上缓存更新 *（项目涉及的资源文件都支持）*
* Demo代码包含了游戏开发常见的操作：Loading、资源加载、位图和文本添加、动画、声音播放等

## 环境安装
1. 注册并登录[EgretLauncher](https://egret.com/downloads/engine.html)
2. 下载引擎
3. 下载Egret Inspector Chrome插件包，解压Chrome扩展在开发者模式下安装本地压缩包
4. 如果涉及EUI项目开发，下载Egret UI Editor
5. 在Launcher创建项目，打开项目目录，根据模板目录下build/libs.js库列表配置复制libs\modules相关文件到libs（可以从已创建的项目查看对应引擎版本的API文档）
6. Launcher已创建项目的发布设置可以发布相关平台。*（本模板只支持标准的HTML5项目，未研究通过本模板生成Launcher打包文件）*
7. 如果assets/res.json文件，或者此文件配置的相关资源文件有更新，执行npm run hash一次后再npm run build。*（此模板资源版本管理暂不支持多个资源配置文件）*

#  代码调试
* [Weppack TypeScript debug example](https://github.com/kube/vscode-ts-webpack-node-debug-example)
* [Weppack整合TypeScript](https://webpack.js.org/guides/typescript)
* [TypeScript loader for webpack](https://github.com/TypeStrong/ts-loader)
1. tsconfig.json增加"sourceMap": true,
2. build/webpack.dev.config.js设置devtool: 'cheap-module-source-map' [devtool选择quality包含original source](https://webpack.js.org/configuration/devtool)
3. 安装Debugger for Chrome VSCode扩展
4. F5调试选择Chrome，项目自动创建.vscode/launch.json，内容如下：
    ```json
    {
        "version": "0.2.0",
        "configurations": [
            {
                "type": "chrome",
                "request": "launch",
                "name": "Launch Chrome against localhost",
                "url": "http://localhost:8080",
                "webRoot": "${workspaceFolder}"
            }
        ]
    }
    ```
5. npm run dev启动webpack-dev-server，代码打断点，再次F5，然后F10 F11进行断点操作 *（左侧变量Local可看到当前变量值，下方调试控制台输出可看到log）*

# 特别说明
此模板为本人练习[Egret2D](http://developer.egret.com/cn/github/egret-docs/Engine2D/displayObject/displayObject/index.html)开发而设计，只考虑了纯代码编写和独立资源配置文件的应用场景，所以没有增加[EUI](http://developer.egret.com/cn/github/egret-docs/extension/EUI/outline/introduction/index.html)相关配置。