let objectIndex = 1;
let numOfObjects = 10;
let imageContainer = document.querySelector(".image-container");
let nameContainer = document.querySelector(".names");
let deptContainer = document.querySelector(".dept");
let arrow = document.querySelectorAll(".arrow");
let name = ["Suvigya Vijay", "Hitesh Raghuvanshi", "Pragati Asudani", "Vikrant Singh", "Pulkit Agarwal", "Kush Kanwar", "Aashish Aggarwal", "Anup Bhutada", "Bhavesh Narra", "Paras Gupta"];
let department = ["Frontend", "Video", "Frontend", "App Development", "Design", "Video", "Design", "Design", "Frontend", "Design"];
var photoDiv = document.querySelectorAll(".photo")[0];

document.onload = changeDetails();

function doNext() {
  if(objectIndex != numOfObjects)
    objectIndex++;
  else
    objectIndex = 1;
  changeDetails();
}

function doPrev() {
  if(objectIndex != 1)
    objectIndex--;
  else
    objectIndex = numOfObjects;
  changeDetails();
}

function changeDetails() {
  photoDiv.style.animation = "exit 0.5s ease 1";
  arrow[0].onclick = null;
  arrow[1].onclick = null;
  setTimeout(function() {
  imageContainer.src = ""; 
  nameContainer.innerHTML = name[objectIndex-1];
  deptContainer.innerHTML = department[objectIndex-1];
  imageContainer.src = "assests/images/" + objectIndex + ".jpg"; 
  photoDiv.style.animation = "enter 0.5s ease 1";
  }, 500);
  setTimeout(function() {
  photoDiv.style.animation = "none";
  arrow[0].onclick = doPrev;
  arrow[1].onclick = doNext;
  }, 1000);
}


// -----------------------------keyboard navigation-------------------------------------
window.addEventListener("keypress", function(e){
  if(e.keyCode == 39 || e.keyCode == 38)
    doNext();
  if(e.keyCode == 37 || e.keyCode == 40)
    doPrev();
});


// ------------------------------------Swipe---------------------------------------------
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            doNext();
            document.removeEventListener('touchstart', handleTouchStart, false);        
            document.removeEventListener('touchmove', handleTouchMove, false);
            setTimeout(function(){
              document.addEventListener('touchstart', handleTouchStart, false);        
              document.addEventListener('touchmove', handleTouchMove, false);
            },900);
        } else {
            doPrev();
            document.removeEventListener('touchstart', handleTouchStart, false);        
            document.removeEventListener('touchmove', handleTouchMove, false);
            setTimeout(function(){
              document.addEventListener('touchstart', handleTouchStart, false);        
              document.addEventListener('touchmove', handleTouchMove, false);
            },900);
        }                       
    }    /* reset values */
    xDown = null;
    yDown = null;                                             
};