var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var clicks = 0;
var gameOver = false;

$(document).keydown(function(event){

if(event.key === "a"&&level ===0){
  nextSequence();
  }
}

  ); //first colour is generated


function nextSequence(){
  if(!gameOver){
  $("h1").text("Level "+level);
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("."+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  level++;
  }
}


$(".btn").click(function(event){
  clicks++;
  var usedChosenColour = event.target.id;
  userClickedPattern.push(usedChosenColour);
  console.log(userClickedPattern);
  playSound(usedChosenColour);
  animatePress(usedChosenColour);
  checkElement();

})


function playSound(colour){
  var audio = new Audio('sounds/'+colour+'.mp3');
  audio.play();
}


function animatePress(currentColour){
  $("."+currentColour).addClass("pressed");
  setTimeout(function(){$("."+currentColour).removeClass("pressed")}, 100);
}


function checkElement(){
    for(var i = 0; i< clicks; i++){
      if(userClickedPattern[i]===gamePattern[i]){
        continue;
      }
      else{
        $("h1").text("You lose!");
        gameOver = true;
        break;
      }

    }

    if(clicks===level){
      clicks = 0;
      userClickedPattern = [];
      setTimeout(nextSequence, 2000);
    }

  }
