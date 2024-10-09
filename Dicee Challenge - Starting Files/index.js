// for  first image 
var randomNumber1 =Math.floor(Math.random()*6 +1);
var randomImage1="dice"+randomNumber1+".png";
var randomImageSource1="./images/"+randomImage1;

document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);
// for image two 
var randomNumber2 =Math.floor(Math.random()*6 +1);
var randomImage2="dice"+randomNumber2+".png";
var randomImageSource2="./images/"+randomImage2;

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);
//    for succesful condition 
if(randomNumber1===randomNumber2) {
    document.querySelector("h1").innerHTML="oops that's tie";
}
else if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML="Player One Won the Game";
}
else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player Two Won the Game ";
}
else{
    document.querySelector("h1").innerHTML="Something went wrong";
}
    

