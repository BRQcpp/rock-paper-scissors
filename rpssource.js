let playerScore = 0;
let computerScore = 0;
let chooseButtons = document.querySelectorAll('.choice');
let roundDisplay = document.querySelector('.round-display');
let chooseDisplays =  roundDisplay.querySelectorAll('.icon');
let resultDisplays = document.querySelectorAll('.choice-display');
let resetButton = document.querySelector('.reset-button');

resetButton.addEventListener('click', () => {
    document.querySelector('#score-player').textContent = document.querySelector('#score-computer').textContent = 0;
});

chooseButtons.forEach( (chooseButton) =>
{
    chooseButton.addEventListener('click', () =>
    {
        resultDisplays.forEach( (resultDisplay) => resultDisplay.style.removeProperty('box-shadow'));
        playRound(-1, -1);
        setTimeout( () =>
        {
            chooseDisplays.forEach( (chooseDisplay) => {
                chooseDisplay.classList.add('appear-animation')
            })
            
            playRound(chooseButton.getAttribute('data-number'), computerPlay());
        }, 1350);
    });
});

chooseDisplays.forEach( (chooseDisplay) =>
{
    chooseDisplay.addEventListener('animationend', () =>
    {
        chooseDisplay.classList.remove('shake-animation');
    });
});

function computerPlay() {
    return Math.floor(Math.random() * 3);
}

function displayChoice(Selection, id, side) 
{   
    switch(+Selection)
    {
        case -1 :
        {
            let src = side == 1 ? 'graphics/fist-left.png': 'graphics/fist-right.png'; 
            let shakeAnimationClass = side == 1 ? 'shake-animation-left': 'shake-animation-right'; 
            AddIcon(`icon ${shakeAnimationClass}`, id, src);
        } break;

        case 0 : 
        {
            let src = side == 1 ? 'graphics/rock-left.png': 'graphics/rock-right.png'; 
            AddIcon('icon-hand-grab appear-animation icon', id, src);
        } break;
        case 1 :
        {
            let src = side == 1 ? 'graphics/paper-left.png': 'graphics/paper-right.png';
            AddIcon('icon-hand-paper appear-animation icon', id, src); 
        } break;
        case 2 :
        {
            let src = side == 1 ? 'graphics/scissors-left.png': 'graphics/scissors-right.png';
            AddIcon('icon-hand-scissors appear-animation icon', id, src);
        } break;
    }
}

function AddIcon(ClassList, id, src)
{
    ClassList = ClassList.split(' ');
    let parent = document.querySelector(id);
    parent.removeChild(parent.querySelector('img'));
    let child = document.createElement('img');
    child.setAttribute('src', src)
    for(let i = 0; i < ClassList.length; i++)
        child.classList.add(ClassList.at(i));
    parent.appendChild(child);
}

function playRound(playerSelection, computerSelection)
{
    displayChoice(computerSelection, '#computer-display', 0);
    displayChoice(playerSelection, '#player-display', 1);

    if(computerSelection != -1)
    {
        if(playerSelection == computerSelection)
        {
            resultDisplays.forEach( (resultDisplay) => resultDisplay.style.setProperty('box-shadow', '0px 0px 15px 0px rgba(169, 169, 169, 1)'));
            document.querySelector('.round-result').textContent = 'Tie!';
        }
        else if(   (playerSelection == 0 && computerSelection == 2) 
                || (playerSelection == 2 && computerSelection == 1)
                || (playerSelection == 1 && computerSelection == 0)    )
        {
            resultDisplays[0].style.setProperty('box-shadow', '0px 0px 15px 0px rgba(85, 255, 85, 1)');
            resultDisplays[1].style.setProperty('box-shadow', '0px 0px 15px 0px rgba(255, 85, 85, 1)');
            document.querySelector('.round-result').textContent = 'Player won!';
            document.querySelector('#score-player').textContent = +document.querySelector('#score-player').textContent + 1;
        }
        else 
        {
            resultDisplays[0].style.setProperty('box-shadow', '0px 0px 15px 0px rgba(255, 85, 85, 1)');
            resultDisplays[1].style.setProperty('box-shadow', '0px 0px 15px 0px rgba(85, 255, 85, 1)');
            document.querySelector('.round-result').textContent = 'Computer won!';
            document.querySelector('#score-computer').textContent = +document.querySelector('#score-computer').textContent + 1;
        }
    }
}

