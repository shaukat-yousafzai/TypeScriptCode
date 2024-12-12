var prompt  = require("prompt-sync")()
let n1 = parseInt(prompt('pleases  enter your numer?  '))
let operatpr = prompt("please slect you operator (*, +, -, / ?): ");
let n = parseInt(prompt('pleases  enter your numer?  '))

if (operatpr == '+') {
    let adition =  n1 + n;
    console.log(adition)
} else if(operatpr == '-') {
    let minus = n1 - n;
    console.log(minus)
}else if (operatpr == '*') {
    let multiply = n1 * n;
    console.log(multiply)
} else if (operatpr == '/'){
    let divided = n1 / n;
    console.log(divided)
}else{
    console.log('invalid number')
}
export {}