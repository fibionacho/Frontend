/**PREGUNTAMOS CUANTOS HAY CUMPLIENDO LOS REQUISITIOS */

do{
    var numAlu=parseInt(prompt("Cuantos alumnos hay en clase?"));
}while(numAlu<8 || numAlu>20);

/**GENERAMOS ARRAYS */

arrAlu=[];
arrNota=[];

/**PREGUNTAMOS NOMBRES Y NOTAS */
for(i=0;i<numAlu;i++){

    arrAlu[i]=prompt(`Introdzca el nombre del alumno número ${i+1}`);
    do{
     arrNota[i]=parseFloat(prompt(`Introduzca la nota de ${arrAlu[i]}`));
    }while(arrNota[i]<0 || arrNota[i]>10 );
}

/**LOS METEMOS EN UNA TABLA */
function rellenarTabla(ar,br) {
    stringTabla="<tr><th>Alumnos</th></tr>"
    for(i=0;i<ar.length;i++){
    fila+="<tr><td>";
    fila+=ar[i];
    fila+="</td><td>";
    fila+=br[i];
    fila+="</td></tr>";
    stringTabla+=fila;
    }    
    return stringTabla;
}

document.getElementById("tablaAlumnos").innerHTML=rellenarTabla(arrAlu,arrNota);