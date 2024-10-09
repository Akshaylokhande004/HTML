var  numberOfButtons = document.querySelectorAll(".drum").length;
for(var i=0; i<numberOfButtons; i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        //  this.style.color="white";
        var buttonInnerHtml = this.innerHTML;
        createSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
       

    });
    
    
}
document.addEventListener("keypress",function(event){
createSound(event.key);
buttonAnimation(event.key);
})
function createSound(key){
    switch (key) {
        case "w":
            new Audio("sounds/crash.mp3").play();
        break;
        case "a":
            new Audio("sounds/kick-bass.mp3").play();
        break;
        case "s":
            new Audio("sounds/snare.mp3").play();
        break;
        case "d":
            new Audio("sounds/tom-1.mp3").play();
        break;
        case "j":
            new Audio("sounds/tom-2.mp3").play();
        break;
        case "k":
            new Audio("sounds/tom-3.mp3").play();
        break;
        case "l":
            new Audio("sounds/tom-4.mp3").play();
        break;
        
       
        default:console.log(buttonInnerHtml);
            
       }

}
function buttonAnimation(currentButton){
   var activeButton = document.querySelector("."+currentButton);
   activeButton.classList.add("pressed");
   const timeOut = setTimeout(animation,200);
   function animation() {
    activeButton.classList.remove("pressed");
   }

}








