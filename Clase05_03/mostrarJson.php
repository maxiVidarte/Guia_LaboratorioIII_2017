<?php 
$myArr = array('("codigoBarra":"001","nombre":"jabon","precio":20 )','("codigoBarra":"002","nombre":"esponja","precio":15 )','("codigoBarra":"003","nombre":"espiral","precio":5 )');

$myJSON = json_encode($myArr);

echo $myJSON." </br>"." </br>";/*[{"codigoBarra":"001","nombre":"jabon","precio":20 },
{"codigoBarra":"002","nombre":"esponja","precio":15 },
{"codigoBarra":"003","nombre":"espiral","precio":5 },
{"codigoBarra":"004","nombre":"desodorante","precio":40 },
{"codigoBarra":"005","nombre":"cepillo","precio":50 },
{"codigoBarra":"006","nombre":"escoba","precio":80 },
{"codigoBarra":"006","nombre":"tacho","precio": 100},
{"codigoBarra":"007","nombre":"palita","precio": 85 },
{"codigoBarra":"008","nombre":"pastilla","precio":40 },
{"codigoBarra":"009","nombre":"dentifrico","precio":49 },
{"codigoBarra":"010","nombre":"queso","precio":200 },
{"codigoBarra":"011","nombre":"jamon","precio": 180 },
{"codigoBarra":"012","nombre":"aceite","precio": 60 },
{"codigoBarra":"013","nombre":"arroz","precio":30 },
{"codigoBarra":"014","nombre":"fideo","precio":30 },
{"codigoBarra":"015","nombre":"salsa","precio":15 },
{"codigoBarra":"016","nombre":"pure","precio": 20 },
{"codigoBarra":"017","nombre":"arvejas","precio":25 },
{"codigoBarra":"018","nombre":"aceituna","precio":30 }]*/
echo "mi json encode"."</br>";
var_dump($myJSON);
$myJSON1 = json_decode($myJSON);

echo "</br>"."mi json decode"."</br>";
var_dump($myJSON1);
?>