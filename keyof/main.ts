// hard code
// const person = {
//     name:"ratan lal",
//     age:25,
//     email:"shaukat@abc.com"
// }
// type Person ={
//     name: string
//     age:number
//     email:string
// }
// const getObjPro = (obj:Person, name: "name"| "age" | "email")=> obj[name];
 
// console.log(getObjPro(person,"name"));


// dynamically

// const person = {
//     name:"ratan lal",
//     age:25,
//     email:"shaukat@abc.com"
// }
// type key = keyof typeof person
// type Person =typeof person
// // const getObjPro = (obj:Person, name:key)=> obj[name];
 
// // console.log(getObjPro(person,"name"));

// synamically function

// const getObjPro = <T,K extends keyof T >  (obj:T, name:K)=> obj[name];
 
// console.log(getObjPro<Person,key>(person,"name"));










