const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs"); 

const register = ()=>{
    try{

    }

    catch (err){
        res.Status(500).json({
            success:false,
            message:"Unable to Register",
            error: err.message
        })

    }
};

const login = ()=>{};

const profile = ()=>{};

const logout = ()=>{};

module.exports = {register, login, profile, logout};

