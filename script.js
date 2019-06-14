function valida(){
    var nome = document.getElementById('nome');
    
    if (nome.value == ""){
        alert("Campo não pode ficar em vazio.")
    } else {
        alert("Campo preenchido corretamente, seu formulário já pode ser enviado.")
    }
}