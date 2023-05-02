<?php
    $email = $_POST['emailModal'];
    $name = $_POST['nameModal'];
    $message = $_POST['modalArea'];
    $phone = $_POST['phoneModal'];


    $subject = "=?utf-8?B?".base64_encode("Обратная связь")."?=";
    $headers ="From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

    $messageSend = "<html><body>";
    $messageSend .= "Имя: " . $name;
    $messageSend .= "<br>Номер телефона: " . $phone;
    $messageSend .= "<br>Сообщение: " . $message;


    $success = mail("EMAIL", $subject, $messageSend, $headers);

    header("Location: ../../index.html");
    
?>