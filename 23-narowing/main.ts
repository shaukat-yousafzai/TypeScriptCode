let a :string|number;
a=2;
console.log(a.toFixed())// narrowing number type 
a = "shaukat";// narrowing string
console.log(a.toUpperCase())

function getType(val:string|number){
    // val.toLowwerCase() norwing 
// beacuse not confrim perimter get  value is string or number
    // error
    if(typeof val == "string" ){
        return val.toLowerCase() // allow narrowing becaue now this is string
    }
    return val.toFixed()// now this is norwing number type becuse string value go to if block
}
   let result = getType("shakat")
   console.log(result)
   function gerId(id:string|null){
    if(!id){
        console.log("kindly provide id")
        return     // if person don't provide 
    }
   return id.toLocaleLowerCase // norwing string beauce if usr don't prvide id so run if block statement
   }
   gerId(null)