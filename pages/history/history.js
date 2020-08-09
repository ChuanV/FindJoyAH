// pages/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    hasbhistory:true,
    loadingHidden:true,
    isAll:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.getHistory()
  },

  getHistory:function(){
    let h =  wx.getStorageSync('bhistory') 
    h = h.data
    h.reverse()
    if(h.length < 1){
      this.setData({
        hasbhistory:false
      })
    }else{
      if(h.length < 20){
        this.setData({
         list:h,
         isAll:true
        })
      }else{
        this.setData({
          list:h.splice(0,20)
         })
      }
    }
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
    this.setData({
      loadingHidden:false
    })
    let tmp = this.__data__.list
    let h =  wx.getStorageSync('bhistory') 
    h = h.data
    h.reverse()
    if(tmp.length >= h.length){
      this.setData({
        loadingHidden:true,
        isAll:true
      })
      return
    }
    if(h <= 20){
      this.setData({
        loadingHidden:true,
        isAll:true
      })
    }else{
      let remain = h.length - tmp.length
      if(remain <= 20){
        this.setData({
          list:h,
          loadingHidden:true,
          isAll:true
        })
      }else{this.setData({
        list:h.splice(0,tmp.length+20),
        loadingHidden:true,
      })
      }
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})