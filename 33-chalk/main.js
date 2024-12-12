"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
let prompt = require("prompt-sync")();
let name1 = prompt("what is your name?: ");
let name2 = prompt("what is your father name?: ");
console.log(chalk_1.default.bold("your name is"), chalk_1.default.underline.blueBright.bgGreen(name1));
console.log(chalk_1.default.bold("your father name is"), chalk_1.default.underline.blueBright.bgWhite(name2));
