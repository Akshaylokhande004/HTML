const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];


// Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function(){

    // Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
    var userChosenColour = $(this).attr("id");
    push.userClickedPattern[userChosenColour];
})
function nextSequence() {
    let randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#"+"randomChosenColor").fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3")
   audio.play();
   

   
  


}



