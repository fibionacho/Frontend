/*2.- Pedir un número entre 0 y 9999 y decir cuantas cifras tiene */
do{
   var numbers=prompt("introduce un número de hasta 4 cifras");
    if(numbers.length>4){
        document.write("el numero que se ha introducino no es válido");
    }else
        document.write(`el número ${numbers} tiene ${numbers.length} cifras`);

}while(numbers.length>4);