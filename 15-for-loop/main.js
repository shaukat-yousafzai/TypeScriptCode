// let table = 2
// for (let i = 1 ; i <= 10 ; i++){
//     console.log(i*table)
//     if (i*table == 8) {
//         console.log("hi my name is shaukat aziz")
//     }
// }
// for (let i = 1 ; i <= 10 ; i++){
//     console.log(i*table)
//     if (i*table == 8) {
//         break;
//     }
// }
// for loop parethis
// exp 1 variables 
// exp 2 condition 
// exp 3 increment
//  then body for loop
// nested for loop 
var n = 5;
var a = "";
for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= i; j++) {
        a += "*";
        // console.log(a)
    }
    // a += "\n" // \n line break kele hum use karte hai
    // console.log(a)
}
console.log(a);
