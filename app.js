//TESTE
var express = require('express');
var app = express();

/*==============================
            HOME
  ==============================*/
app.get('/',function (req,res){
    res.sendFile(__dirname+'/static/index.html')
});

/*==============================
            ABOUT
  ==============================*/
app.get('/about',function (req,res){
    res.sendFile(__dirname+'/static/about/index.html')
});
app.get('/about/allan-kardec', function(req, res) {
    res.sendFile(__dirname + '/static/about/allankardec.html')
});
app.get('/about/eric-binsfeld', function(req, res) {
    res.sendFile(__dirname + '/static/about/ericbinsfeld.html')
});
app.get('/about/kevson-filipe', function(req, res) {
    res.sendFile(__dirname + '/static/about/kevsonfilipe.html')
});
app.get('/about/pablo-miranda', function(req, res) {
    res.sendFile(__dirname + '/static/about/pablomiranda.html')
});
app.get('/about/wanghley-martins', function(req, res) {
    res.sendFile(__dirname + '/static/about/wanghleymartins.html')
});
/*==============================
            SERVICES
  ==============================*/
  app.get('/services',function (req,res){
    res.sendFile(__dirname+'/static/services/index.html')
});
/*==============================
            CONTACT
  ==============================*/
  app.get('/contact',function (req,res){
    res.sendFile(__dirname+'/static/contact/index.html')
});

/*==============================
            Projects
  ==============================*/
  app.get('/projects',function (req,res){
    res.sendFile(__dirname+'/static/projects/index.html')
  });

/*==============================
            ERRORS
  ==============================*/

app.get('/error/404',function (req,res){
    res.sendFile(__dirname+'/static/error/404.html')
});

app.get('/terms',function (req,res){
  res.sendFile(__dirname+'/static/terms.html')
});

/*==============================
          Static Files
  ==============================*/
app.use('/img',express.static(__dirname + '/static/img'));
app.use('/css',express.static(__dirname + '/static/css'));
app.use('/bootstrap',express.static(__dirname + '/static/bootstrap'));
app.use('/fonts',express.static(__dirname + '/static/fonts'));
app.use('/js',express.static(__dirname + '/static/js'));
app.use('/error',express.static(__dirname + '/static/error'));
app.get('/about/about.css',function (req,res){
    res.sendFile(__dirname+'/static/about/CSS/about.css')
});
app.use('/services/css', express.static(__dirname + '/static/services/css'));
app.use('/projects/css', express.static(__dirname + '/static/projects/css'));
app.use('/contact/css', express.static(__dirname + '/static/contact/css'));

app.use((req, res, next) => {
    res.status(404).redirect('/error/404')
  });
  
  // error handler middleware
  app.use((error, req, res, next) => {
      res.status(error.status || 500).send({
        error: {
          status: error.status || 500,
          message: error.message || 'Internal Server Error',
        },
      });
    });



app.listen(process.env.PORT || 5000,function(){
    console.log('Running done!')
});

/*app.get('*', function(req, res){
    res.status(404).redirect('/error/404')
  });*/