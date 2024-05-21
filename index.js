var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
randomNumber2 = Math.floor(randomNumber1) + 1;

var randomImgae1 = "dice" + randomNumber1 + ".png";
var randomImgae1 = "dice" + randomNumber2 + ".png";

var randomImageSrc1 = "images/" + randomImgae1; 
var randomImageSrc2 = "images/" + randomImgae2; 

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSrc1);
image1.setAttribute("src", randomImageSrc2);



