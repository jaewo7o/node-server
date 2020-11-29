const express = require('express')

const app = express()
app.listen(3000, function() {
    console.log('Connected 3000 port!')
});

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    res.send('hello world');
});
  