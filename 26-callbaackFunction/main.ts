// callback function
// pass fuction any function arguments is callded callback function
function hello(callbcack){
callbcack()

}
let arrowfuc=()=>{
    console.log("pakistan zindavad")
}
hello(arrowfuc)


//  callback function one perimeter  where i pass argument for callback function   callback fuction always call 
// which fuction pass argument callback fuction so inner this fuction you can pass argement

function world(callbcack){  // permiter name callback resive arrowfuc1
    callbcack("hellow")  // we call arrow function in here as perimeter name 
    
    }
    let arrowfuc1=(gretting:string)=>{ // this function is callback this perimeter value pass world function
        console.log(`${gretting}, world`)
    }
    world(arrowfuc1)

let myName : string = "aziz"

    // 3rd
 function salam(callback,name2:string){
    return callback(name2)
 }

let fun : (frndName: string) => void = (frndName:string)=>{
    let result = "hello, " + frndName
    return result
}
let a = salam(fun,myName);
console.log(a)
