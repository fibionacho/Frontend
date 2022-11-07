let ventana;

//PRIMERA FUNCIÓN PARA ABRIR VENTANA NUEVA
function abrir(){
    if (confirm("¿Quieres abrir una ventana?") == true) {

        //UBICAMOS LA VENTANA CON LAS MEDIDAS QUE PIDA
        ventana = window.open("https://www.w3schools.com/js/default.asp" ,"mover" ,"width=300px, height=200px");
        ventana.moveBy(500,500);
        ventana.moveTo(100,200);
        //LA PARTE DEL NO ME SALE
    }

}

//FUNCIÓN PARA ABRIR PÁGINAS DE MANERA ALEATORIA
function aleatorio(){

    //GENERAMOS UN NÚMERO ALEATORIO
    let numero=parseInt(Math.random()* 4);

    //SEGÚN EL NÚMERO, SE ABRE UNA VENTA U OTRA
    switch (numero) {
        case 0:
            ventana=window.open("https://mail.google.com/" ,"gmail" ,"width=300px, height=200px");
            break;
        case 1:
            ventana=window.open("https://correoweb.educa.madrid.org/" ,"educa" ,"width=300px, height=200px");
            break;
        case 2:
            ventana=window.open("https://es.yahoo.com/" ,"yahoo" ,"width=300px, height=200px");
            break;
        case 3:
            ventana=window.open("https://outlook.live.com/owa/" ,"outlook" ,"width=300px, height=200px");
        break;
    }

}
 
function cooki(){
    ventana=window.open("https://mail.google.com/" ,"gmail" ,"width=300px, height=200px");
   

    //LA SECCION DE ESTABLECER ANCHO Y LARGO DE LA VENTANA ME DA UN ERROR Y NO CONSIGO 
    ventana.resizeTo((ventana.innerWidth)/2, (ventana.innerHeight)/2);

    //SALTA EL ALERT
    if(navigator.cookieEnabled){
        alert("Hay cookies activadas");
    }

}

//navigator.cookieEnabled