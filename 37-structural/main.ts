interface studenttyp {
    name: string
    id : number
}
interface techtyp {
    name: string
    id : number
    age: number
}
// let std:studenttyp = {
//     name:"shaukat",
//     id: 44,
// }
// let std1:studenttyp = {
//     fname:"shaukat",
//     id: 44,
// }

// let std2:{[z:string]:string|number , id:number}= {
//     fname:"shaukat",
//     id: 44,
// }

let st = {
    name:"bilal",
    id:44
}
let teacher:techtyp = {
    name: "shak",
    id:55,
    age:45
}

// st = teacher
// st =  {
//     name: "shak",
//     id:55,
//     age:45 error
// }

// teacher = st; error