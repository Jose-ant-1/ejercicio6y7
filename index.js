console.log('Happy developing ✨')

let frutas = ["platano", "manzana", "piña", "aguacate"];
let frutaABuscar;
let posicion = frutas.indexOf(frutaABuscar);

console.log(frutas);

document.addEventListener("DOMContentLoaded", () =>{

    const mostrar = document.getElementById("mosrtar");

    frutaABuscar = prompt("que posición de que fruta quieres mostrar?").toLowerCase();

    if (posicion !== -1) {
        mostrar.textContent = "La fruta " + frutaABuscar + " está en la posición " + posicion + "del array";
    } else {
        mostrar.textContent = "La fruta " + frutaABuscar + " no se encontró en la lista";
    }

    frutas.forEach((fruta) => console.log(fruta));

});

/* hacer con forEach junto con su metodo de array
for (i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
 */
