//DECLARAMOS LA VARIABLE

let ventana="";

//ESCRIBIMOS UNA FUNCIÓN PARA ABRIR LA VENTA
function abrir() {
    //PARÁMETROS DE LA URL, UN TEXTO Y ALTURA Y ANCHURA
   ventana= window.open("https://www.w3schools.com/js/default.asp", "Abrir ventana","width=300px, height=300px");

   //FIJAMOS LOS DIEZ SEGUNDOS DESDE QUE SE ABRE LA VENTANA PARA QUE SE CIERRE
   setTimeout(()=>{
    if(ventana != null)
        ventana.close();
},5000);
}

//ESCRIBIMOS UNA FUNCION PARA CERRAR LA VENTANA PREVIAMENTE ABIERTA
function cerrar() {
    //FUNCION PARA CERRAR LA VENTANA
        ventana.close();
    
        
}