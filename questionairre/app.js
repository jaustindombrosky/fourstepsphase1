var express = require("express");
var path = require("path");
var mongodb = require('mongodb');
var bodyParser = require('body-parser');
var User = require("./models/form")
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
monogodb = mongoose.connect("mongodb://localhost:27017/node-demo");
// var dbConn = mongodb.MongoClient.connect('mongodb://localhost:27017');

// to check for connection errors
 mongoose.connection.on('error',function(err){
  console.log(err)
})

var app = express();

// app.use(bodyParser.json()) basically tells the system that you want json to be used.
//
// bodyParser.urlencoded({extended: ...}) basically tells the system
// whether you want to use a simple algorithm for shallow parsing (i.e. false) or
// complex algorithm for deep parsing that can deal with nested objects (i.e. true).
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

// Load view engine
app.set('views',path.join(__dirname,"views"))
app.set("view engine","ejs");

// To serve static files such as images, CSS files, and JavaScript files,
// use the express.static built-in middleware function in Express
// dirname return the current directory, iniside which public folder
app.use(express.static(path.resolve(__dirname,'public')));

// use res.sendFile(__dirname+"/form.html")
app.get("/",function(req,res){
  res.render("form")
})

app.post("/add-data",function(req,res){

  var myData = new User();

  myData.generalInfo = req.body.generalInfo;
  myData.income      = req.body.income;
  myData.expenses    = req.body.expenses;
  myData.savings     = req.body.savings;
  myData.liabilities = req.body.liabilities;

  console.log(req.body)
  myData.save().
  then(item =>{
    res.redirect("/view");
  }).catch(err=>{
    res.status(400).send("unable to save to database");
  })
})

app.get("/view",function(req,res){
  User.find({}).then(item=>{
    res.render("fetchForm",{item:item})
  }).catch(err=>{
    res.send(err)
  })
})

app.get("/view/:id",function(req,res){
  User.findById(req.params.id).then(item=>{
    console.log(item);
    res.render("fetchSingleForm",{item:item})
  }).catch(err=>{
    res.send(err)
  })
})

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0',function(){
  console.log("connected to server")
});
