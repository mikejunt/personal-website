mongoose = require('mongoose')


let userSchema = mongoose.Schema({

  local : {
    username : { type : String, unique : true },
  },
  role : { type : String }
}, {timestamps: true});


module.exports = mongoose.model('User', userSchema);
