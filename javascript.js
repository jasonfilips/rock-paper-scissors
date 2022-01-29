const imges             = document.querySelectorAll('.images');
const roundResult       = document.getElementById('round-result');
const playerScoreText   = document.getElementById('player-score');
const computerScoreText = document.getElementById('computer-score');
const resetButton       = document.getElementById('reset');
const aboutButton       = document.getElementById('about');
const closeAboutButton  = document.getElementById('close-button');
const overlay           = document.getElementById('overlay');
const playerBackground  = document.getElementById('player');
const computerBackground= document.getElementById('computer');
let playerScore = 0;
let computerScore = 0;

function changeComputerImage(imag){
    computerChoiceContainer = document.getElementById('computer-choice');

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

    if (playerScore >= 5 || computerScore >= 5){
        return;
    }
    else if (playerInput === computerChoice){
        roundResult.innerText = 'Nobody won, it\'s a tie';
        return;
    }
    else if (playerInput == 'shoya'){ 
        if (computerChoice == 'fox'){
            changeComputerScore(playerInput,computerChoice);
            return;
        }
        else{
            changePlayerScore(playerInput,computerChoice);
            return;
        }
    }
    else if (playerInput == 'fox'){
        if (computerChoice == 'hunter'){
            changeComputerScore(playerInput,computerChoice);
            return;
        }
        else{
            changePlayerScore(playerInput,computerChoice);
            return;
        }
    }
    else if (playerInput == 'hunter'){
        if (computerChoice == 'shoya'){
            changeComputerScore(playerInput,computerChoice);
            return;
        }
        else{
            changePlayerScore(playerInput,computerChoice);
            return;
        }
    }
    else {return 'Wrong input!'}
}

function changePlayerScore(playerInput,computerChoice){
    if (playerScore >= 5){
        roundResult.innerText = 'Player wins the match!';
        return;
    }
    playerScore++;
    roundResult.innerText = 'Player won ' + playerInput + ' beats ' + computerChoice;
    playerScoreText.innerText = 'Player: ' + playerScore;
    playerBackground.style.backgroundColor = '#89a578';
    computerBackground.style.backgroundColor = '#993b36';
}

function changeComputerScore(){
    if (computerScore >= 5){
        roundResult.innerText = 'Computer wins the match!';
        return;
    }
    computerScore++;
    roundResult.innerText = 'Computer won ' + computerChoice + ' beats ' + playerInput;
    computerScoreText.innerText = 'Computer: ' + computerScore;
    playerBackground.style.backgroundColor = '#993b36';
    computerBackground.style.backgroundColor = '#89a578';
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    

    playerScoreText.innerText = 'Player: ' + playerScore;
    computerScoreText.innerText = 'Computer: ' + computerScore;
    roundResult.innerText = 'Pick one from the left side of the screen';
    computerBackground.style.backgroundColor = '#993b36';
    playerBackground.style.backgroundColor = '#993b36';
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

aboutButton.addEventListener('click', () => {
    const modal = document.getElementById('modal');
    openModal(modal);
})

closeAboutButton.addEventListener('click', () => {
    const modal = closeAboutButton.closest('.modal')
    closeModal(modal);
})

function openModal(modal) {
    if (modal == null) {return;}
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal == null) {return;}
    modal.classList.remove('active');
    overlay.classList.remove('active');
}