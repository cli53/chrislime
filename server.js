const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

// serve static assets normally
app.use(express.static('public'));

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);
console.log(`Listening on port ${port}`);

