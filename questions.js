// let arr = [1,2,3,4,5,6,2,3];
// num = 2;

// for(let i=0; i<arr.length; i++)
// {
//     if(arr[i]== num){
//         arr.splice(i, 1);
//     }
// }
// console.log(arr);


let number = 281752;
let sum = 0;

while (number > 0) {
    let last = number % 10;
    sum = sum + last;
    number = Math.floor(number / 10);

}
console.log(sum);