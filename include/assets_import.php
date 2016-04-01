<?php
function assets_import($type){
  static $assets = null;
  if($assets == null){
    $assets = json_decode(file_get_contents("./config/assets.".getenv("ENV").".json"), true);
  }

  switch($type){
    case "favicon":
      $ret = '<link rel="icon" type="image/x-icon" href="'.$assets[$type].'">';
      break;
    case "css":
      foreach($assets[$type] as $path){
        $ret .= '<link rel="stylesheet" type="text/css" href="'.$path.'">';
      }
      break;
    case "js":
    case "js/lib":
      foreach($assets[$type] as $path){
        $ret .= '<script src="'.$path.'"></script>';
      }
      break;
  }

  return $ret;
}
?>
