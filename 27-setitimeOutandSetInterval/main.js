// setTimeOut and SetInterval
// settimeout syntax
//setTimeout(() => {
// }, timeout);
// setimeout keypoint
//javascript ka buildin function hai jo promise retrun karta hai
//agar apko apne code main kese bi jis ko dely karna hai   // use setimeout
// let naa = "shaukat"
console.log("Hello");
// //after hello print one second dely then print "shaukat"
// let a =setTimeout((na) => {
//     console.log("shaukat") // shaukat
//     // return na 
// }, 1000);
// setimeout (callback function  ,  timeout ) 
// let a = 
// console.log(a)  // that's why settimout promise retrun karta hai
// output a
// Timeout {
//     _idleTimeout: 1000,
//     _idlePrev: [TimersList],
//     _idleNext: [TimersList],
//     _idleStart: 55,
//     _onTimeout: [Function (anonymous)],
//     _timerArgs: undefined,
//     _repeat: null,
//     _destroyed: false,
//     [Symbol(refed)]: true,
//     [Symbol(kHasPrimitive)]: false,
//     [Symbol(asyncId)]: 6,
//     [Symbol(triggerId)]: 1
//   }
// setinterval 
// setInterval(() => {
// }, interval);
// repeat my code
// setInterval(() => {
//     console.log("shaukat") // infintiy shaukat prints
// }, 1000);
var count = 0;
// setInterval(() => {
//     console.log(count , "shaukat") // infinty 0 and shaukat prints
// }, 1000);
// setInterval(() => {
//     count ++
//     console.log(count , "shaukat")  // infinty count 1,2... and shaukat prints
// }, 1000);
var fun = setInterval(function () {
    count++;
    console.log(count, "shaukat"); // 
    if (count >= 5) {
        clearInterval(fun);
    }
}, 1000);
