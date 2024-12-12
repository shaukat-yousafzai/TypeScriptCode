// // // // // array method .map()
// // // // // map aik new array retrun karta hai
// // // // // yeh empty array per excute nahi kerta
// // // // // map orginal array ko chane nahi karta 
// // // // // map 3 permeter leta hai

// // // // let arr = [1,2]
// // // // arr.map((r)=> {
// // // //     console.log(r+4)
// // // // })

// // // // console.log(arr)// map orginal array ko chane nahi karta 


// // // // let arr1 = []
// // // // arr1.map((r)=> {
// // // //     console.log(4)  // yeh empty array per excute nahi kerta
// // // // })


// // // let arr2 = [1,2]
// // // let a = arr2.map((r)=> {
// // //     return r
// // // })

// // // console.log(a) // map aik new array retrun karta hai


// // let arr3 = [2,3,4,5]
// //  // map 3 permeter leta hai
// // arr3.map((a,b,c)=>{
// //     console.log(a) // frist permeter array ka element  print karta hai
// //     // console.log(b)
// //     // console.log(c)
// // })
// // arr3.map((a,b,c)=>{
// //     // console.log(a)
// //     console.log(b) //  scond permeter arry ka index print karta hai
// //     // console.log(c)
// // })
// // arr3.map((a,b,c)=>{
// //     // console.log(a)
// //     // console.log(b)
// //     console.log(c)// 3 rd permeter array ka loop array print karta hai jitna length ho itna time array print karga
// // })



// // let arr = [ 1 ,2 , 4, 5,]

// // let map1 = arr.map((elem)=> elem)

// // console.log("orginal:", arr)
// // console.log("map new arr", map1)


// // let arr = [ 1 ,2 , 4, 5,]

// // let map1 = arr.map((elem)=> elem + 10)

// // console.log("orginal:", arr) // no change
// // console.log("map new arr", map1)

let arr = [ 1 ,2 , 4, 5,]

// let map1 = arr.map((elem,i,refre)=> {
// //    console.log(refre)
//     console.log("index",i)
//     return elem + 10  

// })
// let map2 = arr.map((elem,i,refre)=> {
//     //    console.log(refre)
//         console.log("refern",refre)
//         return elem + 10  
    
//     })
// console.log("orginal:", arr)
// console.log("map2 new arr", map2)
// console.log("map1 new arr", map1)




// let map3 = arr.map((elem,i,refre)=> {
//     //    console.log(refre)
//         return refre
//     })
//     console.log("retrun map3 refre" , map3)
    
//     let map4 = arr.map((elem,i,refre)=> {
//         return i
//     })

//     console.log("map4 new arr", map4)




let arrofObj = arr.map((elem,i,refre)=>{
    return {
        elemVal: elem,
        elemIndex: i,
        refArr: refre
    }
})

// console.log("arrofObj", arrofObj)


let duplicate =  arrofObj.map((em)=> em.elemVal)
console.log("duplicate", duplicate)


