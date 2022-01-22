/*    
create a function computerPlay
it should pick a random number from 1 to 3 ( 0 to 2)
return rock, paper or scissor 

create a function called playARound with parameters (playerInput, computerChoice)
function should compare the two inputs and decide the winner
return the outcome




*/
let computerChoice;

function computerPlay(computerChoice){
    let randomNumber = Math.floor(Math.random()*3)+1;
    computerChoice = (randomNumber == 1) ? 'Rock' : (randomNumber == 2) ? 'Paper' : 'Scrissors';
    return computerChoice;
}

function playARound(playerInput = prompt('Pick one: Rock, Paper, Scissors'), computerChoice){

}