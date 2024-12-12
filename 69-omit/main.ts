const person = {
    name: "ratan",
    age: 22,
    username:"ratanLal",
    pw:"123"
}


type User = Omit<typeof person,"name"|"age">
const user:User = {
    username : "gulazarilal",
    pw:"abc"
}