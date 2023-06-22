 <?php
//Tenems que definir cabeceras ara que no salte error
header('Content-Type: application/JSON'); 
header("Access-Control-Allow-Origin: *");
    // Obtenemos el parámetro "season" de la URL
    $season = $_GET["season"];
    
    $clima = new stdClass();

    // Establecemos la ruts del archivo de imagen cocon estaicon
    switch ($season) {
        case "primavera":
           $clima-> $image_path = "https://services.meteored.com/img/article/la-primavera-2018-sus-caracteristicas---1_1024.jpg";
        case "verano":
            $clima->$image_path = "https://www.visitelche.com/wp-content/uploads/2019/06/10-cosas-que-no-te-puedes-perder-este-verano-en-Elche-870x480.png";
            break;
        case "otono":
            $clima->$image_path = "https://images.ecestaticos.com/we8obeug0i9aEn3eVHRxqkS3tLc=/218x0:1920x1277/557x418/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F57d%2F362%2F826%2F57d36282607704724f677445092183d5.jpg";
            break;
        case "invierno":
            $clima->$image_path = "https://es.wikipedia.org/wiki/Invierno#/media/Archivo:AchenseeWinter05.JPG";
            break;
        
        }
       if (file_exists($image_path)) {
            // Devolvemos el contenido del archivo de imagen
            header("Content-Type: image/jpeg");
            readfile($image_path);
            } else {
            // Devolvemos un error 404 
            http_response_code(404);
            }
           
?>