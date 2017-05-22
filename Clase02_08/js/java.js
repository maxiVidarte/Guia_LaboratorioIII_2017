    /*
     8) Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, 
     es decir, si se lee de la misma forma desde la izquierda y desde la derecha. 
     Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".
    */
    window.onload = function () 
    {
       var respuesta = prompt("Ingrese texto");
        if(palindromo(respuesta))
            document.write("Es un palíndromo");
        else
            document.write("no es un palindromo");
       
    }

    function palindromo(texto) 
    {
        texto = invertir(texto.toLowerCase());
        var invertida =  invertir(texto.toLowerCase());
        if(texto.localeCompare(invertida)==0)
            return true;
         return false;
    }

    function invertir(cadena) 
    {
        var x = cadena.length;
        var cadenaInvertida = "";
        while (x>=0) 
        {
            if(cadena.charAt(x)!= " " )
            cadenaInvertida = cadenaInvertida + cadena.charAt(x);
            x--;
        }
        return cadenaInvertida;
    }
   
    