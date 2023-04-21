const Joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var userModel = require('../models/users.model');
const express = require('express');
const router = express.Router();
const config = require('../config')

router.post('/', (req, res) => {
    userModel.findOne({
        email: req.body.email
    })
    .then((user, err) => {
        if (err) {
            res.status(500).send({
                message: err
            });
            return;
        }
        if (!user) {
            return res.send({
                status: 401,
                message: 'Incorrect password'
            });
        }
        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );
        if (!passwordIsValid) {
            return res.send({
                status: 401,
                message: 'Invalid Password!'
            });
        };
        var token = jwt.sign({
            _id: user._id
        }, config.secret, {
            expiresIn: 86400
        });
        res.status(200).send({
            id: user._id,
            username: user.name,
            email: user.email,
            message: 'You are successfully logged in',
            auth: true,
            token
        });
    }).catch((err) => {
        console.log(err);
    });
});

module.exports = router;