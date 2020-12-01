//登录相关的模块
const express = require('express')
const path = require('path')
const utility = require('utility')
const router = express.Router()

let test = require(path.join(__dirname, '../test'))



router.post('/reguser', async(req, res) => {
    let params = req.body
        // params.password = utility.md5(params.password)

    let csql = 'select id from first where username=?'
    let flag = await test.operateData(csql, params.username)
    if (flag && flag.length > 0) {
        res.json({
            status: 1,
            massage: '用户名重复'
        })
        return
    }
    let sql = 'insert into first set ?'
        // var nm=username:params
    let rete = await test.operateData(sql, params)
    if (rete && rete.affectedRows > 0) {
        res.json({
            status: '0',
            massage: '获取数据成功'
        })
    } else {
        res.json({
            status: 1,
            massage: '获取数据失败'
        })
    }

})





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