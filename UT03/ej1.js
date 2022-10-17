/**1.- Escribe una función que reciba dos números con dos decimales, 
 * que son la base y altura de un rectángulo, de
forma que devuelva su perímetro. Puedes elegir que la función obtenga 
los datos de la entrada estándar o no.
Indicándolo en el script. 
Se devolverá un decimal (float). El estilo de la función debe definirse así: */



var base=4.45;
var alt=6.76;

function perimetro(b,a){
    return(Math.round(2*(a*b)*10)/10);
}

per=perimetro(base,alt);
console.log(per);