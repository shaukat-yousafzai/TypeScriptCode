// short cricult 
let a = 4
let fuc = ()=>{
    return "hello world"
}

a && fuc()
a == 4 && fuc()
a === 4 && fuc()
a <=  4 && fuc()
// a =>  4 && fuc()

let b = 44
 b || (a == 8 && fuc() 
)