let objectIndex = 1;
let numOfObjects = 2;
let imageContainer = document.querySelector(".image-container");
let nameContainer = document.querySelector(".names");
let deptContainer = document.querySelector(".dept");
let name = ["Megh Thakkar", "Amritanshu Jain"];
let department = ["Backend", "x-Backend"];
var photoDiv = document.querySelectorAll(".photo")[0];
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
  photoDiv.style.animation = "animate 1s ease 1";
  setTimeout(function() {
  nameContainer.innerHTML = name[objectIndex-1];
  deptContainer.innerHTML = department[objectIndex-1];
  imageContainer.src = "assests/images/" + objectIndex + ".png";  
  }, 500);
  setTimeout(function() {
  photoDiv.style.animation = "none";
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
        } else {
            doPrev();
        }                       
    }    /* reset values */
    xDown = null;
    yDown = null;                                             
};