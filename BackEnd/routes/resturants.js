var express = require('express');
var router = express.Router();
var resturantsModel = require('../models/resturants.model')

/* GET Resturants. */
router.get('/', function(req, res, next) {
   resturantsModel.find()
                  .then((data)=>{
                    res.send({status:200,message:'successfully', data});
                  })
                  .catch((error)=>{
                    res.send({status:400,message:error});
                  })
});

router.get('/sort', (req,res)=>{
  const sortVal = +req.query.sortVal;
  resturantsModel.find().sort({'cost' : sortVal })
            .then((data)=>{
              res.send({status:200,message:'successfully', data});
            })
            .catch((error)=>{
              res.send({status:400,message:error});
            })
});

router.get('/sortbyRating', (req,res)=>{
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
