let express = require('express')

let app = express()

//暴露静态资源
app.use(express.static(__dirname+'/public'))

app.get('/ajax_get',function (req,res) {
  res.send('你发来的是get请求，我收到了')
})

app.listen(3000,function (err) {
  if(err) console.log(err)
  else {
    console.log('兄弟，别用编译器打开网页，会产生跨域问题！！！')
    console.log('点击这里去练习吧：http://localhost:3000/ajax_get.html')
  }
})