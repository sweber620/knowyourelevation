var elevation = 0;
var ms = 1;
var sec = 60;
var min = 39;

function simulateTime(seconds, real) {

    //the game is simulated at a 50ms update rate, with a max of 1000 ticks
    //warning: do not call this function with real unless you know what you're doing
    document.getElementById("offlineprogress").style.display = "block"
    var ticks = seconds * 20;
    var bonusDiff = 0;
    var playerStart = Object.assign({}, player);
    if (ticks > 1000 && !real) {
        bonusDiff = (ticks - 1000) / 20;
        ticks = 1000;
    }
    let ticksDone = 0
    for (ticksDone=0; ticksDone<ticks; ticksDone++) {
        loop();
        if (real) console.log(ticksDone)
    }
}

function loop() {
  if (elevation >= 39000) {
      document.getElementById("body").style.backgroundColor="black";
      document.getElementById("container").display="none";
    } else {
      ms += 1;
      if (ms == 250) {
         if (sec == 1) {
           sec = 59;
           min -= 1;
          } else sec -= 1;
          document.getElementById("TtimerS").innerHTML = sec;
          document.getElementById("TtimerM").innerHTML = min;
          ms = 1;
       }
     document.getElementById("Etimer").innerHTML = elevation.toFixed(1) + " feet";
     elevation += (13/200) * mult;
     }
}

setInterval(loop(),1);

