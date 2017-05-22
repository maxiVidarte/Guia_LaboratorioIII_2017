<?php 
class Usuario
{
//-----------------------------------------------------------------------------------------//
//-------Atributos
    private $usuario;
    private $contraseña;
//------------------------------------------------------------------------------//
//------------------------------------------------------------------------------//
//--Getters y Setters
public function GetUsuario()
{
    return $this->usuario;
}
public function GetContraseña()
{
    return $this->contraseña;
}
public function SetUsuario($valor)
{
    $this->usuario = $valor;
}
public function SetContraseña($valor)
{
    $this->contraseña = $valor;
}
//-----------------------------------------------------------------------------//
//-------Constructor
public function __construct($usuario,$contraseña)
{
        $this->usuario = $usuario;
        $this->contraseña =$contraseña;
}
//-------------------------------------------------------------------------------//
//----ToString
public function ToString()
{
    return $this->usuario." - ".$this->contraseña."\r\n";
}
//*-----------------------------------------------------------------------------//
//--------METODOS DE CLASE
public static function Guardar($obj)
{
    $resultado = FALSE;

    $ar = fopen("archivos/Usuarios.txt","a");

    $cant = fwrite($ar,$obj->ToString());
    if($cant >0)
    {
        $resultado = TRUE;
    }
    fclose($ar);

    return $resultado;
}
public static function TraerTodosLosUsuarios()
{
 
    $archivo = fopen("archivos/Usuarios.txt","r");
    
    while(!feof($archivo))
    {
        $archAux = fgets($archivo);
        $usuarios = explode(" - ",$archAux);
        $usuarios[0] = trim($usuarios[0]);
        $usuarios[1] = trim($usuarios[1]);
        if($usuarios[0] != ""){
            $ListaDeUsuarios[]=new usuario($usuarios[0],$usuarios[1]);
        }
    }
    fclose($archivo);
    return $ListaDeUsuarios;
}
//---------------------------------------------------fin
}




?>