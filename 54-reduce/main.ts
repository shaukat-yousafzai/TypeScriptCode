// array mehod 

let arr = [5,10,15,20,25]

let reduce1 = arr.reduce((total,current,i)=>{
    console.log(  total + " + " + current+   " =", total + current)
    return i + total
},0)

console.log(reduce1)

console.log(arr)