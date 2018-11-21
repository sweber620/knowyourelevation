var placeholder;
var cheatervar = 0;
function showRiddle() {
  document.getElementById("topLeftStuff").display="none";
}
  
window.addEventListener('keyup', function(num=1) {
  if (event.keyCode == 13) { //enter
    switch(num) {
      case 1: if(document.getElementById("capitalLocation").value == "Helsinki") {showRiddle();}
    }
  } else if (event.keyCode == 123 || event.keyCode == 17 || event.keyCode == 122) {alert("No cheating! Next time, you'll automatically lose!"); cheatervar+=1;}
  if (cheatervar == 2) {elevation = 39000;}
});
