// try catch 
// syntx 
// try {
    
// } catch (error) {
    
// }

/* console.log("start");

// lett a = "hi"
// console.log(a);  


 console.log("end") */ // crash my progroam a little mistake all program crash



//  try {
//   console.log("start");
//  } catch (error) {
//     console.log("error")
//  }
//  try {
//   lett a = "hi"
// console.log(a);  
//  } catch (error) {
//     console.log("error")
//  }
//  try {
//   console.log("end")
//  } catch (error) {
//     console.log("error")
//  } noe our  all program is not crach    


// console.log("start")
// try{
//     for (let i = 0 ; i > 5 ; i++){
//         console.log(d)
//     }
// } catch (e){
//     console.log("error")
// }

console.log("end")

let fun = async  () => {
   try {
    let fatchData = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    let response = await fatchData.json()
    console.log(response)
   } catch (error) {
    console.log("error fun is not working")
   }
}
fun()
console.log("end")