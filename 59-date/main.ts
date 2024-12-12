let date = new Date()
console.log(date)

let hours = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()
let dd = date.getDate()
let days = date.getDay()
console.log(hours - 12 , minutes, seconds)
console.log(dd)
console.log(days)
let month = date.getMonth()

let day = ["sunday", "monday", "tuesday", "wednesday", "FRIDAY", "STAUTDAY"]
console.log(day[days])
let months = [1,2,3,4,5,6,7,8,9,10,11,12]

console.log(months[month])
console.log(month)
