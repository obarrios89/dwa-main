<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');


require 'db.php'; // Incluye el archivo de conexión a la base de datos


$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['nombre']) || !isset($data['edad'])) {
    echo json_encode(['message' => 'Faltan datos']);
    http_response_code(400);
    exit();
}

$nombre = $data['nombre'];
$edad = $data['edad'];
$email = $data['email'];

try {
    // Consulta para verificar el usuario y la contraseña
    $stmt = $pdo->prepare('insert into abm (nombre,edad,email) values(:nombre,:edad,:email)');
    $stmt->bindParam(':nombre', $nombre);
    $stmt->bindParam(':edad', $edad);
    $stmt->bindParam(':email', $email);
    $stmt->execute();
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    echo json_encode(['resultado' => 'ok']);
    http_response_code(200);

} catch (Exception $e) {
    echo json_encode(['message' => 'Error al procesar la solicitud']);
    http_response_code(500);
}
?>
