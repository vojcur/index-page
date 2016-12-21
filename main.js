
var btnsbar = document.getElementById("dropmenu");
var hambtn = document.getElementById("hambtn");
var bars = document.getElementById("bars");
var hambtnX = document.getElementById("hambtnX");
var sw = 0;

      hambtn.addEventListener("click", function() {
        if(sw===0){
          sw=1;
          btnsbar.style.width="100%";
          btnsbar.style.right="0px";
          bars.style.display="none";
          hambtnX.style.display="block";
        }else{
          sw=0;
          btnsbar.style.width="0px";
          btnsbar.style.right="-165px";b
          bars.style.display="block";
          hambtnX.style.display="none";
        }
      })
