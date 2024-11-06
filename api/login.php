<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');


require 'db.php'; // Incluye el archivo de conexión a la base de datos


$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['username']) || !isset($data['password'])) {
    echo json_encode(['message' => 'Faltan datos de usuario o contraseña']);
    http_response_code(400);
    exit();
}

$username = $data['username'];
$password = $data['password'];

try {
    // Consulta para verificar el usuario y la contraseña
    $stmt = $pdo->prepare('SELECT * FROM users WHERE username = :username');
    $stmt->bindParam(':username', $username);
    $stmt->execute();
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    if (!$user || !password_verify($password, $user['password'])) {
        echo json_encode(['message' => 'Usuario o contraseña incorrectos']);
        http_response_code(401);
        exit();
    }

    // Generar un token de autenticación (puedes usar una librería más segura en producción)
    $token = bin2hex(random_bytes(32));

    // Aquí deberías almacenar el token en la base de datos con una asociación al usuario y una fecha de expiración

    echo json_encode(['token' => $token]);
    http_response_code(200);

} catch (Exception $e) {
    echo json_encode(['message' => 'Error al procesar la solicitud']);
    http_response_code(500);
}
?>
