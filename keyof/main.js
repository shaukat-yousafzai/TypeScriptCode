var person = {
    name: "ratan lal",
    age: 25,
    email: "shaukat@abc.com"
};
var getObjPro = function (obj, name) { return obj[name]; };
console.log(getObjPro(person, "name"));
