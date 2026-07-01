/* ==========================================
   CHEMICALBURN V5
========================================== */

const intro = document.getElementById("intro");
const enter = document.getElementById("enter-site");
const desktop = document.getElementById("desktop");

if (enter) {

    enter.addEventListener("click", () => {

        intro.style.opacity = "0";

        setTimeout(() => {

            intro.style.display = "none";

            desktop.classList.add("loaded");

        }, 700);

    });

}

/* ==========================================
   CLOCK
========================================== */

const clock = document.querySelector(".clock");

function updateClock() {

    if (!clock) return;

    const now = new Date();

    clock.textContent = now.toLocaleTimeString([], {

        hour: "2-digit",
        minute: "2-digit"

    });

}

updateClock();

setInterval(updateClock, 1000);

/* ==========================================
   VHS GLITCH
========================================== */

const crt = document.getElementById("crt");

function glitch() {

    document.body.classList.add("glitch");

    const amount = (Math.random() * 4 - 2).toFixed(2);

    crt.style.transform = `translateX(${amount}px)`;

    setTimeout(() => {

        crt.style.transform = "";

        document.body.classList.remove("glitch");

    }, 120);

}

setInterval(glitch, 12000 + Math.random() * 10000);

/* ==========================================
   RANDOM FLICKER
========================================== */

function flicker() {

    document.body.style.filter =
        "brightness(.96)";

    setTimeout(() => {

        document.body.style.filter = "";

    }, 50);

}

setInterval(flicker, 7000 + Math.random() * 8000);

/* ==========================================
   ANALOG WOBBLE
========================================== */

let t = 0;

function wobble() {

    t += .015;

    desktop.style.transform =

        `translateX(${Math.sin(t)*0.8}px)`;

    requestAnimationFrame(wobble);

}

wobble();
