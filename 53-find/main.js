// find arry mehod
var arr = ["bilal", "shaukat", "waas", "naiz"];
var f = arr.find(function (item) {
    return item == "bilal";
});
// console.log(f) // bilal
var arrofobj = [
    { name: "bilal", age: 20 },
    { name: "waas", age: 25 },
    { name: "naiz", age: 30 },
    { name: "shaukat", age: 20 }
];
var e = arrofobj.find(function (item) {
    return item.name == "bilal";
});
console.log(e === null || e === void 0 ? void 0 : e.name);
