$("#register").click(function(){
	var Email = $('#Email').val();
	var Password = $('#Password').val();
	var ConfirmPassword = $('#ConfirmPassword').val();
	var data = { 'Email': Email, 'Password': Password };
	/*$('form').submit(function(){
	var landmarkID = $(this).parent().attr('data-landmark-id');
	var postData = $(this).serialize();
	
	$.ajax({
		type: 'POST',
		data: postData+'&amp;lid='+landmarkID,
		url: 'http://your-domain.com/comments/save.php',
		success: function(data){
			console.log(data);
			alert('Your comment was successfully added');
		},
		error: function(){
			console.log(data);
			alert('There was an error adding your comment');
		}
	});
	
	return false;
});*/

	$.getJSON(serviceURL + 'mobile/register.php', function(res) {
		alert(res);
	});
	
});