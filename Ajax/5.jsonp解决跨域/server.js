let express = require('express')

let app = express()
app.use(express.static(__dirname+'/public'))

app.get('/test',function (req,res) {
  let arr = [{},{},{}]
  console.log(`demo(${arr})`) // demo(2,4,6,8,10)
  console.log(`demo(${JSON.stringify(arr)})`) // demo([2,4,6,8,10])
  res.send(`demo(${JSON.stringify(arr)})`)
})

app.listen(3000,function (err) {
  if(err) console.log(err)
  else console.log('演示jsonp解决跨域服务器，启动成功了！')
})