/** Crea un programa que muestre la hora actual, en diferentes formatos, según el valor que
teclee el usuario por parámetro. Ejemplo:
            a) 14:35:07 (hora detallada con
minutos y segundos)
            b) 02:35 PM o AM */



//CREAMOS EL OBJETO
var fecha= new Date();

//DAMOS OPCIÓN DE FORMATO
do{

    formato=parseInt(prompt("Elija opcion: 1(Detallado) 2(Clasico)"));
}while(formato<1 || formato>2);


//RESOLVEMOS EL FORMATO
if (formato==1){
    document.write("<p>"+fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds()+"</p>");
}else{
    if(fecha.getHours()>12){
        document.write("<p>"+(fecha.getHours()-12)+":"+fecha.getMinutes()+"PM"+"</p>")
    }else{
        document.write("<p>"+fecha.getHours()+":"+fecha.getMinutes()+"AM"+"</p>")
    }
}