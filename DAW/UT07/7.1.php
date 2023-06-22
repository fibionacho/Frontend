<?php
header('Content-Type: application/json');
require("db.php");

if (isset($_POST)) {
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $dni = $_POST["dni"];
    $estudios = $_POST["estudios"];

    $consulta = $db->prepare("INSERT INTO persona (dni, nombre, apellido, estudios) VALUES (:dni, :nombre, :apellido, :estudios");

    $consulta->execute(array(
        ':dni' => $dni,
        ':nombre' => $nombre,
        ':apellido' => $apellido,
        ':estudios' => $estudios
    ));
 //   $insertar = "INSERT INTO persona VALUES ('$dni','$nombre','$apellido','$estudios')"





   /* $consulta->execute([":nombre" => $name]);
    $user = $consulta->fetch();*/

   /* if ($user && $user["Nombre"] == $name) {
        echo json_encode("Este nombre ya ha sido elegido ");
    } else {
        echo json_encode("Este nombre todavia no ha sido registrado");
    }*/
}

?>
