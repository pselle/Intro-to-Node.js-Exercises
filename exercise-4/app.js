var express = require('express');
var app = express();
var homeController = require('./controllers/home');

// Static assets
app.use(express.static('public'));

// Routes
app.get('/', homeController.index);
app.get('/about', homeController.about);
app.get('/*', homeController.noRoute);

app.listen(3000, function () {
    console.log('Your app is listening on port 3000!');
});