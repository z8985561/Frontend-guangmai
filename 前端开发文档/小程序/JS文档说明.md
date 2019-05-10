# 小程序相关JS文档说明

## 1. app.js (小程序初始化JS文件)
>App() 必须在 app.js 中调用，必须调用且只能调用一次。不然会出现无法预期的后果。
>[app.js相关说明](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html)
### 1.1 app.js相关JS方法说明
>getApp()是获取到小程序全局唯一的 App 实例
使用方法如下
```
//index.js下使用
const app = getApp()
console.log(app.globalData) //global data
```
### 1.2 app实例下的一些常用方法
- requirejs 引入依赖的封装方法
```
//index.js下使用
const app = getApp()
const core = app.requirejs("core")
```
- getCache 获取缓存
```
const app = getApp()
//获取isIpx 如何是iPhone X返回iPhone X
var isIpx = app.getCache('isIpx');
```
- setCache: function("key", value, time) 设置缓存
```
const app = getApp();
app.setCache("key",value)
```
- removeCache:function("key") 清除缓存
```
const app = getApp();
app.removeCache("key")
```
- getUserInfo(callback,null,{iv,encryptedData})
>获取用户信息后执行的函数其中callback为成功的回调，最后一个参数为传给后端的用户加密的信息
```
const app = getApp();
//当用户点击授权后执行的函数
//options为微信官方返回的用户参数
userinfo: function(options) {
  var a = options.detail.iv,
    e = options.detail.encryptedData;
  console.log(options.detail.userInfo)
  if (options.detail.userInfo) wx.showLoading({
    title: '正在授权',
    mask: true
  })
  if (options.detail.userInfo) {
    t.getUserInfo(null, null, {
      iv: a,
      encryptedData: e
    });
  }
}
```

## 2. core.js (小程序常用方法文件)
### 2.1 引入core.js和使用
```
const app = getApp();
const core = app.requirejs("core");
core.get("diypage/index/main",{'type': 'index'},res=>{
  if(res.error==0){
    //code...
  }
})
```
### 2.2 core一些常用的方法
- .get("url",param,callback)
> get请求方法
```
const app = getApp();
const core = app.requirejs("core");
core.get("diypage/index/main",{'type': 'index'},res=>{
  if(res.error==0){
    //code...
  }
})
```
- .post("url",param,callback)
>post请求方法
```
const app = getApp();
const core = app.requirejs("core");
core.post("diypage/index/main",{'type': 'index'},res=>{
  if(res.error==0){
    //code...
  }
})
```
- .alert(msg)
>弹窗方法
```
const app = getApp();
const core = app.requirejs("core");
app.alert("hello world!")
```
- .confirm("msg",successCallback,failCallback)
>
```
const app = getApp();
const core = app.requirejs("core");
app.confirm("你是不是帅哥？",()=>{
  console.log(true)
},()=>{
  console.log(false)
})
```
- .loading(msg) .hideLoading()
>加载提示 msg默认值为==加载中==
```
const app = getApp();
const core = app.requirejs("core");
core.loading("我在加载中")
//隐藏加载提示
core.hideLoading()
```
- .toast(msg,icon)
>轻提示方法 icon值（success,loading,none）
```
const app = getApp();
const core = app.requirejs("core");
core.toast("成功提交","success")
```
- .upload(callback)
>图片上传方法
```
const app = getApp();
const core = app.requirejs("core");
Page({
  data:{
    imgArr:[]
  },
  onLoad:function (options) {

  },
  uploadImg:function(){
    var imgArr = this.data.imgArr
    core.upload(res=>{
      this.setData({
        imgArr:imgArr.push(res.filename)
      })
    })
  }
})
```
- .pdata 获取事件属性(e.currentTarget.dataset)
```
const app = getApp();
const core = app.requirejs("core");
Page({
  data:{

  },
  onLoad:function (options) {

  },
  onclick:function(e){
    var dataset = core.pdata(e)
    //等同于
    var dataset = e.currentTarget.dataset;
  }
})
```
- .cartcount(this) 获取购物车数量等方法
> this的指向为当前Page页面实例
```
const app = getApp();
const core = app.requirejs("core");
Page({
  data:{
    cartcount:0
  },
  onLoad:function (options) {
    core.cartcount(this)
  }
})
```

## 3.wxParse——微信小程序富文本解析组件
### wxParse使用步骤
1. Copy文件夹wxParse
```
- wxParse/
  -wxParse.js(必须存在)
  -html2json.js(必须存在)
  -htmlparser.js(必须存在)
  -showdown.js(必须存在)
  -wxDiscode.js(必须存在)
  -wxParse.wxml(必须存在)
  -wxParse.wxss(必须存在)
  -emojis(可选)
```
2. 引入必要文件
```
//在使用的View中引入WxParse模块
var WxParse = require('../../wxParse/wxParse.js');
```
```
//在使用的Wxss中引入WxParse.css,可以在app.wxss
@import "/wxParse/wxParse.wxss";
```
3. 数据绑定
```
var article = '<div>我是HTML代码</div>';
/**
* WxParse.wxParse(bindName , type, data, target,imagePadding)
* 1.bindName绑定的数据名(必填)
* 2.type可以为html或者md(必填)
* 3.data为传入的具体数据(必填)
* 4.target为Page对象,一般为this(必填)
* 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
*/
var that = this;
WxParse.wxParse('article', 'html', article, that, 5);
```
4. 模版引用
```
// 引入模板
<import src="你的路径/wxParse/wxParse.wxml"/>
//这里data中article为bindName
<template is="wxParse" data="{{wxParseData:article.nodes}}"/>
```
5. 使用案例(以商品详情为例)
```
//index.js
const app = getApp();
const core = app.requirejs("core");
const wxparse = app.requirejs("wxParse/wxParse");
Page({
  data:{
    wxParseData:{},
    wxParseData_buycontent:{}
  },
  onLoad:function (options) {
    var that = this;
    var {id} = options;
    core.get("goods/get_detail",{id},res=>{
      if(res.error == 0){
        wxparse.wxParse("wxParseData", "html", res.goods.content, that, "5"),
      wxparse.wxParse("wxParseData_buycontent", "html", res.goods.buycontent, that, "5")
      }
    })
  }
})
```
```
//index.wxml
<import src="/utils/wxParse/wxParse.wxml" />
<view class='wxParse'>
  <template is='wxParse' data='{{ wxParseData:wxParseData.nodes }}' />
</view>
```
```
//index.wxss
@import "/utils/wxParse/wxParse.wxss";
```