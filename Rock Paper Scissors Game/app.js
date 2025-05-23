let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#userScorePara");
const compScorePara = document.querySelector("#compScorePara");

//Generating Computer Choice 
const gencompchoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
};

const drawGame = () => {
    console.log("Game was a Draw");
    msg.innerText = "Draw";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
}

const showWinner = (userWin,userchoice, compchoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!");
        msg.innerText= `You Win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You lose!");
        msg.innerText = `You lose! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userchoice) => {
    console.log("User choice =", userchoice)

    //Generating computer choice 
    const compchoice = gencompchoice();
    console.log("Computer choice= ", compchoice)

    if( userchoice === compchoice){
        //Draw Game
        drawGame();
    }
    else{
        let userWin = true;
        if(userchoice === "rock"){
            // comp -> paper/scissors
            userWin = compchoice === "paper" ? false : true; 
        }
        else if(userchoice === "paper"){
            //comp -> scissors/rock
            userWin = compchoice === "scissors" ? false : true;
        } 
        else{
            //comp -> rock/paper 
            userWin = compchoice === "rock" ? false : true;
        }
    showWinner(userWin);
}
    
};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        
        const userchoice= choice.getAttribute("id");
        console.log("Choice was clicked",userchoice);
        playGame(userchoice);
    });
});