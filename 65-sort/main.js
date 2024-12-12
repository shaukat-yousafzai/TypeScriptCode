// sortin array ka metho hai
var fruit = [
    "Banana",
    "Orange",
    "Apple",
    "Mango",
    "Pineapple",
    "Strwberry",
];
console.log(fruit);
var sorted = fruit.sort();
console.log(sorted);
var decindeing = sorted.reverse();
console.log(decindeing);
var number = [1, 100, 40, 80, 10, 90, 50];
console.log("normal number array", number);
var sortedNumber1 = number.sort(); // does't work with sort() method 
console.log("sortedNumber1 is nort sort ", sortedNumber1);
var sortedNumber = number.sort(function (a, b) { return a - b; }); // accending order of number
console.log("sortedNumber asscinding order ", sortedNumber);
var sortedNumber2 = number.sort(function (a, b) { return b - a; }); // descending order of number  
console.log("sortedNumber  descending order of number ", sortedNumber);
