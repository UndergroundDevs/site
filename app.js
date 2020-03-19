/*var http = require('http'),
    fs = require('fs')
var port = process.env.PORT || 3000
http.createServer(function(req, res) {
    var url = './' + (req.url == '/' ? 'index.html' : req.url)
    fs.readFile(url, function(err, html) {
        if (err) {
            var message404 = "There is no such page! <a href='/'>Back to home page</a>"
            res.writeHead(404, {'Content-Type': 'text/html', 'Content-Length': message404.length})
            res.write(message404)
        } else {
            res.writeHead(200, {'Content-Type': 'text/html', 'Content-Length': html.length})
            res.write(html)
        }
        res.end()
    })
}).listen(port)*/

var express = require('express');
var app = express();

app.get('/',function (req,res){
    res.sendFile(__dirname+'/index.html')
});

app.use('/img',express.static(__dirname + '/img'));
app.use('/css',express.static(__dirname + '/css'));
app.use('/bootstrap',express.static(__dirname + '/bootstrap'));
app.use('/fonts',express.static(__dirname + '/fonts'));
app.use('/js',express.static(__dirname + '/js'));

app.listen(process.env.PORT || 5000,function(){
    console.log('Running done!')
});