//1.浏览器端，js由哪几部分组成？
/*
*  1.BOM ----> window 浏览器对象模型 -------- 很多的API（location，history）
*  2.DOM ----> document 文档对象模型 ---------- 很多的API（对DOM的增删改查）
*  3.ES规范 -------------------- ES5、ES6.....
*/

//2.Node端，js由几部分组成？
/*
*   1.没有了BOM ----->  因为服务器不需要（服务端没有浏览器对象）
*   2.没有了DOM ----->  因为没有浏览器窗口
*   3.几乎包含了所有的ES规范
*   4.没有了window，但是取而代之的是一个叫做global的全局变量。
* */

//3.global的一些常用属性，以及Node的事件循环模型
/*
clearImmediate:清空？？？？
clearInterval:清除循环定时器
clearTimeout: 清除延迟定时器

setImmediate:设置？？？
setInterval:设置循环定时器
setTimeout: 设置延迟定时器
*/

/*
*
  第一个阶段：timers
  第二个阶段：pending callbacks
  第三个阶段：idle, prepare
  第四个阶段：poll
  第五个阶段：check
  第六个阶段：close callbacks
*/

//在Node中禁止函数的this指向global，而是指向了一个空对象
console.log(this)
console.log(global)