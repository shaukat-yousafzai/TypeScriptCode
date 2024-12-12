// array is the
// collection of values 
// array syntx
var arr = ["shaukat", "fareed", "naveed", 23, true];
// length 
// length always strat in 1 
console.log(arr.length);
//length always return number how many data sotre in this array or how many length of this data 
// index   [index]
// list of data   
// shaukat
// aziz
// waqas
// shaukat aziz waqas is not list of data becuse they write sperate 
// list alayse write in table row 
// we can say row 1 is shaukat
// row 2 is aziz
// row 3 is waqas
// but programmer say 
// index means []
// [index] zero like [0] is equal to  row 1 
// indec 1 is equal to row 2
// [0]  shaukat
// [1] aziz
// [2] waqas
// in programing how can i asccess
arr[0]; // out put is shaukat
console.log(arr[0]);
// normal way to create array
var array1 = [1, 2, 3];
console.log('array1: ', array1);
// by array constructor 
var array2 = new Array(1, 2);
console.log('array2: ', array2);
// by array method to create array
var array3 = Array.of(1, 2);
console.log('array3: ', array3);
// nested array  
var arraya = [2, 3, 4, 5, [3, 4, 5]];
console.log(arraya[4][1]);
// union type of array
var array = ["shaukat", "shauka", ["bhai", "jan"]];
//prototype means pre-defined function  
// array.pop() represent remove last element of array
// arrayNameOFVar.shift() represent remove first element of array
// varibleofarrayName.unshift("shaukat") represnt add first elemnt of array unshif() method take arguments numbers of element
// push("sha") same is unshif() but push add elemnet of last 
var bhai = [0];
bhai.push(2);
console.log(bhai);
var a = bhai.push(4); // push method return length of full array my case this time bhai length of element 
// is 3
console.log(a);
var bhai2 = [0];
bhai2.unshift(2);
console.log(bhai2);
var a2 = bhai2.unshift(4); // push method return length of full array my case this time bhai length of element 
// is 3
console.log(a2);
//slice
// slice method return slected element is an array as new array 
// slice method does not changed orginal array
// retrun slected element 
var aaa = ["shaukat", "waqas", "pakistan", "world", "best", "ok", "dear"];
console.log('aaa: ', aaa);
var slice = aaa.slice(0, 4);
console.log('aaa2: ', aaa);
console.log('slice: ', slice);
aaa.slice(0, 4);
console.log('aaa: ', aaa);
// splice
//the splice method ads and or remove array element 
// the splice method overwrites the orginal array
// retrun deleted element array
var bbb = ["bilal", "nawaz", "sharif", "imran ", "khan"];
console.log(' bbb2: ', bbb);
var splice = bbb.splice(0, 4);
console.log('splice: ', splice);
console.log(' bbb3: ', bbb);
bbb.splice(0, 4);
console.log(' bbb4: ', bbb);
