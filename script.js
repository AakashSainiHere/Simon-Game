var userClickedPattern = [];
var gamePattern = [];
var buttonColor = ["red", "green", "blue", "yellow"];
var level = 0;
var started = false;



function sequence() {
   userClickedPattern = [];
   level++;
  $("#level-title").text("level "+level);
  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColor = buttonColor[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColor);
  
}

$(".block").click(function () {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length-1);
});

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

$(document).keypress(function() {
   if(!started) {
      $("#level-title").text("level "+level);
      sequence();
      started = true;
   }
});


function checkAnswer(currentLevel) {
if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
   console.log("success");
   if(userClickedPattern.length===gamePattern.length) {
      setTimeout(function(){
         sequence();
      },1000);
   }
}
   else{
      startOver();
      playSound("wrong");
      $("body").addClass("game-over");
      setTimeout(function(){
         $("body").removeClass("game-over");
      }, 200);
      $("#level-title").text("Game Over, Press Any Key to Restart");
      startOver();
   }

}

function startOver(){
   level = 0;
    gamePattern = [];
      started = false;

}


//  document.querySelector(".green").addEventListener("click", function(){
//     var buttonGreen = new Audio("sounds/green.mp3");
//     buttonGreen.play();
//     animate(click);

//  })

//  document.querySelector(".red").addEventListener("click", function(){
//     var  buttonRed= new Audio("sounds/red.mp3");
//     buttonRed.play();

//  })

//  document.querySelector(".yellow").addEventListener("click", function(){
//     var buttonYellow = new Audio("sounds/yellow.mp3");
//     buttonYellow.play();

//  })

//  document.querySelector(".blue").addEventListener("click", function(){
//     var buttonBlue = new Audio("sounds/blue.mp3");
//     buttonBlue.play();

//  })