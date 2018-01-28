const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));
app.use(express.static('public'));


app.post('/verify', (req, res) => {
  if (req.body.username === 'chris' && req.body.password === 'li') {
  res.send('success');
  }
  else {
  res.sendStatus(400);
  }
})

app.get('/email', (req, res) => {
})

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, './src/', 'index.html'));
});


app.listen(port);
console.log(`Listening on port ${port}`);