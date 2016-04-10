#!/usr/bin/php
<?php
$query = $_GET['q'];

$node = "/vol/bitbucket/cmy14/.linuxbrew/bin/node ";

switch($query){
  case "getDepartments":
    echo shell_exec($node.'./api/getDepartments.js');
    break;
  default:
    header('HTTP/1.1 400 Bad request', true, 400);
    die('Bad request.');
}
