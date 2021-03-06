// 引用express
const express = require('express') //模块化
const app = express() // 建立express实例


//解决跨域问题
//require 是一个函数
app.use(require('cors')())

//定义路由 两个参数request,response----> 客户端请求和客户端响应
app.use('/', express.static('public'))

app.get('/about', (req, res) => {
  res.send({ page: 'About Us' })
})
app.get('/products', (req, res) => {
  res.send([
    { id: 1, title: 'Product A' },
    { id: 2, title: 'Product B' },
    { id: 3, title: 'Product C' }
  ])
})

// 监听
app.listen(3000, () => {
  console.log('App listening on port 3000');
})