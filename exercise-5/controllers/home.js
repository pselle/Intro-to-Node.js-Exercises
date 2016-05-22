var path = require('path');

exports.index = function (req, res) {
    res.render('home');
}

exports.about = function (req, res) {
    res.render('about');
}

exports.noRoute = function(req,res) {
    res.render('404');
}