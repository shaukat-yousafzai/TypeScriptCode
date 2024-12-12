// literal type
let myName:"shaukat"= "shaukat";
let myAge:24=24;

// what is difference between union and literal type
// union type
// union take type 
let a:string|number ;
a="shaukat"



// literal type 
// literal type take value as type  this type value accept is value other is else delete
let b : "string" | 525;
// this also literal type
b = 525;


// literal type  type alias
type world = "world";
type gerttein = `hello ${world}` 

let gerting:gerttein = "hello world"
// gerting = "kdf" // eror ksd don;t asign type hellow world
let a : world = "world"
// specific tell this is value is this type other else delete
