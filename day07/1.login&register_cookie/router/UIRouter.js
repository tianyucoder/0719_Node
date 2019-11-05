/*
* 专门用于管理展示界面的UI路由
* */

//引入Router构造函数
const {Router} = require('express')
//创建一个Router实例（路由器就是一个小型的app）
const cookieParser = require('cookie-parser')
let router = new Router()
//引入path模块----Node中内置的一个专门用于解决路径问题的库
let {resolve} = require('path')
router.use(cookieParser())

//用于展示登录界面的路由，无其他任何逻辑 ----- UI路由
router.get('/login',(req,res)=>{
  const {email} = req.query
  res.render('login',{errMsg:{email}})
})

//用于展示注册界面的路由，无其他任何逻辑 ----- UI路由
router.get('/register',(req,res)=>{
  res.render('register',{errMsg:{}})
})

//用于展示个人中心界面的路由，无其他任何逻辑 ----- UI路由
router.get('/user_center',(req,res)=>{
  const {nick_name} = req.cookies
  if(nick_name){
    res.render('userCenter',{nickName:nick_name})
  }else{
    res.redirect('http://localhost:3000/login')
  }
})

module.exports = function () {
  return router
}