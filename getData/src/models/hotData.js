/*
 * @Descripttion: 
 * @version: 
 * @Author: Chuan
 * @Date: 2020-07-31 22:58:57
 * @LastEditors: Chuan
 * @LastEditTime: 2020-07-31 23:07:53
 */ 
const mongoose = require('./connect')
const Schema = mongoose.Schema
var hotDataSchema = new Schema({
    link:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    pv:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model('hotData',hotDataSchema)