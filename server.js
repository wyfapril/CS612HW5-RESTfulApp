var express = require('express');
var app = express();
var fs = require("fs");
var path = require("path");

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  // console.log(path.join(__dirname, "index.html"));
	res.sendFile(path.join(__dirname, "index.html"));
})

app.get('/allemojis', function (req, res) {
   fs.readFile( __dirname + "/" + "emojiData.json", 'utf8', function (err, data) {
      // console.log( data );
      res.end( JSON.stringify(data, null, 4));
   });
})

app.get('/emoji/:id', function (req, res) {
   fs.readFile( __dirname + "/" + "emojiData.json", 'utf8', function (err, data) {
      var emojis = JSON.parse( data );
      var emo = emojis["emoji" + req.params.id] 
      // console.log(path.join(__dirname)+'\\'+emo.location);
      res.set('Content-Type', 'image/png');
      res.sendFile(path.join(__dirname, emo.location));
   });
})


var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at ", port)

})