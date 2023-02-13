var randomNumber1 = Math.round(Math.random() * 5) + 1; 
var randomNumber2 = Math.round(Math.random() * 5) + 1;
// number between 1 and 6

var images1 = "images/dice" + randomNumber1 + ".png"; 
var images2 = "images/dice" + randomNumber2 + ".png";
// changes dice image from 1 to 6 based off random number

document.querySelector("img.img1").setAttribute("src", images1);
document.querySelector("img.img2").setAttribute("src", images2);
// sets each dice image using variables above

if (randomNumber1 > randomNumber2) { 
    document.querySelector("h1").innerHTML = "👑Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!👑";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}