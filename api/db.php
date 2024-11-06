<?php
$host = 'localhost'; // Cambia según tu configuración
$dbname = 'mi_app'; // Cambia según tu configuración
$user = 'root'; // Cambia según tu configuración
$pass = ''; // Cambia según tu configuración

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die('Error de conexión: ' . $e->getMessage());
}
?>
