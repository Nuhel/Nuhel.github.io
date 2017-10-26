<?php
	$to 			= 'xxxx@gmail.com';
	$name 			= $_POST['uname'];
	$email 			= $_POST['email'];
	$subject 		= $_POST['subject'];
	$messagebody 	= $_POST['message'];

	if (!empty($name) && !empty($email) && !empty($subject) && !empty($messagebody) ) {
		$message = "<p>Hi</p>
					<p>A visitor sent message form 'Kicko Theme'</p>
					<p>Visitor Name: $name</p>
					<p>Visitor Email: $email</p>
					<p>Subject: 	$subject</p>
					<br>Message:	$messagebody
					<p>Thank you 'Kicko Theme'.</p>";

		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
		$headers .= 'From: Kicko Theme <info@kicko.com>' . "\r\n";

		if(mail($to, $subject, $message, $headers)){
			echo "Thank you! Your message has been sent successfully.";
		}else{
			echo "<span style='color:red'>Your message was not sent! Please try again.</span>";
		}
	}
	else{
		echo "<span style='color:red'>Please fill all fields.</span>";
	}

