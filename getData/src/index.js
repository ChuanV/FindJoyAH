/*
 * @Descripttion: 
 * @version: 
 * @Author: Chuan
 * @Date: 2020-07-31 22:41:13
 * @LastEditors: Chuan
 * @LastEditTime: 2020-08-09 18:16:42
 */ 
const express = require('express')
const https = require('https');
const fs = require('fs');
const dataTitle = require('./models/dataTitle')
const hotData = require('./models/hotData')
const app = express()

var options = {
    key:fs.readFileSync('./https/tianyu.xie-yuxiang.com.key'),
    cert:fs.readFileSync('./https/tianyu.xie-yuxiang.com.pem')
}

var httpsServer = https.createServer(options,app);

app.get('/getDataTitle',async(req,res)=>{
    let s = await dataTitle.find({})
    res.json(
        {
            s:s.allTitle
        }
    )
})
app.get('/getHotLists',async(req,res,next)=>{
    let name = req.query.name || 'zhihu'
    try{
        let list = await hotData.find({name})
        res.json({
            list
        })
    }catch(e){
        next(e)
    }
})
app.use((err,req,res,next)=>{
	console.log(err)
	res.sendStatus(err.httpStatusCode).json(err)
})
httpsServer.listen(5000,()=>{
    console.log('App running at port 5000 ...')
})

// getData()
// .then(res=>{
//     console.log(res)
// })