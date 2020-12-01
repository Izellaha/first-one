//登录相关的模块
const express = require('express')
    // const path = require('path')
const router = express.Router()

// let test = require(path.join(__dirname, '../test'))
router.use('/test', async(req, res) => {
    // var ret = await test.operateData(sql, null)
    // if (res)
    res.send('test')
})
router.use('/hello', (req, res) => {
    res.send('hello')
})
module.exports = router