<div>
<?php

    if( $_SERVER["REQUEST_METHOD"] == "POST" ){
        parse_str( $_POST["data"], $enquiryFormData);
        $to = "synthesis.advt@gmail.com";
        $name = $enquiryFormData["name"];
        $subject = "Client Request Form | Purnima Advertising";
        $email = $enquiryFormData["email"];
        $phone = $enquiryFormData["phone"];
        $message = $enquiryFormData["message"] . "\nContact: " . $phone;

        $header = array();
        $header[] = "MIME-Version: 1.0";
        $header[] = "Content-type: text/plain; charset=iso-8859-1";
        $header[] = "From: " . $name . " <" . $email . ">";
        $header[] = "Reply-To: Prashant <synthesis.advt@gmail.com>";
        $header[] = "X-Mailer: PHP/" . phpversion();

        $returnValue = mail($to, $subject, $message, implode("\r\n", $header) );

        if( $returnValue == true ){
            echo "Thank you " . $name . " Your Message sent successfully.";
        } else {
            echo "<p>Sorry " . $name . " Your Message could not be sent.";
        }
    }
?>
</div>
