let objectIndex = 1;
let numOfImages = 2;
let imageContainer = document.querySelector(".image-container");
let nameContainer = document.querySelector(".names");
let deptContainer = document.querySelector(".dept");
let name = ["Megh Thakkar", "Amritanshu Jain"];
let department = ["Backend", "x-Backend"];
var photoDiv = document.querySelectorAll(".photo")[0];
function doNext() {
    if(objectIndex != numOfImages)
    objectIndex++;
    else
    objectIndex = 1;
    changeDetails();
}
function doPrev() {

    if(objectIndex != 1)
    objectIndex--;
    else
    objectIndex = numOfImages;
    changeDetails();
}
function changeDetails() {
    nameContainer.innerHTML = name[objectIndex-1];
    deptContainer.innerHTML = department[objectIndex-1];
    imageContainer.src = "assests/" + objectIndex + ".png";
    photoDiv.style.animation = "animate 1s ease forwards";   
}