var obj = {
    fName: "shailat",
    lastName: "aziz",
    array: [3, 3, 4],
    function: function () { return 4; },
    ob: {
        f: "sha",
        n: "sh"
    }
};
console.log("obj", obj);
var a = [3];
// accessing
// console.log(obj.fName)
console.log(obj["lastName"]);
//this only two way to accses of obje value
delete a[0];
console.log(a);
console.log(obj);
// array object access
var c = obj.array[2];
// addiding of key in any type 
// same method use to key is avialbe so you can change  
obj.user = 433;
// function object access
console.log("obj.function():", obj.function());
console.log("user" in obj); // false
console.log("fName" in obj); //
for (var key in obj) {
    console.log(key);
    console.log(obj[key]);
}
