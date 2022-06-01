var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/data', function(req, res, next) {
    console.log(req)
    res.json({name:"HARSHITA"})
 // res.render('index', { title: 'Express' });
});

router.get('/:da-:ta', function(req, res, next) {
    console.log(req.params.da)
    res.json({name:req.params.da+"+"+req.params.ta+"="+req.params.da+req.params.ta})
 // res.render('index', { title: 'Express' });
});

router.get('/:da', function(req, res, next) {
    console.log(req.params.da)
    res.json({name:req.params.da})
 // res.render('index', { title: 'Express' });
});


module.exports = router;