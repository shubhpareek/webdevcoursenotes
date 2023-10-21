var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];
var started = 0;
var level =0 ;
var goingon =1;
var userChosenColour = [];
function checkAnswer()
{

  var n = userChosenColour.length;
  if(userChosenColour[n-1]!=gamePattern[n-1])
  {
    gamePattern=[];
    userChosenColour=[];
    goingon =1;
    playSound("wrong");
    $("#level-title").text("Failed ");
   setTimeout(()=>{
    $("#level-title").text("Press A Key to Start");

   },3000);
    started=0;
    level=0;
  }
  else
  {
    goingon=0;
    if(n===gamePattern.length)
    {
      goingon=1;
      setTimeout(()=>{nextSequence();},2000);
    }
  }
  

}
$(document).keypress(function() {
  if (!started) {

    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    started = true;
    nextSequence();
  }
});
buttonColours.forEach((element)=>{
  console.log($("#"+element).attr("class"));
   $("#"+element).on("click", function() {
    if(started && !goingon)
    {
        var buttonId = $(this).attr("id"); // Get the ID of the clicked button
        userChosenColour.push(buttonId); // Push the button's ID to the array
        console.log(userChosenColour); // Print the updated array (you can remove this line in production)
        animatePress(element);
        playSound(element);
        goingon=1;
        checkAnswer();
    }
    });
});
// console.log($("h1"));
function nextSequence()
{
    $("#level-title").text("Level " + level);
        level++;
   var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  userChosenColour = [];

  //1. Use jQuery to select the button with the same id as the randomChosenColour
  //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
  playSound(randomChosenColour);
  goingon=0;
}
function playSound(col)
{
  var audio = new Audio("sounds/" + col + ".mp3");
  audio.play(); 
}
function animatePress(currentColour)
{
  var elem = $("#"+currentColour);
  elem.addClass('pressed');
  setTimeout(() => {elem.removeClass('pressed')},100);
}