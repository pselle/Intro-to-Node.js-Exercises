var path = require('path');

exports.index = function (req, res) {
    res.sendFile(path.join(__dirname, '../public', 'templates', 'index.html'));
}

exports.about = function (req, res) {
    res.sendFile(path.join(__dirname, '../public', 'templates', 'about.html'));
}

exports.noRoute = function(req,res) {
    res.sendFile(path.join(__dirname, '../public', 'templates', '404.html'));
}