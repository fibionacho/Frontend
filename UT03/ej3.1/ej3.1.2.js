/*2.-  Crea un programa que pida al usuario su título, autor de película favorita
y año de estreno, y muestre:
         a)    El tamaño del ambos (título y autor), sin contar espacios.
         b)    La cadena de caracteres en minúsculas y en mayúsculas.
         c)   Que divida los datos en tres líneas, donde ponga
                            a.    Título:
                            b.    Autor:
                            c.     Año: */

                       
                            
titulo=prompt("Introduzca el título de la película");
director=prompt("Introduzca el director de la pelicula");
ano=parseInt(prompt("Introduzca el año de estreno"));


tituloSpaceless=titulo.replaceAll(" ","");
directorSpaceless=director.replaceAll(" ","");

document.write(`la palabra ${titulo} tiene ${tituloSpaceless.length} caracteres <br>`);
document.write(`la palabra ${director} tiene ${directorSpaceless.length} caracteres <br>`);

document.write(titulo.toUpperCase()+"<br>");
document.write(titulo.toLowerCase()+"<br>");
document.write(director.toUpperCase()+"<br>");
document.write(director.toLowerCase()+"<br>");

document.write(`a.  Titulo: ${titulo} <br> b.  Autor: ${director} <br> c. Año: ${ano}`);