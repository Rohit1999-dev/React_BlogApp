const mongoose = require('mongoose');

const signUpSchema = mongoose.Schema({
    firstName:  String, 
    lastName: String,
    email: String,
    password: String
})

const SignUp = mongoose.model('SignUp', signUpSchema);

module.exports = SignUp;