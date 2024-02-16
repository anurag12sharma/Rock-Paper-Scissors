let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    let options = ["rock","paper","scissors"];
    const rndInd = Math.floor(Math.random(options)*3);
    return options[rndInd];
}

const playGame = (userChoice) => {
    console.log("user choice is",userChoice);
    // Generating Computer Choice
    const compChoice = genCompChoice();
    console.log("comp choice is", compChoice);

    if(userChoice === compChoice){
        console.log("Game was Draw");
    }
    else{
        let userWin = true;
        if (userChoice === "rock"){
            // paper or scissors
            userWin = compChoice = "paper" ? false : true;
        }
        else if (userChoice ==="paper"){
            // rock or scissors
            userWin = compChoice = "scissors" ? false : true;
        }
        else{
            // paper or rock
            userWin = compChoice = "rock" ? false : true;
        } 
    }
}


choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
})
