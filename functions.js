
let arr = ["Bisma", "raza", "Apna College"];

function array(arr) {
    let text = "";

    for (let i = 0; i < arr.length; i++) {
        text = text + arr[i];
    }

    return text;
}

// Higher order Function
function multipleGreet(func, count) {
    for (let i = 1; i <= count; i++) {
        func();
    }
}
let greet = function () {
    console.log("hello");
}

multipleGreet(greet, 10);

// Returns a function 
function oddrEven(request) {
    if (request == "odd") {
        return odd = function (n) {
            console.log(!(n % 2 == 0));
        }
    }
    else if (request == "Even") {
        return even = function (n) {
            console.log(n % 2 == 0);
        }
    }
    else {
        console.log("Wrong Request");
    }
}
let request = "odd";

// Question 1 Part 6

let arrayy = [1,2,4,2,4,6,8,3,56];
let number = 5;
function maxnumber(arrayy, number){
    for(let i = 0; i<=arrayy.length; i++){
        if(arrayy[i] > number){
            number = arrayy[i];
            console.log(number)

        }
    }
    console.log(number)
}
maxnumber(arrayy , number)

// Question 2
let str = "abccdeffghhhi";

function unique(str) {
   let neww = "";

    for (let i = 0; i < str.length; i++) {
        let currchar = str[i];
        if (neww.indexOf(currchar) == -1) {
            neww = neww + currchar;
        }
    }
return neww;
}
console.log(unique(str));

// Question 4

let str1 = "bisma";
let count = 0;

function countvowels(str1){
    let count = 0;
    for(let i=0; i<str1.length; i++){
        if(str1[i] == "a" || str1[i] == "e" || str1[i] == "i" || str1[i] == "o" || str1[i] == "u"){
            count++;
        }
    }
    return count;
}
console.log(countvowels(str1));

// Question 5

let start = 100;
let end = 200;

function random(start, end){
    return Math.floor(Math.random() * (end - start) ) + start;
}
console.log(random(start,end));

// Question 3
let country = ["Australia", "Germany", "united states of America"];
let ansindex = 0;

function long(country) {
    for (let i = 0; i < country.length; i++) {
        let anslen = country[ansindex].length;
        let cureelen = country[i].length;
        if (cureelen > anslen) {
            ansindex = i;
        }
    }
return country[ansindex];
}
console.log(long(country));