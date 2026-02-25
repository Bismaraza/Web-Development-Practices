// Array Methods 

let arr = [1, 2, 3, 4, 5];

arr.forEach((el) => {
    console.log(el);
});

let double = arr.map(function (el) {
    return el*el;
});




// let print = function(el){
//     console.log(el);
// };

// arr.forEach(print);


let arrr = [{
    name: "Bisma",
    marks: 93,
}, {
    name: "Bisma",
    marks: 95,
}, {
    name: "Bisma",
    marks: 92,
}];

let gpa = arrr.map((el) => {
    return el.marks/10;
});

arrr.forEach((student) =>{
    console.log(student.marks);
});