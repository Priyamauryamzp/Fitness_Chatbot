var express = require('express')
var ejs= require("ejs")

var app = express();

//app.use('/static',express.static('public'))
app.use(express.static(__dirname));
app.set('views','./views/pages');

app.set('view engine','ejs');


app.listen(2000);

app.get('/',function(req,res){

  res.render('index');
});