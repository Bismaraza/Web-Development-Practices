
// Check the element is Lower case 
let name = "BiSMA";
let index= 1;

if(name[1] == name[1].toLowerCase())
{
    console.log(" Lower ");
}
else{
    console.log("Now lower");
}

// Iten exists in array
let arr =[ "BISMA", "R", 34,56,23,"RAZA"];
let check = "R";

if (arr.indexOf(check) != -1)
{
    console.log("Yes");
}
else {
    console.log("No");
}

// Trim Function

let str = "        BISMA       ";
console.log(str);
console.log(str.trim());