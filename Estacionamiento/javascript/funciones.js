    function validarLogin(){
        var varUsuario = $("#usuario").val();
        var varClave = $("#clave").val();
        
        $.ajax({
            url:"php/validarUsuario.php",
            type:"post",
            data: 
            {
                usuario:varUsuario,
                clave:varClave
            }
        }).then(funciona, noFunciona);

        function funciona(retorno){
            if(retorno == "ingreso"){
                
            }
        }
        function noFunciona(retorno){
            alert(retorno);
        }
    }
