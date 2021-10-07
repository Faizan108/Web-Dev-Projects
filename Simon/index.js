
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var colorPattern= [];
var level=0;
var started=false;
$(document).keypress(function(){
    if(!started)
    {
        $("h1").text("Level "+level);
        nextSequence();
        started=true;
    }
});
$(".btn").click(function(){
    
    var userChosenColor=$(this).attr("id");
    colorPattern.push(userChosenColor);
    makesound(userChosenColor);
    animate(userChosenColor);
    checkAnswer(colorPattern.length-1);
});

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === colorPattern[currentLevel]) {
      if (colorPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } 
    else {
        makesound("wrong");
        $("body").addClass("game-over");
        $("h1").text("Game Over, Press Any Key to Restart");
  
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
  
        startOver();
    }
}
function nextSequence() {
    colorPattern=[];
    level++;
    $("h1").text("Level "+level);
  var randomNumber = Math.floor(Math.random() * 4); 
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("."+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
 makesound(randomChosenColour);

}
function makesound(name)
{
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}
function animate(animation)
{
    $("#"+animation).addClass("pressed");
    setTimeout(function(){
        $("#"+animation).removeClass("pressed");
    },100);
}
function startOver()
{
    level=0;
    started=false;
    gamePattern=[];
}
