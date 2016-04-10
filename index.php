#!/usr/bin/php
<?php
// for logging
date_default_timezone_set("Europe/London");
require("../visitorlog.php");
$logger=new VisitorLogger("log/visitor.log");
$logger->log();

require_once('./include/env_setup.php');
require_once('./include/assets_import.php');
?>
<html>
  <head>
    <base href="/~cmy14/elsa3-dev/">
    <title>Elsa3</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?=assets_import('favicon')?>


    <?=assets_import('css')?>
    <?=assets_import('js/lib')?>
    <?=assets_import('js')?>

    <script>
      System.import('main')
            .then(null, console.error.bind(console));
    </script>
  </head>

  <body>
    <elsa-app>Loading...</elsa-app>
  </body>
</html>
