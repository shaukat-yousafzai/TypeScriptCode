// array mehod 
var arr = [5, 10, 15, 20, 25];
var reduce1 = arr.reduce(function (total, current, i) {
    console.log(total + " + " + current + " =", total + current);
    return i + total;
}, 0);
console.log(reduce1);
console.log(arr);
