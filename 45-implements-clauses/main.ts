// implement clauses
// extend vs implemnts

class human {
    name="bilal"
    age=40
    dailywork(){}
}
// class Person extends human {

// }
// let Person1 = new Person();
// console.log(Person1.name)
interface Paratice {
    game:string
    cricket():void
    test?():void
}
class Person implements human , Paratice{
    name="shaukat"
    age=45
    dailywork():void{}
    game:string
    cricket():void{

    }
    enail = "abc@example.com"
    
}
let Person1 = new Person();
console.log(Person1.name)
