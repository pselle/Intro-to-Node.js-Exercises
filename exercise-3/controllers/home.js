exports.index = function (req, res) {
    res.send('Welcome to the GDI Node Workshop!');
}

exports.about = function (req, res) {
    res.send('This is my about page');
}

exports.noRoute = function(req,res) {
    res.send('Sorry, we couldn\'t find that page');
}