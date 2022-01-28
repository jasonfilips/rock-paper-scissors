//let keepGoing = true;
const imges = document.querySelectorAll('.images');
let playerChoice;

function getImageClass(e){
    playerChoice = Array.from(this.classList)
    playerChoice = playerChoice.pop();
    playerChoice = String(playerChoice);

    return playerChoice;
}

playerChoice = imges.forEach(img => img.addEventListener('click',getImageClass, {
    capture: false
}));

function getComputerChoice(computerChoice){
    let randomNumber = Math.floor(Math.random()*3)+1;
    computerChoice = (randomNumber == 1) ? 'Rock' : 
                     (randomNumber == 2) ? 'Paper' : 'Scissors';
    return computerChoice;
}

function playARound(){
    computerChoice = getComputerChoice();
    playerInput = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    computerWinText = 'Computer won ' + computerChoice + ' beats ' + playerInput;
    playerWinText = 'Player won ' + playerInput + ' beats ' + computerChoice;

    if (playerInput === computerChoice){
        return 'Nobody won, it\'s a tie';
    }
    else if (playerInput == 'rock'){
        if (computerChoice == 'paper'){
            return computerWinText;
        }
        else{
            return playerWinText;
        }
    }
    else if (playerInput == 'paper'){
        if (computerChoice == 'scissors'){
            return computerWinText;
        }
        else{
            return playerWinText;
        }
    }
    else if (playerInput == 'scissors' || playerInput == 'scissor'){
        if (computerChoice == 'rock'){
            return computerWinText;
        }
        else{
            return playerWinText;
        }
    }
    else {return 'Wrong input!'}
}


/*
function game(){
    let playerScore = 0;
    let computerScore = 0;
    let result;

    while(keepGoing){
        if (playerScore >= 5) {
            console.log('Player won the game!');
            break;
        }
        else if (computerScore >= 5){
            console.log('Computer won the game!');
            break;
        }

        result = playARound();

        if (result.charAt(0) == 'N'){
            console.log(result);
            continue;
        }
        if (result.charAt(0) == 'P'){
            playerScore++;
            console.log(result + '. Scores are now: Player ' + playerScore + 
                    ', Computer ' + computerScore);
            continue;
        }
        if (result.charAt(0) == 'C'){
            computerScore++;
            console.log(result + '. Scores are now: Player ' + playerScore + 
                    ', Computer ' + computerScore);
            continue;
        }
        if (result.charAt(0) == 'W'){
            console.log(result);
            continue;
        }
    }
}
*/