// // // padding start padstart()
// // // string method ye apka string ko pad karte hai apke valu se

// // let a: string = "5";
// // let b: string = a.padStart(5, "0"); // five 5 means frist agument meanss your string kamsi kam 5 length ho agar na ho to scod peerimter main jo hai os ko print karleinge
// // console.log(b);

// // // padend


// for (let i=1 ; i <= 10 ; i++){
//   let a:string = i.toString()
//   let roll:string = a.padStart(6,"BSC00")
//   let finalRoll:string = roll.padEnd(11,"/2023")
//   console.log(finalRoll)
// }




// let a:string = "5"
//              //padstart(max length, fillstring?:string|undefinded):string
// // let b: string = a.padStart(2);
// // let b: string = a.padStart(5,"0"); // 00005
// let b: string = a.padStart(5,"fa"); // fafa5
// console.log(b)
// let c: string = a.padEnd(5,"fa"); // 5fafa
// console.log(c)




for (let i = 1 ; i <= 10 ; i++) {
  let a:string = i.toString()
  let roll: string = a.padStart(6, "BSC00");
  let finalRoll: string = roll.padEnd(11, "/2023");
  console.log(finalRoll);
}



