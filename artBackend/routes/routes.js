const express = require('express');

const router = express.Router();

const UserModel = require('../models/user');
const ArtModel = require('../models/art');


router.post('/registerUser', async (req, res) => {

    const data = new UserModel({
        name: req.body.name,
        email: req.body.email,
        password : req.body.password
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.post('/login', async (req, res) => {

    var email = req.body.email;
    var password = req.body.password;
    var loginData;

    loginData = {
        email: email,
        password: password
    };


    try {
        const data = await UserModel.findOne(loginData).clone().catch(function(err){ console.log(err)})

        if(data != null) {
            res.status(200).json(data);
        } else {
            res.status(400).json({message: "Invalid Username Or Password"})
        }
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get by ID Method
router.get('/search', async (req, res) => {
    
    const searchString = req.query.query;


    try {
        var regexp = new RegExp("^"+ searchString);
        const data = await ArtModel.find({ title: regexp}).clone().catch(function(err){ console.log(err)});
        res.status(200).json(data)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

module.exports = router;