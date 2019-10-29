/*
*  fs.readFile(path[, options], callback)
*     --path：要读取文件的路径+文件名+后缀
*     --options：配置对象（可选）
*     --callback：回调
*         --err：错误对象
*         --data：读取出来的数据
* */

let fs = require('fs')

fs.readFile(__dirname+'/test.mp4',function (err,data) {
    if(err) console.log(err)
    else console.log(data)
    fs.writeFile('../haha.mp4',data,function (err) {
      if(err) console.log(err)
      else console.log('文件写入成功')
    })
  /*
  * 为什么读取出来的东西是Buffer？ 用户存储的不一定是纯文本
  * */
})