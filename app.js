//jshint esversion:6
const express = require("express");
const app = express();

const fetch = require('node-fetch');
const bodyParser = require("body-parser");
const ejs = require("ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use("/public", express.static('./public/'));
var favicon = require('serve-favicon');
app.set('view engine', 'ejs');
app.use(favicon(__dirname + '/public/images/favicon2.ico'));

let imageSrc = null;
let backgroundColor = "";

let url = "https://bigvu-interviews-assets.s3.amazonaws.com/presenters.json";

let settings = { method: "Get" };
var images = {};
fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        //console.log(json);
        images = json
        //console.log(j);
        // do something with JSON
    });

app.get("/white", async function(req, res){
    //console.log(j);
    let title = "Assignment 2";
    backgroundColor = "white";
    imageSrc = images[2].value;
    console.log(images[0].value);
    res.render("home",{images:images,backgroundColor:backgroundColor,title:title})
});
app.post("/white", function(req,res){
    if(req.body.check === "Choose Picture")
    {
        res.render("home",{images:images});
    }
    if(req.body.blue === ""){
        res.redirect("blue");
    }
    else{
    //document.getElementById("demo").innerHTML = "My First JavaScript";

    console.log(req.body);
    // console.log(images[req.body.check].name);
     backgroundColor = "white";
    // imageSrc = images[req.body.check].value;
    imageSrc = ""
    let title = "white"
    console.log("in node");

    res.render("home",{images:images,imageSrc:imageSrc,backgroundColor:backgroundColor,title:title})
    }
})
app.get("/blue",function(req,res){
    console.log("in blue");
    let title = "Assignment 2"
    backgroundColor = "blue";
    //imageSrc = images[0].value;
    res.render("home",{images:images,backgroundColor:backgroundColor,title:title})
})
app.post("/blue",function(req,res){
    console.log(req.body);
    if(req.body.check === "Choose Picture")
    {
        res.render("home",{images:images});
    }
    if(req.body.white === ""){
        res.redirect("white");
    }
    if(req.body.blue === ""){
        res.redirect("blue");
    }
    

})
app.listen(3000, function() {
        console.log("Server started on port 3000");
      });
