    /*
     9.	Se necesita hacer una página que contenga dos cuadros de texto (dónde se ingresarán números), 
     un botón (con la leyenda ‘Calcular’) y cuatro controles de tipo ‘radioButton’ (suma, resta, multiplicación y división). 
     Cuando se pulsa el botón una función deberá mostrar el resultado, 
     de acuerdo al tipo de operación que el usuario eligió. Utilizar la estructura ‘switch’.
    */
    function Calcular() 
    {
      var num1 = document.getElementById("numero1").value;  
      num1 = parseInt(num1);     
      var num2 = document.getElementById("numero2").value;
      num2 = parseInt(num2);
      var porOp = document.getElementsByName("op");
      var resultado = document.getElementById("resultado");
      
      for (var index = 0; index < porOp.length; index++) 
        {
          if(porOp[index].checked)
          { 
            switch (porOp[index].value) 
            {
            case "suma":
                        resultado.value = num1 + num2;
                        break;
            case "resta":
                        resultado.value = num1 - num2;
                        break;
            case "multiplicación":
                        resultado.value = num1 * num2;
                        break;
            case "división":
                        if (num2==0)
                        alert("Error al dividir por 0");
                        else
                        resultado.value = num1 / num2;
                        break;
            }   
          }
        }
    }

