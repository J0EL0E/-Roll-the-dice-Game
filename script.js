
var rollBtn = document.querySelector(".roll-btn");
var dominoForPlayer1 = document.querySelector(".img1");
var dominoForPlayer2 = document.querySelector(".img2");
var player1 = prompt("What is your name?");
var player2 = prompt("What is your name?");


document.getElementsByTagName("p")[0].textContent = player1;
document.getElementsByTagName("p")[1].textContent = player2;
alert("Instructions:\n" + " To start the game click the roll button, the dice will roll in random. So cheers to the winner!");



function randomizeDominoes () {
    var randomizerForP1 = Math.floor(Math.random()*6);
    var randomizerForP2 = Math.floor(Math.random()*6);
    function checkWinner () {
      if(randomizerForP1 > randomizerForP2) {
       return alert(player1 + " had win against " + player2);
       }
       if(randomizerForP1 < randomizerForP2) {
        return alert(player2 + " had win against " + player1);
       }
       else if (randomizerForP1 === randomizerForP2){
         return alert("It's a tie.")
       }
     }
     if (randomizerForP1 === 1) {
        dominoForPlayer1.setAttribute("src", "./images/dice1.png");
        return dominoForPlayer1.attributes;
     }
     if (randomizerForP1 === 2) {
        dominoForPlayer1.setAttribute("src", "./images/dice2.png");
     }
     if (randomizerForP1 === 3) {
        dominoForPlayer1.setAttribute("src", "./images/dice3.png");
     }
     if (randomizerForP1 === 4) {
        dominoForPlayer1.setAttribute("src", "./images/dice4.png");
     }
     if (randomizerForP1 === 5) {
        dominoForPlayer1.setAttribute("src", "./images/dice5.png");
     }
     if (randomizerForP1 === 6) {
        dominoForPlayer1.setAttribute("src", "./images/dice6.png");
     }
     if (randomizerForP2 === 1) {
        dominoForPlayer2.setAttribute("src", "./images/dice1.png");
     }
     if (randomizerForP2 === 2) {
        dominoForPlayer2.setAttribute("src", "./images/dice2.png");
     }
     if (randomizerForP2 === 3) {
        dominoForPlayer2.setAttribute("src", "./images/dice3.png");
     }
     if (randomizerForP2 === 4) {
        dominoForPlayer2.setAttribute("src", "./images/dice4.png");
     }
     if (randomizerForP2 === 5) {
        dominoForPlayer2.setAttribute("src", "./images/dice5.png");
     }
     if (randomizerForP2 === 6) {
        dominoForPlayer2.setAttribute("src", "./images/dice6.png");
     }
     return dominoForPlayer1.attributes, dominoForPlayer2.attributes, setTimeout(checkWinner, 100);
};



rollBtn.addEventListener("click", randomizeDominoes);







