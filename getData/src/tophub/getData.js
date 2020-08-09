/*
 * @Descripttion: 
 * @version: 
 * @Author: Chuan
 * @Date: 2020-08-08 17:22:49
 * @LastEditors: Chuan
 * @LastEditTime: 2020-08-08 20:06:41
 */
const { getHtml, html2$ } = require('../utils')
let allTitle = []
const getData = async function () {
    let tophub = await getHtml('https://tophub.today/')
    let $ = html2$(tophub)

    let tophubNewPOne = await getHtml('https://tophub.today/c/news')
    let $_NewPOne = html2$(tophubNewPOne)


    let tophubNewPThree = await getHtml('https://tophub.today/c/news?p=3')
    let $_NewPThree = html2$(tophubNewPThree)

    let tophubNewPTwo = await getHtml('https://tophub.today/c/news?p=2')
    let $_NewPTwo = html2$(tophubNewPTwo)
    //综合
    let zhihuData = fetchData($, '#node-6', 'zhihu', '热榜', 'Z') //知乎
    let lishipinData = fetchData($_NewPOne, '#node-70', 'lishipin','排行榜','Z') 
    let wangyiData = fetchData($_NewPThree, '#node-237', 'wangyi','点击榜','Z')
    let jianshuData = fetchData($_NewPThree, '#node-3244', 'jianshu','排行榜','Z')
    let xinlangData = fetchData($_NewPThree, '#node-2392', 'xinlang','排行榜','Z')
    let toutiaoData = fetchData($_NewPTwo, '#node-57', 'toutiao','热文周榜','Z')
    let Z = [zhihuData,lishipinData,wangyiData,jianshuData,toutiaoData,xinlangData]
    //娱乐
    let bilibiliData = fetchData($, '#node-19', 'bilibili', '全站日榜', 'Y')
    let douyinData = fetchData($, '#node-221', 'douyin', '视频榜', 'Y')
    let jiandanData = fetchData($, '#node-72', 'jiandan', '热文榜', 'Y')
    let doubanData = fetchData($, '#node-85', 'douban', '电影榜', 'Y')
    let Y = [bilibiliData, douyinData, jiandanData, doubanData]
    //社区
    let wuaipojieData = fetchData($, '#node-68', 'wuaipojie', '今日热帖', 'S')
    let huxiuData = fetchData($, '#node-32', 'huxiu', '热文榜', 'S')
    let v2exData = fetchData($, '#node-7', 'v2ex', '今日热议', 'S')
    let tianyaData = fetchData($, '#node-46', 'tianya', '热帖', 'S')
    let S = [wuaipojieData, huxiuData, tianyaData, v2exData]
    let w = allTitle
    allTitle = []
    console.log(w)
    return { data: [...Z, ...Y, ...S], allTitle: w }
}

//抽取数据 str为抽取模块id,返回整理好的数据 [href,title,pv]
function fetchData(_$$, str, name, des, classify) {
    let result = []
    let data = _$$(str).find('.nano-content').find('a') //取数据
    let Image =_$$(str).find('.cc-cd-is').find('.cc-cd-lb').find('img').attr('src')
    let title =_$$(str).find('.cc-cd-lb').find('span').text()
    title = title + '  ' + des;
    data.map(function (item) {
        var chapters = _$$(this);
        var tmp = { link: '', title: '', pv: 0, name: '' }
        tmp.link = chapters.attr('href')
        tmp.title = chapters.find('.t').text()
        tmp.pv = chapters.find('.e').text()
        tmp.name = name
        result.push(tmp)
    })
    allTitle.push({ title, img: Image, classify })
    result = result.slice(0, 20)
    return result
}
// getData()
module.exports = getData