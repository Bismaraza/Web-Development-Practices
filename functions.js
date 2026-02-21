
// let arr = ["Bisma", "raza", "Apna College"];

// function array(arr) {
//     let text = "";

//     for (let i = 0; i < arr.length; i++) {
//         text = text + arr[i];
//     }

//     return text;
// }

function multipleGreet(func, count) {
    for (let i = 1; i <= count; i++) {
        func();
    }
}
let greet = function () {
    console.log("hello");
}

multipleGreet(greet, 10);