let player1 = prompt("Enter Player 1 name.");
let player2 = prompt("Enter Player 2 name.");

document.querySelectorAll("p")[0].innerText = player1;
document.querySelectorAll("p")[1].innerText = player2;

document.getElementById("rollButton").addEventListener("click", function(){
    rollDice();
});

function rollDice(){
    var randomNumber1 = Math.floor(Math.random() * 6 + 1);
    var imageSource1 = "images/dice" + randomNumber1 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", imageSource1);

    var randomNumber2 = Math.floor(Math.random() * 6 + 1);
    var imageSource2 = "images/dice" + randomNumber2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", imageSource2);

    if (randomNumber1 === randomNumber2){
        document.querySelectorAll("p")[2].innerText = `Game Draws`;
    }else if (randomNumber1 > randomNumber2){
        document.querySelectorAll("p")[2].innerText = `🥳 ${player1} wins 🎉`;
    }else{
        document.querySelectorAll("p")[2].innerText = `🥳 ${player2} wins 🎉`;
    }
}


