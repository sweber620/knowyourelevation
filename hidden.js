var cheater = false;
var mult = 1;
function showRiddle() {
  document.getElementById("topLeftStuff").display="none";
}

document.getElementById("body").onload = function() {
  window.addEventListener('keypress', function() {
    if (event.keyCode == 13) { //enter
        if (document.getElementById("capitalLocation").value == "Helsinki") {showRiddle();}
    } else if (event.keyCode == 123 || event.keyCode == 17 || event.keyCode == 122) {
      if (!cheater) {
        alert("No cheating! Next time, you'll automatically lose!"); 
        cheater = true;
      } else if (cheater) {mult = 1000}
    }
  });
}
