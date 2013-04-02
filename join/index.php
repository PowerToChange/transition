<?php
include_once('../header.php');
?>
<div id="confirmation" class="g3">
	<p class="headline"><span id="confirmation_message"></span></p>
	<a id="new_form">
	    <div class="reg-button">
	      <span>new form</span>&nbsp;<span class="icon">-</span>
	    </div></a>
</div>
<div id="headline" class="g3">
    <p class="headline">We’re pumped that you want to connect with Power to Change on your campus.  Fill in the information below and someone from YOUR campus will be in touch.</p>
  </div>
  
  
<div class="g3">
	

<form id="join_form" action="../join_submit.php" method="post">
	<table>
		<tr>
			<td>
				<div class="form_label">First Name:</div>
				<div class="form_input"><input id="first_name" name="first_name" type="text" /></div>
<br />				
				<div class="form_label">Last Name:</div>
				<div class="form_input"><input id="last_name" name="last_name" type="text" /></div>
<br />				
				<div class="form_label">Campus:</div>
				<div class="form_input"><?php include('../campus_dropdown.html'); ?></div>
<br />				
				<div class="form_label">Cell Phone:</div>
				<div class="form_input"><input id="cellphone" name="cellphone" type="tel" /></div>
<br />				
				<div class="form_label">Email:</div>
				<div class="form_input"><input id="email" name="email" type="email" /></div>
<br />				
				<div class="form_label">How would you like P2C to communicate with you?</div>
				<div class="form_input">
					<div id="preference">
						<input name="preference" type="radio" value="4" /> Text Message 
						<br /><input name="preference" type="radio" value="2" /> Email
						<br /><input name="preference" type="radio" value="%012%014%01" /> Both 
					</div>
				</div>
<br />				
					<div class="clear"></div>
					<div class="errors"></div>
					<div class="messages"></div>
					<div class="clear"></div>
				<div class="form_label">&nbsp;</div>
				<div class="form_input">
			
					 <a id="join_submit">
				    <div class="reg-button">
				      <span id="submit_text">submit</span>&nbsp;<span class="icon">-</span>
				    </div></a>
			    </div> 
			</td>
		</tr>
	</table>
</form>
 </div>

<?php
include_once('../footer.php');
?>
