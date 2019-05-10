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
