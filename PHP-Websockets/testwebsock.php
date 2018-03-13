#!/usr/bin/env php
<?php

require_once('./websockets.php');

class echoServer extends WebSocketServer {
  //protected $maxBufferSize = 1048576; //1MB... overkill for an echo server, but potentially plausible for other applications.


  protected $clients = array();//array donde se van a guardar los usuarios

  protected function process ($user, $message) {//Se dispara cuando algo es recibido
    /*Bucle que envia el mensaje recibido a cada usuario guardado en el arrray excepto el que envio el mensaje*/
    foreach ($this->clients as $client) {
      if ($client!=$user) {
        $this->send($client,$message);
      }
    }
    /**************************************************************************/
  }


  protected function connected ($user) {// Se dispara cuando se conecta alguien
    $this->send($user,"bienvenido");
    array_push($this->clients,$user);//agrego el usuario al array
  }


  protected function closed ($user) {// Se dispara cuando se desconecta alguien
  }
}

$echo = new echoServer("192.168.0.158","3030");// tu server

try {
  $echo->run();
}
catch (Exception $e) {
  $echo->stdout($e->getMessage());
}
?>
