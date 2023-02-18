<?php
$servername = "localhost";
$username = "tu_usuario";
$password = "tu_contraseña";
$dbname = "tu_base_de_datos";

$dni = $_GET["dni"];

$db = new PDO('mysql:host=localhost;dbname=ej7;charset=utf8mb4', 'root', '123abc');

if ($db->connect_error) {
  die("Conexión fallida: " . $db->connect_error);
}

$sql = "DELETE FROM ej7 WHERE DNI = '$dni'";

if ($conn->query($sql) === TRUE) {
  http_response_code(200);
} else {
  http_response_code(500);
}

$conn->close();
?>
