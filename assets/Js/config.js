var slideIndex = 0;
var x = window.matchMedia("(max-width: 810px)"); //Taille maximal de l'ecran' pour lancer le carrousel
var dots = document.getElementsByClassName("dot");

//fonction pour savoir si la taille de l'ecran correspond pour afficher le slider
function forMobile(x){
    if(x.matches){
        showSlides();
    }else{
        for (var i = 0 ;i<dots.length;i++){
            dots[i].style.display = "none";
        }
    }
}

//fonction pour le carroussel
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }    
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000);
}

forMobile(x);
x.addListener(forMobile);