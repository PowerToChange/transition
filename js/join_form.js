$(document).ready(function() {
	$('#join_submit').click(try_submit);
	$('input').change(function() { $(this).removeClass('input_error'); });
	$('#campus').change(function() { $(this).removeClass('input_error'); });
	$('#preference input').click(function() { $('#preference').removeClass('input_error'); });
	$('#confirmation').hide();
	$('#new_form').click(new_form);
});

function try_submit()
{
	clear_messages();
	validations = validate_join();
	show_errors(validations);
	if(validations[0]) submit_data();
	
}

function confirm_submit(thank_you_message)
{
	$('#confirmation_message').html(thank_you_message);
	$('#confirmation').show();
	$('#headline').hide();
	$('#join_form').hide();
	
}

function new_form()
{
	$('#confirmation').hide();
	$('#headline').show();
	$('#join_form').show();
}

function submit_data()
{
	// If there is not already a request
	if(!request) 
	{

		clear_messages();
		
		// selecting the inputs to disable and enable afterward
		var form = $('#join_form');
		var inputs = form.find('input, select, button, textarea');
		
		// put the form in a state where the user would know that it is submitting data.
		inputs.prop("disabled", true);
		$('#submit_text').html('submitting');
		$('#join_submit div').addClass('submitting');
		
		var fname = $('#first_name').val();
		
		var join_data = {
				first_name : fname,
				last_name :$('#last_name').val(),
				campus : $('#campus').val(),
				email: $('#email').val(),
				cellphone : $('#cellphone').val(),
				preference : $('#preference input:checked').val()
			};
		
		var post_url = my_base_url() + "/join_submit.php";
		
		//alert(post_url + ' | first:'+join_data.first_name + ' | last:'+join_data.last_name + ' | campus:'+join_data.campus + ' | cellphone:'+join_data.cellphone + ' | email:'+join_data.email + ' | prefered:'+join_data.preference);
	
		// postMethod();
		var request = $.ajax({
			url: post_url,
			type: "post",
			data: join_data
		});
		
		// on success
		request.done(function(response, textStatus, jqXHR) {
			confirm_submit("Thank you " + fname + " for submitting your informations, We can't wait to meet you on campus!");
			// Clear the form
			inputs.val('')
			.removeAttr('checked');
			$('#campus').val('none');
			$('#submit_text').html('submit');
		});
		
		// on failure
		request.fail(function(jqXHR, textStatus, errorThrown) {
			$('.errors').html('Sorry, there was an error while trying to submit your data.');
			$('#submit_text').html('re-submit');
		});
		
		// no mather if success or fail, this is always called
		request.always(function() {
			inputs.prop("disabled", false);
			$('#join_submit div').removeClass('submitting');
		});

	}
}


function clear_messages()
{
	$('.messages').html('');
	$('.errors').html('');
}


function postMethod()
{
	$.post(my_base_url() + "/join_submit.php",
		{
			first_name :$('#first_name').val(),
			last_name :$('#last_name').val(),
			campus : $('#campus').val(),

			email: $('#email').val(),
			cellphone : $('#cellphone').val(),
			
			preference : $('#preference input:checked').val()


		}, function(data, status, request) {
			finish();
	}, "json").error(function() {
		alert('error');
	});
	
}

function finish()
{
	alert('finish()');
}

/*
 validate_join: validates the form and returns an array
 [0] true: all validations passed
     false: at least one validation failed
 [1] Array: id of inputs that failed
 [2] Array: messages to show
 
 * */
function validate_join()
{
	$('input').removeClass('input_error');
	$('#campus').removeClass('input_error');
	$('#preference').removeClass('input_error');

	validations = new Array();
	error_messages = new Array();
	error_inputs = new Array();
	is_valid = true;

	valid_phone = false;
	valid_email = false;

	var phone = /^[\d\(\)-]{7,14}$/;
	var email = /^[\w.%-]+@[\w.-]+\.\w{2,5}$/;

	
	if($('#first_name').val() == '')
	{
		error_inputs.push("first_name");
		error_messages.push("Please enter your first name.");
	}
	if($('#last_name').val() == '')
	{
		error_inputs.push("last_name");
		error_messages.push("Please enter your last name.");
	}
	if($('#campus').val() == 'none')
	{
		error_inputs.push("campus");
		error_messages.push("Please choose your campus. If it is not listed, choose \"Other\".");
	}
	if($('#cellphone').val() == '') {}
	else if(!phone.test($('#cellphone').val()))
	{
		error_inputs.push("cellphone");
		error_messages.push("Please enter a valid cellphone number.");
	}
	else { valid_phone = true; }
	
	if($('#email').val() == '') {}
	else if(!email.test($('#email').val()))
	{
		error_inputs.push("email");
		error_messages.push("Please enter a valid email.");
	}
	else { valid_email = true; }
	
	if(!valid_phone && !valid_email)
	{
		error_inputs.push("email");
		error_inputs.push("cellphone");
		error_messages.push("Please provide either your cell phone number or an email to join.");
	}
	
	if( $('#preference input:checked').length == 0 )
	{
		error_inputs.push("preference");
		error_messages.push("Please tell us how you would like us to communicate with you.");
	}
	else if($('#preference input:checked').val() == '4' && !valid_phone)
	{
		error_inputs.push("preference");
		error_inputs.push("cellphone");
		error_messages.push("If you'd like to join, please provide your cell phone number.");	
	}
	else if($('#preference input:checked').val() == '2' && !valid_email)
	{
		error_inputs.push("preference");
		error_inputs.push("email");
		error_messages.push("If you'd like to join, please provide your email address.");	
	}
	else if($('#preference input:checked').val() == '%012%014%01' && !(valid_phone && valid_email))
	{
		error_inputs.push("preference");
		if(!valid_email) error_inputs.push("email");
		if(!valid_phone) error_inputs.push("cellphone");
		error_messages.push("If you'd like to join, please provide your cell phone number and email.");	
	}
	
	if(error_messages.length != 0) is_valid = false;
	
	validations[0] = is_valid;
	validations[1] = error_inputs;
	validations[2] = error_messages;
	
	return validations;
}

function show_errors(validations)
{
	$('.errors').html(validations[2].join('<br />'));
	error_inputs = validations[1];
	for (var i = 0; i < error_inputs.length; i++) 
		$('#' + error_inputs[i]).addClass('input_error');
		
}

function my_base_url()
{
	host = window.location.host;
	if(host != 'local.transition.com') host += '/transition';
	return 'http://' + host;
}
