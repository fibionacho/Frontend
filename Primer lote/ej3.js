/** 3.- Pedir un número entre 0 y 9999 y mostrarlo con las cifras al revés. */

let num=parseInt(prompt("Introduce un número de hasta 4 cifras"));

function invertirDigitos(numero)
{ if(numero<10000){
  var invertido = 0
  var resto = numero
  do {
    invertido = invertido * 10 + (resto % 10);
    resto = Math.floor(resto / 10);
  } while ( resto > 0 );
  document.write(invertido);
}else document.write("El numero que se ha introducido no es válido")
}
invertirDigitos(num);