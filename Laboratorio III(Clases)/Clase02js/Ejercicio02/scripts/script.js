
window.onload=  function(){//onload (este evento se ejecuta cuando termina de cargar la pagina)
/*

var parrafos= document.getElementsByTagName("p");//devuelve un array con la referencia de todos los parrafos de la pagina web
//var parrafos= document.getElementsByClassName//puede aplicar algun cambio en tiempo de ejecucion.Estilos

for (var i = 0; i < parrafos.length; i++) {
    
parrafos[i].innerHTML="Parrafo  ".fontcolor("red") + (i+1);    

}

//parrafos[0].innerHTML="Primer parrafo";
//parrafos[1].innerHTML="Segundo parrafo";
//parrafos[2].innerHTML="Tercer parrafo";*/
var contador= 0;
var txtsarasa = document.getElementById("texto");
var txt2 = document.getElementById("texto2");

/*txtsarasa.onblur= function(){//onblur es cuando pierde el foco
contador++;
txt2.value = contador;
}*/
/*txtsarasa.onchange= function(){//onchange es parecido al onblur pero solo se ejecuta si hubo un cambio
contador++;
txt2.value = contador;
}*/
txtsarasa.onkeyup= function(){//onkeydown cuando mantengo apretado onkeypress cuando se presiona el boton 
contador++;
txt2.value = contador;
}

}