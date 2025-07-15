document.getElementById("play-btn").addEventListener("click", toggleMusic);
document.addEventListener("DOMContentLoaded", function () {
    let audio = new Audio("audio.mp3"); // Creează elementul audio
    audio.loop = true;

    let savedTime = localStorage.getItem("audioTime");
    let isPlaying = localStorage.getItem("isPlaying");

    // Dacă există timp salvat, setează poziția curentă
    if (savedTime) {
        audio.currentTime = parseFloat(savedTime);
    }

    // Dacă melodia era în redare anterior, reia redarea
    if (isPlaying === "true") {
        audio.play();
    }

    // Salvează progresul audio la fiecare secundă
    setInterval(() => {
        localStorage.setItem("audioTime", audio.currentTime);
        localStorage.setItem("isPlaying", audio.paused);
    }, 1000);

    // Funcție pentru Play / Pause
    window.toggleMusic = function () {
        if (audio.paused) {
            audio.play();
            localStorage.setItem("isPlaying", "true");
        } else {
            audio.pause();
            localStorage.setItem("isPlaying", "false");
        }
    };
    
});