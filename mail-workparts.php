<?php

// import PHPMailer classes into the global namespace
// these must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

// required PHPMailer classes
const SMTP_SERVER = 'Dreamhost';
require 'constants.php';
require 'functions.php';
require 'PHPMailer.php';
require 'Exception.php';
require 'SMTP.php';

$mail = new PHPMailer(true); // passing `true` enables exceptions

try {
    // server settings
    // $mail->SMTPDebug = 3; // Enable verbose debug output
    $mail->isSMTP(); // set mailer to use SMTP
    $mail->Host = 'sub5.mail.dreamhost.com'; // specify main and backup SMTP servers
    $mail->SMTPAuth = true; // enable SMTP authentication
    $mail->Username = 'keith@keithsportfolio.com'; // SMTP username
    $mail->Password = mailPwdGet(); // SMTP password
    $mail->SMTPSecure = 'ssl'; // enable TLS encryption, `ssl` also accepted
    $mail->Port = 465; // TCP port to connect to

    // recipients
    $mail->setFrom('keith@keithsportfolio.com', 'Keith');
    $mail->addAddress('keith@keithsportfolio.com', 'Keith'); // add a recipient
    $mail->addAddress('kfhough@gmail.com', 'Keith');
    // $mail->addAddress('ellen@example.com'); // name is optional
    // $mail->addReplyTo('info@example.com', 'Information');
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    // attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz'); // add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg'); // optional name

    // content
    $mail->isHTML(true); // set email format to HTML
    $mail->Subject = 'New Message from Keith\'s Portfolio';
    // $mail->Body = 'This is the HTML message body <b>in bold!</b>';
    $body = 'Name: ' . $_POST['name'] . "<br>";
    $body .= 'Email: ' .$_POST['email'] . "<br>";
    $body .= 'Message: ' . $_POST['message'];

    $mail->Body = $body;

    // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
    $altbody = 'Name: ' . $_POST['name'] . "\n";
    $altbody .= 'Email: ' . $_POST['email'] . "\n";
    $altbody .= 'Message: ' . $_POST['message'];

    $mail->AltBody = $altbody;
    $mail->send();
    echo 'Message has been sent';
}
catch (Exception $e) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
}

?>
