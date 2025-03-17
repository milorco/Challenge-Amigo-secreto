// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let inputAmigo = document.getElementById('amigo');
let listaAmigos = [];
let ulListaAmigos = document.getElementById('listaAmigos');
let ulResultado = document.getElementById("resultado");

function validarStringSinNumeros(string) {
    let regex = /^[a-zA-Z\s]+$/;
    return regex.test(string);
}

function agregarAmigo() {
    if (!inputAmigo.value || !validarStringSinNumeros(inputAmigo.value)) {
        alert('Debes de ingresar solo nombres')
    } else {
        listaAmigos.push(inputAmigo.value);
        ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</
        li>`;
        limpiarCaja()
    }
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
    return;
}

function sortearAmigo() {
    let generadorNumRandom = Math.floor(Math.random() * listaAmigos.length);
    let amigoSecreto = listaAmigos[generadorNumRandom];
    
    if(!amigoSecreto || listaAmigos.length < 2){
        alert("Debes escribir al menos 2 nombres antes de sortear!");
    } else {
        ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}<li>`;
    } 
}




