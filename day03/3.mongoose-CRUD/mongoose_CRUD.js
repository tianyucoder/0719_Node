//引入mongoose
let mongoose = require('mongoose')

//1.连接数据库
mongoose.connect('mongodb://localhost:27017/demo',{
  useNewUrlParser: true, //使用一个新的URL解析器，用于解决一些安全性问题。
  useUnifiedTopology: true //使用一个统一的新的拓扑结构。
})

//2.绑定数据库连接的监听
mongoose.connection.on('open',function (err) {
  if(err){
    console.log('数据库连接失败',err)
  }else{
    console.log('数据库连接成功')
    //3.操作数据库

    //把数据库想象成你家的别墅

    //1.请来一个帮你看门的保安 ------
    let Schema = mongoose.Schema

    //2.制定进入你家的规则 --------
    let studentsRule = new Schema({
      stu_id:{
        type:String, //限制学号必须为：字符串
        required:true, //限制学号为必填项
        unique:true //限制学号是唯一的
      },
      name:{
        type:String, //限制姓名必须为：字符串
        required:true, //限制姓名为必填项
      },
      age:{
        type:Number, //限制年龄必须为：字符串
        required:true, //限制年龄为必填项
      },
      sex:{
        type:String, //限制性别必须为：字符串
        required:true, //限制性别为必填项
      },
      hobby:[String], //限制爱好只能为数组，数组中的每一项必须为字符串
      info:Schema.Types.Mixed, //接收所有类型
      date:{
        type:Date,
        default:Date.now()
      },
      enable_flag:{
        type:String,
        default:'Y'
      }
    })

    //3.告诉保安你的规则 -------


  }
})


