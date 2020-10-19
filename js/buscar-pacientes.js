var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando paciente");
    
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientess");
    
    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status==200){
        
        erroAjax.classList.add("invisivel");       
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);

        pacientes.forEach(function(paciente){
            adicionarPacienteNaTabela(paciente);
        });

    }else{
        console.log(xhr.status);
        console.log(xhr.responseText);
        
        erroAjax.classList.remove("invisivel");
    }
            
        });
    
    xhr.send();

});