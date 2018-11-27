var dev = false;
var cheater = false;
function showRiddle() {
  document.getElementById("topLeftStuff").display="none";
}
function toggleDev() {
  dev = true;
}
document.getElementById("devButton").onclick="toggleDev();";

window.addEventListener('keypress', function(num=1) {
  if (event.keyCode == 13) { //enter
    switch(num) {
      case 1: if(document.getElementById("capitalLocation").value == "Helsinki") {showRiddle();}
    }
  } else if (event.keyCode == 123 || event.keyCode == 17 || event.keyCode == 122 && dev == false) {
    if (!cheater) {
      alert("No cheating! Next time, you'll automatically lose!"); 
      cheater = true;
    } else if (cheatervar) {elevation = 39000;}
  }
});
