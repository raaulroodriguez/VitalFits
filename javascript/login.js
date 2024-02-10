//  INICIO BLOQUEAR HEADER EN EL TOP //

window.addEventListener("scroll", function(){
    var header = document.querySelector(".header");
    header.classList.toggle("top",window.scrollY>0)
})

//  FIN BLOQUEAR HEADER EN EL TOP //