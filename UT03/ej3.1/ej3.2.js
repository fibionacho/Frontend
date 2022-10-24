/**EJERCICIO: dias_finaño
Crea un script que pida muestre el número de días que quedan desde hoy hasta el fin de año. 
Recuerda que los meses empiezan desde el número 0.
*/

fechaHoy=new Date();
finAnio=new Date(2022, 11, 31);


let mes=fechaHoy.getMonth()+1;
let mesFin=finAnio.getMonth()+1;

let dias=fechaHoy.getDate();
let diasFin=finAnio.getDate();

document.write(`mes actual ${mes} con ${dias} dias <br>`);
document.write(`mes fin de año ${mesFin} con ${diasFin} dias <br>`);


let diasTotales=(30-dias)+((mesFin-mes)*30)+(diasFin);
document.write(`dias de diferencia: ${diasTotales}`);