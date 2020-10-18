var express = require('express');
var app = express();
var fetch = require('node-fetch');
var bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

var call;
const port = process.env.PORT || 3000;


app.get('/', function(req, res){
    fetch('http://xkcd.com/info.0.json')
    .then(res => res.json())
    .then(data => {
        res.render('index', {data: data})

})
});
app.get('/rcomic', function(req, res){
    num = Math.floor(Math.random() * 2373);
    fetch('http://xkcd.com/'+ num +'/info.0.json')
    .then(res => res.json())
    .then(data => {
        res.render('rcomic', {data: data})

})
});

/*app.get('/', function(req, res){
    request('http://xkcd.com/info.0.json', function (error, response, body) {
    call = JSON.parse(body);
    var day = call.day;
    var month = call.month;
    var year = call.year;
    var title = call.title
    var alt = call.alt;
    var image = call.img;
    res.render('index', {day:day, month:month, year:year, title:title, alt:alt, image:image});
});
});

app.get('/comic', function(req, res){
    num = Math.floor(Math.random() * 2372); 
    request('http://xkcd.com/'+num+'/info.0.json', function (error, response, body) {    
    call = JSON.parse(body);
    var day = call.day;
    var month = call.month;
    var year = call.year;
    var title = call.title
    var alt = call.alt;
    var image = call.img;
    res.render('comic', {day:day, month:month, year:year, title:title, alt:alt, image:image});
});
});*/

 app.listen(port, function(){});