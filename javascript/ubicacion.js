//  INICIO BLOQUEAR HEADER EN EL TOP //

window.addEventListener("scroll", function(){
    var header = document.querySelector(".header");
    header.classList.toggle("top",window.scrollY>0)
})

//  FIN BLOQUEAR HEADER EN EL TOP //

//  INICIO SLIDER //

//  INICIO SLIDER  MANUAL //

const btnLeft = document.querySelector(".btn-left"),
        btnRight = document.querySelector(".btn-right"),
        slider = document.querySelector("#slider"),
        sliderSection = document.querySelectorAll(".slider-section");


btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())

let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderSection.length;

function moveToRight() {
    if (counter >= sliderSection.length-1) {
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        return;
    } 
    counter++;
    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
    
}  

function moveToLeft() {
    counter--;
    if (counter < 0 ) {
        counter = sliderSection.length-1;
        operacion = widthImg * (sliderSection.length-1)
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
    
    
}   

//  FIN SLIDER  MANUAL //

//  INICIO SLIDER  AUTOMÁTICO //

setInterval(() => {
    moveToRight()
}, 8000);

//  FIN SLIDER  AUTOMÁTICO //

//  FIN SLIDER //

// INICIO MAPA // /*
/*
function iniciarMap(){
    var coord = {lat:36.7249491 ,lng: -4.4616761};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 15,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}
*/
// FIN MAPA //