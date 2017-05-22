    /*
    5.	Realizar una página que solicite (por medio de una ventana prompt) un número. 
    Si el número es positivo, se mostrará el factorial de ese número, 
    caso contrario se volverá a pedir el ingreso de un número positivo.
    */
    
    window.onload = function () 
    {
       var respuesta = prompt("Ingrese un numero");
       while(factorial(respuesta)==1)
       {respuesta = prompt("Reingrese un numero");}
        document.write(factorial(respuesta));
        
    }

    function factorial(numero)
    {
	resultado = 1;
	for (var i = 1; i <= numero; i++) {
		resultado *= i;
	}
	return resultado;
    }