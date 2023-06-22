/**Pedir un número entre 0 y 9999 y decir si es capicúa */

var cap=prompt("Introduce un número");

function capicua(n){
    var nNum= n.split("").reverse().join("");
    if(cap==nNum){
        document.write(`${cap} es capicúa`);
    }else{
        document.write(`${cap} no es capicua`)
    }
}

capicua(cap);