$(document).ready(function(){
	$("input").on('keyup',function(){
		var id;
		if($(this).val() == ""){
			id = $(this).attr("id");
			$(".warning." + id +" span").show();
		} else {
			id = $(this).attr("id");
			$(".warning." + id +" span").hide();
		}
	});
	
	$("#btn_reg").on("click", function(){
		var name = $("#name").val();
		var surname = $("#surname").val();
		var login = $("#login").val();
		var pass = $("#pass").val();
		if(name == ""){
			$(".warning.name span").show();
		}
		if(surname == ""){
			$(".warning.surname span").show();
		}
		if(login == ""){
			$(".warning.login span").show();
		}
		if(pass == ""){
			$(".warning.pass span").show();
		}
		return false;
	});
});