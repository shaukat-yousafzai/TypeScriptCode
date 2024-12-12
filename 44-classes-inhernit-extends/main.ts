// classes i typescript

class school {
    name: string;
    teachers:teacher[]=[]
    student:students[]=[];
    addStudent(srdObj:students){
        this.student.push(srdObj)
    }
    addTeacher(tObj:teacher){
        this.teachers.push(tObj)
    }
    constructor(name:string){
        this.name = name
    }
}
// students ka class hum ne inherint kai teaher se 
class students  {
    name : string
    age: number;
    schoolName: string
    constructor (name:string,age:number,schoolName:string){
        this.name = name
        this.age = age
        this.schoolName = schoolName
    }
}
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
class teacher extends students {
    email: string
    contact: number
    addinfo(email:string, contact:number){
        this.email = email
        this.contact = contact
    }

}

// school constructor obje
let school1 = new school("alpha")
let school2 = new school("beta")

// student constructor object
let s1 = new students("shaukat",12,school1.name)
let s2 = new students("tehsin",21, school2.name)
let s3 = new students("waqas",31, school2.name)
// teacher constructor object
let t1 = new teacher("fahim",41, school1.name)
let t2 = new teacher("maqsod",51, school2.name)
let t3 = new teacher("gulKhan",61, school2.name)
// add infor teacher
t1.addinfo("fahim@gmail.com", 3458554)
t2.addinfo("maqsod@gmail.com", 25251)
t3.addinfo("gulKhangmail.com", 151151)
// add students
school1.addStudent(s1)
school2.addStudent(s2)
school2.addStudent(s3)
// add teacher
school1.addTeacher(t1)
school2.addTeacher(t2)
school2.addTeacher(t3)

console.log(school1)
console.log(school2)

// console.log(s1)
// console.log(s2)
// console.log(s3)