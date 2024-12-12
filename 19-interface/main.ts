// interface 
// we can define type of object by interface 
//why
//key and value pair have many property that's why we use define type of object 
// by interface
// syntaac
// interface interfaceName {}
interface objType {
    fName:string
    age:number
    function : ()=>void
    hobbies:string[]
    soicalMedia:{
        s1:string
        s2:string
    }
}
let obj:objType = {
    fName:"shaukat",
    age:20,
    function: ()=>{
        console.log(obj)
    },
    hobbies:["a",'b','c'],
    soicalMedia:{
        s1:"faceb",
        s2:"linkin"
    }
}
console.log(obj)