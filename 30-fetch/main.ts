// predifined function jo ek promise retrun karta hai 
// fecth ko require api hota hai 
// api kai hai 
// api client our server ke  bej main ek brch hai jo data ko  leane our lejani ka kam karti hai 
//this case we need dat  lena hai
// requir api 
// joson place holder webiste free api 

let url = "https://jsonplaceholder.typicode.com/posts/1"
// let fetchData = fetch(url).then((r)=>(r.json())).then((data)=>{
//     console.log(data);
// })
// console.log(fetchData) // fetch ka function promise retrun karta hai 
// promise  three state pending resolve and reject 

// promise jab melta hai to hum do method melta hai .then .catch .then ek callback function leta hai .catch bi callback funtion leta hai
// fetchData.then((resolve)=>{
//     console.log(resolve) // no read able q nahi hora hai qk josn prmpt main nahi hai
//     console.log("resolved")
// })
// fetchData.then((resolve)=>{
//         console.log(resolve.json())  // ye khud bi promis return karta hai
//         console.log("resolved")
//     })
    
//     fetchData.then((resolve)=>{
//         console.log(resolve)  // ye khud bi promis return karta hai
//         console.log("resolved")
//     }).then((r)=>{
//         console.log(r);
//     })
    
// fetchData.then((re)=>{
//       re.json()
// }).then((o)=>{
//     console.log(o);
// })
// fetchData.then((r)=>r.json()).then((data)=>{
//     console.log(data);
// })

// async await
// requitement promise
// let fun = async()=>{
//    let data = await fetch(url)
//    let resposne = await data.json()
//    console.log(resposne)
//    let ok = "ok"
//    let ye = await ok
//    console.log(ye)
// }
// fun()

// try catch 
// 
let fun = async()=>{
  try  {try{let data = await fetch(url)
    let resposne = await data.json()
    console.log(resposne)}catch (e){
        e = "correct your code await"
        console.log(e)
    }
    try {let ok = "ok"
    let ye = await ok
    console.log(ye)} catch (e){
        e = "correct your code ok"
        console.log(e)
    }
} catch (err){
        err = "correct your code";
        console.log(err)
    }
 }
 fun()
