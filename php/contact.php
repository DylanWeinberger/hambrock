<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$from = 'From: Josh Hambrock Contact us page';
	$to = 'djweinbe@gmail.com';
	$subject = "New Message from  JoshHambrock.com";
	$human = $_POST['human'];

	$body = "From: $name\n E-mail: $email\n Message:\n $message";
?>

<?php 
	if ($_POST['submit'] && $human == '4') {
		if (mail ($to, $subject, $body, $from)) {
			echo '<p>Your Message has been sent!</p>';
		}else {
			echo '<p>Something went Wrong. Please go back and try again.</p>';
		}
	} else if ($_POST['submit'] && $human !='4') {
		echo '<p>You answered the anti-spam question incorrect. Please try again.</p>';
	}
?>

