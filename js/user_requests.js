$(document).ready(function(){
	$(".delete").on("click", function(){
		$(this).parents("tr").prev().remove();
		$(this).parents("tr").remove();
	return false;
	});
	
	var tr;
	$(".change_request").on("click", function(){
		tr = $(this).parents("tr").prev().children();
		var seatNumber = tr.eq(1).text();
		$("#seatNumber").val(seatNumber);

		var apartmentClass = tr.eq(2).text();
		if(apartmentClass == "Эконом"){
			apartmentClass = "economic";
		}
		if(apartmentClass == "Бизнес"){
			apartmentClass = "business";
		}
		if(apartmentClass == "Люкс"){
			apartmentClass = "lux";
		}
		$("#apartmentClass").val(apartmentClass);

		var start = tr.eq(3).text();
		var startDate = start.slice(6)+"-"+start.slice(3,5)+"-"+start.slice(0,2);
		$("#start").val(startDate);

		var end = tr.eq(4).text();
		var endDate = end.slice(6)+"-"+end.slice(3,5)+"-"+end.slice(0,2);
		$("#end").val(endDate);

		$("#overlay, #popup_change_request").show();
		return false;
	});
	
	$("#change_request").on("click", function(){
		var seatNumber = $("#seatNumber").val();
		tr.eq(1).text(seatNumber);

		var apartmentClass = $("#apartmentClass").val();
		if(apartmentClass == "economic"){
			apartmentClass = "Эконом";
		}
		if(apartmentClass == "business"){
			apartmentClass = "Бизнес";
		}
		if(apartmentClass == "lux"){
			apartmentClass = "Люкс";
		}
		tr.eq(2).text(apartmentClass);

		var start = $("#start").val();
		var startDate = start.slice(8)+"."+start.slice(5,7)+"."+start.slice(0,4);
		tr.eq(3).text(startDate);

		var end = $("#end").val();
		var endDate = end.slice(8)+"."+end.slice(5,7)+"."+end.slice(0,4);
		tr.eq(4).text(endDate);
		$("#popup_change_request, #overlay").hide();
		return false;
	});
	
	$(".popup_bill").on("click", function(){
		$("#overlay, #popup_bill").show();
		return false;
	});
	
	$("#pay_bill").on("click", function(){
		$(this).parents("tr").prev().children().eq(-1).text("Оплачено");
		$(this).parents("tr").remove();
		return false;
	});
	
	$(".popup_room").on("click", function(){
		$("#overlay, #popup_room").show();
		return false;
	});
	
	$("#create_request").on("click", function(){
		$("#overlay, #popup_create_request").show();
		return false;
	});
	
	$(".modal_close, #overlay").click( function(){
		$("#popup_change_request, #popup_bill, #popup_room, #popup_create_request, #overlay").hide();
		return false;
	});
	
	
	$("#create_new_request").on("click", function(){
		$("#popup_create_request, #overlay").hide();
		return false;
	});
});


