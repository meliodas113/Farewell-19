let objectIndex = 1;
let numOfObjects = 2;
let imageContainer = document.querySelector(".image-container");
let nameContainer = document.querySelector(".names");
let deptContainer = document.querySelector(".dept");
let name = ["Megh Thakkar", "Amritanshu Jain"];
let department = ["Backend", "x-Backend"];
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
    nameContainer.innerHTML = name[objectIndex-1];
    deptContainer.innerHTML = department[objectIndex-1];
    imageContainer.src = "assests/" + objectIndex + ".png";
}


// -----------------------------keyboard navigation-------------------------------------
window.addEventListener("keypress", function(e){
    if(e.keyCode == 39 || e.keyCode == 38)
    doNext();
    if(e.keyCode == 37 || e.keyCode == 40)
    doPrev();
});


// ------------------------------------Swipe---------------------------------------------
var initialX = null;
var initialY = null;
 
function startTouch(e) {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
};
 
function moveTouch(e) {
  if (initialX === null) {
    return;
  }
  var currentX = e.touches[0].clientX;
  var currentY = e.touches[0].clientY;
  var diffX = initialX - currentX;
  var diffY = initialY - currentY;
  if (Math.abs(diffX) > Math.abs(diffY)) {
    // sliding horizontally
    if (diffX > 0) {
      // swiped left
      doNext();
    } else {
      // swiped right
      doPrev();
    }  
  } 
  initialX = null;
  initialY = null;
   
  e.preventDefault();
}
