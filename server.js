const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(require('connect-history-api-fallback')())
app.use(express.static('public'));
app.use('/oauth2/access_token', require('./router/auth'))
app.use('/users/show.json', require('./router/userInfo'))
app.use('/2/statuses/home_timeline.json', require('./router/timeline'))



const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`server running @${port}`);
})
