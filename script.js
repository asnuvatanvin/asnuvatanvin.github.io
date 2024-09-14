document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


let slideIndexes = {};

function initSlides(projectId) {
    slideIndexes[projectId] = 1; // Initialize each project's slide index
    showSlides(slideIndexes[projectId], projectId);
}

function changeSlides(n, projectId) {
    showSlides(slideIndexes[projectId] += n, projectId);
}

function showSlides(n, projectId) {
    let i;
    let slides = document.querySelectorAll(`#${projectId} .slide`);
    if (n > slides.length) {
        slideIndexes[projectId] = 1; // Loop back to the first image
    } 
    if (n < 1) {
        slideIndexes[projectId] = slides.length; // Loop to the last image
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slides[slideIndexes[projectId] - 1].style.display = "block"; // Show the current slide
}

// Initialize each slideshow on page load
document.addEventListener("DOMContentLoaded", () => {
    initSlides("project1");
    initSlides("project2");
    initSlides("project3");
});

