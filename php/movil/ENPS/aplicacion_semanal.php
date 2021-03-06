<?php
require_once("../../conexion_e2e_process.php");
require_once("../../queryinforme.php");

$hoy= date("Y-m-d H:m", strtotime('-10 minute'));

$servicingTiempo = tiempo('enps_mult_web_movil',$hoy,'10 days');
$servicingPeti = peticiones('enps_mult_web_movil',$hoy,'10 days');

$category['name'] = 'fecha';

while($r1  = pg_fetch_assoc($servicingTiempo)) {
      $series1['data'][] = $r1['tiempo_respuesta'];
      $category['data'][] = $r1['fecha'];
    }
while($r2  = pg_fetch_assoc($servicingPeti)) {
      $series2['data'][] = $r2['peticiones'];
    }

$datos = array();
array_push($datos,$category);
array_push($datos,$series1);
array_push($datos,$series2);

print json_encode($datos, JSON_NUMERIC_CHECK);

pg_close($db_con);

?>
