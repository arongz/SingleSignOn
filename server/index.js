var express = require('express')
const session = require('express-session');
const cors = require('cors');

var app = express()


// var corsOptions = {
//   origin: '*',
//   //这一项是为了跨域专门设置的
//   credentials: true,
//   maxAge: '1728000'
// }
// app.use(cors(corsOptions));

var requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}
app.use(requestTime)


// app.all('*', function (req, res, next) {
//   // res.header("Access-Control-Allow-Origin", "*");
//   // let originHeader=req.headers.origin;
//   // res.header("Access-Control-Allow-Origin", originHeader);
//   // console.dir('req.headers.origin----->' + req.headers.origin)
//   // res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
//   // res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//   // res.header("X-Powered-By", ' 3.2.1')
//   // res.header("Content-Type", "application/json;charset=utf-8");
//   // res.header("Access-Control-Allow-Credentials", true);
//   // next();
// });


app.get('/', function (req, res) {
  var responseText = 'Hello World!<br>'
  responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  res.cookie('aaa__7777333', 'Zhong', {
    domain: 'localhost', path: '/',
    httpOnly: true,
    sameSite: 'none',
    secure: true
  })

  res.send(responseText)
})

app.get('/jsonp', function (req, res) {
  // let originHeader=req.headers.origin;
  // res.header("Access-Control-Allow-Origin", originHeader);
  // console.dir('req.headers.origin----->' + req.headers.origin)
  // res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  // res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  // res.header("X-Powered-By", ' 3.2.1')
  // res.header("Content-Type", "application/json;charset=utf-8");
  // res.header("Access-Control-Allow-Credentials", true);


  // var str = req.query.callback + '({"msg": "msg=这里服务端传来的消息！"})'
  
  // res.header("Access-Control-Allow-Headers","*");
  // res.header('Access-Control-Allow-Credentials', true);
  // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  // console.dir(req.headers.cookie)
  // res.cookie('jsonpppp__889000', 'Zhong', { domain: 'localhost'})
  // res.cookie('jsonpppp222__889000', 'Zhong')
  // res.send(str)

  res.redirect(302, 'http://127.0.0.1:1111/add?callback=' + req.query.callback);
})

app.listen(3001, function() {
  console.log(`Example app listening at http://localhost:3001`)
})
