var path = require('path')
var express = require('express');
var app = express();


var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');

app.set('views', path.join(__dirname, 'views'));//设置存放文件模板的目录
app.set('view engine', 'ejs');//设置模版引擎为 ejs :将一个页面模板和数据结合起来生成html的工具

app.use('/', indexRouter);//通过app.use挂载不同的路径
app.use('/users', userRouter);


app.listen(3000);

