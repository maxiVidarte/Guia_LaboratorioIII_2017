function sumar()
{
    var numero1;
    var numero2;
    var resultado;

    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
    resultado = document.getElementById("resultadofinal");
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    resultado.value =  numero1 + numero2;

}
