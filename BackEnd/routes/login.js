const Joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var userModel = require('../models/users.model');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    // find the user by their email address
    userModel.findOne({ email: req.body.email }).then(async (user)=> {
    // Then validate the Credentials 
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
        return res.send({ status: 400, message: 'Incorrect password' });
    }
    const token = jwt.sign({ _id: user._id }, 'PrivateKey',{ expiresIn: 86400});
    res.json({ status: 200, auth: true, message: 'You are successfully logged in', token });
    })
    .catch((error) => {
        res.send({ status: 400, message: 'Incorrect email' });
    });

});

module.exports = router;