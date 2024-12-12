type User ={
    username:string
    pw:string
    age?:number
}


const newUser: Required<User>={
    username:"shat",
    pw:"abc",
    age:123
}

const getuser = (user:User)=>{

}

getuser({username:"shat",pw:"abc",age:123})