// callback function
// pass fuction any function arguments is callded callback function
function hello(callbcack) {
    callbcack();
}
var arrowfuc = function () {
    console.log("pakistan zindavad");
};
hello(arrowfuc);
//  callback function one perimeter  where i pass argument for callback function   callback fuction always call 
// which fuction pass argument callback fuction so inner this fuction you can pass argement
function world(callbcack) {
    callbcack("hellow"); // we call arrow function in here as perimeter name 
}
var arrowfuc1 = function (gretting) {
    console.log("".concat(gretting, ", world"));
};
world(arrowfuc1);
var myName = "aziz";
// 3rd
function salam(callback, name2) {
    return callback(name2);
}
var fun = function (frndName) {
    var result = "hello, " + frndName;
    return result;
};
var a = salam(fun, myName);
console.log(a);
