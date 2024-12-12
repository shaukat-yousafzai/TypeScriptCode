//generator function


// value generator karta hai dynamically and hard code
// hard code 
// function* gen(){
//     yield "ratan lal"
//     yield "chaman lal"
//     yield "sarmand"
// }

// let autoGen = gen()

// console.log(autoGen.next())
// console.log(autoGen.next())

// dynamically code 

// function* gen(){
//   let num = 1 
//   while (true){
//     yield num++
//   }
// }

// let autoGen = gen()

// console.log(autoGen.next())
// console.log(autoGen.next())
// // inverse number 
// sales inverse number
// trasction number

function* gen(){
    let num = 1 
    while (num < 5){
      yield num++
    }
  }
  
  let autoGen = gen()
  
  console.log(autoGen.next())
  console.log(autoGen.next())
  console.log(autoGen.next())
  console.log(autoGen.next())
  console.log(autoGen.next())
  console.log(autoGen.next())
  console.log(autoGen.next())