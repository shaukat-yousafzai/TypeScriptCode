// es6 introduced javascript classes
// javascript classes are trmplate or blueprints
// for javascript object
// classes
// syntx 
// class student {
//     constructor(){}
// }
var student = /** @class */ (function () {
    function student(n, g, r) {
        this.name = n;
        this.gender = g;
        this.roll = r;
    }
    student.prototype.studentfunc = function () {
        return "student name is " + this.name + "and his/her gender is" + this.gender;
    };
    return student;
}());
var studentOne = new student("shaukat", "male", 524);
var student2 = new student("aziz", "male", 525);
var student3 = new student("gul parna", "female", 555);
var stdData = [];
stdData.push(studentOne);
stdData.push(student2);
stdData.push(student3);
// console.log(studentOne,student2,student3);
console.log(studentOne.studentfunc());
// console.log(stdData)
