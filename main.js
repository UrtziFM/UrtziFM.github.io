var hello = document.querySelector('div.header')
setTimeout(function(){
    hello.innerHTML = '<strong>Urtzi Arana : Oh mama!!</strong>'
}, 5000);

//let formu = document.querySelector('form').addEventListener("submit")
//console.log("formu")

let arrowL = document.querySelector(".arrow.left");
let arrowR = document.querySelector(".arrow.right");
let indiceImg = 0;

let imagenes = document.querySelectorAll("#slide>img");

arrowR.addEventListener("click", ()=> {
    if (indiceImg < imagenes.length -1 ){
    imagenes[indiceImg].classList.replace("activa", "fuera")
    indiceImg++;
    imagenes[indiceImg].classList.add("activa")
    }
});

arrowL.addEventListener("click", ()=> {
    if (indiceImg > 0 ){
        imagenes[indiceImg].classList.remove("activa")
        indiceImg--;
        imagenes[indiceImg].classList.replace("fuera", "activa")
        }
});