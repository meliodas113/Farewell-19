let imageIndex = 1;
let numOfImages = 2;
let container = document.querySelector(".image-container");
function doNext() {
    if(imageIndex != numOfImages)
    imageIndex++;
    else
    imageIndex = 1;
    container.src = "assests/" + imageIndex + ".png";
}
function doPrev() {

    if(imageIndex != 1)
    imageIndex--;
    else
    imageIndex = numOfImages;
    container.src = "assests/" + imageIndex + ".png";
}