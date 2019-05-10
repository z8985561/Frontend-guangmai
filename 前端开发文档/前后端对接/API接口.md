# API接口约定
## 1.API接口返回数据格式
```
{
    "error":0,
    "msg":"success"
    "data":{
        "key1":"value1",
        "key2":"value2",
        "key3":"value3"
    }
}
```
- error 错误代码 0 为成功
- msg 接口提示信息
- data 为返回的接口数据

## 2.前端调用接口的规范
```
//index
const app = getApp();
const core = app.requirejs("core");
Page({
  data:{
    list:[],
    page:1,
    status:1,
  },
  onLoad:function (options) {
    this.getList();
  },
  getList(){
    //显示页面加载提示
    core.loading();
    core.get("order/get_list",{
      page:this.data.page,
      status:this.data.status
    },res=>{
      //隐藏页面加载提示
      core.hideLoading()
      if(res.error==0){
        this.setData({
          list:res.data.list,
          page:this.data.page++
        })
      }else{
        //弹窗展示错误信息
        core.confirm(res.msg)
      }
    })
  }
})
```
