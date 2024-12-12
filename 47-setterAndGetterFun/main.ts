// getter and setter 
// ye predifiend function hai class ka 
class test {
    private _name ="bilal";
    get name() { // must return karga jis  property kele banya hai
        return this._name
    }
    set name1(val:string){  // modify karga jis property kele banya ho
        this._name = val
    }
}

let a = new test();

console.log(a.name) // only value called is getter function 

a.name1 = "shaukat"; // only value ressign is called  setter function

console.log(a.name) // geeter function changed value by setter function

console.log(a.name1) // not retrun value 