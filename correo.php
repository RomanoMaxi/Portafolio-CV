<?php
//correo al que se envia mensaje
$destinatario = 'maximilianoagustinromano@gmail.com';
$nombre = $_POST['name'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];
$email = $_POST['email'];

$header = "Enviado desde la página de Maxi";
$mensajeCompleto = $mensaje . "\nAtentamente: " . $nombre;
//función de mail
mail($destinatario, $asunto, $mensajeCompleto, $header);
echo "<script> alert('correo enviado exitosamente')</script>";
echo "<script> setTimeout(\"location.href='index.html'\",1000)</script>";
