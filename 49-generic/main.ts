// // generic
// // dynamically type maintain
// // dat type lost nahi hone dete
// // yeh humre code kum ker dete hain

// function str(elem:string):string{
//     return elem
// }
// function num(num:number):number{
//     return num
// }
// function arr(a:number[]):number[]{
//     return a
// }
// arr([1,2])
// num(55)
// str("pkis")

// function anyfun(elm:any):any{ // we can't control dynmiclly data type
//   return elm
// }

// anyfun("ss")
// anyfun(55)  // lost data type 

// function gernricfunc<T>(elem:T):T {
//     return elem
// }
// gernricfunc("hi")
// gernricfunc(55) // dynamically maint and not lost data type

// gernricfunc(['elem'])


// generic function part 2 

const fetchData = async <T> (url:string):Promise<T> => {
    const data = await fetch(url)
    const response = await data.json()
    return response
}
interface user {
    id:number
    name:string
    username:string
    email:string
}

interface Post {
    title:string
    body:string
}
const users = await fetchData<user>("https://jsonplaceholder.typicode.com/users/1")
const posts = await fetchData<Post[]>("https://jsonplaceholder.typicode.com/posts/1")
users.id
users.name

users.username

posts[0].body
posts[0].title
export {}
