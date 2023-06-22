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

// Crear conexión


// Comprobar conexión
if ($conn->connect_error) {
  die("La conexión ha fallado: " . $conn->connect_error);
}

// Obtener DNI a borrar
$dni = $_POST["dni_borrar"];

// Preparar y ejecutar consulta SQL
$sql = "DELETE FROM persona WHERE dni='$dni'";

if ($conn->query($sql) === TRUE) {
  echo "El usuario con DNI $dni se ha borrado correctamente.";
} else {
  echo "eliminado:";
}
