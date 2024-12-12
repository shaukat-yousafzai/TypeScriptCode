// type alias
type idaType = number|string;
type NameType = string;
type ageType= number;
let id : idaType= 5
let myName:NameType="shauk"
let age:ageType=55
type employeType = {
    emId:idaType
    emName:NameType
    emAGE:ageType
}

let employe:employeType = {
    emId:id,
    emName:myName,
    emAGE:age
}
let employe2:employeType = {
    emId:"ffd",
    emName:myName,
    emAGE:age
}
let employe3:employeType = {
    emId:5666,
    emName:myName,
    emAGE:age
}

