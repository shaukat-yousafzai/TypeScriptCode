const user = {
    name: "shaukat",
    age:33,
    username:"shaukat",
    pw:"123"
}

type User = {
    name:string
    age:number
    username:string
    pw:number
}
const updateUser = (obj:Partial<User>) => {}

updateUser({age:2})