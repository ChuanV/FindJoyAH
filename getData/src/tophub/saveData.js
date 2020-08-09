/*
 * @Descripttion: 
 * @version: 
 * @Author: Chuan
 * @Date: 2020-07-31 23:08:58
 * @LastEditors: Chuan
 * @LastEditTime: 2020-08-09 16:54:29
 */ 
const getData = require('./getData')
const hotData = require('../models/hotData')
const dataTitle = require('../models/dataTitle')
const saveData = async function(){
    try{
        let allData = await getData()
        allData.data = allData.data.reduce((acc, val) => acc.concat(val), []);
        await hotData.deleteMany({})
        await dataTitle.deleteMany({})
        await dataTitle.insertMany(allData.allTitle)
        let result = await hotData.insertMany(allData.data)
        return result
    }catch(e){
        console.log(e)
        return false
    }
   
}
setInterval(async()=>{
    let result = await saveData()
    if(!result){
        console.log('数据获取失败')
    }else{
        console.log('数据更新成功')
    }
},1000*60*10)

module.exports = saveData