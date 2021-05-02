<div>
<?php

    // which client this notification is about.
    $CLIENT_NAME = "Purnima Advertising";
    //

    if( $_SERVER["REQUEST_METHOD"] == "POST" ){

        parse_str( $_POST["data"], $notificationData);

        $to = "ganeshkondalkar@gmail.com";
        $name = 'Ganesh Kondalkar';
        $subject = $CLIENT_NAME . " | Hosting Renewal Notification";
        $email = "ganeshkondalkar@gmail.com";
        $phone = "(+91) 70 4565 2140";
        $message = $notificationData["message"] . "\nContact: " . $phone;

        $header = array();
        $header[] = "MIME-Version: 1.0";
        $header[] = "Content-type: text/plain; charset=iso-8859-1";
        $header[] = "From: " . $name . " <" . $email . ">";
        $header[] = "Reply-To: " . $name . " <" . $email . ">";
        $header[] = "X-Mailer: PHP/" . phpversion();

        $returnValue = mail($to, $subject, $message, implode("\r\n", $header), "-f" . $email );

        if( $returnValue == true ){
            echo $notificationData["message"] . "Thank you " . $name . " Your Message sent successfully.";
        } else {
            echo "<p>Sorry " . $name . " Your Message could not be sent.";
        }
    }
?>
</div>
