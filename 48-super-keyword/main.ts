// the super keyword is used to call the constructo of its parent class to 
// access the parent properties and methods

class Person {
    name: string
    gender: string
    constructor (n:string,g:string){
        this.name = n
        this.gender = g
    }
    welcome(){
        console.log("hello , how are you")
    }
}
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

class Student extends Person{
   
    rollNum:number
    constructor (f:string,g:string,r:number){
      super(f,g)
        this.rollNum = r
    }
    welcome(){
        
        super.welcome()
        console.log("hello"+ this.name)
    }
    
}

class Teacher extends Person {
    email: string
    constructor(n:string,g:string,e:string){
        super(n,g)
        this.email = e

    }
    welcome(): void {
        super.welcome()
    }
}

let t = new Teacher("shaukat","m", "avc")
let s1 = new Student("f","m",5)
console.log(t.welcome())
console.log(s1)

console.log(s1.welcome())
