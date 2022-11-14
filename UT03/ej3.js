/**DECLARAMOS DOS ARRAYS */
let arr=["javascript", "java"];
let arr1=["java","javascript"];


/**HACEMOS LA FUNCION */
function compara(ar) {
    /**PASAMOS LAS PALABRAS A VARIABLES E INICIALIZAMOS UN ACUMULADOR */
    palabra1=ar[0];
    palabra2=ar[1];
    acc=0;

    /**SI LA PALABRA 1 CONTIENE ELEMENTOS DE LA PALABRA 2 LETRA A LETRA AUMENTA EL ACUMULADOR */
    for (let i = 0; i < palabra2.length; i++) {
        if(palabra1.includes(palabra2.substring(i,i+1))){
            acc++;
        }
    }
    /**SI EL ACUMULADOR CONTIENE EL NUMERO IGUAL AL NUMERO DE LETRAS DE P1, ES QUE ESTÁN CONTENIDAS TODAS LAS DE
     * LA PALABRA DOS
     */
    if (acc==palabra1.length){
        return document.write("Se encuentran todas las letras");
    }else return document.write("no se encuentran todas las letras");

}
/**ASÍ, SI PROBAMOS LA FUNCION, EN EL PRIMER CASO NOS DA FALSO, EN EL SEGUNDO, VERDADERO */
compara(arr);
compara(arr1);