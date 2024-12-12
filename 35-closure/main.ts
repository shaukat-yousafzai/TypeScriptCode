// closures

// jab q function function retrun karta hai wo uska clures hota hai
// lexical enviroment and lexical scope

// function f1(){
//     let a = "happy briday"
//     return a
// }

// let closurefun = f1()
// console.log(closurefun)

// function f1(){
//     let a = "happy briday"
//     return function (){}
// }

// let closurefun = f1()
// console.log(closurefun)

// function f1(){
//     let a = "happy briday"
//     return function (){
//         return a
//     }
// }

// let closurefun = f1()
// console.log(closurefun())

// function f1(){
//     let a = "happy briday"
//     return function (){
//         return a
//     }
// }

// let closurefun = f1()
// let callclouresfun = closurefun()
// console.log(callclouresfun)

// lexical envoirment 
// f1 function ek anounmous function retrun karha hai os anounoums function ko hum call karhai 
// hai f1 function ke bad ho humi f1 function ke parmeter jo argument pass 
// hai wo humi anounymous function meain mel raha hai

// function f1(a:string){
  
//     return function (){
//         return a
//     }
// }

// let closurefun = f1("happy briday")
// let callclouresfun = closurefun()
// console.log(callclouresfun)

// lexical scop

// function f1(a:string){
  
//     return function (b:string){
//         return a + b
//     }
// }

// let closurefun = f1("happy briday ")
// let callclouresfun = closurefun("shaukat")
// console.log(callclouresfun)


function f1(a:number){
    return {
        f2:function (b:number){
            return a + b
        },
        f3:function (c:number){
            return a + c
        }
    }
}

let closuresfun = f1(5);
let clouresefun1 = closuresfun.f2(5)
let clouresefun2 = closuresfun.f3(6)

console.log(clouresefun1)
console.log(clouresefun2)

// q function ek function rtrun karta hai ho apne  lexical enovirment ke sath retrun hota hai cloures hota hai