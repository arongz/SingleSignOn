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
app.use(express.static('static-html'))

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


app.get('/add', function (req, res) {
  console.log(req.query.callback)
  var str = req.query.callback + '({"msg": "msg=单点登录成功！"})'
  res.cookie('siteA_manual', '666666', {
    // domain: 'localhost', path: '/',
    // httpOnly: true,
    // sameSite: 'none',
    // secure: true
  })

  res.send(str)
})

app.listen(1111, function() {
  console.log(`Example app listening at http://localhost:1111`)
})
