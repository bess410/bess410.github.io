$(document).ready(function(){
	$("#enter").click(function(){
		var login = $("#login").val();
		var pass = $("#pass").val();
		
		if(login == "user" && pass == "user"){
			$("#login_form").attr("action", "/user_requests.html");
		} else if(login == "admin" && pass == "admin"){
			$("#login_form").attr("action", "/admin_requests.html");
		} else{
			$("#login").val(login);
			$("#pass").val(pass);
			$(".warn.login span").text("Неверный Логин или Пароль");
			$(".warn.login span").show();
			return false;
		}
	});
});
