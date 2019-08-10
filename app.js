var express = require('express');
var app = new express();
var port = 3000;

app.listen(port, function(err) {
    if (typeof(err) == "undefined") {
        console.log("Your application is running on " + port + " port");
    }
});

app.use(express.static('public')); //set public directory to default directory
app.set('views', './src/views'); //tell express where we store our views
app.set('view engine', 'ejs'); //tell express which template engine we are using

var transcriptRouter = require('./src/routes/transcriptRoute')();

app.use('/transcript', transcriptRouter); //using the routers

app.get('/', function(req, res) {
    res.render('index', {
        title:'Lecture Video Transcript Generator'
    });
}); //displaying home page

