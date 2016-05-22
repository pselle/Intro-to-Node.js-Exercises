var path = require('path');
var fs = require('fs');

exports.all = function (req, res) {
  var jsonPath = path.join(__dirname, '/../data/dinosaurs.json');
  // With a database, this would be something like sql.query(something)
  fs.readFile(jsonPath, 'utf-8', function(err, data) {
    if (err) throw err;

    res.send(JSON.parse(data));
  });
}

exports.get = function(req, res) {
  var jsonPath = path.join(__dirname, '/../data/dinosaurs.json');
  fs.readFile(jsonPath, 'utf-8', function(err, data) {
    if (err) throw err;
    // Parse the JSON and return only the dinosaur at the given
    // req.params.id index in the dinosaurs array
    // Ex. /api/get/0 will return the first dinosaur in the array
    var database = JSON.parse(data);
    var myDino = {
      dinosaur: database.dinosaurs[req.params.id]
    };

    res.send(myDino);
  });
}