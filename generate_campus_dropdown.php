<?php
include_once('blackbox.php');

$select_campus = "<select id=\"campus\" name=\"campus\"><option value=\"none\" disabled selected>Select</option><option value=\"30412\">Other</option>";
$reply = get_schools();
foreach ($reply as $school => $data) {
	if($data["contact_id"] != '30412')
		$select_campus .=  "<option value=\"" . $data["contact_id"] . "\">" . $data["organization_name"] . "</option>\n";
}
$select_campus .=  "</select>";

file_put_contents('campus_dropdown.html', $select_campus);

?>