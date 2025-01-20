let slideIndex = {};

function initSlides(slideshowId) {
    // Initialise l'index des slides pour chaque diaporama
    slideIndex[slideshowId] = 1;
    showSlides(slideIndex[slideshowId], slideshowId);

    // Ajoute les gestionnaires d'événements aux flèches
    document.querySelector(`#${slideshowId} .prev`).addEventListener("click", function () {
        plusSlides(-1, slideshowId);
    });

    document.querySelector(`#${slideshowId} .next`).addEventListener("click", function () {
        plusSlides(1, slideshowId);
    });

    // Ajoute les gestionnaires d'événements aux points
    const dots = document.querySelectorAll(`#${slideshowId} .dot`);
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", function () {
            currentSlide(i + 1, slideshowId);
        });
    }
}

function plusSlides(n, slideshowId) {
    slideIndex[slideshowId] += n;
    showSlides(slideIndex[slideshowId], slideshowId);
}

function currentSlide(n, slideshowId) {
    slideIndex[slideshowId] = n;
    showSlides(slideIndex[slideshowId], slideshowId);
}

function showSlides(n, slideshowId) {
    const slideshow = document.getElementById(slideshowId);
    if (!slideshow) {
        console.error(`Slideshow with ID '${slideshowId}' not found.`);
        return;
    }

    const slides = slideshow.getElementsByClassName("mySlides");
    const dots = slideshow.getElementsByClassName("dot");

    if (slides.length === 0) {
        console.error(`No slides found in slideshow '${slideshowId}'.`);
        return;
    }

    // Gère les dépassements des indices
    if (n > slides.length) {
        slideIndex[slideshowId] = 1;
    }

    if (n < 1) {
        slideIndex[slideshowId] = slides.length;
    }

    // Cache toutes les slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Désactive tous les points
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Affiche la slide active
    slides[slideIndex[slideshowId] - 1].style.display = "block";

    // Active le point correspondant
    if (dots.length > 0) {
        dots[slideIndex[slideshowId] - 1].className += " active";
    }
}

// Initialisation des diaporamas lors du chargement de la page
document.addEventListener("DOMContentLoaded", function () {
    initSlides("slideshow1");
    initSlides("slideshow2");
    initSlides("slideshow3");
    // Ajout d'un bouton de téléchargement pour un fichier spécifique
    const downloadButton = document.getElementById('downloadButton');
    if (downloadButton) {
        downloadButton.addEventListener('click', function () {
            const link = document.createElement('a');
            link.href = 'assets/others/Rapport_de_Stage_Manitou_Arthur_MILLET.pdf';
            link.download = 'Rapport_de_Stage_Manitou_Arthur_MILLET.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
});
