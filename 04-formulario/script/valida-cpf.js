// document.getElementById("validarButton").
// addEventListener("click", function(){
//     // alert("Deu Certo!!!");
//     const cpf = document.getElementById("cpfInput").value;

//     if( validaCPF( cpf) ){
//         document.getElementById("resultado").textContent = "CPF Válido"
//     }else{
//         document.getElementById("resultado").textContent = "CPF Inválido"
//     }
    
// })
document.addEventListener('DOMContentLoaded', function() {
    // Aplicar máscara de CPF
    var cpfInput = document.getElementById('cpfInput');
    cpfInput.addEventListener('input', function() {
        var cpf = cpfInput.value.replace(/\D/g, ''); // Remover caracteres não numéricos

        // Limitar para não mais que 11 números
        if (cpf.length > 11) {
            cpf = cpf.slice(0, 11);
        }
        
        if (cpf.length > 3) {
            cpf = cpf.replace(/(\d{3})(\d{3})/, '$1.$2.'); // Adicionar ponto após os primeiros 3 dígitos
        }
        if (cpf.length > 7) {
            cpf = cpf.replace(/(\d{3})\.(\d{3})(\d{3})/, '$1.$2.$3'); // Adicionar ponto após os próximos 3 dígitos
        }
        if (cpf.length > 11) {
            cpf = cpf.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d{1,2})/, '$1.$2.$3-$4'); // Adicionar traço após os últimos dígitos
        }
        cpfInput.value = cpf;
    });

    // Adicionar evento de validação ao clicar no botão
    var validarButton = document.getElementById('validarButton');
    validarButton.addEventListener('click', function() {

        var cpf = cpfInput.value; 
        if (validaCPF(cpf)) {
            document.getElementById('resultado').textContent = 'CPF válido!';
        } else {
            document.getElementById('resultado').textContent = 'CPF inválido. Verifique o formato.';
        }
    });

    function validaCPF(vrCPF){

        //Utiliza expressão regular para retirar todos os caracteres
        vrCPF = vrCPF.replace(/\D/g, '');
    
         // Verificar se o CPF possui 11 dígitos
         if (vrCPF.length !== 11) {
            return false;
        }
    
        // Verificar se todos os dígitos são iguais
        if (/^(\d)\1+$/.test(vrCPF)) {
            return false;
        }
    
        //Implementar as regras de validação do CPF
        let soma = 0;
        soma+= parseInt( vrCPF.charAt(0) ) * 10;
        soma+= parseInt( vrCPF.charAt(1) ) * 9;
        soma+= parseInt( vrCPF.charAt(2) ) * 8;
        soma+= parseInt( vrCPF.charAt(3) ) * 7;
        soma+= parseInt( vrCPF.charAt(4) ) * 6;
        soma+= parseInt( vrCPF.charAt(5) ) * 5;
        soma+= parseInt( vrCPF.charAt(6) ) * 4;
        soma+= parseInt( vrCPF.charAt(7) ) * 3;
        soma+= parseInt( vrCPF.charAt(8) ) * 2;
       
        let digitoX = soma%11;
        digitoX = 11 - digitoX;
        if(digitoX >= 10 ){
            digitoX = 0;
        }
    
        let digitoValido = true;
        if( digitoX !== parseInt( vrCPF.charAt(9) ) ){
            digitoValido = false;
        }  
        
        soma = 0;
        for( let posicao = 0, pesoY = 11; posicao < 10; posicao++,  pesoY--){
            soma+= parseInt( vrCPF.charAt(posicao) ) * pesoY;
        }    
        let digitoY = 11-(soma%11);
        if (digitoY >= 10) {
            digitoY = 0;
        }
        if (digitoY !== parseInt(vrCPF.charAt(10))) {
            digitoValido = false;
        }
        
        return digitoValido;
        // return vrCPF.length === 11 & !isNaN(vrCPF);
    }
});