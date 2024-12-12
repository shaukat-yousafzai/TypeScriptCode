// classes i typescript
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var school = /** @class */ (function () {
    function school(name) {
        this.teachers = [];
        this.student = [];
        this.name = name;
    }
    school.prototype.addStudent = function (srdObj) {
        this.student.push(srdObj);
    };
    school.prototype.addTeacher = function (tObj) {
        this.teachers.push(tObj);
    };
    return school;
}());
// students ka class hum ne inherint kai teaher se 
var students = /** @class */ (function () {
    function students(name, age, schoolName) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
    return students;
}());
// class teacher {
//     name : string
//     age: number;
//     schoolName: string
//     constructor (name:string,age:number,schoolName:string){
//         this.name = name
//         this.age = age
//         this.schoolName = schoolName
//     }
// }
// teacher ke class ko hum ne extend kia students se 
var teacher = /** @class */ (function (_super) {
    __extends(teacher, _super);
    function teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    teacher.prototype.addinfo = function (email, contact) {
        this.email = email;
        this.contact = contact;
    };
    return teacher;
}(students));
// school constructor obje
var school1 = new school("alpha");
var school2 = new school("beta");
// student constructor object
var s1 = new students("shaukat", 12, school1.name);
var s2 = new students("tehsin", 21, school2.name);
var s3 = new students("waqas", 31, school2.name);
// teacher constructor object
var t1 = new teacher("fahim", 41, school1.name);
var t2 = new teacher("maqsod", 51, school2.name);
var t3 = new teacher("gulKhan", 61, school2.name);
// add infor teacher
t1.addinfo("fahim@gmail.com", 3458554);
t2.addinfo("maqsod@gmail.com", 25251);
t3.addinfo("gulKhangmail.com", 151151);
// add students
school1.addStudent(s1);
school2.addStudent(s2);
school2.addStudent(s3);
// add teacher
school1.addTeacher(t1);
school2.addTeacher(t2);
school2.addTeacher(t3);
console.log(school1);
console.log(school2);
// console.log(s1)
// console.log(s2)
// console.log(s3)
