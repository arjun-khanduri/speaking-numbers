var express=require("express");
var app=express();
var bodyParser=require("body-parser");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
var path=require('path');
app.set("view engine","ejs");
app.get('/',function(req,res) {
    /*res.sendFile('index.html', { root: __dirname });
    res.sendFile('css/app.css', { root: __dirname });
    res.sendFile('js/app.js', { root: __dirname });
    res.sendFile('js/sound/voice.js', { root: __dirname });
    res.sendFile(path.join(__dirname+'/index.html'));*/
    res.render("index");
});
app.listen(8000,function(){
    console.log("Website is online on port 8000 now");
});