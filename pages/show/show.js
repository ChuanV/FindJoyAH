// pages/show/show.js
import {formatTime} from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:'',
    startTime:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        url:options.url
      })
      try {
      let h =  wx.getStorageSync('bhistory')
      let hasIndex
        if(!h){
          let data = {num:1,data:[{url:options.url,title:options.title,time:formatTime(new Date())}]}
          wx.setStorageSync('bhistory', data)
        }else{
          //检测是否已经有该记录
          let hasUrl = h.data.some((item,index)=>{
              if(item.url == options.url){
                hasIndex = index
                return true
              }else{
                return false
              }
          })
          if(hasUrl){
            //更新时间,新记录添加至数组尾
            h.data[hasIndex].time = formatTime(new Date())
            let tmp = h.data[hasIndex]
            h.data.splice(hasIndex,1)
            h.data.push(tmp)
          }else{
            if(h.num >= 500){
              h.data.splice(0,1)
              h.data.push({url:options.url,title:options.title,time:formatTime(new Date())})
            }else{
              h.data.push({url:options.url,title:options.title,time:formatTime(new Date())})
              h.num++
            }
          }
          wx.setStorageSync('bhistory',h)
        }
      } catch (error) {
        console.log(error)
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
    this.setData({
      startTime:Date.now()
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
    try {
      let t =  wx.getStorageSync('btime')
      let h =  wx.getStorageSync('bhistory')
      h = h.num || 0
      let p = wx.getStorageSync('point') || 0
      t = parseFloat(t)
      let time = Date.now() - parseFloat( this.__data__.startTime)
      //秒
      time = time / 1000
      time = Number(time.toFixed(2))
      //最多十分钟
      if(time > 60*50) time = 60*50
       //计算积分
       let point = Number((h*0.02 + time*0.002).toFixed(2))
       wx.setStorageSync('point', Number((p + point).toFixed(2)))
       //保存时间
      if(!t){
        wx.setStorageSync('btime',time)
      }else{
        wx.setStorageSync('btime',time+t)
      }
    } catch (error) {
      console.log(error)
    }
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