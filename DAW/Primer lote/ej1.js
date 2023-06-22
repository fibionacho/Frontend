/*1.- Pedir tres números y mostrarlos ordenados de mayor a menor*/

let n1=parseInt(prompt("Introduce el primer número"));
let n2=parseInt(prompt("Introduce el segundo número"));
let n3=parseInt(prompt("Introduce el tercer número"));

function ordernarNum(n1,n2,n3){
    if(n1>=n2 && n2>=n3){
        document.write(`El orden descendente de los números es ${n1} > ${n2} > ${n3}`);
    }else if(n1>=n3 && n3>=n2){
        document.write(`El orden descendente de los números es ${n1} > ${n3} > ${n2}`);
    }else if(n2>=n1 && n1>=n3 ){
        document.write(`El orden descendente de los números es ${n2} > ${n1} > ${n3}`);
    }else if(n2>=n3 && n3>=n1){
        document.write(`El orden descendente de los números es ${n2} > ${n3} > ${n1}`);
    }else if(n3>=n1 && n1>=n2){
        document.write(`El orden descendente de los números es ${n3} > ${n1} > ${n2}`);
    }else{
        document.write(`El orden descendente de los números es ${n3} > ${n2} > ${n1}`);
    }
}

ordernarNum(n1,n2,n3);