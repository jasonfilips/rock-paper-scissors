//let keepGoing = true;
const imges = document.querySelectorAll('.images');
const roundResult = document.querySelector('p');


//let playerChoice;

function changeComputerImage(imag){
    computerChoiceContainer = document.querySelector('.computer-choice');

    while (computerChoiceContainer.firstChild){
        computerChoiceContainer.removeChild(computerChoiceContainer.firstChild)
    }

    computerChoiceImage = document.createElement('img');
    computerChoiceImage.src = './rps/'+imag+'.png';
    computerChoiceContainer.appendChild(computerChoiceImage);
}

function getComputerChoice(computerChoice){
    let randomNumber = Math.floor(Math.random()*3)+1;
    computerChoice = (randomNumber == 1) ? 'rock' : 
                     (randomNumber == 2) ? 'paper' : 
                     'scissors';

    changeComputerImage(computerChoice);

    return computerChoice;
}

function playARound(){
    computerChoice = getComputerChoice();
    playerInput = playerChoice;

    computerWinText = 'Computer won ' + computerChoice + ' beats ' + playerInput;
    playerWinText = 'Player won ' + playerInput + ' beats ' + computerChoice;

    if (playerInput === computerChoice){
        roundResult.innerText = 'Nobody won, it\'s a tie';
        return;
    }
    else if (playerInput == 'rock'){
        if (computerChoice == 'paper'){
            roundResult.innerText = computerWinText;
            return;
        }
        else{
            roundResult.innerText = computerWinText;
            return;
        }
    }
    else if (playerInput == 'paper'){
        if (computerChoice == 'scissors'){
            roundResult.innerText = computerWinText;
            return;
        }
        else{
            roundResult.innerText = computerWinText;
            return;
        }
    }
    else if (playerInput == 'scissors'){
        if (computerChoice == 'rock'){
            roundResult.innerText = computerWinText;
            return;
        }
        else{
            roundResult.innerText = computerWinText;
            return;
        }
    }
    else {return 'Wrong input!'}
}



function getImageClass(e){
    playerChoice = Array.from(this.classList)
    playerChoice = playerChoice.pop();
    playerChoice = String(playerChoice);

    playARound(playerChoice);
}

imges.forEach(img => img.addEventListener('click',getImageClass, {
    capture: false
}));


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