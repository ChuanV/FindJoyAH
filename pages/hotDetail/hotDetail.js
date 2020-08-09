// pages/hotDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:'',
    Imagesrc:'',
    title:'',
    isSuccess:true,
    name:'',
    loadingHidden: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      Imagesrc:options.src,
      title:options.title,
      name:options.name
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // let that = this
    this.alert = this.selectComponent("#failAlert");
    this.getLists()
  },
  //获取数据列表
  getLists:function(){
    let that = this
    wx.request({
      url: 'https://tianyu.xie-yuxiang.com:5000/getHotLists', //仅为示例，并非真实的接口地址
      data:{
        name:that.__data__.name
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        that.setData({
          loadingHidden: true,
          list:res.data.list
        })
      },
      fail(e){
        that.setData({
          loadingHidden: true,
        })
        that.alert.showAlert()
      },
      complete: function() {
        // complete
        wx.hideNavigationBarLoading() //完成停止加载
        wx.stopPullDownRefresh() //停止下拉刷新
      }
    })
  },
  //取消事件
  _error() {
    this.alert.hideAlert();
  },
  //确认事件
  _success() {
    this.alert.hideAlert();
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
    wx.showNavigationBarLoading() //在标题栏中显示加载
    this.getLists()
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