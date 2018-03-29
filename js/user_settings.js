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
		if(name != "" && surname != "" && pass != "" && login != ""){
			$(".header").text("Здравствуйте, " + name);
		}
		return false;
	});
});