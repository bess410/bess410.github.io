$(function () {
    var location = window.location.href;
    var cur_url = location.split('/').pop();
	
 
    $('.user_menu a').each(function () {
        var link = $(this).attr('href');
        if (cur_url == link)
        {
            $(this).addClass("selected");
        }
    });
});
