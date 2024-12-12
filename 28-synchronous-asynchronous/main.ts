// // synchronous and asynchronous programming
// // synchornous
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)
// console.log(11)
// console.log(12)
// console.log(13)
// console.log(14)
// console.log(15)
// console.log(16)
// console.log(17)
// console.log(18)
// console.log(19)
// console.log(20)
// /*
// code run line by line don't prform multiple code so the reson is this javascript by default synchrou
// output
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20
// */
// asynchoronous method 



console.log(1)
console.log(2)
console.log(3)
setTimeout(() => {
    console.log(9)
}, 1000);
console.log(4)
console.log(5)
console.log(6)
//output 
// 1
//2
//3
//4
//5
//6
//9
// this is called asynchronou beause code don't run line by line



let a = 1 
let b = 2

setTimeout(() => {
    console.log(a)//55
}, 1000);
console.log(b)
a = 55

// what is the output
// 2
// 55




