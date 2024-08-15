
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10';


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = 'Juego del numero secreto';
}
function intentoDeUsuario() {
 alert('click desde el boton');

}

asignarTextoElemento('h1','juego del numero secreo!');

