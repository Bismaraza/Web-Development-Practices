function dice(){
    const random = Math.floor (Math.random() * 6 ) + 1 ;
    console.log(random);
}

// dice();

function table(n){
    for(let i = 1; i<=10; i++){
    let mul = n*i;
    console.log(mul);
    }
}
// table(73);

let arr = [ 1,2,3,4];
let part = arr.slice(2,4);
console.log(part);