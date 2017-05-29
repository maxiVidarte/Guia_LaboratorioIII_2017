<?php
require"Clases/estacionamiento.php";
$patente=$_POST["patente"];
$color=$_POST["color"];
$marca=$_POST["marca"];
$accion=$_POST["estacionar"];
var_dump($accion);
if($accion=="Ingreso")
{
    estacionamiento::Guardar($patente,$color,$marca);
}
else
{
    estacionamiento::Salida($patente,$color,$marca);
}
header("location:Empleado.php");

?>