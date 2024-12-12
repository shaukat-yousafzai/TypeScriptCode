interface Person {
    name: string
    age:number
}
interface Person {
  persent:boolean
}
interface Employee extends Person {
   
    email:string
}
let person:Person={
    name:"shaukat",
    age:4,
    persent:true
}
let employ:Employee={
    name:"shauk",
    age:5555,
    email:"shaukat@gmail.come",
    persent:true
}
// same name interface marge each other