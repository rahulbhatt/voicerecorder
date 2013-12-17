$("#register").click(function(){
	var Email = $('#Email').val();
	var Password = $('#Password').val();
	var ConfirmPassword = $('#ConfirmPassword').val();
	
	$.ajax({
		type: 'POST',
		data: '&Email='+Email+'&Password='+Password,
		url: serviceURL + 'mobile/register.php',
		success: function(data){
			console.log(data);
			alert('Your comment was successfully added');
		},
		error: function(){
			alert('There was an error adding your comment');
		}
	});
	
});