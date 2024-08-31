const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   firstname: String,
   lastname: String,
   image:{
       type: String,
       default: '/image/userlogo.png'
   },
   email: String,
   password: String,
   date:{
       type: Date,
       default: Date.now
   },
   online:{
    type: Boolean,
    defaut: false
   },
   phoneNumber: Number
});

module.exports = mongoose.model('User',userSchema);