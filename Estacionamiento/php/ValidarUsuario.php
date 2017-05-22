<?php 

$usuario = $_POST["usuario"];
$clave = $_POST["clave"];

$retorno;

if($usuario=="pichi" && $clave=="1234")
{
    $retorno = "ingreso";
}
else 
{
    $retorno = "No-esta";
}
echo $retorno;
?>