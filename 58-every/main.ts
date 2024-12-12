let a = [1,2,3,4]
let b = a.every((e)=>{
    console.log(e)
    return e < 5
})
console.log(b)