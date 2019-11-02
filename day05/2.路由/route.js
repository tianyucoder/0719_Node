let express = require('express')

let app = express()

//request和response都有什么API？
/*
  1.request：
    request.query	获取查询字符串参数（query参数），拿到的是一个对象
    request.params	获取get请求参数路由的参数，拿到的是一个对象
    request.body	获取post请求体，拿到的是一个对象（要借助一个中间件）
    request.get(xxxx)	获取请求头中指定key对应的value
 */

//根路由
app.get('/',function (request,response) {
  console.log(request.query)
  response.send('我是根路由返回的数据--get')
})

//根路由
app.post('/',function (request,response) {
  console.log(request.query)
  response.send('我是根路由返回的数据--post')
})

//一级路由
app.get('/demo',function (request,response) {
  response.send('我是demo路由返回的数据')
})

//二级路由
app.get('/demo/test',function (request,response) {
  response.send('我是demo/test路由返回的数据')
})

//参数路由
app.get('/meishi/:id',function (request,response) {
  console.log(request.params);
  let {id} = request.params
  response.send(`我是${id}商家`)
})

app.get('/meishi/40540606',function (request,response) {
  response.send('我是40540606商家')
})
app.get('/meishi/159064940',function (request,response) {
  response.send('我是159064940商家')
})

app.listen(3000,function (err) {
  if(!err) console.log('ok')
  else console.log(err)
})