var hello = document.querySelector('div.header')
setTimeout(function(){
    hello.innerHTML = '<strong>Urtzi Arana : Oh mama!!</strong>'
}, 5000);

var nombre_visitante = prompt('Hello! What´s your name, please?');
alert('Hola ' + nombre_visitante);

//document.querySelector('form').addEventListener("submit", function(evt){
//    evt.preventDefault();
//console.log(this.proposal.value);
//})

let arrowL = document.querySelector('span.arrow.left');
let arrowR = document.querySelector('span.arrow.right');
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
