const intro = document.getElementById("intro");
const enter = document.getElementById("enter-site");
const desktop = document.getElementById("desktop");
const clock = document.getElementById("clock");

desktop.classList.remove("loaded");

function enterSite(){

    intro.style.opacity = "0";

    setTimeout(()=>{

        intro.remove();

        desktop.classList.add("loaded");

    },900);

}

enter.addEventListener("click",enterSite);

function updateClock(){

    const now = new Date();

    clock.textContent =
        now.toLocaleTimeString([],{
            hour:"2-digit",
            minute:"2-digit"
        });

}

updateClock();

setInterval(updateClock,1000);

/* Random VHS glitch */

setInterval(()=>{

    document.body.classList.add("glitch");

    setTimeout(()=>{

        document.body.classList.remove("glitch");

    },180);

},18000 + Math.random()*12000);
