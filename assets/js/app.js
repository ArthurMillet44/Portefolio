

function redirect(element) {
    if (element.id === 'accueil') {
        window.location.href = './../../Site.html';
    }else if(element.id === 'expePro'){
        window.location.href = './../../ExpePro.html';
    }else if(element.id === 'ProjInfo'){
        window.location.href = './../../ProjInfo.html';
    }else if(element.id === 'Competences'){
        window.location.href = './../../Competences.html';
    }else if(element.id === 'ProjPerso'){
        window.location.href = './../../ProjPerso.html';
    }else if(element.id === 'Presentation'){
        window.location.href = './../../Pres.html';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("popup");
    var closeBtn = document.querySelector(".popup .close");
    var profilElements = document.querySelectorAll(".profil");
    profilElements.forEach(function(element) {
        element.addEventListener("click", function() {
            popup.style.display = "block";
        });
    });
    closeBtn.onclick = function() {
        popup.style.display = "none";
    };
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    };

    var modal = document.getElementById("videoModal");
    var videoElement = document.getElementById("passionVideo");
    var closeBtn = document.querySelector(".modal .close");
    var passionImages = document.querySelectorAll(".passion-image");

    passionImages.forEach(function(image) {
        image.addEventListener("click", function() {
            var videoSrc = this.getAttribute("data-video");
            videoElement.querySelector("source").src = videoSrc;
            videoElement.load(); // Reload the video with the new source
            modal.style.display = "block";
        });
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
        videoElement.pause(); // Pause the video when closing the modal
    });

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            videoElement.pause(); // Pause the video when clicking outside of the modal
        }
    });
});

