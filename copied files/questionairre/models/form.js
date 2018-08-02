var mongoose = require("mongoose");

var nameSchema = new mongoose.Schema({

  generalInfo:{
    firstName: String,
    lastName: String,
    finance: String,
    financeChoice: String,

  },

  income:{
    monthly: String,
    asset: String

  },
  expenses:{
    monthly:String,
    asset:String

  },
  savings:{
    checking:String,
    savings:String

  },
  liabilities:{
    checking:String,
    savings:String

  }
  // id:{
  //   type:mongoose.Schema.Types.ObjectId
  // }

});

// creating user model from Schema
var User = mongoose.model("User", nameSchema);

module.exports = User;
