<?php
require_once("../../conexion_e2e_process.php");
require_once("../../queryinforme.php");

$category = array();
$series1 = array();
$series2 = array();
$series3 = array();
$series4 = array();

$hoy= date("Y-m-d H:m", strtotime('-20 minute'));

$mobilityTiempo = tiempo('enpp_mult_web',$hoy,'40 days');
$mobilityPeti = peticiones('enpp_mult_web',$hoy,'40 days');

$category['name'] = 'fecha';

while($r1  = pg_fetch_assoc($mobilityTiempo)) {
      $series1['data'][] = $r1['tiempo_respuesta'];
      $category['data'][] = $r1['fecha'];
    }

while($r2  = pg_fetch_assoc($mobilityPeti)) {
      $series2['data'][] = $r2['peticiones'];
    }

$datos = array();
array_push($datos,$category);
array_push($datos,$series1);
array_push($datos,$series2);

print json_encode($datos, JSON_NUMERIC_CHECK);

pg_close($db_con);

?>
