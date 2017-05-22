    /*
    6.	Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
    A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, 
    sólo por minúsculas o por una mezcla de ambas.
    Nota: La cadena se ingresará por una ventana prompt.
    */
    window.onload = function () 
    {
       var respuesta = prompt("Ingrese cadena de texto");
       
        document.write(comparacion(respuesta));
    }

    function comparacion(miTexto) 
    {
        var min= miTexto.toLowerCase();
        var may= miTexto.toUpperCase();
        if(may.localeCompare(miTexto)==0)
            return "Usa solo mayuscula";
        else if(min.localeCompare(miTexto)==0)
            return "Usa solo minuscula";
        else
            return  "Usa mayuscula y minuscula";
    }