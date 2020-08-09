// components/alert.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:'标题'
    },
    content:{
      type:String,
      value:'内容'
    },
    // 弹窗取消按钮文字
    btn_no: {
      type: String,
      value: '取消'
    },
    // 弹窗确认按钮文字
    btn_ok: {
      type: String,
      value: '确定'
    } 
  },

  /**
   * 组件的初始数据
   */
  data: {
    flag: true,
  },

  /**
   * 组件的方法列表
   */
  methods: {
     //隐藏弹框
     hideAlert: function () {
      this.setData({
        flag: !this.data.flag
      })
    },
    //展示弹框
    showAlert () {
      this.setData({
        flag: !this.data.flag
      })
    },
    /*
    * 内部私有方法建议以下划线开头
    * triggerEvent 用于触发事件
    */
   _error () {
    //触发取消回调
    this.triggerEvent("error")
  },
  _success () {
    //触发成功回调
    this.triggerEvent("success");
  }
  }
})
