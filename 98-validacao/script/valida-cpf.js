document.getElementById("validarButton").addEventListener("click", function () {
    const cpf = document.getElementById("cpfInput").value;
    if (validarCPF(cpf)) {
        document.getElementById("resultado").textContent = "CPF válido!";
    } else {
        document.getElementById("resultado").textContent = "CPF inválido. Verifique o formato.";
    }
});

function validarCPF(cpf) {
    function validarCPF(cpf) {
        // Remover caracteres não numéricos
        cpf = cpf.replace(/\D/g, '');

        // Verificar se o CPF possui 11 dígitos
        if (cpf.length !== 11) {
            return false;
        }

        // Verificar se todos os dígitos são iguais
        if (/^(\d)\1+$/.test(cpf)) {
            return false;
        }

        // Converter a string do CPF em um array de dígitos
        const digitos = cpf.split('').map(Number);

        // Calcular o primeiro dígito verificador
        let soma = 0;
        for (let i = 0; i < 9; i++) {
            // soma += parseInt(cpf.charAt(i)) * (10 - i);
            soma += digitos[i] * (10 - i);
        }
        let digitoX = 11 - (soma % 11);
        digitoX = (digitoX >= 10) ? 0 : digitoX;

        // Verificar o primeiro dígito verificador
        if (parseInt(cpf.charAt(9)) !== digitoX) {
            return false;
        }

        // Calcular o segundo dígito verificador
        soma = 0;
        for (let i = 0; i < 10; i++) {
            // soma += parseInt(cpf.charAt(i)) * (11 - i);
            soma += digitos[i] * (11 - i);
        }
        let digitoY = 11 - (soma % 11);
        digitoY = (digitoY >= 10) ? 0 : digitoY;

        // Verificar o segundo dígito verificador
        // if (parseInt(cpf.charAt(10)) !== digito2) {
        if (digitos[10] !== digitoY) {
            return false;
        }

        // Se todas as verificações passaram, o CPF é válido
        return true;
    }

}
