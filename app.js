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
    res.sendFile(__dirname+'/static/index.html')
});
app.get('/about',function (req,res){
    res.sendFile(__dirname+'/static/about/index.html')
});

app.get('/404',function (req,res){
    res.sendFile(__dirname+'/static/error/404.html')
});

app.use('/img',express.static(__dirname + '/static/img'));
app.use('/css',express.static(__dirname + '/static/css'));
app.use('/bootstrap',express.static(__dirname + '/static/bootstrap'));
app.use('/fonts',express.static(__dirname + '/static/fonts'));
app.use('/js',express.static(__dirname + '/static/js'));
app.use('/error',express.static(__dirname + '/static/error'));

app.listen(process.env.PORT || 5000,function(){
    console.log('Running done!')
});