const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8080;
const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));
app.use(express.static('dist'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.post('/verify', (req, res) => {
    console.log('REQ BODY:', req.body);
    if(req.body.smoker === 'smoker') res.json('success')
//   if (req.body.username === 'chris' && req.body.password === 'li') {
//   res.send('success');
//   }
//   else {
//   res.sendStatus(400);
//   }
})

// app.get('/email', (req, res) => {
// })

// app.get('*', (request, response) => {
//   response.sendFile(path.resolve(__dirname, './src/', 'index.html'));
// });


app.listen(port);
console.log(`Listening on port ${port}`);