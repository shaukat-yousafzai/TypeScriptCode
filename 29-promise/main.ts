// // // promise object properties
// // // a javascript promise object can be:

// // // pending
// // //fulfilled (resolve)
// // // rejected
// // // the promise object supports two properties : state and result
// // // while a promise object is "peding " (working ) the result is undefined
// // // when a promise object is "fulfilled" the result is a value
// // // when a promise object is "rejected"tje resi;t os an error object
// // // suntax

// // let promise = new Promise((resolve, reject) => {
// //   // the executor function runs immediately after the promise is created
// //   // resolve and reject are functions used to send a value or an error back to the promise's eventual resolution
// //   // if the executor function succeeds, it calls resolve(value)
// //   // if the executor function throws an error, it calls reject(error)
// //   // example
// //   console.log("promise pending") // first print
// //   setTimeout(() => {
// //     // this will resolve the promise
// //     console.log("promise fulfilled")
// //     console.log("promise resolved")
// //     resolve(["value1", "value2"]); // this is not print why
  
// //   }, 2000);
// // });


// // // with out hadler resolve method is not print but promis other code is excuted



// // let promise1 = new Promise(function (resolve, reject)  {
// //     console.log("promise1") // then print
// //     resolve("hi i am resovle")
// //     resolve("wah")
// //     reject("hi main margaye")
// // }
// // )
// // // with hadler then method but rsolve is not print why 
// // promise1.then(()=>{
// //     console.log("mr so" )
   
// // })
// // // when resolve print 



// // let promise2 = new Promise((res)=>{
// //     res("hi main margaye ap resolve howa mera program agar ye last main ayya")
// // })
// // console.log("promise to settimeout ke bena ye to synchronous le kam karha hai yaken nahi araha hi") // 3rd print
// // promise2.then((r)=>{
// //     console.log(r)
// // })
// // console.log("promise settimout ke bena synchronou le kam karha hai proved lekin resolve asynchronous le kam karaha hai") // 5 print




// // // then method is used to attach handlers for the "fulfilled" and "rejected" states



// // let promis3 = new Promise((rea,rej)=>{
// //     rej("hi my name is shaukat this is is rejected statement")
// // })
// // promis3.catch((error)=>{
// //     console.log(error)
// // })
// // let promis4 = new Promise((resolve,reject)=>{
// //     let data = new Error ("hi i am error")
// //     if (typeof data === "" ){
// //         resolve("this is not error")
// //     }else{
// //         reject(data)
// //     }
// // })
// // promis4.then((r)=>{
// //     console.log(r)
// // })
// // .catch((err)=>{
// //     console.log(err)
// // })

// // let e = new Error("Error")


// //    console.log(typeof e === "Error")


// let myPromis = new Promise((resolve, reject) => {
//     console.log("promise pending")

//     setTimeout(() => {
//      let data = "";
//      if(data ){
//         resolve(data)
//      }else{
//         reject(new Error("faild data"))
//      }
//     }, 1000);
// });
// myPromis.then((resolve)=>{
//     console.log(resolve);
// }).catch((rejecte)=>{
//     console.log(rejecte);
// })
// console.log("my name is shaukat")

// setTimeout(() => {
//     console.log("what is you name")
// }, 2000);
// let promis = Promise
// fetch
// setTimeout

let a = setTimeout((b:string="hi") => {
    console.log(b)
    console.log('dondod')
}, 2000);
console.log("done")