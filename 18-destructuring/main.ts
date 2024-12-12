// array destructuring

let arr = [ "SHAUKAT", 40, "abc@gami"]
// SOME TIME WE DON'T UNDERSTAND WHAT IS THIS WHICH VALUE OUTPUT IS NECSSARY NOW 
// ALWAY WE  ACCESS VALUE BY NUMERIC VALUE HOW I UNDERSTAND THIS INDEX PROVID ME 
// THIS VALUE BY INDEX 
console.log(arr[0])// "SHAUKAT" WHAT IS "SHAUKAT"
console.log(arr[1])//40 WHAT IS 40
console.log(arr[2])// what is abc@gmail.com
let [name1, age , emaail]= arr

// we don't need [] or arr[] we can directly acces alment by name
console.log(name1)
console.log(age)
console.log(emaail)
// object destructuring
let obj = {
    fname:"shaukat",
    lName:"aziz",
    age:40,
    hobbies:["a","b","c"]
};
console.log(obj.fname)
console.log(obj.lName)
console.log(obj.age)
// we don't need dot  we can directly acce hobbies
let {hobbies}= obj

console.log(hobbies)
// speically destructure use objt
// when we need specific data so we use destructuing
// destructuring less my code
// we can get data in obj specific or all data by destructuing
// help to easy