let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    return Math.floor(Math.random() * 3);
}

function displayChoice(Selection, id) 
{   
    switch(+Selection)
    {
        case 0 : document.querySelector(id).innerHTML = '<i class="icon-hand-grab-o icon"> </i>'; break;
        case 1 : document.querySelector(id).innerHTML = '<i class="icon-hand-paper-o icon"> </i>'; break;
        case 2 : document.querySelector(id).innerHTML = '<i class="icon-hand-scissors-o icon"> </i>'; break;
    }
}

function playRound(playerSelection, computerSelection)
{
    displayChoice(computerSelection, '#computer-display');
    displayChoice(playerSelection, '#player-display');

    if(playerScore == 3 || computerScore == 3)
        playerScore = computerScore = document.querySelector('#score-player').textContent = document.querySelector('#score-computer').textContent = 0;
    
    if(playerSelection == computerSelection)
        document.querySelector('.round-info').textContent = 'Tie!';
    else if(    (playerSelection == 0 && computerSelection == 2) 
             || (playerSelection == 2 && computerSelection == 1)
             || (playerSelection == 1 && computerSelection == 0)    )
    {
        document.querySelector('.round-info').textContent = 'Player won!';
        document.querySelector('#score-player').textContent = +playerScore + 1;
    }
    else 
    {
        document.querySelector('.round-info').textContent = 'Computer won!';
        document.querySelector('#score-computer').textContent = +computerScore + 1;
    }

    playerScore = document.querySelector('#score-player').textContent;
    computerScore = document.querySelector('#score-computer').textContent;

    if(playerScore == 3)
        document.querySelector('.round-info').textContent = 'Player won game!'
    else if(computerScore == 3)
       document.querySelector('.round-info').textContent = 'Computer won game!'

}

let buttons = document.querySelectorAll('.choice');

buttons.forEach( button => button.addEventListener('click', () =>  playRound(button.getAttribute('data-number'), computerPlay())) )



