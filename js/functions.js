$("#register").click(function(){
	var btn = $('#mybtns').html();
	$('#mybtns').html('<img src="images/ajax-loader.gif" alt="loading">');
	var Email = $('#Email').val();
	var Password = $('#Password').val();
	var ConfirmPassword = $('#ConfirmPassword').val();
	$.ajax({
		type: 'POST',
		data: '&Email='+Email+'&Password='+Password,
		url: serviceURL + 'mobile/register.php',
		success: function(data){
			$('#mybtns').html(btn);
			$('#Email').val("");
			$('#Password').val("");
			$('#ConfirmPassword').val("");
			$('#errorMessage').html("You have successfully registered with us. Please check your email.");
		},
		error: function(){
		}
	});

});