var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var timerDisplay = document.getElementById("timerDisplay");
var hintButton = document.getElementById("hintButton");

var timeLeft = 20; // Initial time

init();

function init(){
    // Mode buttons - event listeners
    setUpModeButtons();
    setUpSquares();
    reset();
    startTimer(); // Start the timer
    hintButton.addEventListener("click", giveHint); // Event listener for hint button
}

function setUpModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setUpSquares(){
    for (var i = 0; i < squares.length; i++) {
        // Add click listeners to squares
        squares[i].addEventListener("click", function(){
            // Grab colour of picked square
            var clickedColor = this.style.backgroundColor;
            // Compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent =  "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323" ;
                messageDisplay.textContent = "Try again";
            }
        });
    }
}

function reset() {
    colors = generateRandomColors(numSquares);
    // Pick a new random color from array
    pickedColor = pickColor();
    // Change colorDisplay to match picked Color
    colorDisplay.textContent = "GUESS THE COLOUR " + pickedColor;
    resetButton.textContent = "GUESS THE COLOUR GIVEN ABOVE";
    messageDisplay.textContent = "";
    // Change colors of squares
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "#436850";
}

resetButton.addEventListener("click", function(){
    reset();
});

function changeColors(color) {
    // Loop through all squares
    for(var i = 0; i < squares.length; i++){
        // Change each color to match given color
        squares[i].style.backgroundColor = color;
    }   
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    // Make an array
    var arr = [];
    // Repeat num times
    for (var i = 0; i < num; i++){
        // Get random color and push into arr
        arr.push(randomColor());
    }
    // Return that array
    return arr;
}

function randomColor(){
    // Pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    // Pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    // Pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b +")";
}

function startTimer() {
    var timerInterval = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            messageDisplay.textContent = 'Time\'s up! Try again.';
            reset();
        } else {
            timerDisplay.textContent = timeLeft;
            timeLeft--;
        }
    }, 1000);
}

function giveHint() {
    // Extract one of the RGB components from the pickedColor
    var rgbComponents = pickedColor.match(/\d+/g);
    var hintIndex = Math.floor(Math.random() * 3);
    var hintColor;
    switch(hintIndex) {
        case 0:
            hintColor = "Red";
            break;
        case 1:
            hintColor = "Green";
            break;
        case 2:
            hintColor = "Blue";
            break;
    }
    messageDisplay.textContent = `Hint: The ${hintColor} component of the color is ${pickedColor[hintColor.toLowerCase()]}`;
}