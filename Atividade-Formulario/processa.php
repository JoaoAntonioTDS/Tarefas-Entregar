<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recebe os dados do formulário
    $nome = $_POST['nome'];
    $email = $_POST['email'];

    // Validação básica: verifica se os campos estão vazios
    if (empty($nome) || empty($email)) {
        echo "Todos os campos são obrigatórios!";
    } else {
        // Validação de e-mail
        if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
            echo "Formato de email inválido!";
        } else {
            // Processa os dados (por exemplo, salva no banco de dados)
            echo "Nome: " . htmlspecialchars($nome) . "<br>";
            echo "Email: " . htmlspecialchars($email);

            // Mensagem de confirmação ou redirecionamento
            header("Location: obrigado.php");
            exit();
        }
    }
}

