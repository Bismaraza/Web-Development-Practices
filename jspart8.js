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


// let arrr = [{
//     name: "Bisma",
//     marks: 93,
// }, {
//     name: "Bisma",
//     marks: 95,
// }, {
//     name: "Bisma",
//     marks: 92,
// }];

// let gpa = arrr.map((el) => {
//     return el.marks/10;
// });

// arrr.forEach((student) =>{
//     console.log(student.marks);
// });

// let nums = [1,2,3,4,5,6,3,2,5,6];
// let ans = nums.filter((el) => {
//     return el<5;
// });

function getMin(nums) {

    let min = nums.reduce((min, el) => {
        if (min < el) {
            return min;
        } else { return el; }
    }); 
    
    return min;
}
let nums = [10, 20, 30, 40];

let ans = nums.every((el) => el % 10 == 0);
console.log(ans);
