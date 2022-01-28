function computerPlay() {
    const selection =  Math.floor(Math.random() * 3);


    if(selection === 0)
        return "paper";
    else if(selection === 1)
        return "rock"
    else 
        return "scissors"
}


/*function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection)
        console.log("Tie");
    else if(playerSelection === "paper" && computerSelection === "rock")
        console.log("Player won!")
    else if(playerSelection === "scissors" && computerSelection === "paper")
        console.log("Player won!")
    else if(playerSelection === "rock" && computerSelection === "scissors")
        console.log("Player won!")
    else 
        console.log("Computer won!");
}*/
   

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection)
        console.log("Tie");
    else if(    (playerSelection === "paper" && computerSelection === "rock") 
             || (playerSelection === "scissors" && computerSelection === "paper")
             || (playerSelection === "rock" && computerSelection === "scissors")    )
        console.log("Player won!");
    else 
        console.log("Computer won!");
}



 
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
console.log(`Player selection: ${playerSelection}`);
console.log(`Computer selection: ${computerSelection}`);
