/**Hacer una web que permita convertir un monton de dinero
 * entre euros, dólares, libras y yenes. Se debe
 * solicitar la divisa de partida, su cantidad y la divisa 
 * a convertir. Imprimir el resultado en un mensaje de
 * confirmacion (metodo alert.) se debe comprobar que la
 * divisa es una de las adecuadas y de que se introduce una cantidad valida
 */


do{
     divisaInicial=prompt("Introduzca una divisa");
    if (divisaInicial!="euro" && divisaInicial!="dolar" && divisaInicial!="libra" && divisaInicial!="yen"){
         } alert("Divisa no valida");
}while(divisaInicial!="euro" && divisaInicial!="dolar" && divisaInicial!="libra" && divisaInicial!="yen");


do{
    divisaFinal=prompt("Introduzca a qué divisa quiere cambiar");
    if(divisaFinal!="euro" && divisaFinal!="dolar" && divisaFinal!="libra" && divisaFinal!="yen"){
    }alert("Divisa no valida");
}while(divisaFinal!="euro" && divisaFinal!="dolar" && divisaFinal!="libra" && divisaFinal!="yen");

let cantidadInicial= parseFloat(prompt("Introduza un importe"));

switch (divisaInicial) {
    case "euro":
        switch (divisaFinal) {
            case "dolar": var cambio= (cantidadInicial*0.97);
                break;

            case "libra": var cambio=(cantidadInicial*0.87);
                break;

            case "yen":var cambio=(cantidadInicial*142.49);  
                break;  
        }
        break;

    case "dolar":
        switch (divisaFinal) {
            case "euro": var cambio= (cantidadInicial*1.03);
                break;

            case "libra": var cambio=(cantidadInicial*0.90);
                break;

            case "yen": var cambio=(cantidadInicial*146.87);
                break;    
        }
        break;

    case "libra":
        switch (divisaFinal) {
            case "euro": var cambio=(cantidadInicial*1.14);
                break;
        
            case "dolar":var cambio=(cantidadInicial*1.10);
                break;

            case "yen" : var cambio=(cantidadInicial*163.01);   
                break;
        }    
        break;
    case "yen":
        switch (divisaFinal) {
            case "euro": var cambio=(cantidadInicial*0.007);
                break;
        
            case "dolar": var cambio=(cantidadInicial* 0.0067);
                break;

            case "libra": var cambio=(cantidadInicial*0.0061 );
            break;   
        }
        break;
        
}
document.write(`El valor de ${cantidadInicial} ${divisaInicial} corresponde con ${cambio} ${divisaFinal}`);