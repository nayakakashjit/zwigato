var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
var userModel = require('../models/users.model');
var validate = require('../models/users.model');

router.post('/',(req, res)=> {
    // First Validate The Request
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    // Check if this user already exisits
    userModel.findOne({ email: req.body.email })
        .then((user) => {
            // Check if this user already exisits
            if (user) {
                res.send({status:400,message:'This user already exisits'});
            }
            else {
                let hashpassword = bcrypt.hashSync(req.body.password, 8);
                let newUser = new userModel({
                    name: req.body.name,
                    email: req.body.email,
                    password: hashpassword,
                    mobile: req.body.mobile
                });

                newUser.save()
                .then(
                    (user)=>{
                        res.send({status:200,message:'user added successfully', user:{'name':user.name, 'email':user.email} });
                    }
                )
                .catch((error) => {
                    res.send({ status: 400, message: error });
                })
            }
        })
        .catch((error) => {
            res.send({ status: 400, message: error });
        })
})

module.exports = router;