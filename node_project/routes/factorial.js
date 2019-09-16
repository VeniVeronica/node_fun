'use strict';
var express = require('express');
var app = express.Router();
var factFunction = require('../index')

app.get('/factorial/:number', function(req, res){
     var n = req.params.number;
    console.log("coming to this api#######:", n);
    var aa = factFunction.getFactorial(n);
    console.log("Final result is", aa);
    //res.sendStatus(200).send(aa);
    res.send({data:aa});
});


module.exports = app;


