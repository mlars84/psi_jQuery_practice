/*
  Write code to make the number on the DOM countdown each second.
  Only one number should be displayed on the DOM at a time.

  HINT: look into javascript's setInterval() function.


  BONUS 1: Add a button for the user to reset the timer.
  BONUS 2: Make something cool happen using a jQuery animation when the timer gets to zero.
*/

// **ToDo**
// [x] - write code to decrement text every second
// [x] - add button to reset timer
// [] - use jquery animation when timers gets to zero

var countDown = 10;

$( document ).ready(onReady);

function onReady(){
  var counter = setInterval(function(){
    // console.log(counter);
    $('.count').text(countDown--);
    if (countDown === -1) {
      clearInterval(counter);
    }
  }, 100);
  resetTimerButton();
  // animationFunAtZero(countDown);
} // end onReady
// function to reset the timer on click of button
function resetTimerButton() {
  $('#resetTimer').on('click', function() {
    countDown = 10;
  });
} // end resetTimerButton

function animationFunAtZero() {
  if (countDown === 0) {
    $('.count').animate({
      left: '250px',
      height: '+=150px',
      width: '+=150px'
    });
  }
} // end animationFunAtZero
