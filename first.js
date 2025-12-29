let myRoll = 11;
let userNum = prompt("Guess my roll number of 2 digit range 10-20:");
while(userNum !== myRoll){
    userNum = promt("you entered wrong number.Guess again:");
}
console.log("congratulations,you are right");