var elevation = 0;

setInterval(
  function() {
    document.getElementById("timer").innerHTML =elevation + " feet";
    elevation += ((39000 / 60) / 60) / 1000;
  }, 
1);
