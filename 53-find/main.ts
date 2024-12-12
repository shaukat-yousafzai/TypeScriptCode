// find arry mehod


let arr = ["bilal","shaukat","waas","naiz"]

let f = arr.find((item)=>{
    return item == "bilal"
})

// console.log(f) // bilal


let arrofobj = [
    {name:"bilal", age:20},
    {name:"waas", age:25},
    {name:"naiz", age:30},
    {name:"shaukat", age:20}
]

let e = arrofobj.find((item)=>{
    return item.name == "bilal"
})

console.log(e?.name)