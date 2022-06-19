const { Module } = require('module');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    confirmPassword:{
        type: String,
        required: true
    },
    tokens: [
        {
            token:{
                type:String,
                required:true
            }
        }
    ] 
    // everytime the user will log in new token will be generated so array
});

// Hashing 
userSchema.pre('save',async function(next) {
    console.log("Indise pre method should come before save");
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12);
        this.confirmPassword = await bcrypt.hash(this.confirmPassword,12);
        next();
    }
})
// TO GENERATE TOKEN
userSchema.methods.generateAuthToken = async function () {
    try {
        let newToken = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat ({ token:newToken });
        await this.save();
        return newToken; 
    } catch (error) {
        console.log(error);
    }
};

const User  = mongoose.model('USER',userSchema);

module.exports = User;  // to get this schema in other files
