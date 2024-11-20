let compScore = 0;
let userScore = 0;
const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score")
let msg = document.querySelector("#msg");
const genCompChoice = ()=>{
    const options = ["scissor", "rock","paper"];
    const ranIdx = Math.floor(Math.random()*3);
    return options[ranIdx];
}
const gameDraw =()=>{
    //console.log("Game was draw");
    msg.innerText = "Game was draw.Play again!";
    msg.style.backgroundColor ="#081b31";
    

};
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
//console.log("You Win");
userScore++;
userScorePara.innerText = userScore;
msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
msg.style.backgroundColor = "green";
    }
else{
    //console.log("You Lose");
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
}
};

    


const playGame = (userChoice ) => {
    console.log("user Choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp Choice= ",compChoice);
    if (userChoice===compChoice){
        gameDraw();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors,paper
            userWin = compChoice === "scissor" ? true : false;

        }
        else if(userChoice === "paper"){
            //rock,sissors
           userWin = compChoice === "rock" ? true : false;
        }
        else{
            userWin = compChoice === "paper" ? true :false;
        }
        showWinner(userWin, userChoice,compChoice);

    }

}
choices.forEach((choice) => {
    choice.addEventListener("click",()  =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});