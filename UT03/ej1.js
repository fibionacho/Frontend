/**INTRODUCIR DATOS PARA BASE Y ALTURA */

base=parseFloat(prompt("Introuce un valor para la base"));
alt=parseFloat(prompt("Introuce un valor para la altura"));

/**FUNCION `PARA CALCULAR EL PERIMETRO */
function perimetro(b,a){
    return(Math.round(2*(a*b)*10)/10);
}

/**SE LOS PASAMOS COMO PARAMETRO */
per=perimetro(base,alt);
document.write("EL perimetro es de "+per);