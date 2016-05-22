var request = require('request');

exports.index = function (req, res) {
    res.render('home');
}

exports.about = function (req, res) {
    res.render('about');
}

exports.noRoute = function(req,res) {
    res.render('404');
}

exports.randomDino = function(req, res) {
    // Find a "random" number (that exists in our 
    // array of dinos, since we know the length)
    var number = Math.floor(Math.random() * 1400); // there are at least 1400 in there!

    request('http://localhost:3000/api/get/' + number, function(err, response, body) {
        if(!err && response.statusCode == 200) {
            res.render("randomDino", {
                dinosaur: JSON.parse(body).dinosaur
            }); 
        }
        // If we have an error, show it on the server so we can fix!
        if(err) console.log(err);  
    })
}