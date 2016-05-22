var express = require('express');
var app = express();
var homeController = require('./controllers/home');
var apiController = require('./controllers/api');

// Static assets
app.use(express.static('public'));

// View engine
app.set('view engine', 'pug');

// Routes
app.get('/', homeController.index);
app.get('/about', homeController.about);
app.get('/dino', homeController.randomDino);

// API endpoints
app.get('/api/all', apiController.all);
app.get('/api/get/:id', apiController.get);

// Catch-all MUST be at the end
app.get('/*', homeController.noRoute);

app.listen(3000, function () {
    console.log('Your app is listening on port 3000!');
});