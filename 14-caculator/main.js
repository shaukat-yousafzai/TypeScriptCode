"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require("prompt-sync")();
var n1 = parseInt(prompt('pleases  enter your numer?  '));
var operatpr = prompt("please slect you operator (*, +, -, / ?): ");
var n = parseInt(prompt('pleases  enter your numer?  '));
if (operatpr == '+') {
    var adition = n1 + n;
    console.log(adition);
}
else if (operatpr == '-') {
    var minus = n1 - n;
    console.log(minus);
}
else if (operatpr == '*') {
    var multiply = n1 * n;
    console.log(multiply);
}
else if (operatpr == '/') {
    var divided = n1 / n;
    console.log(divided);
}
else {
    console.log('invalid number');
}
