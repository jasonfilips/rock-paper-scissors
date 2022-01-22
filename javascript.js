/*    
create a function computerPlay
it should pick a random number from 1 to 3 ( 0 to 2)
return rock, paper or scissor 

create a function called playARound with parameters (playerInput, computerChoice)
Make both parameters lowercase (for easier comparison)
if playerInput and computerChoice are the same then draw;
if playerInput is paper and computer choice is rock, player wins, paper beats rock;


return the outcome




*/

function computerPlay(computerChoice){
    let randomNumber = Math.floor(Math.random()*3)+1;
    computerChoice = (randomNumber == 1) ? 'Rock' : (randomNumber == 2) ? 'Paper' : 'Scissors';
    return computerChoice;
}

function playARound(playerInput = prompt('Pick one: Rock, Paper, Scissors'), computerChoice){
    computerChoice = computerPlay();
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