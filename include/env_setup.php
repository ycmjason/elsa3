<?php
$envs = json_decode(file_get_contents("./config/envs.json"), true);
foreach($envs as $key => $value){
  putenv($key."=".$value);
}
?>
