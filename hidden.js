var cheater = false;
var mult = 1;
body.addEventListener('keypress', function() {
   var x = event.keyCode;
   console.log(x);
   if (event.keyCode == 13) { //enter
       if (document.getElementById("capitalLocation").value == "Helsinki") {}
   } else if (x === 123 || x === 17 || x === 122 || x === 116 || x === 112 || x === 113 || x === 114 || x === 115) { // f1, f2, f3, f4, f5, f11, f12
     if (!cheater) {
       alert("No cheating! Next time, you'll automatically lose!"); 
       cheater = true;
     } else if (cheater) {mult = -1000}
   }
});
