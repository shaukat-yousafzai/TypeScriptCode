import chalk from "chalk"

let prompt = require("prompt-sync")()
let name1 = prompt("what is your name?: ")
let name2 = prompt("what is your father name?: ")

console.log(chalk.bold("your name is"),
 chalk.underline.blueBright.bgGreen(name1));
console.log(chalk.bold("your father name is"), 
chalk.underline.blueBright.bgWhite(name2));

export { }