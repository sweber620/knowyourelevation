var elevation = 0;
var thingy = 0;
var sec = 0;
var min = 40;

setInterval(
  function() {
    if (elevation >= 39000) {
      document.getElementById("body").style.backgroundColor="black";
    } else {
      thingy += 1;
      if (thingy == 1000) {
          if (sec == 1) {
          sec = 60;
          min -= 1;
        } else sec -= 1;
        document.getElementById("TtimerS").innerHTML = sec;
       document.getElementById("TtimerM").innerHTML = min;
        thingy = 0;
      }
      document.getElementById("Etimer").innerHTML =elevation.toFixed(1) + " feet";
      elevation += ((39000 / 60) / 40) / 250;
      
    }
  }, 
1);
