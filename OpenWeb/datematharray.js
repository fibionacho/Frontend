var date = new Date();

var year = date.getFullYear();

var month = date.getMonth();

var day = date.getDay();

function generarNumero(num) {
    return Math.round(Math.random() * num);
}

var colores = ["verde", "azul", "rojo"];
colores.push("negro");

////////////////bucles

var colors = ["verde", "negro", "azul"];

for (var i = 0; i < colors.length; i++) {
    console.log(`Mi color favorito es el ${colors[i]}`);
}
///////ej arrays

/**Mostrar numeros pares */

var ej1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


for (var i = 0; i < ej1.length; i++) {
    if (ej1[i] % 2 == 0) {
        console.log(ej1[i]);
    }
}

/**sumar numeros de arrays */

var ej2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

for (var i =0; i< ej2.length; i++){
    num += ej2[i];
}
console.log(num);

