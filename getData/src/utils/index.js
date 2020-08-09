/*
 * @Descripttion: 
 * @version: 
 * @Author: Chuan
 * @Date: 2020-08-08 16:56:52
 * @LastEditors: Chuan
 * @LastEditTime: 2020-08-08 17:33:59
 */
const request = require('request-promise-native')
const cheerio = require('cheerio')

/**
 * @name: getHtml
 * @msg: 获取页面html
 * @param {String} url
 * @param {String} method
 * @return {Promise} result
 */
const getHtml = function (url = '', method = 'GET') {
    return new Promise((resolve, reject) => {
        let result = request({ method, url });
        resolve(result)
    })
        .catch(e => {
            reject(e)
        })
}

/**
 * @name: html2$
 * @msg: html转$
 * @param {String} html
 * @param {object} options
 * @return {object} $
 */
const html2$ = function (html, options = { ignoreWhitespace: true }) {
    try {
        return cheerio.load(html, options);
    } catch (e) {
        console.log(e)
    }
}


//导出
module.exports = {
    getHtml,
    html2$,
}