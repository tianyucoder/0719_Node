/*
* 不借助任何第三方库，去搭建Node原生服务器
* */

//1.引入Node内置的http模块
let http = require('http')

//2.创造一个“服务员” ---- 创建服务对象
let server = http.createServer(function (request,response) {
  //让服务员开始干活，获取客人点的菜单
  /*
  * (1).request:请求对象，里面包含着客户端给服务器的“东西”
  * (2).response：响应对象，里面包含着服务器要返回给客户端的“东西”
  * */
  response.setHeader('content-type','text/html;charset=utf-8')
  response.end('<h1>你好，我是你生命中的第一个服务器</h1>')
})

//3.指定服务器运行的端口号(绑定端口监听)
server.listen(3000,function (err) {
  if (!err) console.log('服务器启动成功了')
  else console.log(err)
})



