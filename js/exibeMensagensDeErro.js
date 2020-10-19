function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("mensagens-erro");
    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

}
