// tuple in typescript

// a tuple is a typed array
// with a pre-defined length
// and types for each index

let a : [number, number,string] = [4,5,'shaukat']
console.log(a)

// a = [4,5,'shaukat', "hi"] // length is fix error
// a =  [4,5,'shaukat']
a.push(4)
console.log(a)
a.push(5544)
// a.push(false) error

console.log(a)