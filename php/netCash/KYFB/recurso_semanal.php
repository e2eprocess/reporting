<?php
include("../../conexion_e2e_process.php");

function busqueda($MAQUINA,$INSTANCIAS,$FECHA_QUERY){

  $resultado = mysql_query("SELECT  DATE_FORMAT(fecha, '%d/%m/%y-%k')as fecha,
                                    cpu,
                                    memoria
                            FROM    informe_instancias
                            WHERE   maquina = '".$MAQUINA."'
                            AND     instancias = '".$INSTANCIAS."'
                            AND     fecha > DATE_SUB('".$FECHA_QUERY."', INTERVAL 10 DAY)
                            AND     fecha <= '".$FECHA_QUERY."'");

  return $resultado;

}

$category = array();
$series1 = array();
$series2 = array();
$series3 = array();
$series4 = array();
$series5 = array();
$series6 = array();
$series7 = array();
$series8 = array();
$series9 = array();
$series10 = array();
$series11 = array();
$series12 = array();
$series13 = array();
$series14 = array();
$series15 = array();
$series16 = array();

$minuto = 10;

if(date("i")<$minuto){
  $hoy = date("Y-m-d H", strtotime('-2 hour'));
}else{
  $hoy = date("Y-m-d H", strtotime('-1 hour'));
}

$KYFB_S01_10 = busqueda('apbad022','KYFB_S01_10',$hoy);
$KYFB_S01_11 = busqueda('apbad022','KYFB_S01_11',$hoy);
$KYFB_S01_20 = busqueda('apbad023','KYFB_S01_20',$hoy);
$KYFB_S01_21 = busqueda('apbad023','KYFB_S01_21',$hoy);
$KYFB_S01_30 = busqueda('apbad024','KYFB_S01_30',$hoy);
$KYFB_S01_31 = busqueda('apbad024','KYFB_S01_31',$hoy);
$KYFB_S01_40 = busqueda('apbad026','KYFB_S01_40',$hoy);
$KYFB_S01_41 = busqueda('apbad026','KYFB_S01_41',$hoy);


$category['name'] = 'fecha';

while($r1  = mysql_fetch_array($KYFB_S01_10)) {
      $series1['data'][] = $r1['cpu'];
      $series2['data'][] = $r1['memoria'];
      $category['data'][] = $r1['fecha'];
    }
while($r2  = mysql_fetch_array($KYFB_S01_11)) {
      $series3['data'][] = $r2['cpu'];
      $series4['data'][] = $r2['memoria'];
    }
while($r3  = mysql_fetch_array($KYFB_S01_20)) {
      $series5['data'][] = $r3['cpu'];
      $series6['data'][] = $r3['memoria'];
    }
while($r4  = mysql_fetch_array($KYFB_S01_21)) {
      $series7['data'][] = $r4['cpu'];
      $series8['data'][] = $r4['memoria'];
    }
while($r5  = mysql_fetch_array($KYFB_S01_30)) {
      $series9['data'][] = $r5['cpu'];
      $series10['data'][] = $r5['memoria'];
    }
while($r6  = mysql_fetch_array($KYFB_S01_31)) {
      $series11['data'][] = $r6['cpu'];
      $series12['data'][] = $r6['memoria'];
    }
while($r7  = mysql_fetch_array($KYFB_S01_40)) {
      $series13['data'][] = $r7['cpu'];
      $series14['data'][] = $r7['memoria'];
    }
while($r8  = mysql_fetch_array($KYFB_S01_41)) {
      $series15['data'][] = $r8['cpu'];
      $series16['data'][] = $r8['memoria'];
    }



$datos = array();
array_push($datos,$category);
array_push($datos,$series1);
array_push($datos,$series2);
array_push($datos,$series3);
array_push($datos,$series4);
array_push($datos,$series5);
array_push($datos,$series6);
array_push($datos,$series7);
array_push($datos,$series8);
array_push($datos,$series9);
array_push($datos,$series10);
array_push($datos,$series11);
array_push($datos,$series12);
array_push($datos,$series13);
array_push($datos,$series14);
array_push($datos,$series15);
array_push($datos,$series16);


print json_encode($datos, JSON_NUMERIC_CHECK);

mysql_close($conexion);

?>
