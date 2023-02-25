<?php 

header('Content-Type: application/JSON'); 
header("Access-Control-Allow-Origin: *");

$resultado = new stdClass();

if (isset($_GET['estacion'])) {

    switch ($_GET['estacion']) {
        case 'Primavera':
            $resultado->image = "https://services.meteored.com/img/article/la-primavera-2018-sus-caracteristicas---1_1024.jpg";
            break;
        case 'Verano':
            $resultado->image = "https://images.ecestaticos.com/wjjY8s2tidcHa44sk3V35xu-9zc=/333x2:2037x1280/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F50a%2Ff23%2F45a%2F50af2345ab05f3a191d5c11002213f3a.jpg";
            break;
        case 'Otoño':
            $resultado->image = "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg";
            break;
        case 'Invierno':
            $resultado->image = "https://okdiario.com/img/2021/12/17/cuando-empieza-el-invierno.jpg";
            break;
        default:
            $resultado->image = "https://www.alvarodeleon.net/wp-content/uploads/2021/04/1618703952-0f46c2d11e4c4bc9f4c7dfd575e47698.png";
            break;
    }
}
else {
    $resultado->image = "https://www.alvarodeleon.net/wp-content/uploads/2021/04/1618703952-0f46c2d11e4c4bc9f4c7dfd575e47698.png";
}


print_r(
    json_encode(
        $resultado
    )
);