function getValue(x){
    document.getElementById('resultado').innerHTML +=x;
} 
function clearInput(){
    document.getElementById('resultado').innerHTML ="";
} 

function calculate(){
    let resultado = eval(document.getElementById('resultado').innerHTML);
    document.getElementById('resultado').innerHTML = resultado;
}

// Numeros
let punto = document.getElementById('punto');
let cero = document.getElementById('cero');
let uno = document.getElementById('uno');
let dos = document.getElementById('dos');
let tres = document.getElementById('tres');
let cuatro = document.getElementById('cuatro');
let cinco = document.getElementById('cinco');
let seis = document.getElementById('seis');
let siete = document.getElementById('siete');
let ocho = document.getElementById('ocho');
let nueve = document.getElementById('nueve');

// Operadores

let sumar = document.getElementById('sumar');
let restar = document.getElementById('restar');
let multiplicar = document.getElementById('multiplicar');
let dividir = document.getElementById('dividir');
let convertir = document.getElementById('convertir');
let igual = document.getElementById('igual');
let borrar = document.getElementById('borrar');

// Listeners

uno.addEventListener("click", function() {
    getValue(1)
})
dos.addEventListener("click", function() {
    getValue(2)
})
tres.addEventListener("click", function() {
    getValue(3)
})
cuatro.addEventListener("click", function() {
    getValue(4)
})
cinco.addEventListener("click", function() {
    getValue(5)
})
seis.addEventListener("click", function() {
    getValue(6)
})
siete.addEventListener("click", function() {
    getValue(7)
})
ocho.addEventListener("click", function() {
    getValue(8)
})
nueve.addEventListener("click", function() {
    getValue(9)
})
cero.addEventListener("click", function() {
    getValue(0)
})



sumar.addEventListener("click", function() {
    getValue("+")
})
restar.addEventListener("click", function() {
    getValue("-")
})
multiplicar.addEventListener("click", function() {
    getValue("*")
})
dividir.addEventListener("click", function() {
    getValue("/")
})
convertir.addEventListener("click", function() {
    getValue("*")
})


igual.addEventListener("click", function() {
    calculate();
})
borrar.addEventListener("click", function() {
    clearInput();
})