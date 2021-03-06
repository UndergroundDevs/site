//TESTE
require('dotenv/config');
var express = require('express');
var app = express();
var nodemailer = require('nodemailer')


/*==============================
            HOME
  ==============================*/
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/static/index.html')
});

/*==============================
            ABOUT
  ==============================*/
app.get('/about', function(req, res) {
    res.sendFile(__dirname + '/static/about/index.html')
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
app.get('/services', function(req, res) {
    res.sendFile(__dirname + '/static/services/index.html')
});
/*==============================================================================
            CONTACT
  ============================================================================*/
// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // this is to handle URL encoded data
// end parser middleware


// custom middleware to log data access
const log = function(request, response, next) {
    console.log(`${new Date()}: ${request.protocol}://${request.get('host')}${request.originalUrl}`);
    console.log(request.body); // make sure JSON middleware is loaded before this line
    next();
}
app.use(log);
// end custom middleware

// enable static files pointing to the folder "public"
// this can be used to serve the index.html file
app.get('/contact', function(req, res) {
    res.sendFile(__dirname + '/static/contact/index.html')
});

// HTTP POST
app.post("/ajax/email", function(request, response) { // this will be used to send the emails
    const trasposter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_UNDERGROUND,
            pass: process.env.PASSWORD_UNDERGROUND_CARACTERE,
        }
    });

    var textBody = `FROM: ${request.body.name} EMAIL: ${request.body.email} MESSAGE: ${request.body.message}`;
    var htmlBody = `<h2>Underground DEVs</h2><p>from: ${request.body.name} <a href="mailto:${request.body.email}">${request.body.email}</a></p><p>${request.body.message}</p>`;
    var mail = {
        from: 'underdevs.community@gmail.com', // sender address
        to: 'underdevs.community@gmail.com', // list of receivers (THIS COULD BE A DIFFERENT ADDRESS or ADDRESSES SEPARATED BY COMMAS)
        subject: "Underground DEVs", // Subject line
        text: textBody,
        html: htmlBody
    };

    // send mail with defined transport object
    trasposter.sendMail(mail, function(err, info) {
        if (err) {
            console.log(err);
            response.json({ message: "message not sent: error" });
        } else {
            response.json({ message: `Email emviado` });
        }
    });
});
/*==============================================================================
          FIM DE CONTACT
  ============================================================================*/


/*==============================
            Projects
  ==============================*/
app.get('/projects', function(req, res) {
    res.sendFile(__dirname + '/static/projects/index.html')
});

/*==============================
            ERRORS
  ==============================*/

app.get('/error/404', function(req, res) {
    res.sendFile(__dirname + '/static/error/404.html')
});

app.get('/terms', function(req, res) {
    res.sendFile(__dirname + '/static/terms.html')
});

/*==============================
          Static Files
  ==============================*/
app.use('/img', express.static(__dirname + '/static/img'));
app.use('/css', express.static(__dirname + '/static/css'));
app.use('/bootstrap', express.static(__dirname + '/static/bootstrap'));
app.use('/fonts', express.static(__dirname + '/static/fonts'));
app.use('/js', express.static(__dirname + '/static/js'));
app.use('/error', express.static(__dirname + '/static/error'));
app.get('/about/about.css', function(req, res) {
    res.sendFile(__dirname + '/static/about/CSS/about.css')
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



app.listen(process.env.PORT || 5000, function() {
    console.log('Running done in port 5000!')
});
