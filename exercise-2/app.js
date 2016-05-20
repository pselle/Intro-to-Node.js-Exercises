var express = require('express');
var app = express();

// Routes
app.get('/', function (req, res) {
    res.send('Welcome to the GDI Node Workshop!');
});

app.listen(3000, function () {
    console.log('Your app is listening on port 3000!');
});