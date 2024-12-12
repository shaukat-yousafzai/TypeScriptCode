let userName : string = "bilal";
let pw : string = "234";
let code : string = "566";
if (userName == "bilal" && pw == "234"){
    console.log("kindly provide code")
    if ( code == "566"){
        console.log("wlcome" + " " + userName)
    }else{
        console.log("invalid code")
    }
}else{
    console.log("invalid user")
}