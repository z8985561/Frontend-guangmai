# 公众号H5商城HTML模板说明
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=no">
    <meta name="format-detection" content="telephone=no" />
    <title>H5模板</title>
    <!-- 商城UI样式库（必须） -->
    <link rel="stylesheet" href="lib/foxui/css/foxui.min.css">
    <!-- icon字体 -->
    <link rel="stylesheet" href="fonts/iconfont.css">
    <!-- 商城自定义样式 -->
    <link rel="stylesheet" href="css/foxui.diy.css">
    <!-- requireJS相关引入（必须） -->
    <script src="lib/require.js"></script>
    <script src="js/myconfig-app.js"></script>
    <script language="javascript">
        require(['../js/app/core'], function(modal) {
            modal.init({
                siteUrl: "http://www.w7.cc/",
                baseUrl: "./index.php?i=4&c=entry&m=ewei_shopv2&do=mobile&r=ROUTES"
            })
        });
    </script>
</head>

<body ontouchstart>
    <!-- 人人商城H5模板基本结构 -->
    <!-- fui-page-group主体结构 -->
    <section class='fui-page-group statusbar'>
        <div class='fui-page fui-page-current'>
            <!-- start头部结构（必须） -->
            <div class="fui-header">
                <!-- 左边返回按钮 不需要可以删除-->
                <div class="fui-header-left">
                    <a class="back"></a>
                </div>
                <!-- 标题 -->
                <div class="title">H5模板</div>
                <!-- 右边可以放分享按钮 -->
                <div class="fui-header-right"></div>
            </div>
            <!-- 头部结构end -->
            <!-- start中间内容容器 fui-content（必须） -->
            <div class="fui-content navbar">
                <div class="fui-searchbar bar" style="z-index: 0;">
                    <div class="searchbar" style="background: #f1f1f2; padding: 10px 10px;">
                        <form action="./index.php?i=4&amp;c=entry&amp;m=ewei_shopv2&amp;do=mobile&amp;r=creditshop.lists" method="post" style="position: relative;left:0;top:0;">
                            <input type="submit" class="searchbar-cancel searchbtn" value="搜索" style="top: 0; right: 0">
                            <div class="search-input radius" style="background: #ffffff;">
                                <i class="icon icon-search" style="color: #b4b4b4;"></i>
                                <input type="search" placeholder="请输入关键字进行搜索" class="search" name="keywords" style="text-align: left; color: #999999; background: none;">
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                	<button id="btn">click</button>
                </div>
            </div>
            <!-- 中间内容容器end -->
            <!-- start底部部分  -->
            <!-- 底部区域 -->
            <div class="fui-footer"></div>
            <!-- 底部导航区域 -->
            <div class="fui-navbar"></div>
            <!-- 底部部分end -->
        </div>
    </section>

    <script>
    	//页面初始化（必须）
    	require(['../js/app/init']);
    	//requireJS使用示例
    	require(['jquery','jquery.gcjs'],function($,gc){
    		console.log($)
    	})
    </script>
</body>

</html>
```

## 模板必须的css样式
- foxui.min.css——人人商城标准样式
- foxui.diy.css——人人商城自定义样式
- iconfont.css——字体样式

## REM适配说明
```
html {
	font-size: 20px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	font-family: sans-serif;
}
@media only screen and (min-width: 400px) {
	html {
		font-size: 21.33333333px !important;
	}
}

@media only screen and (min-width: 414px) {
	html {
		font-size: 22.08px !important;
	}
}

@media only screen and (min-width: 480px) {
	html {
		font-size: 25.6px !important;
	}
}
```
- 设备小于400px 1rem=20px
- 设备大于400px 小于 414px 1rem=21.33333333px
- 设备大于414px 小于 480px 1rem=22.08px
- 设备大于480px 1rem=25.6px