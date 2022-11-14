/**1.- Escribe una función que reciba dos números con dos decimales, 
 * que son la base y altura de un rectángulo, de
forma que devuelva su perímetro. Puedes elegir que la función obtenga 
los datos de la entrada estándar o no.
Indicándolo en el script. 
Se devolverá un decimal (float). El estilo de la función debe definirse así: */



base=parseFloat(prompt("Introuce un valor para la base"));
alt=parseFloat(prompt("Introuce un valor para la altura"));

function perimetro(b,a){
    return(Math.round(2*(a*b)*10)/10);
}

per=perimetro(base,alt);
document.write("EL perimetro es de "+per);