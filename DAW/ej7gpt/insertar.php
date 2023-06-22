<?php

try {

    $options =[
        PDO::ATTR_EMULATE_PREPARES => false,
        PDO:: ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO:: ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ];
    
        $conn = new PDO('mysql:host=localhost;dbname=ej7;charset=utf8mb4', 'root', '123abc');
        $conn->setAttribute(
            PDO::ATTR_ERRMODE,
            PDO::ERRMODE_EXCEPTION
        );
    } catch (PDOException $e) {
        print "¡Error!: " . $e->getMessage() . "\n";
        die();
    }

// Comprobar onexión
if ($conn->connect_error) {
  die("La conexión ha fallado: " . $conn->connect_error);
}

// Obtener valores del formulario
$dni = $_POST["dni"];
$nombre = $_POST["nombre"];
$apellidos = $_POST["apellidos"];
$estudios = $_POST["estudios"];

// Preparar y ejecutar consulta SQL
$sql = "INSERT INTO persona (dni, nombre, apellidos, estudios) VALUES ('$dni', '$nombre', '$apellidos', '$estudios')";

if ($conn->query($sql) === TRUE) {
  echo "Los datos se han guardado correctamente.";
} else {
  echo "Insertado: " . $sql . "<br>" . $conn->error;
}

//$conn->close();
?>
