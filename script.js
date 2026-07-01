// ========================================
// CHEMICALBURN V3
// script.js
// ========================================

// ---------- INTRO ----------

const intro = document.getElementById("intro");
const enterButton = document.getElementById("enter-site");
const desktop = document.getElementById("desktop");

desktop.style.opacity = "0";

function enterDesktop() {

    intro.style.opacity = "0";
    intro.style.pointerEvents = "none";

    desktop.style.transition = "opacity 1.2s ease";
    desktop.style.opacity = "1";

    setTimeout(() => {

        intro.remove();

    }, 1200);

}

enterButton.addEventListener("click", enterDesktop);

// ---------- TASKBAR CLOCK ----------

const clock = document.getElementById("clock");

function updateClock() {

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");

    clock.textContent = `${hours}:${minutes}`;

}

updateClock();

setInterval(updateClock, 1000);

