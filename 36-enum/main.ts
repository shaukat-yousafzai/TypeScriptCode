// what is enum ? 
// enum the set of value 
// which retrun  index or define indexed
// or return value

// syntx 
// enum name {}
// enum students {
//     bilal,
//     tehsin,
//     ahmend
// }
// const sudent :students = students.tehsin;
// const sudent2 :students = students['tehsin'];
// console.log('sudent2: ', sudent2);
// const test:string= students[0]
// console.log('test: ', test);
// console.log(sudent)
// enum students {
//     bilal=10,
//     tehsin,
//     ahmend
// }
// const sudent :students = students.tehsin;
// const sudent2 :students = students['tehsin'];
// console.log('sudent2: ', sudent2);
// const test:string= students[0]
// console.log('test: ', test);
// console.log(sudent)


// enum students {
//     bilal= "bilal",
//     tehsin,       // error
//     ahmend         // error
// }
// const sudent :students = students.tehsin;
// const sudent2 :students = students['tehsin'];
// console.log('sudent2: ', sudent2);
// const test:string= students[0]
// console.log('test: ', test);
// console.log(sudent)



// enum students {
//     bilal="bilal",
//     tehsin= "tehsin",
//     ahmend="ahmend"
// }
// const sudent :students = students.tehsin;
// const sudent2 :students = students['tehsin'];
// console.log('sudent2: ', sudent2);
// const test:string= students[0]  // undifend
// console.log('test: ', test);
// console.log(sudent)


enum students {
    bilal="bilal",
    tehsin= "tehsind",
    ahmend="ahmend"
}
const sudent :students = students.tehsin;
const sudent2 :students = students['tehsin'];
console.log('sudent2: ', sudent2);
const test:string= students["tehsind"]  // undifend
console.log('test: ', test);
console.log(sudent)

function f1(b:string){
    return b
}

console.log(f1(students.tehsin))
