'use strict';
var express = require('express');
var app = express.Router();

exports.getFactorial=(num)=>{
    const n = num;
    let fact = 1;
    if(n > 1) {
        for(let i = 2; i <= n; i++) {
            fact *= i;
        }
    }
    console.log("@@@@@@@", fact);
    return fact;
}
