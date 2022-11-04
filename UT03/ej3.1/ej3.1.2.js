/*2.-  Crea un programa que pida al usuario su título, autor de película favorita
y año de estreno, y muestre:
         a)    El tamaño del ambos (título y autor), sin contar espacios.
         b)    La cadena de caracteres en minúsculas y en mayúsculas.
         c)   Que divida los datos en tres líneas, donde ponga
                            a.    Título:
                            b.    Autor:
                            c.     Año: */

                       
//INICIAMOS LAS VARIABLES              
titulo=prompt("Introduzca el título de la película");
director=prompt("Introduzca el director de la pelicula");
ano=parseInt(prompt("Introduzca el año de estreno"));

//VARIABLES SIN ESPACIOS
tituloSpaceless=titulo.replaceAll(" ","");
directorSpaceless=director.replaceAll(" ","");

//ESCRIBIMOS LA CANTIDAD DE CARACTERES
document.write(`la palabra ${titulo} tiene ${tituloSpaceless.length} caracteres <br>`);
document.write(`la palabra ${director} tiene ${directorSpaceless.length} caracteres <br>`);

//MAYUSCULAS Y MINUSCULAS
document.write(titulo.toUpperCase()+"<br>");
document.write(titulo.toLowerCase()+"<br>");
document.write(director.toUpperCase()+"<br>");
document.write(director.toLowerCase()+"<br>");

//ESCRIBIMOS EL FORMATO QUE NOS PIDE EL EJERCICIO
document.write(`a.  Titulo: ${titulo} <br> b.  Autor: ${director} <br> c. Año: ${ano}`);