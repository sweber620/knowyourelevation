var elevation = 0;

setInterval(
  function() {
    if (elevation < 39000) {
      document.getElementById("timer").innerHTML =elevation.toFixed(1) + " feet";
      elevation += ((39000 / 60) / 60) / 250;
    } else {
      document.getElementById("timer").innerHTML = "You've passed out..."
  }, 
1);
