let ball= document.querySelector(".ball")
let running= true

setInterval(function () 
{
    if (running) 
    {
        ball.style.animation= "none"
        ball.style.top= "690px"
        running= false
    }
    else
    {
    ball.style.top= "0px"
    ball.style.animationName= "rudra"
    ball.style.animationDuration= "1s"
    ball.style.animationIterationCount= "infinite"
    ball.style.animationDirection= "alternate"
    ball.style.animationTimingFunction= "ease-in-out"
    running= true
    }
}, 10000)