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
    <title>Document</title>
</head>
<body>
    <form action="index.html" id="deslogueo">
        <input type="submit" name="deslogueo" value="Log out">
    </form>
    <form action="autoGestion.php" method="post">
        <input type="text" name="patente" title="formato de patente: AAA 000" require pattent="[a-z]{3}[0-9]{3}">
        <br>
        <input type="submit" name="estacionar" value="Ingreso">
        <input type="submit" name="estacionar" value="egreso">

    </form>
      <div style="float:left;">
      <h2>autos: </h2>
     

     <?php 

      include("archivos/tablaestacionados.php");

     ?>
     </div>
     <div style "float:left; position:absolute; left:300px;">
    <h2>Facturado:</h2>
     <?php 

      include("archivos/tablaFacturacion.php");

     ?>
      
      
    </div>
</body>
</html>