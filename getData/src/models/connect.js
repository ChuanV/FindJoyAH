/*
 * @Descripttion: 
 * @version: 
 * @Author: Chuan
 * @Date: 2020-05-12 13:39:23
 * @LastEditors: Chuan
 * @LastEditTime: 2020-07-31 23:29:01
 */
const mongoose = require('mongoose')
const connectStr = 'mongodb://root:ainilaoshengchuan88@47.52.210.190:27017/blog?authSource=admin'
const localStr = 'mongodb://localhost/tianyu'
mongoose.connect(connectStr,{ useNewUrlParser: true,useUnifiedTopology: true} ,(err)=>{
    if(err){
        console.log('连接失败',err);
    }else{
        // console.log('ok')
    }
})
module.exports = mongoose