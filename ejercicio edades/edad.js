 edad1=prompt("Introduce la primera edad");
 edad2=prompt("Introduce la segunda edad");
 edad3=prompt("Introduce la tercera edad");
edad4=prompt("Introduce la cuarta edad");

let arrayedad=[edad1,edad2,edad3,edad4];

arrayedad.sort();

function sumaProducto(){
    let operacion=(parseInt(arrayedad[0])+parseInt(arrayedad[3]))+(parseInt(arrayedad[1])*parseInt(arrayedad[2]));
    return operacion;
}


sumaProducto(arrayedad);
document.write(`el resultado es ${sumaProducto(arrayedad)}`);
