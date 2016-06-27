var express = require("express");
var app = express();

app.get('/', function(req, res){
    var os = req.headers['user-agent'];
    os = os.slice(os.indexOf('(') + 1, os.indexOf(')'));
    var language = req.headers['accept-language'];
    language = language.slice(0, language.indexOf(','));
    var obj = {
        ipaddress: req.headers['x-forwarded-for'],
        language: language,
        software: os
    }
    res.json(obj);
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server is up!');
})