    window.onload = function () {
        var respuesta = prompt("Ingrese un numero");
        if (respuesta != null) {
            if(esPar(respuesta))
            alert("El numero "+respuesta+" es par ");
            else
            alert("El numero "+respuesta+" es impar ");
        }
    }
    function esPar(num)
    {
        if(num%2 == 0)
        return true;
        else
        return false;
    }