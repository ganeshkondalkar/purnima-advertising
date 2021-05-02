<div>
<?php

    // Purnima Advertising | Synthesis Advertising | Ganesh Kondalkar
    $recipient_name = "Purnima Advertising";

    // purnima@purnimaadvt.com | synthesis.advt@gmail.com | ganeshkondalkar@gmail.com
    $recipient_email = "purnima@purnimaadvt.com";

    $recipient = $recipient_name . " <" . $recipient_email . ">";

    if( $_SERVER["REQUEST_METHOD"] == "POST" ){
        parse_str( $_POST["data"], $enquiryFormData);

        $to = $recipient;
        $name = $enquiryFormData["name"];
        $email = $enquiryFormData["email"];
        $phone = $enquiryFormData["phone"];
        $subject = $enquiryFormData["subject"];
        $message = $enquiryFormData["message"] . "\nContact: " . $phone;

        $header = array();
        $header[] = "MIME-Version: 1.0";
        $header[] = "Content-type: text/plain; charset=iso-8859-1";
        $header[] = "From: " . $name . " <" . $email . ">";
        $header[] = "Reply-To: " . $recipient;
        $header[] = "X-Mailer: PHP/" . phpversion();

        $returnValue = mail($to, $subject, $message, implode("\r\n", $header), "-f" . $recipient_email );

        if( $returnValue == true ){
            // Send Acknowledgement to sender.
            $recipientMessage = "
                Thank you, {$name}!
                \n
                We have received your email successfully!
                \n\n

                Our team will be analysing your request and will get in touch with you shortly.
                \n\n

                Regards,
                \n
                Purnima Advertising Team!
            ";

            $recipientHeader = array();
            $recipientHeader[] = "MIME-Version: 1.0";
            $recipientHeader[] = "Content-type: text/plain; charset=iso-8859-1";
            $recipientHeader[] = "From: " . $recipient;
            $recipientHeader[] = "Reply-To: " . $recipient;
            $recipientHeader[] = "X-Mailer: PHP/" . phpversion();
            mail( $name . " <" . $email . ">", "ACKNOWLEDGEMENT: " . $subject, $recipientMessage, implode("\r\n", $recipientHeader), "-f" . $recipient_email );

            // send response to the front-end.
            echo "Thank you " . $name . " Your Message sent successfully.";
        } else {
            echo "<p>Sorry " . $name . " Your Message could not be sent.";
        }
    }
?>
</div>
