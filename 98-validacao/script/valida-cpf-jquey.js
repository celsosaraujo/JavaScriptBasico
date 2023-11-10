// $(document).ready(function() {
//     $("#validarButton").click(function() {
//         const cpf = $("#cpfInput").val();
//         if (validarCPF(cpf)) {
//             $("#resultado").text("CPF válido!");
//         } else {
//             $("#resultado").text("CPF inválido. Verifique o formato.");
//         }
//     });

//     function validarCPF(cpf) {
//         // Implemente sua lógica de validação de CPF aqui
//         // Este é um exemplo simples que verifica se o CPF possui 11 dígitos
//         return cpf.length === 11 && !isNaN(cpf);
//     }
// });
$(document).ready(function() {
    $("#validarButton").click(function() {
        const cpf = $("#cpfInput").val();
        if (validarCPF(cpf)) {
            $("#resultado").text("CPF válido!");
            $("#validarButton").css("background-color", "#4CAF50"); // Define a cor de fundo para verde
            setTimeout(function() {
                $("#validarButton").css("background-color", "#007BFF"); // Redefine a cor de fundo original
            }, 1000); // Muda de volta após 1 segundo (1000 milissegundos)
        } else {
            $("#resultado").text("CPF inválido. Verifique o formato.");
            $("#validarButton").css("background-color", "#FF5733"); // Define a cor de fundo para vermelho
            setTimeout(function() {
                $("#validarButton").css("background-color", "#007BFF"); // Redefine a cor de fundo original
            }, 1000);
        }
    });

    function validarCPF(cpf) {
        // Implemente sua lógica de validação de CPF aqui
        // Este é um exemplo simples que verifica se o CPF possui 11 dígitos
        return cpf.length === 11 && !isNaN(cpf);
    }
});
