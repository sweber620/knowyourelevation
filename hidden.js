var placeholder;
var cheatervar = 0;
function input(num) {
  if (event.keyCode == 13) { //enter
    switch(num) {
      case 1: if(document.getElementById("capitalLocation").value == "Helsinki") {showRiddle();}
    }
  } else if (event.keyCode == 123) {alert("No cheating! Next time, you'll automatically lose!"); cheatervar+=1;)}
}
function showRiddle() {
  document.getElementById("topLeftStuff").display="none";
}
  
setInterval(input(1),1);
