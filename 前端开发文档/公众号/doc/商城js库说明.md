# 公众号H5商城JS库说明
> 公众号页面采用的是AMD标准的模块化，所以所有页面必须引入require.js库和myconfig-app.js配置文件，如需用到新的JS库，必须使用AMD标准引入。
## myconfig-app.js requirejs 配置文件
```
var version = +new Date();
require.config({
    urlArgs: 'v=' + version,
    baseUrl: '../addons/ewei_shopv2/static/js/app',
    paths: {
        'jquery': '../dist/jquery/jquery-1.11.1.min',
        'jquery.gcjs': '../dist/jquery/jquery.gcjs',
        'tpl':'../dist/tmodjs',
        'foxui':'../dist/foxui/js/foxui.min',
        'foxui.picker':'../dist/foxui/js/foxui.picker.min',
        'foxui.citydata':'../dist/foxui/js/foxui.citydata.min',
        'foxui.citydatanew':'../dist/foxui/js/foxui.citydatanew.min',
        'foxui.street':'../dist/foxui/js/foxui.street.min',
        'jquery.qrcode':'../dist/jquery/jquery.qrcode.min',
        'ydb':'../dist/Ydb/YdbOnline',
        'swiper':'../dist/swiper/swiper.min',
        'jquery.fly': '../dist/jquery/jquery.fly',

    },
    shim: {
        'foxui':{
            deps:['jquery']
        },
        'foxui.picker': {
            exports: "foxui",
            deps: ['foxui','foxui.citydata']
        },
		'jquery.gcjs': {
	                 deps:['jquery']
		},
		'jquery.fly': {
	                 deps:['jquery']
		}
    },
    waitSeconds: 0
});
```

## 配置文件的js库说明
- jquery
- jquery.gcjs——校验表单的jquery插件库
- tpl(tmodjs)——模板引擎js库
- foxui——人人商城UI组件js库
- foxui.picker——人人商城选择器组件JS库
- foxui.citydata——城市数据包
- foxui.citydatanew——新版城市数据包
- foxui.street——街道数据包
- jquery.qrcode——生成二维码JS库
- YdbOnline——网页开发工具包
- swiper.min——移动端网页触摸内容滑动js插件
- jquery.fly——加入购物车抛物线动画效果

## 微信JS库
- jweixin——微信JSSDK
- share.js——微信分享JS库

## 其他js库说明
- clipboard.js——拷贝文字

## 人人商城自己封装的JS库
- core.js——封装了一些常用方法（后续解释）
- init.js——页面初始化JS库
- mobile.js——初始化swiper、视频、语音等