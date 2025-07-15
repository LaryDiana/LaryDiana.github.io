let currentVideoIndex = 0;
const videos = document.querySelectorAll('.video-slide');
const title = document.querySelector('.content h2');
const description = document.querySelector('.content p');

const videoData = [
    { title: 'În continuare vor fi prezentate sursele utilizate pentru realizarea materialului:', description: '' },
    { title: 'Expoziția „Imperiale Impressionen"', description: 'Expoziția prezintă viața și moștenirea împărătesei Elisabeta a Austriei, cunoscută și sub numele de Sisi.Acesta se află la Muzeul Sisi din Viena, într-o locație centrală, la Hofburg, fostul palat imperial Vizitatorii au ocazia să exploreze obiecte personale ale împărătesei, precum rochii, portrete și alte artefacte care reflectă stilul și viața sa la curtea imperială. Expoziția subliniază momente importante din viața lui Sisi, inclusiv căsătoria cu împăratul Franz Joseph I și impactul său asupra Imperiului Austriac.' },
    { title: ' Documentarul "World is Greatest Palaces"', description: 'Olivia Lichtscheidl este o istorică și curatoare a Muzeului Sisi din Viena, specializată în viața împărătesei Elisabeta a Austriei, cunoscută și sub numele de Sisi. A contribuit la diverse lucrări despre împărăteasă, inclusiv la cartea "Elisabeth: Kaiserin und Königin", alături de Michael Wohlfart.De asemenea, a apărut în documentare precum "Erbe Österreich" și "World is Greatest Palaces", oferind perspective istorice despre viața și moștenirea împărătesei.' },
    { title: 'Documentarul "Erbe Österreich"', description: 'Martin Mutschlechner este un istoric austriac specializat în perioada Habsburgilor și în istoria Primului Război Mondial. A contribuit la proiectul "Lumea Habsburgilor" (The World of the Habsburgs).În plus, Mutschlechner a apărut în documentarul "Erbe Österreich" în calitate de istoric, contribuind la șapte episoade între 2019 și 2020. În documentarul "Erbe Österreich" episodul "Sisi – Allüren und Zwänge einer Kaiserin", istoricul Martin Mutschlechner contribuie cu perspective despre viața împărătesei Elisabeta a Austriei, cunoscută ca Sisi. ' },
    { title: 'Documentarul "World is Greatest Palaces"', description: 'Kate Williams este o istorică, autoare și profesoară britanică, specializată în istoria monarhiei. Ea predă la University of Reading și este cunoscută pentru aparițiile sale frecvente în documentare TV și emisiuni despre istorie.'},
    { title: '', description: '' },
];
function changeVideo(direction) {
    // Oprește și mutează videoclipul curent
    videos[currentVideoIndex].pause();
    videos[currentVideoIndex].muted = true;
    videos[currentVideoIndex].style.display = 'none';

    // Actualizează indexul în funcție de direcția aleasă
    if (direction === 'next') {
        currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    } else if (direction === 'prev') {
        currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    }

    // Afișează și redă videoclipul următor
    videos[currentVideoIndex].style.display = 'block';
    videos[currentVideoIndex].muted = false; // Activează sunetul
    videos[currentVideoIndex].currentTime = 0; // Resetează timpul
    videos[currentVideoIndex].play(); // Redă videoclipul

    // Schimbă titlul și descrierea
    title.innerHTML = videoData[currentVideoIndex].title;
    description.innerHTML = videoData[currentVideoIndex].description;

    // Schimbă linkul butonului "Află mai mult"
    const moreLink = document.getElementById('moreLink');
    switch(currentVideoIndex) {
        case 0:
            moreLink.setAttribute('href', 'https://www.youtube.com/@imperialaustria');
            break;
        case 1:
            moreLink.setAttribute('href', 'https://youtu.be/S1V7CmTDYgI?si=ir6_vlW5Uu4kclxX');
            break;
        case 2:
            moreLink.setAttribute('href', 'https://youtu.be/o9nfbxHDlgE?si=02akg96fDVsAi3O4');
            break;
        case 3:
            moreLink.setAttribute('href', 'https://youtu.be/clLNS7EJV7Y?si=odk4Jj7JAcT_YeOp');
            break;
        case 4:
            moreLink.setAttribute('href', 'https://youtu.be/o9nfbxHDlgE?si=02akg96fDVsAi3O4');
            break;
        case 5:
            moreLink.setAttribute('href', '');
                break;
    }

    // Ascunde butonul "Află mai mult" pe ultimul videoclip
    if (currentVideoIndex === videos.length - 1) { // Ascunde pe ultimul videoclip
        moreLink.style.display = 'none';
    } else { // Afișează-l pe celelalte videoclipuri
        moreLink.style.display = 'inline'; // Sau 'block', în funcție de stilurile tale CSS
    }
}


// Ascunde toate videoclipurile, cu excepția celui curent
window.onload = () => {
    videos.forEach((video, index) => {
        if (index !== currentVideoIndex) {
            video.style.display = 'none';
            video.muted = true;
        }
    });

    // Activează sunetul doar la prima interacțiune a utilizatorului
    document.body.addEventListener("click", () => {
        videos[currentVideoIndex].muted = false;
        videos[currentVideoIndex].play();
    }, { once: true });
    // Inițializează textul corect pentru primul video
    title.innerHTML = videoData[currentVideoIndex].title;
    description.innerHTML = videoData[currentVideoIndex].description;

};
