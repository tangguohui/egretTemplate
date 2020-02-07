# 引擎文档
* [显示对象基本概念](http://developer.egret.com/cn/github/egret-docs/Engine2D/displayObject/displayObject/index.html)
* [APIs文档](http://developer.egret.com/cn/apidoc/)
* [教学示例](http://developer.egret.com/cn/example/egret2d/index.html)
* [项目示例](http://developer.egret.com/cn/list/example/id/13)
* [音频系统](http://developer.egret.com/cn/github/egret-docs/Engine2D/multimedia/audio/index.html) [Sound文档](http://developer.egret.com/cn/apidoc/index/name/egret.Sound)
* [锚点(anchorOffset)](https://www.jianshu.com/p/8161f37c255a)
* [位图字体制作](https://blog.csdn.net/weixin_34032792/article/details/89807566) [自定义位图字体](https://www.cnblogs.com/gamedaybyday/p/11832069.html)
* [深度和子对象管理](http://developer.egret.com/cn/github/egret-docs/Engine2D/displayObject/depthManagement/index.html)
* [纹理的填充方式](http://developer.egret.com/cn/github/egret-docs/Engine2D/bitmapTexture/fillMode/index.html)
* [Timer计时器](http://developer.egret.com/cn/github/egret-docs/Engine2D/timeControl/timeControl/index.html)
* [发送HTTP请求](http://developer.egret.com/cn/github/egret-docs/Engine2D/net/sendHTTP/index.html)
* [碰撞检测](http://developer.egret.com/cn/github/egret-docs/Engine2D/hit/rectangleHit/index.html)
* [使用p2制作跳跃游戏](http://developer.egret.com/cn/github/egret-docs/extension/p2/p2/index.html) [物理小球案例](https://blog.csdn.net/duan003387/article/details/81947782)
* [场景管理](https://blog.csdn.net/u010392459/article/details/83305891) [场景转场动画](https://www.cnblogs.com/jiajunjie/p/9117526.html)

# 第三方库
* [缓动动画](http://developer.egret.com/cn/github/egret-docs/extension/tween/tween/index.html) [egret.Tween文档](http://developer.egret.com/cn/apidoc/index/name/egret.Tween)
* 资源加载：[获取资源的几种方式](http://developer.egret.com/cn/github/egret-docs/extension/RES/getway/index.html) [RES文档](http://developer.egret.com/cn/apidoc/index/name/RES.globalFunction) [资源管理解决方案](https://www.cnblogs.com/gamedaybyday/p/6079694.html)
* [纹理集的使用](http://developer.egret.com/cn/github/egret-docs/Engine2D/bitmapTexture/useTexture/index.html) [Texture Merge的使用教程](https://www.cnblogs.com/egret-edcation/p/9982816.html)

# 视频教程
* [优酷视频](https://i.youku.com/i/UMTY0NzkyMDQ4OA==)
* [腾讯视频](http://v.qq.com/vplus/9c76c903c2690ed7bcfe344f11a106c5)
* [官方视频](http://developer.egret.com/cn/article/index/id/1082)

# 教程链接
* 教程合集：[教程1](https://www.cnblogs.com/gamedaybyday/category/908333.html) [教程2](https://www.cnblogs.com/egret-edcation/)
* [一些性能优化](https://www.cnblogs.com/gamedaybyday/p/9095545.html)
* [简单的画布](https://www.cnblogs.com/gamedaybyday/p/9219926.html)
* [震屏效果](https://www.cnblogs.com/gamedaybyday/p/9219922.html)
* [反向遮罩 (新手指引 镂空 镂空区域可穿透点击)](https://www.cnblogs.com/gamedaybyday/p/9374959.html)
* [对象池Pool](https://www.cnblogs.com/gamedaybyday/p/6083164.html)

# 其它
* [TypeScript Handbook（中文版）](https://zhongsp.gitbooks.io/typescript-handbook/content/index.html)
* 在TypeScript中使用jsx：tsconfig.json增加"jsx":"preserve"，preserve只是支持.tsx文件编辑JSX，但不会把JSX转换为JS，还需要借助babel-loader来进一步转换。[TypeScript支持JSX](https://www.tslang.cn/docs/handbook/jsx.html)
* 另外一个很不错的2D H5游戏框架 [Phaser](http://phaser.io)

# 注意
1. Egret项目需要在WebServer上运行，不能本地直接打开index.html浏览。
2. IE都不支持Promise，需要加载[es6-promise](https://github.com/stefanpenner/es6-promise) [修复](https://segmentfault.com/q/1010000019489657)
3. IE9开始支持Canvas，但是IE9不支持Egret框架使用到的[Uint8Array](https://www.caniuse.com/#search=Uint8Array)，所以Egret不支持IE9及以下的浏览器。
4. 采用TypeScript开发，对于异步编程async/await不再需要[regenerator-runtime](https://github.com/facebook/regenerator)库支持，TS编译器直接转换好了。