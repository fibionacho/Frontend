/* Hacer una página web que pida al usuario que piense un numero
entre el 1 y el 100. El programa debe adivinar el número pensado
preguntando al usuario, hasta que lo confirme*/

do{
    num=parseInt(prompt("Piensa en un número del 1 al 100"));
}while(num>100 || num<0);

var max=100;
var min=0;
do{
    respuesta=false;
   
    
    numPregunta=Math.floor((Math.random()*(max-min)));
    resultado=prompt(`El numero que has pensado es mayor que ${numPregunta} ?`);
    if (resultado=="si"||resultado=="Si") {
       
        min=numPregunta;
    } else if(resultado=="no"||resultado=="No") { 
      
        max=numPregunta;
        
    }else respuesta=true;
}while(!respuesta);


document.write(`Has dicho el número ${num} y he acertado con el ${numPregunta}`);