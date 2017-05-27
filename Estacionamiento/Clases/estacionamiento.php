<?php

class estacionamiento
{

    public static function Guardar($patente)
    {
        $archivo = fopen("archivos/estacionados.txt","a");
        $ahora = date("Y-m-d H:i:s");
        $renglon =$patente."=>".$ahora."\n";
        fwrite($archivo, $renglon);
        fclose($archivo);
    }

    public static function GuardarListado($listado)
    {
        $archivo=fopen("archivos/estacionados.txt","w");

        foreach ($listado as $auto)
        {
            if($auto[0]!="")
            {
                    $dato=$auto[0]."=>".$auto[1]."\n";
                    fwrite($archivo, $dato);
            }
        }
        fclose($archivo);
    }

    public static function Salida($patente)
    {
        $listado = estacionamiento::Leer();
        $listadoAdentro=array();
        $estaElVehiculo=false;
        foreach($listado as $auto)
        {
            if($auto[0]==$patente)
            {
                $estaElVehiculo = true;
                $inicio = $auto[1];
                $ahora = date("Y-m-d H:i:s");
                $diferencia = strtotime($ahora)-strtotime($inicio);
                $importe = $diferencia*10;
                $mensaje = "tiempo transcurrido:".$diferencia."segundos <br> costo $importe ";
                $archivo=fopen("archivos/facturacion.txt","a");
                $dato = $patente."=> $".$importe."\n";
                fwrite($archivo, $dato);
                fclose($archivo);
            }
            else
            {
                $listadoAdentro[]=$auto;
            }
        }
        if(!$estaElVehiculo)
        {
            $mensaje = "no esta esa patente!!!";
        }
        estacionamiento::GuardarListado($listadoAdentro);
        echo $mensaje;
    }

    public static function Leer()
    {
        $listaDeAutosLeida = array();
        $archivo = fopen("archivos/estacionados.txt","r");

        while(!feof($archivo))
        {
            $renglon = fgets($archivo);
            $auto = explode("=>",$renglon);
            $auto[0]=trim($auto[0]);
            if($auto[0]!="")
            {
                    $listaDeAutosLeida[]=$auto;
            }
        }
        fclose($archivo);
        return $listaDeAutosLeida;
    }

    public static function CrearTablaEstacionados()
    {
        $lista = estacionamiento::Leer();
        $archivo = fopen("archivos/tablaestacionados.php","w");

        $tablaCompleta = "<table border=1><th>patente </th><th>Ingreso</th>";
        $renglon = "";

        foreach($lista as $auto)
        {
            $renglon = $renglon."<tr> <td>".$auto[0]."</td><td>".$auto[1]."</td></tr>";

        }
        $tablaCompleta = $tablaCompleta.$renglon."</table>";
        fwrite($archivo ,$tablaCompleta);
    }    

    public static function CrearTablaFacturado()
    {
        if(file_exists("archivos/facturacion.txt"))
        {
            $cadena = "<table border=1> <th>patente </th><th>Importe</th>";

            $archivo = fopen("archivos/facturacion.txt","r");

            while(!feof($archivo))
            {
                $archAux =fgets($archivo);

                $auto = explode("=>",$archAux);

                $auto[0] = trim($auto[0]);
                if($auto[0]!="")
                {
                    $cadena = $cadena."<tr> <td>".$auto[0]."</td> <td>".$auto[1]."</td> </tr>";
                }
            }
                $cadena= $cadena."</table>";
                fclose($archivo);

                $archivo = fopen("archivos/tablaFacturacion.php","w");
                fwrite($archivo,$cadena);
        }
        else
        {
            $cadena = "no hay facturacion";
            $archivo = fopen("archivos/tablaFacturacion.php","w");
            fwrite($archivo,$cadena);
        }
    }
}