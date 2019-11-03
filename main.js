//Codigo para cambiar el texto del div a los 5 segundos

var hello = document.querySelector('div.header')
setTimeout(function(){
    hello.innerHTML = '<strong>Urtzi Arana : Oh mama!!</strong>'
}, 5000);

//Codigo para pedir el nombre del usuario a la acceder a la web

var nombre_visitante = prompt('Hello! What´s your name, please?');


if (nombre_visitante === 'Urtzi'){
    console.log("Urtzi you are a genius")
    alert('Hello ' + nombre_visitante);
}else if (nombre_visitante === 'Jobs'){
    console.log("As Urtzi you both are genius")
    alert('Hello ' + nombre_visitante);
}else{
    alert("As you are not Urtzi, sorry but you are not a genius")
    alert('Hello ' + nombre_visitante);
}
// Codigo con bucle en caso de que el usuario de al intro sin introducir su nombre
while (nombre_visitante == ''){
    var nombre_visitante_intento = prompt('Please, tell me your name');
    alert('Hello ' + nombre_visitante_intento);
    break;
}



//Codigo para poder mover las fotos en la slide 

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

//Obtener la información que mete el usuario en el formulario y mostrarlo en un console log