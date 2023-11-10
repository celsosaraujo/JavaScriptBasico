document.getElementById("validarButton").
addEventListener("click", function(){
    // alert("Deu Certo!!!");
    const cpf = document.getElementById("cpfInput").value;

    if( validaCPF( cpf) ){
        document.getElementById("resultado").textContent = "CPF Válido"
    }else{
        document.getElementById("resultado").textContent = "CPF Inválido"
    }

})

function validaCPF(vrCPF){
    //Implementar as regras de validação do CPF
    return vrCPF.length === 11 & !isNaN(vrCPF);
}