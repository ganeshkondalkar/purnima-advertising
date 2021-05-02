<div>
<?php

    // which client this notification is about.
    $CLIENT_NAME = "Purnima Advertising";
    //

    if( $_SERVER["REQUEST_METHOD"] == "POST" ){

        parse_str( $_POST["data"], $notificationData);

        # $to = "synthesis.advt@gmail.com";
        $to = "ganesh.kondalkar@salpaidevi.com";
        $name = 'Ganesh Kondalkar';
        $subject = $CLIENT_NAME . " | Hosting Renewal Notification";
        $email = "ganeshkondalkar@gmail.com";
        $phone = "(+91) 70 4565 2140";
        # $message = $notificationData["message"] . "\nContact: " . $phone;
        $message = '
            <html>
            <head>
              <title>Notification | Hosting Renewal | Purnima Advertising</title>
            </head>
            <body>

              <p>Hello, Prashant!</p>

              <p>First and foremost, I want to thank you for your continued investment with my Website development and hosting services.</p>

              <p>That said, we know you’re busy and just wanted to take this time to remind you that <b>Web Hosting for Purnima Advertising expires on March 31st, 2020.</b></p>

              <p>I hope that you’ll take this time to renew your account.</p>

              <p>Best regards,</p>

              <p>Ganesh Kondalkar<br />
              Freelance | Web Developer</p>

            </body>
            </html>
            ';

        $header = array();
        $header[] = "MIME-Version: 1.0";
        $header[] = "Content-type: text/html; charset=iso-8859-1";
        $header[] = "From: " . $name . " <" . $email . ">";
        $header[] = "Reply-To: " . $name . " <" . $email . ">";
        $header[] = "X-Mailer: PHP/" . phpversion();

        $returnValue = mail($to, $subject, $message, implode("\r\n", $header), "-f" . $email );

        if( $returnValue == true ){
            echo $notificationData["message"] . "\nThank you " . $name . " Your Message sent successfully.";
        } else {
            echo "<p>Sorry " . $name . " Your Message could not be sent.";
        }
    }
?>
</div>
