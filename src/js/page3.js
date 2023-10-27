var sidebar = document.getElementById("dropdown");
var icon = document.getElementById("dropdown-button");
var content = document.querySelector(".content");

function toggleMenu() { // Abrir sidebar
    sidebar.style.width = "250px";
}

document.addEventListener("click", function(event) {
    // Verificar se a sidebar está aberta
    if (sidebar.style.width == "250px") {
        // Verificar se o clique não está dentro da sidebar nem no ícone
        if (!(sidebar.contains(event.target) || icon.contains(event.target))) {
            // Se o clique estiver fora da sidebar e do ícone, oculte a sidebar
            sidebar.style.width = "0";
        }
    }
});

let slideIndex = 1;
showSlide(slideIndex);

function plusSlides(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    let i;
    let slides = document.getElementsByClassName("slider-item");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    
    // Atualize o número da página atual
    const pageNumberElement = document.getElementById("page-number");
    pageNumberElement.textContent = `Página ${slideIndex} de ${slides.length}`;
}
