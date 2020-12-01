const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')


app.use(cors())
let routers = require(path.join(__dirname, 'routers/router.js'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.listen(8888, () => {
    console.log('running...');
})


app.use('/api', routers)
app.get('/an', (req, res) => {
    var params = req.query
    console.log(params);
    res.send('hello')
})