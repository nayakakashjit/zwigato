var express = require('express');
var router = express.Router();
var resturantsModel = require('../models/resturants.model');
var auth = require('../middleware/auth')

/* GET Resturants. */
router.get('/', auth, function(req, res, next) {
   resturantsModel.find()
                  .then((data)=>{
                    res.send({status:200,message:'successfully', data});
                  })
                  .catch((error)=>{
                    res.send({status:400,message:error});
                  })
});

router.get('/sort', auth, (req,res)=>{
  const sortVal = +req.query.sortVal;
  resturantsModel.find().sort({'cost' : sortVal })
            .then((data)=>{
              res.send({status:200,message:'successfully', data});
            })
            .catch((error)=>{
              res.send({status:400,message:error});
            })
});

router.get('/sortbyRating', auth, (req,res)=>{
  const sortVal = +req.query.sortVal;
  resturantsModel.find().sort({'average_rating' : sortVal })
            .then((data)=>{
              res.send({status:200,message:'successfully', data});
            })
            .catch((error)=>{
              res.send({status:400,message:error});
            })
})

module.exports = router;
