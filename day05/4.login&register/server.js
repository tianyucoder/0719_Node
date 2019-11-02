const express = require('express')

const app = express()

app.use(express.static(__dirname+'/public'))

app.get('/login',(req,res)=>{
  res.sendFile(__dirname+'/public/login.html')
})

app.get('/register',(req,res)=>{
  res.sendFile(__dirname+'/public/register.html')
})

app.listen(3000,(err)=>{
  if(!err) console.log('服务器启动成功！')
  else console.log(err)
})