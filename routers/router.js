//登录相关的模块
const express = require('express')
const path = require('path')
const router = express.Router()

let test = require(path.join(__dirname, '../test'))
router.use('/test', async(req, res) => {
    let sql = 'select * from first'
    let ret = await test.operateData(sql, null)
    if (ret && ret.length > 0) {
        res.json({
            status: '0',
            massage: '获取数据成功',
            data: ret
        })
    } else {
        res.json({
            status: '1',
            massage: '获取数据失败'
        })
    }
    // res.send('test')
})
router.use('/hello', (req, res) => {
    res.send('hello')
})
module.exports = router