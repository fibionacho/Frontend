/**Declaramos las variables */
let salSevilla =[];
let nomSevilla=[];

let salHuelva=[];
let nomHuelva=[];

let salCadiz=[];
let nomCadiz=[];


/* ESTE BUCLE DO-WHILE ESTABA INTENCIONADO PARA EL APARTADO QUE TE DICE DE QUE SALGA DEL MISMO CON UN VALOR DEL SALARIO =0
Y SEAN, COMO MÍNIMO, 4 EMPLEADOS. NO ME HA SALIDO EL BUCLE, ASI QUE LO HE DEJADO COMO SIGUE MAS ABAJO, UNICAMENTE AL LLEGAR
A 4 EMPLEADOS 

let cont=0;
salir=false;

do{

     nomSevilla.push(prompt("Introduzca el nombre del empleado de sevilla"));
     salSevilla.push(parseInt(prompt("Introduce el salario del empleado Sevillano")));

     if(salSevilla[cont]!=0) salir=true;
     cont++;


}while(salir=true);
*/


do{
    nomSevilla.push(prompt("Introduzca el nombre del empleado de sevilla"));
    salSevilla.push(parseInt(prompt("Introduce el salario del empleado savillano")));
    cont++;
}while(cont<4);

cont=0;

do{
    nomHuelva.push(prompt("Introduzca el nombre del empleado de Huelva"));
    salHuelva.push(parseInt(prompt("Introduce el salario del empleado onubense")));
    cont++;
}while(cont<4);

cont=0;

do{
    nomCadiz.push(prompt("Introduzca el nombre del empleado de Cadiz"));
    salCadiz.push(parseInt(prompt("Introduce el salario del empleado gaditano")));
   cont++;
}while(cont<4);


//LONGITUD DE LOS ARRAYS
let longC=nomCadiz.length;
let longS=nomSevilla.length;
let longH=nomHuelva.length;

document.write(`hay ${longC} empleados en Cádiz, ${longS} en Sevilla y ${longH} en Huelva`);


//FUNCION MEDIA SALARIOS
function mediasalario (arr) {
     tot=0;
    for(i=0;i<arr.length;i++){
        tot+=arr[i];
    }
   return media=tot/arr.length;
}

//APLICAMOS FUNCION
document.write("El salario medio de Sevilla es "+mediasalario(salSevilla));
document.write("El salario medio de Cádiz es "+mediasalario(salCadiz));
document.write("El salario medio de Huelva es "+mediasalario(salHuelva));

//ORDEN SEGUN EJERCICIO

document.write("Salarios de Huelva ordenados "+ salHuelva.sort());
let salH=salHuelva.sort();
let salC=salCadiz.sort();
salCinv=salC.reverse();
document.write("Salario de Cádiz ordenado de mayor a menor es "+ salC.reverse());
let salS=salSevilla.sort();
document.write("Salario de Sevilla ordenado de mayor a menor es "+ salS.reverse());


/* Los salarios mayores y menores de cada Ciudad */
maxH=salH[salH.length];
minH=salH[0];
maxC=salC[salC.length];
minC=salC[0];
maxS=salS[salS.length];
minS=salS[0];