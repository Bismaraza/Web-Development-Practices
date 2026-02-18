const max = prompt(" Enter a max number");
const random = Math.floor (Math.random() * max ) + 1;


let guess = prompt(" Guess the number: ");
while(true)
{
    if(guess == "quit"){
        console.log("User Quit");
        break;
    }

    if(guess == random){
        console.log(" congrats! Random Number was " + random);
        break;
    }
    else if( guess < random)
    {
        guess = prompt(" Hint: your guess was too small. Try again")
    }

    else {
        guess = prompt("Hint:  Your guess was too large, please try again");
    }
}
console.log(random);