/*    
create a function computerPlay
it should pick a random number from 1 to 3 ( 0 to 2)
return rock, paper or scissor 

create a function called playARound with parameters (playerInput, computerChoice)
Make both parameters lowercase (for easier comparison)
if playerInput and computerChoice are the same then draw;
if playerInput is paper and computer choice is scissors, computer wins, scissors beats paper;
return the outcome

create a function called game
declare a variable player score 
declare a variable computer score

create a loop that plays the game untill the score is 5 for anyone
every loop detect if score is 5, if it is declare winner and stop loop
every loop if nobody wins write in the console the result of the match

returns the winner or console log




*/

let keepGoing = true;

function computerPick(computerChoice){
    let randomNumber = Math.floor(Math.random()*3)+1;
    computerChoice = (randomNumber == 1) ? 'Rock' : (randomNumber == 2) ? 'Paper' : 'Scissors';
    return computerChoice;
}

function playARound(playerInput = prompt('Pick one: Rock, Paper, Scissors'), computerChoice){
    computerChoice = computerPick();
    playerInput = playerInput.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (playerInput === computerChoice ){
        return 'Nobody won, it\'s a tie'
    }
    else if (playerInput == 'rock'){
        if (computerChoice == 'paper'){
            return 'Computer won ' + computerChoice + ' beats ' + playerInput;
        }
        else{
            return 'Player won ' + playerInput + ' beats ' + computerChoice;
        }
    }
    else if (playerInput == 'paper'){
        if (computerChoice == 'scissors'){
            return 'Computer won ' + computerChoice + ' beats ' + playerInput;
        }
        else{
            return 'Player won ' + playerInput + ' beats ' + computerChoice;
        }
    }
    else if (playerInput == 'scissors'){
        if (computerChoice == 'rock'){
            return 'Computer won ' + computerChoice + ' beats ' + playerInput;
        }
        else{
            return 'Player won ' + playerInput + ' beats ' + computerChoice;
        }
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let result;

    while(keepGoing){
        if (playerScore >= 5) {
            console.log('Player won the game!')
            keepGoing = false;
        }
        else if (computerScore >= 5){
            console.log('Computer won the game!')
            keepGoing = false;
        }

        result = playARound();

        if (result.charAt(0) == 'N'){
            console.log(result);
            continue;
        }
        if (result.charAt(0) == 'P'){
            playerScore++;
            console.log(result + '. Scores are now: Player '+ playerScore + ', Computer ' + computerScore);
            continue;
        }
        if (result.charAt(0) == 'C'){
            computerScore++;
            console.log(result + '. Scores are now: Player '+ playerScore + ', Computer ' + computerScore);
            continue;
        }
    }
}