var elevation = 0;
var sec = 0;
var min = 60;

setInterval(
  function() {
    if (elevation >= 39000) {
      document.getElementById("body").style.backgroundColor="black";
    } else  if (elevation >= 10000) {
      //giveHint(); 
    } else {
      document.getElementById("Etimer").innerHTML =elevation.toFixed(1) + " feet";
      elevation += ((39000 / 60) / 60) / 250;
      if (sec == 1) {
        sec = 60;
        min -= 1;
      } else sec -= 1;
      document.getElementById("TtimerS").innerHTML = sec;
      document.getElementById("TtimerM").innerHTML = min;
    }
  }, 
1);
