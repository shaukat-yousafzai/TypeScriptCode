// // // // // // // personal message :  store a person name in a vaiable and print a message to that person your message should be simple such as " hello eric , would you like to learn some python today ?"
// // // // // // let firstName:string = "shaukat";
// // // // // // console.log(`hello ${firstName}, would you like to learn some python today?`);
// // // // // // console.log("hello",firstName+", would you like to learn some pythod today?")
// // // // // // // tsc main.ts && node main.js
// // // // // // // tsc --init
// // // // // // // tsc -w
// // // // // // //name case :
// // // // // // // store a person name in a variable and then print that person's name in lowercase, uppercase and titlcase
// // // // // // let name1 = 'shaukat';
// // // // // // let upperCase = name1.toUpperCase();
// // // // // // console.log(upperCase)
// // // // // // let lowerCase = name1.toLowerCase();
// // // // // // console.log(lowerCase)
// // // // // // let titlCase = name1.charAt(0).toUpperCase() + name1.slice(1).toLowerCase();
// // // // // // console.log(titlCase)
// // // // // //famous quote: find a quote from a famous person you admire . print the quote and the name its author your output should look something like the
// // // // // // follwing , including the quatation marks:
// // // // // // albert einsteain once said , "a person who neave made a mistake never tried anything new"
// // // // // console.log('albert einsteain once said , "a person who neave made a mistake never tried anything new"')
// // // // // famouse qute 2 : repaete previous excrcise 4 , but this time store the faomus person name in varavle called famouse-person . then comppose your message and store it in a new variable callde message . prit you message
// // // // let famouse_person = "Albert Einsteain";
// // // // let massage : string =
// // // // 'a person who naver made a mistake never tried any thing new';
// // // // console.log(`${famouse_person} once said, "${massage}"`)
// // // // // stripping Name: Store a person's name, and include some whitespace characters at the beginig and end the name , make sure you use each
// // // // //character combination, "\t" and "\n" at least once . print the name once , so the whitespace around the name is displayed . then print the name after strinping thw whitespace
// // // // // console.log("helloworld")
// // // // // console.log("hello\nworld")
// // // // // console.log("hello\tworld")
// // // // // number eight :
// // // // // write addition , subtraction, multiplication and division operation that each result  in the number 8 be sure enclose your operation in print statements
// // // // let a: number = 10;
// // // // let b:number = 5;
// // // // console.log(a + b);
// // // // console.log(a - b);
// // // // console.log(a * b);
// // // // console.log(a / b);
// // // // // you should create foru lines look like this console.log(5+3)
// // // // // your output should simply be four line with the number 8 appering once on each line
// // // // console.log(5 + 3);
// // // // console.log(5 - 3);
// // // // console.log(5 * 3);
// // // // console.log(5 / 3);
// // // // // fourit number : store your fovaourte number in a varible number in a variable  then using tha varible a message that revals your favorite number print that meassage
// // // // let favorite_number: number = 8;
// // // // console.log(`my favorite number is ${favorite_number}`);
// // // // // Adding comments:
// // // // // choose two of the program you have written and add at least one comment to each . if you don not have anything specific to write
// // // // // beacause your programs are too simple at this point just add your name and the current date at the top of each program file then write one sentence describing what the program does
// // // // // addutional program
// // // // let a1 : number = 10
// // // // let b2 :number = 20
// // // // console.log(a1 , "+", b2, "=", a1 + b2)
// // // // // subtriction program
// // // // let a2 : number = 10
// // // // let b1 :number = 20
// // // // console.log(a2 , "+", b1, "=", a2 + b1)
// // // // // names : store the names of a few of your friends in a array called names. prints
// // // // // each person's name by accessin each element in the list one at a time
// // // let names : string[]= ["shaukat", "ishfaq", "ahmed ", "tehseen"]
// // // // console.log(names[0])
// // // // console.log(names[1])
// // // // console.log(names[2])
// // // // console.log(names[3])
// // // // console.log(names[4])
// // // // console.log(names[5])
// // // // gerrteing : start with the array you used in exercise 11 , but instead of just printing each person name pint a meassge to them . the tex of each message
// // // // should be the same but each message should be personlized with the person's name
// // // let message : string = "is the founder of it mate pakistan";
// // // console.log(names[0], message)
// // // console.log(names[1], message)
// // // console.log(names[2], message)
// // // console.log(names[3], message)
// // // console.log(names[4], message)
// // // // YOUR OWN ARRAY : THINK OF YOUR FAVORITE MODE OF TRANSPORATION SUCH AS MOTORCUCLE OR A CAR , AND MAKE A LIST THAT STORES SEVERAL EXAMPLES USE YOUR LIST TO PRINT A  SERIES OF SATEMENT AVOUST THESE SUAC AS I WOULD LIKE TO OWN A HODA MOTORCYLCYE
// // // let vehicles:string[]= [
// // //     "hoda motorcyle",
// // //     "hoda city",
// // //     "hoda civics",
// // //     "bmw",
// // //     "audi RB"
// // // ]
// // // vehicles.map((item)=>{
// // // console.log("i would like to own a", item)
// // // })
// // // // guset list : if you could invite anyone living or deceased to dinner who would you invite make a list that includes at least three people you like to invute to dinner then use your list to print a message to each person invuting them to dinner
// // // let gustList : string[] = ["shaukat", "aziz", "waqas"]
// // // // gustList.map((item)=>{
// // // //     console.log("dear",item+", you are corodially inivited to dinner")
// // // // })
// // // // question no 15
// // // let canNotAtten:string = "aziz"
// // // console.log(canNotAtten,"can not make it, for dinner")
// // // // modify name whoc can't make it , for dinner new person you are inviting
// // // let newGust:string = "chamman lal"
// // // gustList[gustList.indexOf(canNotAtten)] = newGust
// // // gustList.map((item)=>{
// // //     console.log("dear",item+", you are corodially inivited to dinner")
// // // })
// // // more gust taskes 17
// // let gustList: string[] = ["shaukat", "aziz", "waqas"];
// // let canNotAtten: string = "aziz";
// // let newGust: string = "chamman lal";
// // gustList[gustList.indexOf(canNotAtten)] = newGust;
// // let guestbegin: string = "naiz";
// // gustList.unshift(guestbegin);
// // let middleGues: string = "crime master gogo";
// // let middleIndex: number = gustList.length / 2;
// // gustList.splice(middleIndex, 0, middleGues);
// // gustList.push("danger master gogogo");
// // // gustList.map((item)=>{
// // //     console.log("dear",item+", i found a bigger dinner table")
// // // })
// // // question number 17
// // console.log("i can invite only two people for dinner");
// // // Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// // // • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// // // • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// // // • Print a message to each of the two people still on your list, letting them know they’re still invited.
// // // • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// // // while (gustList.length > 2){
// // //     let removeGuest  = gustList.pop()
// // //     console.log("dear", removeGuest, "your are not invited to the dinner")
// // // }
// // // gustList.map((item)=>{
// // //    console.log("dear", item, "you are also invited to the dinner")
// // // })
// // // gustList.pop()
// // // gustList.pop()
// // // console.log(gustList)
// // // Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// // console.log(gustList.length, "people are invited to dinner");
// // // Seeing the World: Think of at least five places in the world you’d like to visit.
// // // • Store the locations in a array. Make sure the array is not in alphabetical order.
// // // • Print your array in its original order.
// // // • Print your array in alphabetical order without modifying the actual list.
// // // • Show that your array is still in its original order by printing it.
// // // • Print your array in reverse alphabetical order without changing the order of the original list.
// // // • Show that your array is still in its original order by printing it again.
// // // • Reverse the order of your list. Print the array to show that its order has changed.
// // // • Reverse the order of your list again. Print the list to show it’s back to its original order.
// // // • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// // // • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// // let conntryArr = [
// //   "pakistan",
// //   "indai",
// //   "argentina",
// //   "zimbabwe",
// //   "america",
// //   "bangladesh",
// // ];
// // console.log(conntryArr);
// // // let sortedArr = conntryArr.sort();
// // // console.log(sortedArr);
// // console.log(conntryArr);
// // let reverseArr = conntryArr.reverse();
// // console.log(reverseArr);
// // let sortedArr = conntryArr.sort();
// // console.log(sortedArr.reverse());
// // Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// let programingLanguages =[
//     "javascript",
//     "python",
//     "java",
//     "c++",
//     "ruby",
//     "swift",
//     "go",
//     "rust",
//     "kotlin",
//     "perl",
//     "cobol",
//     "haskell",
//     "matlab",
//     "fsharp",
//     "delphi",
//     "prolog",
//     "scheme",
//     "clojure",
//     "lua",
//     "bash",
//     "perl6",
//     "typescript",
//     "dart",
//     "racket",
//     "clojurescript",
//     "nim",
//     "scala",
//     "elm",
//     "coffeescript",
//     "lua"
//  ];
// //  console.log(programingLanguages);
//  programingLanguages.map((item)=>{
//     console.log(item)
//  })
// //  They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// let programmingLanguageObject = {
//     "javascript": {
//         "creator": "Brendan Eich",
//         "year": 1995,
//         "popular": true,
//         "type": "multi-paradigm",
//         "language": "ECMAScript",
//         "frameworks": ["React", "Vue", "Angular"],
//         "usedIn": ["Web Development", "Mobile Development", "Desktop Development"]
//     },
//     "python": {
//         "creator": "Guido van Rossum",
//         "year": 1991,
//         "popular": true,
//         "type": "multi-paradigm",
//         "language": "Object-Oriented",
//         "frameworks": ["Django", "Flask", "Pyramid"],
//         "usedIn": ["Web Development", "Data Analysis", "Machine Learning", "Artificial Intelligence"]
//     },
//     "java": {
//         "creator": "James Gosling",
//         year: "2009",
//     },
// }
// let person={
//     name:"ratan Lal",
//     fName:"chaman Lal",
//     age:25,
//     gender:"male",
//     hobbies:["reading", "painting", "singing"],
// }
// // console.log(programmingLanguageObject);
// // console.log(person);
// // Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// let arr = [
//     "apple",
//     "banana",
//     "cherry",
//     "date",
//     "elderberry",
// ]
// console.log(arr[10]); // This will cause an index error
// console.log(arr[0])
// // Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// // let car = 'subaru';
// // console.log("Is car == 'subaru'? I predict True.")
// // console.log(car == 'subaru')
// // • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// // • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// console.log(car == "totya")
// let num: any = 23;
// console.log("is num == 23(in number) ? i preict true otherwise i predict false")
// console.log(num === 23)
// console.log(num === "23")
// let fruit = "apple";
// console.log("Is fruit == 'apple'? I predict True otherwise i predict false")
// console.log(fruit == "apple")
// console.log(fruit == "banana")
// let arr1 = [1,2,3];
// console.log("Is arr1 == [1,2,3] ? I predict True otherwise i predict false")
// console.log(arr1[0] == 1)
// console.log(arr1[0] == 2)
// let obj1 = {name: "John", age: 30};
// console.log("Is obj1 == {name: 'John', age: 30}? I predict True otherwise i predict false")
// console.log(obj1.name == "John")
// console.log(obj1.name == "SHAUKAT")
// let a:any = true
// console.log("Is a == true? I predict True otherwise i predict false")
// console.log(a==true)
// console.log(a==false)
// // More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// // • Tests for equality and inequality with strings
// let string1 = "Hello"
// let string3 = "Hello"
// let string2 = "world"
// console.log(string1 == string1)
// console.log(string1 == string2)
// // • Tests using the lower case function
// // Using the lower case function
// console.log("Testing with lower case:");
// console.log("Apple".toLowerCase() == "apple"); // True
// // • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//  let num1 = 10
//  let num2 = 15
//  console.log(num1 == num2)
//  console.log(num1 > num2)
//  console.log(num1 < num2)
//  console.log(num1 >= num2)
// // • Tests using "and" and "or" operators
// // Tests using "and" and "or" operators
// console.log("Tests with 'and' and 'or':");
// console.log(true && false); // False
// console.log(true || false); // True
// // • Test whether an item is in a array
// // Test whether an item is in a array
// let fruits = ["apple", "banana", "cherry"];
// console.log("Is 'apple' in fruits?");
// console.log(fruits.includes("apple")); // True
// // • Test whether an item is not in a array
// // Test whether an item is not in a array
// console.log("Is 'mango' not in fruits?");
// console.log(!fruits.includes("mango")); // True
// let countries: string[] = ["Japan", "Canada", "New Zealand", "Iceland"];
// console.log("Countries I'd like to visit:", countries);
var arr = [1, 2, 3];
console.log(arr[10]); // Intentional error: Arrays are
// zero-indexed, so index 2 is out of bounds.
arr[10] = 4; // Correcting the error by accessing a valid index.
console.log(arr[10]);
console.log(arr);
