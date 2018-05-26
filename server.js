const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// 跨域设置
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true)
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/x-www-form-urlencoded")
  next()
})

app.use(require('connect-history-api-fallback')())
//app.use(express.static('public'));
app.use('/oauth2/access_token', require('./router/auth'))
app.use('/users/show.json', require('./router/userInfo'))
app.use('/2/statuses/home_timeline.json', require('./router/timeline'))



const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`server running @${port}`);
})
