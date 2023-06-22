let precio=parseInt(prompt("Introduzca el precio del artículo"));
let cantidad = parseInt(prompt("Introduzca la cantidad de articulos"));

function calcularPrecio(p,c){
    let result=p*c;
    return result;
}

document.write(calcularPrecio(precio,cantidad));