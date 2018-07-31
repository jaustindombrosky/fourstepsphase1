var express = require("express");
var path = require("path");
var mongodb = require('mongodb');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
monogodb = mongoose.connect("mongodb://localhost:27017/node-demo");
// var dbConn = mongodb.MongoClient.connect('mongodb://localhost:27017');

var nameSchema = new mongoose.Schema({

  generalInfo:{
    firstName: String,
    lastName: String,
    finance: String,
    financeChoice: String
  },

  income:{
    monthly: String,
    asset: String
  },
  expenses:{
    monthly:String,
    asset:String,
  },
  savings:{
    checking:String,
    savings:String
  },
  liabilities:{
    checking:String,
    savings:String
  }

});

var User = mongoose.model("User", nameSchema);

var app = express();

// app.use(bodyParser.json()) basically tells the system that you want json to be used.
//
// bodyParser.urlencoded({extended: ...}) basically tells the system
// whether you want to use a simple algorithm for shallow parsing (i.e. false) or
// complex algorithm for deep parsing that can deal with nested objects (i.e. true).
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");

// To serve static files such as images, CSS files, and JavaScript files,
// use the express.static built-in middleware function in Express
// dirname return the current directory, iniside which public folder
app.use(express.static(path.resolve(__dirname,'public')));

// use res.sendFile(__dirname+"/form.html")
app.get("/",function(req,res){
  res.render("form.ejs")
})

app.post("/addname",function(req,res){
  var myData = new User(req.body);
  console.log(req.body)
  myData.save().
  then(item =>{
    res.send("item saved to database");
  }).catch(err=>{
    res.status(400).send("unable to save to database");
  })
})

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0',function(){
  console.log("connected to server")
});
