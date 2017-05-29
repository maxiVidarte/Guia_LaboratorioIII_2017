<?php

require"clases/estacionamiento.php";

estacionamiento::CrearTablaFacturado();
estacionamiento::CrearTablaEstacionados();

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="css/estilos.css">
    <title>Document</title>
</head>
<body>
    <form action="index.html" id="deslogueo">
        <input type="submit" name="deslogueo" value="Log out">
    </form>
    <form action="autoGestion.php" method="post">
        <input type="text" name="patente" value="patente" title="formato de patente: AAA 000" require pattent="[a-z]{3}[0-9]{3}">
        <br>
        <input type="text" name="color" value="color"><br>
        <input type="text" name="marca" value="marca">
        <input type="submit" name="estacionar" value="Ingreso">
        <input type="submit" name="estacionar" value="egreso">
        
    </form>
      <br>
      <div class="imagen">
          
      </div>
      <div class="CajaEnunciado">
      <h2>autos: </h2>
     

     <?php 

      include("archivos/tablaestacionados.php");

     ?>
     </div>
     <div class="CajaEnunciadoDerecha">
    <h2>Facturado:</h2>
     <?php 

      include("archivos/tablaFacturacion.php");

     ?>
      
      
    </div>
</body>
</html>