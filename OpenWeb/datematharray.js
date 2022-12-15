var date = new Date();

var year = date.getFullYear();

var month = date.getMonth();

var day = date.getDay();

function generarNumero(num){
    return Math.round(Math.random() * num);
}

var colores = ["verde","azul","rojo"];
colores.push("negro");