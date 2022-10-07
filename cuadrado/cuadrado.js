let lado=parseInt(prompt("Introduzca el lado del cuadrado"));

function perimetro(lado){
    let per=4*lado;
    return per;
}


document.write(perimetro(lado));