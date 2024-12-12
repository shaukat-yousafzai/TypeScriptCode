// sortin array ka metho hai
var arr = [
    "Banana",
    "MANGO",
    "orange",
    "apple",
    "pineapple",
    "strwberry",
];
var fruit = arr.map(function (callbackfn) { return callbackfn.toLowerCase(); });
console.log(fruit);
var sorted = fruit.sort();
console.log(sorted);
