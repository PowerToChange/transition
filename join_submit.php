<?php
include_once('blackbox.php');

// Prepare params
$params = array("Contact" => array("first_name" => $_POST['first_name'],
									"last_name" => $_POST['last_name'],
									"preferred_communication_method" => urldecode($_POST['preference']),
									"contact_type" => 'Individual'), 
				"Email" => array("email" => $_POST['email']),
				"Phone" => array("phone" => $_POST['cellphone']),
				"School" => array("contact_id_b" => $_POST['campus']));

  new_high_school_contact($params);

?>