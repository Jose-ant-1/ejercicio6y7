console.log('Happy developing ✨')

let frutas = ["platano", "manzana", "piña", "aguacate"];
const mosrtar = document.getElementById("mosrtar");
let frutaABuscar = prompt("que posición de que fruta quieres mostrar?").toLowerCase();

let posicion = frutas.indexOf(frutaABuscar);

if (posicion !== -1) {
    mostrar.textContent = "La fruta " + frutaABuscar + " está en la posición " + posicion + "del array";
} else {
    mostrar.textContent = "La fruta " + frutaABuscar + " no se encontró en la lista";
}
console.log(frutas);
for (i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}


