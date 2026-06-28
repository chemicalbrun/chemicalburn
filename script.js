// chemicalburn v0.1

const boot = document.getElementById("boot-screen");
const desktop = document.getElementById("desktop");
const dots = document.getElementById("boot-dots");
const clock = document.getElementById("clock");
const windows = document.querySelectorAll(".window");

let dotCount = 0;

// Booting...
setInterval(() => {
    dotCount = (dotCount + 1) % 4;
    dots.textContent = ".".repeat(dotCount);
}, 400);

// Clock
function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();

    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    if (hours === 0) hours = 12;

    minutes = minutes.toString().padStart(2, "0");

    clock.textContent = `${hours}:${minutes} ${ampm}`;
}

updateClock();
setInterval(updateClock, 1000);

// Boot animation
window.addEventListener("load", () => {

    setTimeout(() => {

        boot.style.transition = "opacity .45s ease";
        boot.style.opacity = "0";

        setTimeout(() => {

            boot.style.display = "none";
            desktop.style.display = "block";

            // Fade desktop in
            desktop.animate([
                {
                    opacity:0
                },
                {
                    opacity:1
                }
            ],{
                duration:600,
                fill:"forwards"
            });

            // Windows appear one by one
            windows.forEach((windowBox,index)=>{

                setTimeout(()=>{

                    windowBox.animate([
                        {
                            opacity:0,
                            transform:"translateY(20px)"
                        },
                        {
                            opacity:1,
                            transform:"translateY(0px)"
                        }
                    ],{

                        duration:450,
                        fill:"forwards",
                        easing:"ease"

                    });

                },index*120);

            });

            // Taskbar slides up
            document.querySelector("footer").animate([
                {
                    transform:"translateY(100%)"
                },
                {
                    transform:"translateY(0)"
                }
            ],{

                duration:450,
                fill:"forwards"

            });

        },500);

    },1800);

});

// Day / Night
const hour = new Date().getHours();

const room = document.getElementById("room");

if(hour >= 19 || hour < 7){

    room.style.background =
    "linear-gradient(#43315d,#1c1b36)";

}else{

    room.style.background =
    "linear-gradient(#ffd8eb,#fff8fc)";

}
