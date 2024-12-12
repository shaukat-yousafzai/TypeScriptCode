// public private protected 
// reserve keyword of classes

class user {
  protected  name="shaukat"
  getuder(){
    return this.name
  }

}

class userInfo extends user {
    age = 40
    setUserName(){
        // return this.name = "tehsin" // this private this is only access orginal class
        return this.name = "tehsin" //why access beause now protected
    }
}

let obj = new user()
let obj1 = new userInfo()
console.log(obj.getuder())
// console.log(obj1.setUserName())