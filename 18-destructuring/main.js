// array destructuring
var arr = ["SHAUKAT", 40, "abc@gami"];
// SOME TIME WE DON'T UNDERSTAND WHAT IS THIS WHICH VALUE OUTPUT IS NECSSARY NOW 
// ALWAY WE  ACCESS VALUE BY NUMERIC VALUE HOW I UNDERSTAND THIS INDEX PROVID ME 
// THIS VALUE BY INDEX 
console.log(arr[0]); // "SHAUKAT" WHAT IS "SHAUKAT"
console.log(arr[1]); //40 WHAT IS 40
console.log(arr[2]); // what is abc@gmail.com
var name1 = arr[0], age = arr[1], emaail = arr[2];
// now we don't new index number we can acess this index specific tex
console.log(arr[name1]); // now i now we acess name shaukat
console.log(arr[age]); // now i now we acess age
console.log(arr[emaail]); // now i we know acess email
// we don't need [] or arr[] we can directly acces alment by name
console.log(name1);
console.log(age);
console.log(emaail);
// object destructuring
var obj = {
    fname: "shaukat",
    lName: "aziz",
    age: 40,
    hobbies: ["a", "b", "c"]
};
console.log(obj.fname);
console.log(obj.lName);
console.log(obj.age);
var hobbies = obj.hobbies;
console.log(hobbies);
