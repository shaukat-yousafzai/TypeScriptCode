// the super keyword is used to call the constructo of its parent class to 
// access the parent properties and methods
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
var Person = /** @class */ (function () {
    function Person(n, g) {
        this.name = n;
        this.gender = g;
    }
    return Person;
}());
// class Student {
//     name: string
//     gender: string
//     rollNum:number
//     constructor (n:string,g:string,r:number){
//         this.name = n
//         this.gender = g
//         this.rollNum = r
//     }
// }
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(f, g, r) {
        var _this = _super.call(this, f, g) || this;
        _this.rollNum = r;
        return _this;
    }
    return Student;
}(Person));
var s1 = new Student("f", "m", 5);
console.log(s1);
