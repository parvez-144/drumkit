for( var i=0;i<7;i++){
    document.querySelectorAll("button.drum")[i].addEventListener("click",function (){
        var key=this.innerHTML;
         makesound(key);
         animation(key);
    });
}
document.addEventListener("keydown",function(event){
    makesound(event.key);
    animation(event.key);
});
function makesound(key){
    switch(key){
        case "w":
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;
        case "a":
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;
        case "s":
            var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;
        case "d":
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;
        case "j":
            var bass= new Audio("sounds/kick-bass.mp3");
            bass.play();
        break;
        case "k":
            var crash= new Audio("sounds/crash.mp3");
            crash.play();
        break;
        case "l":
            var snare= new Audio("sounds/snare.mp3");
            snare.play();
        break;
        default:console.log(key);
    }
}
function animation(currkey){
  var active=document.querySelector("."+currkey);
  active.classList.add("pressed");
  setTimeout(function(){active.classList.remove("pressed")},100);
}





