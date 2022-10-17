/*2.- Pedir un número entre 0 y 9999 y decir cuantas cifras tiene */

/*Bucle que nos calcula la longitud de la variable numbers, tratada como cadena para
contar sus caracteres. Si se introduce una cantidad de mas de 4 caracteres, vuelve a preguntar
por el numero y printea "el numero que se ha introducino no es válido" */
do{
   var numbers=prompt("introduce un número de hasta 4 cifras");
    if(numbers.length>4){
        document.write("el numero que se ha introducino no es válido");
    }else
        document.write(`el número ${numbers} tiene ${numbers.length} cifras`);

}while(numbers.length>4);