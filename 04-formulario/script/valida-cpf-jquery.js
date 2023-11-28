// $(document).ready(function() {
$(function() {    
    var cpfInput = $('#cpfInput');

    // Aplicar máscara de CPF
    cpfInput.on('input', function() {
        var cpf = cpfInput.val().replace(/\D/g, ''); // Remover caracteres não numéricos

        // Limitar para não mais que 11 números
        if (cpf.length > 11) {
            cpf = cpf.slice(0, 11);
        }

        if (cpf.length >= 9) {
            cpf = cpf.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d{1,2})/, '$1.$2.$3-$4'); // Adicionar traço após os últimos dígitos
        }else if (cpf.length >= 6) {
            cpf = cpf.replace(/(\d{3})\.(\d{3})(\d{3})/, '$1.$2.$3'); // Adicionar ponto após os próximos 3 dígitos
        }else if (cpf.length >= 3) {
            cpf = cpf.replace(/(\d{3})(\d{3})/, '$1.$2.'); // Adicionar ponto após os primeiros 3 dígitos
        }
        

        cpfInput.val(cpf);
    });

    // Adicionar evento de validação ao clicar no botão
    $('#validarButton').click(function() {
        var cpf = cpfInput.val().replace(/\D/g, ''); // Remover caracteres não numéricos
        if (validarCPF(cpf)) {
            $('#resultado').text('CPF válido!');
        } else {
            $('#resultado').text('CPF inválido. Verifique o formato.');
        }
    });

    // Função de validação de CPF
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
});
