// pages/point/point.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    point:0,
    isD:false,
    needPoint:0,
  },
  exchange:function(e){
    let needPoint = e.target.dataset.point
    if(this.__data__.point >= 0){
      this.setData({
        needPoint:needPoint
      })
      this.alert.showAlert()
    }else{
      wx.showToast({
        title: '兑换失败，积分不足！',  // 标题
        icon: 'none',   // 图标类型，默认success
        duration: 1500   // 提示窗停留时间，默认1500ms
    })
    }
  },
   //取消事件
   p_error() {
    this.alert.hideAlert();
  },
  //确认事件
  p_success() {
    this.alert.hideAlert();
    let p = wx.getStorageSync('point') || 0
   let remainPoint =  p - this.__data__.needPoint
   if(remainPoint < 0){
    wx.showToast({
      title: '兑换失败，积分不足！',  // 标题
      icon: 'none',   // 图标类型，默认success
      duration: 1500   // 提示窗停留时间，默认1500ms
  })
   }else{
     wx.setStorageSync('point', remainPoint)
     this.setData({
      point:remainPoint
    })
    wx.setStorageSync('vip', this.__data__.needPoint)
     wx.showToast({
      title: '兑换成功！',  // 标题
      icon: 'success',   // 图标类型，默认success
      duration: 1500   // 提示窗停留时间，默认1500ms
  })
   }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let p = wx.getStorageSync('point') || 0
    this.setData({
      point:p
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.alert = this.selectComponent("#failAlert");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})