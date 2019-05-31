# core.js 常用方法

## 图片预览 core.showImages()
>通过使用core.showImages(className)。实现图片点击预览功能。
```
<script>
require(['path/core'], function (core) {
  core.showImages(.className img);
}
</script>
```
## 模板引擎 core.tpl()
>通过使用 core.tpl(containerid, templateid, data, append) 。实现生成html模板并且插入到指定的container。

|参数|类型|说明|
|:----:|:----:|:----:|
|containerid|string|容器的类名|
|templateid|string|HTML模板的id名|
|data|object|模板需要渲染的数据|
|append|Boolean|默认false,默认覆盖当前容器内的HTML,true为插入当前容器|
```
<ul class="containerid">
</ul>
<script>
require(['path/core'], function (core) {
  var data = {
    name:"class",
    student:[{
    name:"张三",
    class:"初三(3)班"
  },{
    name:"李四",
    class:"初三(3)班"
  },{
    name:"王五",
    class:"初三(3)班"
  }]
  };
  core.tpl(".containerid", "templateid", data, true)
}
</script>
<script id="templateid">
  <%each student as item%>
  <li>
    <span><%item.name%></span>
    <span><%item.class%></span>
  </li>
  <%/each%>
</script>
```
## 请求方法 core.json()
>core.json(routes, args, callback, hasloading, ispost) 为ajax请求方法的封装。

|参数|类型|说明|
|:----:|:----:|:----:|
|routes|string|请求的地址(url)|
|args|object|请求的参数|
|callback|function|回调函数|
|hasloading|Boolean|是否显示loader，默认false|
|ispost|Boolean|是否为post请求，默认false|

```
<script>
require(['path/core'], function (core) {
  core.json('url', {arg1: arg1, arg2: arg2}, function (res){
    if(res.error == 0){
      //code...
    }else{
      //code...
    }
  },true,true)
})
</script>
```