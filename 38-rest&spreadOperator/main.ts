// // rest and spread operator
// // syntax 
// // ...

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

// let students = {
//     name: "shaukat",
//     age:18,
//     email:"shaukat@gmail.com",
//     hobbies:["ipl","criket","football","devOps"]
// }
// let newStrudent = {
  
//   ...students,
//   name:"aziz"
// }

// console.log(' newStrudent: ',  newStrudent);
// console.log(students);

let students = {
    name: "shaukat",
    age:18,
    email:"shaukat@gmail.com",
    hobbies:["ipl","criket","football","devOps"]
}


const {...rest} = students;
console.log(rest)


// rest operator combine kartaha hai
// sperate operator sperd kartha hai



// // rest opertor

// function sum(a:number, b:number){
//     console.log(a+b)
// }
// sum(4,5)

function sum(a:number, b:number, ...other:number[]){
    console.log(a+b + other[0])
}
sum(4,5,5,4,8)
