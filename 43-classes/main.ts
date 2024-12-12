// es6 introduced javascript classes
// javascript classes are trmplate or blueprints
// for javascript object

// classes

// syntx 
// class student {
//     constructor(){}
// }

class student {
    name:string
    gender: string
    roll : number

    constructor (n:string,g:string,r:number){
        this.name = n
        this.gender = g
        this.roll = r
    }
    studentfunc():string{
        return "student name is "+ this.name + "and his/her gender is" + this.gender 
    }
}

const studentOne = new student("shaukat","male",524)
const student2 = new student("aziz","male",525)
const student3 = new student("gul parna","female",555)
let stdData:student[] = []
stdData.push(studentOne)
stdData.push(student2)
stdData.push(student3)


// console.log(studentOne,student2,student3);

console.log(studentOne.studentfunc())

// console.log(stdData)