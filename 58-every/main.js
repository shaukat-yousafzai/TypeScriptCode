var a = [1, 2, 3, 4];
var b = a.every(function (e) {
    console.log(e);
    return e < 5;
});
console.log(b);
