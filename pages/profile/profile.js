// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   num:0,
   time:'0.00',
   point:'0.00',
   vip:500
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let h = wx.getStorageSync('bhistory')
    let t = wx.getStorageSync('btime')
    let vip = wx.getStorageSync('vip') || 0
    t = t || 0
    h= h.num || 0
    let point = wx.getStorageSync('point') || 0
    // wx.setStorageSync('point',200)
    if(t < 60){
      t = t.toFixed(2) + '秒'
    }else if(t >= 60 && t < 3600){
      t =(Number(t) / 60 ).toFixed(2)+ '分'
    }else if(t >= 3600 && t < 86400){
      t =(Number(t) / 3600 ).toFixed(2)+ '时'
    }else{
      t =(Number(t) / 86400).toFixed(2)+ '天'
    }
    if(point >= 10000){
      point = (Number(point) /10000).toFixed(2) + 'W'
    }
    this.setData({
      num:h,
      time:t,
      point:point,
      vip:vip
    })
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