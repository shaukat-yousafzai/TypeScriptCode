// new set() create a new set 
// set is a collection of unique values
// set is constructer and class
var arr = [1, 2, 2, 3, 3, 4]; // repeated value
var newset = new Set(arr); // unique values
newset.add(2);
newset.add(3);
newset.add(5);
newset.add(6);
newset.add(8);
newset.delete(2);
console.log(newset.has(4));
var data = [];
newset.forEach(function (item) {
    data.push(item);
});
console.log(newset);
console.log(data);
