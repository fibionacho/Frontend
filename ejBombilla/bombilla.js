
function apagar() {
    let bomb= document.getElementById("bomb");
if (bomb.getAttribute("src")=="encendida.jpg"){
    bomb.setAttribute("src", "apagada.jpg")

}
}

function encender(){
    let bomb= document.getElementById("bomb");
    if (bomb.getAttribute("src")=="apagada.jpg"){
        bomb.setAttribute("src", "encendida.jpg")
}
}