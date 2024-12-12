//  sortin array ka metho hai
/**
pkiz
 */

let fruit: string[] = [
  "Banana",
  "Orange",
  "Apple",
  "Mango",
  "Pineapple",
  "Strwberry",
];



console.log(fruit)

let sorted = fruit.sort()
console.log(sorted)

let decindeing = sorted.reverse()
console.log(decindeing)



let number:number[] = [1,100,40,80,10,90,50]

console.log("normal number array", number)                 //   


let sortedNumber1 = number.sort()                        // does't work with sort() method 

console.log("sortedNumber1 is nort sort ",sortedNumber1)
let sortedNumber = number.sort((a,b)=> a - b)           // accending order of number

console.log("sortedNumber asscinding order ",sortedNumber) 
let sortedNumber2 = number.sort((a,b)=> b -a)          // descending order of number  

console.log("sortedNumber  descending order of number ",sortedNumber)

