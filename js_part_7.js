
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

const square = (n) => (n * n);

let id = setInterval(() =>{
    console.log("Hello World")
}, 2000);

setTimeout(() => {
    clearInterval(id);
}, 10000);
