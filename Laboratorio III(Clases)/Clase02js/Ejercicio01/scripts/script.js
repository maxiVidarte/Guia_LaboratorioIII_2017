function saludar()
        {
         //alert('hola mundo  chau');
         // console.log("hola mundo");
         //document.write("hola mundo");
         //document.write("</br>hola mundo");
         //var nombre;
         //nombre = prompt("ingrese nombre");
         //alert("Su nombre es: "+ nombre);
         /*var numero1;
         var numero2;
         var suma;
         isNaN()
         numero1 = prompt("ingrese un numero");
         numero1 = parseInt(numero1);
         numero2 = prompt("ingrese otro numero");
         numero2 = parseInt(numero2);
         suma = numero1 + numero2;
         alert("El resultado es: "+ suma);

         suma = confirm("hola mundo");*/
//         if (suma) {
 //            alert()
   //      }
        var nombre;
        var txtnombre;
        var txtsaludo;
        //nombre = document.getElementById("nombre").value;
        txtnombre = document.getElementById("nombre")
        txtsaludo = document.getElementById("saludo")
        nombre= txtnombre.value;
        txtsaludo.value = "hola "+ nombre;
        // alert("Su nombre es: "+nombre);
        }