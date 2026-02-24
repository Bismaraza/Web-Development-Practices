
// Arrow Function
// const sum = (a, b) => {
//     console.log(a + b);
// }
// const cube=(n)=> {
//     return n*n*n;
// }

// const pow = (a,b) =>(
// a*b)

// Set timeout

// console.log("Hi there");
// setTimeout(() =>{
//     console.log("Apna college")
// }, 4000);

// console.log("Welcome to");

// console.log("Hi there");
// let id = setInterval(() =>{
//     console.log("Apna college")
// }, 2000);
// console.log(id);

// const student = {
//     name: "Bisma",
//     marks: 95,
//     prop: this, // global
//     getName: function () {
//         console.log(this);
//         return this.name;
//     },
//     getMarks: () => {
//         console.log(this); // parents scope -> Window (global Scope)
//         return this.marks;
//     },
//     getInfo1: function () {
//         setTimeout(() => {
//             console.log(this);// student object
//         }, 2000);
//     },
//     getInfo2: function () {
//         setTimeout(function () {
//             console.log(this);// Window Obj
//         }, 2000);
//     },
// };

// const square = (n) => (n * n);

// let id = setInterval(() =>{
//     console.log("Hello World")
// }, 2000);

// setTimeout(() => {
//     clearInterval(id);
// }, 10000);


// JS PArt 7 Question no 1;
const arrayAverage = (arr) => {
    let total = 0;
    for (let number of arr) {
        total = total + number;
    }
    return total / arr.length;
};

let arr = [1, 2, 3, 4, 5, 6];
console.log(arrayAverage(arr));

// Question 2

const isEven = (n) => n % 2 == 0;

let n = 20;
console.log(isEven(n));

// Question 3
const object = {
    message:"Hello world",
    logMessage(){
        console.log(this.message);
    }
};

setTimeout(object.logMessage,1000);

// Question 4


