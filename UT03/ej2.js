/**Crear un script en el que se pregunte por el número de alumnos 
 * (no superior a 20, ni inferior a 8) que hay en un
curso, y en función de este dato, pida el nombre de los alumnos 
y su nota de curso. Al final, se debe mostrar, cada
alumno con su nota y después la media de todos los alumnos. */


do{
    var numAlu=parseInt(prompt("Cuantos alumnos hay en clase?"));
}while(numAlu<8 || numAlu>20);


arrAlu=[];
arrNota=[];

for(i=0;i<numAlu;i++){

    arrAlu[i]=prompt(`Introdzca el nombre del alumno número ${i+1}`);
    do{
     arrNota[i]=parseFloat(prompt(`Introduzca la nota de ${arrAlu[i]}`));
    }while(arrNota[i]<0 || arrNota[i]>10 );
}

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