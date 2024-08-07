<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $to = 'sabukasi@kean.edu';

    $email_content = "Name: " . $name . "\n";
    $email_content .= "Email: " . $email . "\n";
    $email_content .= "Subject: " . $subject . "\n";
    $email_content .= "Message: " . $message . "\n";

    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";

    if(mail($to, $subject, $email_content, $headers)) {
        echo "The form was successfully sent to: " . $to . "<br>";
        echo "The subject is: " . $subject . "<br>";
        echo "The name entered is: " . $name;
    } else {
        echo "There was an error sending the email.";
    }
}
?>
