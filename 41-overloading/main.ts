
// function overloading

// singnature 
function sum (a:number,b:number):number
   



function sum (a:string,b:string):string
 



function sum (a:any,b:any):any{
    return a + b;
}
console.log( sum(4,5));
console.log( sum("hello","world"));