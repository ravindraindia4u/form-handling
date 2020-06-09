var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars').create({defaultLayout:"main"});

app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname+'/public'));
app.get('/', function(req, res) {
    res.render('index');
});

app.post('/thankyou', function(req, res) {
    res.render('thankyou',{data:req.body});
});

app.get('/thankyou', function(req, res){
    res.render('thankyou',{data:req.query});
})

app.listen(3000);
console.log('Server is running on http://localhost:3000/');