// new set() create a new set 
// set is a collection of unique values




// set is constructer and class

let arr = [1, 2,2, 3,3, 4] // repeated value
let newset = new Set(arr) // unique values



newset.add(2)
newset.add(3)
newset.add(5)
newset.add(6)
newset.add(8)
newset.delete(2)
console.log(newset.has(4))

let data:number[] = []
newset.forEach((item)=>{
    data.push(item)
})
console.log(newset)
console.log(data)