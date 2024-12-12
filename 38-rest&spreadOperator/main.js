// // rest and spread operator
// // syntax 
// // ...
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// console.log("hello")
// // spread operator 
// let a = [ 1, 2,3,4]
// let b = [5,6,7,8]
// let updateArr = [...a,...b]
// setTimeout(()=>{
//   console.log(updateArr)
// },1000);
// updateArr.push((9))
// b.push(9)
// console.log(b)
// console.log(updateArr)
// // console.log(updateArr)
// console.log("hello")
// updateArr.push(5555)
var students = {
    name: "shaukat",
    age: 18,
    email: "shaukat@gmail.com",
    hobbies: ["ipl", "criket", "football", "devOps"]
};
var newStrudent = __assign(__assign({}, students), { name: "aziz" });
console.log(' newStrudent: ', newStrudent);
console.log(students);
