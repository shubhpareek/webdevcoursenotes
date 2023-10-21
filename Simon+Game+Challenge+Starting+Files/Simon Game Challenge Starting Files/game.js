var buttonColours = ["red","blue","green","yellow"];
var userChosenColour = [];
buttonColours.forEach((element)=>{
  console.log($("#"+element).attr("class"));
   $("#"+element).on("click", function() {
        var buttonId = $(this).attr("id"); // Get the ID of the clicked button
        userChosenColour.push(buttonId); // Push the button's ID to the array
        console.log(userChosenColour); // Print the updated array (you can remove this line in production)
        animatePress(element);
        playSound(element);
    });
});
var gamePattern = [];
// console.log($("h1"));
function nextSequence()
{
   var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  //1. Use jQuery to select the button with the same id as the randomChosenColour
  //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
  playSound(randomChosenColour);
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