module.exports = {
  port: 3000,//程序启动要监听的端口号
  session: {//express-session的配置信息，后面介绍
    secret: 'myblog',
    key: 'myblog',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost27017/myblog'//mogodb地址，myblog为db名
}