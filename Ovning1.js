/*Emins Javascript*/
const subtract = document.getElementById("prev");
const add = document.getElementById("next");
var slides = document.getElementsByClassName("pizza");
var i;

/*Kod för att få knapparna att fungera*/
let slideIndex = 1;

    showSlides(slideIndex);
    
    function plusSlides(n) {
    showSlides(slideIndex += n);
    }

/*Kod för att loopa samt gömma de andra lådorna i menyet*/ 
function showSlides(n) {
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {slides[i].style.display = "none";}
    
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    
    }