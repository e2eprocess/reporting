<?php
require_once("../../conexion_e2e_process.php");
require_once("../../queryinforme.php");

$hoy= date("Y-m-d H:m", strtotime('-10 minute'));

$ENPP_501_20 = recursos('ENPP_501_20',$hoy,'40 days');
$ENPP_501_21 = recursos('ENPP_501_21',$hoy,'40 days');
$ENPP_501_22 = recursos('ENPP_501_22',$hoy,'40 days');
$ENPP_501_30 = recursos('ENPP_501_30',$hoy,'40 days');
$ENPP_501_31 = recursos('ENPP_501_31',$hoy,'40 days');
$ENPP_501_32 = recursos('ENPP_501_32',$hoy,'40 days');
$ENPP_501_40 = recursos('ENPP_501_40',$hoy,'40 days');
$ENPP_501_41 = recursos('ENPP_501_41',$hoy,'40 days');
$ENPP_501_42 = recursos('ENPP_501_42',$hoy,'40 days');
$ENPP_501_60 = recursos('ENPP_501_60',$hoy,'40 days');
$ENPP_501_61 = recursos('ENPP_501_61',$hoy,'40 days');
$ENPP_501_62 = recursos('ENPP_501_62',$hoy,'40 days');

$category['name'] = 'fecha';

while($r1  = pg_fetch_assoc($ENPP_501_20)) {
      $series1['data'][] = $r1['cpu'];
      $series2['data'][] = $r1['memoria'];
      $category['data'][] = $r1['fecha'];
    }
while($r2  = pg_fetch_assoc($ENPP_501_21)) {
      $series3['data'][] = $r2['cpu'];
      $series4['data'][] = $r2['memoria'];
    }
while($r3  = pg_fetch_assoc($ENPP_501_22)) {
      $series5['data'][] = $r3['cpu'];
      $series6['data'][] = $r3['memoria'];
    }
while($r4  = pg_fetch_assoc($ENPP_501_30)) {
      $series7['data'][] = $r4['cpu'];
      $series8['data'][] = $r4['memoria'];
    }
while($r5  = pg_fetch_assoc($ENPP_501_32)) {
      $series9['data'][] = $r5['cpu'];
      $series10['data'][] = $r5['memoria'];
    }
while($r6  = pg_fetch_assoc($ENPP_501_31)) {
      $series11['data'][] = $r6['cpu'];
      $series12['data'][] = $r6['memoria'];
    }
while($r7  = pg_fetch_assoc($ENPP_501_40)) {
      $series13['data'][] = $r7['cpu'];
      $series14['data'][] = $r7['memoria'];
    }
while($r8  = pg_fetch_assoc($ENPP_501_41)) {
      $series15['data'][] = $r8['cpu'];
      $series16['data'][] = $r8['memoria'];
    }
while($r9  = pg_fetch_assoc($ENPP_501_42)) {
      $series17['data'][] = $r9['cpu'];
      $series18['data'][] = $r9['memoria'];
    }
while($r10  = pg_fetch_assoc($ENPP_501_60)) {
      $series19['data'][] = $r10['cpu'];
      $series20['data'][] = $r10['memoria'];
    }
while($r11  = pg_fetch_assoc($ENPP_501_61)) {
      $series21['data'][] = $r11['cpu'];
      $series22['data'][] = $r11['memoria'];
    }
while($r12  = pg_fetch_assoc($ENPP_501_62)) {
      $series23['data'][] = $r12['cpu'];
      $series24['data'][] = $r12['memoria'];
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
array_push($datos,$series17);
array_push($datos,$series18);
array_push($datos,$series19);
array_push($datos,$series20);
array_push($datos,$series21);
array_push($datos,$series22);
array_push($datos,$series23);
array_push($datos,$series24);

print json_encode($datos, JSON_NUMERIC_CHECK);

pg_close($db_con);

?>
