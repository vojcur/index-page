// =============================
// toggle hamburger button view
// =============================

var dropmenu = document.getElementById("dropmenu");
var hambtn = document.getElementById("hambtn");
var bars = document.getElementById("bars");
var hambtnX = document.getElementById("hambtnX");
var sw = 0;

      hambtn.addEventListener("click", function() {
        if(sw===0){
          sw=1;
          // dropmenu.style.width="100%";
          dropmenu.style.left="0";
          bars.style.display="none";
          hambtnX.style.display="block";
        }else{
          sw=0;
          // dropmenu.style.width="0px";
          dropmenu.style.left="120%";
          hambtnX.style.display="none";
          bars.style.display="block"; 
        }
      }, false);

      dropmenu.addEventListener("click", function() {
          sw=0;
          // dropmenu.style.width="0px";
          dropmenu.style.left="120%";
          hambtnX.style.display="none";
          bars.style.display="block"; 
      });
