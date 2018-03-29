$(document).ready(function(){
	$(".delete").on("click", function(){
		$(this).parents("tr").prev().remove();
		$(this).parents("tr").remove();
		return false;
	});
	
	var get_room;
	$(".get_room").on("click", function(){
		get_room = $(this);
		$("#overlay, #popup_get_room").show();
		return false;
	});
	
	$(".modal_close, #overlay").click( function(){
		$("#popup_get_room, #overlay").hide();
		return false;
	});
	
	$(".choose_room").on("click", function(){
		var id_room = $(this).parents("tr").children(".id_room").text();
		get_room.text(id_room);
		$("#popup_get_room, #overlay").hide();
		return false;
	});
});