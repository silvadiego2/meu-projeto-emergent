<?php
// Permite requisições do seu front-end (CORS)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Recebe os dados em formato JSON enviados pelo React
    $input = json_decode(file_get_contents('php://input'), true);

    $nome = isset($input['name']) ? strip_tags(trim($input['name'])) : '';
    $email = isset($input['email']) ? filter_var($input['email'], FILTER_SANITIZE_EMAIL) : '';
    $mensagem = isset($input['message']) ? strip_tags(trim($input['message'])) : '';

    if (empty($nome) || empty($email) || empty($mensagem)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Preencha todos os campos."]);
        exit;
    }

    // E-mail de destino (substitua pelo e-mail profissional do escritório hospedado na HostGator)
    $para = "contato@seudominio.com"; 
    $assunto = "Novo Contato do Site - $nome";

    $corpo = "Nome: $nome\n";
    $corpo .= "E-mail: $email\n\n";
    $corpo .= "Mensagem:\n$mensagem\n";

    $cabecalhos = "From: no-reply@seudominio.com\r\n";
    $cabecalhos .= "Reply-To: $email\r\n";

    if (mail($para, $assunto, $corpo, $cabecalhos)) {
        http_response_code(200);
        echo json_encode(["status" => "success", "message" => "Mensagem enviada com sucesso!"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Erro ao enviar o e-mail pelo servidor."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Método não permitido."]);
}
?>