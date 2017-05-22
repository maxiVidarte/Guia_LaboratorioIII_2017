<?php 
require_once "clases/usuario.php";

$arrayArchivo = usuario::TraerTodosLosUsuarios();
$i=0;
$existeUsuario = 0;
foreach($arrayArchivo as $key){
    if($_POST["usuario"]==$key->GetUsuario() && $_POST["clave"]==$key->GetContraseña())
    {
        $existeUsuario = 1;
        break;
    }
    $i++;
}
if($existeUsuario == 1)
{
    echo '<script type="text/javascript">alert("Se encontro el usuario")</script>';
    if($_POST["usuario"]=="admin")
    echo '<meta http-equiv="refresh" content="0; url=http://localhost/Guia_LaboratorioIII_2017/Estacionamiento/Administrador.php" />';
    else
    echo '<meta http-equiv="refresh" content="0; url=http://localhost/Guia_LaboratorioIII_2017/Estacionamiento/Empleado.php" />';
    
}
else
{
    echo '<script type="text/javascript">alert("No se encontro el usuario")</script>';
    echo '<meta http-equiv="refresh" content="0; url=http://localhost/Guia_LaboratorioIII_2017/Estacionamiento/index.html" />';
}



?>
