// short cricult 
var a = 4;
var fuc = function () {
    return "hello world";
};
a && fuc();
a == 4 && fuc();
a === 4 && fuc();
a <= 4 && fuc();
// a =>  4 && fuc()
var b = 44;
b || (a == 8 && fuc());
