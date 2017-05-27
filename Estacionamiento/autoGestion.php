<?php
require"Clases/estacionamiento.php";
$patente=$_POST["patente"];
$accion=$_POST["estacionar"];
var_dump($accion);
if($accion=="Ingreso")
{
    estacionamiento::Guardar($patente);
}
else
{
    estacionamiento::Salida($patente);
}
header("location:Empleado.php");

?>