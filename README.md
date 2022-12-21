# Xsleaks-attack-through-FrameCounting
# XS-leaks attack through iframe 

用户打开页面，window.open会打开目标网站的登录页面，js代码记录打开网址后控制台输出iframe数量，过一段时间后再次输出iframe数量，将两次iframe数打印到表单，表单再传输给node服务器记录到数据库

- Frame Counting 

Access the frame's **[window.length](https://developer.mozilla.org/en-US/docs/Web/API/Window/length)** property which is used to retrieve the number of frames (IFRAME or FRAME) in the window.

**Methods**: Frames, Pop-ups

**Difference**: Page Content

**Summary:** Read number of frames (window.length).

## 怎么样获取页面上iframe 数量

需要使用window.length, 或者window.frames.length;

如果页面中不包含frame和iframe元素, 则返回0;

# iframe 相关

- iframe使用场景

  [iframe](https://so.csdn.net/so/search?q=iframe&spm=1001.2101.3001.7020)可用在以下几个场景中：
  1.典型系统结构，左侧是功能树，右侧就是一些常见的table或者表单之类的。为了每一个功能，单独分离出来，采用iframe.
  2.[ajax](https://so.csdn.net/so/search?q=ajax&spm=1001.2101.3001.7020)上传文件
  3.加载别的网站内容，例如google广告，网站流量分析。
  4.在上传图片时，不用flash实现无刷新。
  5.跨域访问的时候可以用到iframe，使用iframe请求不同域名下的资源。

- Iframe 的好处

  1.iframe是一种html封装，方便相同功能的网页复用代码，可以一定程度上减少开发量，不失为一种代码复 用的好计策；

  2.iframe包含的代码几乎不会受到外界任何js或者css的影响（非常牛B的优点），可谓独树一帜，很任性；这种特点能减少很 多因为复用代码时，导致的css或者是js冲突，调试过程可谓痛苦，而且多半还要在错综复杂的关系纠葛中进 行修改，不小心可能会引入新的问题，iframe完全可以避免这种问题；

  ---

  1.iframe能够把嵌入的网页原样展现出来；

  2.模块分离，便于更改，如果有多个网页引用iframe，只需要修改iframe的内容，就可以实现调用的每一个页面内容的更改，方便快捷；

  3.网页如果为了统一风格，头部和版本都是一样的，就可以写成一个页面，用iframe来嵌套，增加代码的可重用；

  4.如果遇到加载缓慢的第三方内容如图标和广告，这些问题可以由iframe来解决；

  5.重载页面时不需要重载整个页面，只需要重载页面中的一个框架页；

  6.方便制作导航栏。

- **缺点:** 

  1.样式和脚本需要额外链入，调用外部页面,需要额外调用css,增加页面额外的请求次数，增加服务器的http请求；

  2.代码复杂，在网页中使用框架结构最大的弊病是搜索引擎的“蜘蛛”程序无法解读这种页面，会影响搜索引擎优化，不利于网站排名；

  3.框架结构有时会让人感到迷惑，滚动条除了会挤占有限的页面空间外会使iframe布局混乱，还会分散访问者的注意力，影响用户体验；

  4.链接导航疑问。运用框架结构时，必须保证正确配置所有的导航链接，否则，会给访问者带来很大的麻烦。比如被链接的页面出现在导航框架内，这种情况下访问者便被陷住了，因为此时他没有其他地点可去； 

  5.产生多个页面，不易管理；

  6.多数小型的移动设备（PDA 手机）无法完全显示框架，设备兼容性差。

## 开发记录(原声nodejs实现)

攻击者页面内配置乐天旅行的登录界面

用window.open() 打开登录界面

JavaScript记录iframe数，用户登录之后再记录iframe数

控制台信息打印在页面div标签（js实现）

nodejs服务端将iframe信息写入json储存

通过iframe的变化判断用户是否登录页面

# Attack flow window.open()

Get iframe of the page 

攻击页面html + javascript / 后台Node.js

- 使用window.open通常认为是一个不构成危险的选择?
