/*Hacer una página web que permita imprimir una talba
de conversion de grados F a C y viceversa-
se debe preguntar por el tipo de conversion y el valor
de partida y el valor final. el numero de entradas en la tabla
deberá ser siempre de 10 por lo que el intervalo se tendra
que ajustar en funcion de los valores introducidos
 */


/**Estas son las funciones que nos convierten de Celsius a Fahrenheit */
function caF (cantidad){
    far = (cantidad*1.8)+32;
   return far;
}

function faC(cantidad){
    cel=(cantidad-32)*(5/9);
   return cel;
}

/**Generamos dos arrays donde irán los datos de las conversiones a Celsius y Fahrenheit de las funciones anteriores */
var aCel=[];
var aFar=[];

/*Para el ejericicio 9, si queremos que pregunte que dato va a introducir cada vez
hay que meter la línea de abajo dentro del for*/
var dato=prompt("Qué tipo de dato va a introducir: C/F(Celsius Fahrenheit)");
/*bucle para rellenar ambos arrays según el dato introducido*/
for(i=0;i<10;i++){
    var cantidad=parseFloat(prompt("Introduce cuantos grados quieres convertir"));
        if (dato=="C"){
            aCel[i]=cantidad;
            aFar[i]=caF(cantidad);
        }else if(dato=="F"){
            aCel[i]=faC(cantidad);
            aFar[i]=cantidad;
        }

}


/**Creacion de la table con los datos de los arrays */
let crearTabla = function(aCel, aFar){
    let stringTabla="<tr><th>Celsius</th><th>Fahrenheit </th></tr>"
    for(i=0;i<10;i++){
        let fila="<tr> <td>";
        fila+=aCel[i];
        fila+= "</td>";

        fila+="<td>";
        fila+=aFar[i];
        fila+="</td>";

        fila+="</tr>";
        stringTabla+=fila;
        console.log(stringTabla);
    }
    return stringTabla;
}
/**Insercion de stringTabla en la tabla de HTML*/
document.getElementById("tabla").innerHTML=crearTabla(aCel,aFar);