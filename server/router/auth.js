const express = require('express');
const bcrypt = require("bcryptjs")
const router = express.Router();
const jwt = require('jsonwebtoken');
require("../conn/db");
const USER = require('../model/usersScheme');

router.get("/",(req,res)=>{
    
    res.send("Inside get of router page");
});

/*using promises
router.post("/register", (req,res)=>{
    const {name,email,phone,work,password,confirmPassword} = req.body;
    console.log(req.body+"\n\n");
    console.log(name,email,phone,work,password,confirmPassword);

    if( !name|| !email || !phone || !work || !password || !confirmPassword ){     
        return res.status(422).json({error:"Enter valid details"});
    }
    USER.findOne({email:email})
    .then((userexist)=>{
        if(userexist){
            return res.status(422).json({error:"Email already exists"});
        }
        const user = new USER({name,email,phone,work,password,confirmPassword});
        // we can also use USER(req.body) if we want to add all fields
        //actually it is name:name , email:email, but if both key and value are smae we can write only one and it will work
        user.save().then( ()=>{
            res.status(201).json({msg:"Registered Successfully"});
        }).catch((err)=>{
            res.status(500).json({error:"Failed to register"});
        }) 
    }).catch(err=>{console.log(err);});
    
});
*/

/* Usnig AYSNC-AWAIT */
router.post("/register",async (req,res)=>{
    const {name,email,password,confirmPassword} = req.body;
    console.log(req.body+"\n\n");
    console.log(name,email,password,confirmPassword);

    try{    
        if( !name|| !email ||  !password || !confirmPassword ){     
            return res.status(422).json({error:"Enter valid details"});
        }else if(password != confirmPassword){
            return res.status(422).json({error:"Passwords do not match"});
        }else{
            const userexist = await USER.findOne({email:email})
                // console.log(userexist);
                if( userexist ) {
                    return res.status(422).json({error:"User already exists"});
                }
                const user = new USER({name,email,password,confirmPassword});
                const userRegistered = await user.save();
                if(userRegistered){
                    res.status(201).json({userRegistered});
                }
        }
    }catch(err){
        console.log(err);
    }
    
});

// LOGIN
router.post("/login",async(req,res)=>{
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(422).json({error:"Enter valid details"});
        }

        const userDetails = await USER.findOne({email:email});
        // console.log(userDetails);   gives us object of user
        if(!userDetails){
            res.status(400).json({err:"Invalid Credentials"});
        }else{
            const correctPasswords = await bcrypt.compare(password,userDetails.password);
            
            const token = await userDetails.generateAuthToken();
            console.log(token);
            //saving token  in the cookie
            res.cookie("token",token,{
                expires: new Date(Date.now()+300000),
                //300000mili seconds = 5 min 
                // Date.now() gives time in miniseconds 
                httpOnly:true //other will work only on secure network (https)
            });
            
            if(!correctPasswords){
                res.json({msg:"Invalid Credentials"});    
            }else{

                res.json({msg:"Logged In"});    

            }
        }        
    }catch(err){
        console.log(err);

    }
});

module.exports = router;  
