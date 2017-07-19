var express = require('express');
var path = require('path');
var url = require('url');


var app = express();


app.use(express.static('public'));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + 'public/index.html'));
});

app.get('/sendLog', function(req, res){
    var url_parts = url.parse(req.url, true);
    console.log("Server got message: " + url_parts.query.msg);
    res.writeHead(  200, {'Content-Type': 'application/json'})
    setTimeout(function(){
        res.end(JSON.stringify(url_parts.query.msg));
    }, 3000)
});


app.listen(8000);

