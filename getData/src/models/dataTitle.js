/*
 * @Descripttion: 
 * @version: 
 * @Author: Chuan
 * @Date: 2020-07-31 22:58:57
 * @LastEditors: Chuan
 * @LastEditTime: 2020-08-01 12:28:26
 */ 
const mongoose = require('./connect')
const Schema = mongoose.Schema
var dataTitleSchema = new Schema({
	title:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    classify:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model('dataTitle',dataTitleSchema)