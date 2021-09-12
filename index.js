var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

const dice1 = document.querySelectorAll("img")[0];
dice1.setAttribute("src", "images/dice" + randomNumber1 + ".png");

const dice2 = document.querySelectorAll("img")[1];
dice2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

const title = document.querySelector("h1");

if (randomNumber1 == randomNumber2) title.innerHTML = "Draw!";
else if (randomNumber1 < randomNumber2) title.innerHTML = "Player 2 Win!🚩";
else if (randomNumber1 > randomNumber2) title.innerHTML = "🚩Player 1 Win!";
