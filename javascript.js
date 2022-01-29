const imges             = document.querySelectorAll('.images');
const roundResult       = document.getElementById('round-result');
const playerScoreText   = document.getElementById('player-score');
const computerScoreText = document.getElementById('computer-score');
const resetButton       = document.getElementById('reset');
let playerScore = 0;
let computerScore = 0;

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
    computerChoice = (randomNumber == 1) ? 'shoya' : 
                     (randomNumber == 2) ? 'fox' : 
                     'hunter';

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
    else if (playerInput == 'shoya'){ 
        if (computerChoice == 'fox'){
            changeComputerScore();
            roundResult.innerText = computerWinText;
            return;
        }
        else{
            changePlayerScore();
            roundResult.innerText = playerWinText;
            return;
        }
    }
    else if (playerInput == 'fox'){
        if (computerChoice == 'hunter'){
            changeComputerScore();
            roundResult.innerText = computerWinText;
            return;
        }
        else{
            changePlayerScore();
            roundResult.innerText = playerWinText;
            return;
        }
    }
    else if (playerInput == 'hunter'){
        if (computerChoice == 'shoya'){
            changeComputerScore();
            roundResult.innerText = computerWinText;
            return;
        }
        else{
            changePlayerScore();
            roundResult.innerText = playerWinText;
            return;
        }
    }
    else {return 'Wrong input!'}
}

function changePlayerScore(){
    playerScore++;
    playerScoreText.innerText = 'Player: ' + playerScore;
}

function changeComputerScore(){
    computerScore++;
    computerScoreText.innerText = 'Computer: ' + computerScore;
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;

    playerScoreText.innerText = 'Player: ' + playerScore;
    computerScoreText.innerText = 'Computer: ' + computerScore;
    roundResult.innerText = 'Pick one from the left side of the screen';
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

resetButton.addEventListener('click', resetGame);