$("#register").click(function(){
	var Email = $('#Email').val();
	var Password = $('#Password').val();
	var ConfirmPassword = $('#ConfirmPassword').val();
	var data = { 'Email': Email, 'Password': Password };
	$.getJSON(serviceURL + 'register.php', function(res) {
		alert(res);
	});
	
});