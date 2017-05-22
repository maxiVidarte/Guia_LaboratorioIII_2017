    /*
     7.	Ingresar por medio de una ventana de tipo prompt su nombre y apellido en dos variables distintas. 
     Dichas variables serán pasadas como parámetro de la función MostrarNombreApellido, 
     que mostrará el apellido en mayúscula y el nombre solo con la primera letra en mayúsculas y el resto en minúsculas. 
     El apellido y el nombre se mostrarán separados por una coma (,)   
    */
    window.onload = function () 
    {
       var miNombre = prompt("Ingrese nombre");
       var miApellido = prompt("Ingrese apellido");
       
        MostrarNombreApellido(miApellido,miNombre);
    }

    function MostrarNombreApellido(ape, nom) 
    {
        ape = ape.toUpperCase();
        var nom2 = nom.replace(nom[0],nom[0].toUpperCase());
        document.write(ape+","+nom2);
    }