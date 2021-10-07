
var a=document.querySelectorAll(".btn");
for(var i=0;i<a.length;i++)
{
    document.querySelectorAll(".btn")[i].addEventListener("click",function(){
        var buttondrum=this.innerHTML;
        makesound(buttondrum);
        makeanimation(buttondrum);
    })
    
}
document.addEventListener("keypress",function(event){
    makesound(event.key);
    makeanimation(event.key);
})
function makesound(key)
{
    switch(key)
    {
        case 'w':
            var aud=new Audio("sounds/tom-1.mp3");
            aud.play();
            break;
        case 'a':
            var aud=new Audio("sounds/tom-2.mp3");
            aud.play();
            break;
        case 's':
            var aud=new Audio("sounds/tom-3.mp3");
            aud.play();
            break;
        case 'd':
            var aud=new Audio("sounds/tom-4.mp3");
            aud.play();
            break;
        case 'j':
            var aud=new Audio("sounds/tom-5.mp3");
            aud.play();
            break;
        case 'k':
            var aud=new Audio("sounds/tom-7.mp3");
            aud.play();
            break;
        case 'l':
            var aud=new Audio("sounds/tom-6.mp3");
            aud.play();
            break;
        default:
            console.log("Wrong Choice");
    }
}
function makeanimation(eventkey){
   var ani=document.querySelector("."+eventkey);
   ani.classList.add("pressed");
   setTimeout(function(){
       ani.classList.remove("pressed");
   },100)
}


