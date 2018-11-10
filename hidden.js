var placeholder;
function input(num) {
  if (event.keyCode == 13) { //enter
    switch(num) {
      case 1: if(document.getElementById("capitalLocation").value == "Helsinki") {showRiddle();}
    }
  }
}
function showRiddle() {
  document.getElementById("topLeftStuff").display="none";
}
  
