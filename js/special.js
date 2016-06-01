function changeType(obj)
{
	if($(this).prop('status') == 1)
	{
		$("nav").addClass('navbar-inverse');
		$('body').css('background','url(./images/background/background.jpg)');
		$('.img-content').prop('src','./images/banner/banner.png');
		$('.content-color').css('background','url(./images/content/1.jpg)');
		$('.content-background').css('background','url(./images/content/14.jpg)');
		$('.content-img').css('background','url(./images/content/4.jpg)');
		$('.nav-color').css('background','#000');
		$(this).prop('status',"2");
	}else{
		$("nav").removeClass('navbar-inverse');
		$('body').css('background','url(./images/background/background1.png)');
		$('.img-content').prop('src','./images/banner/banner1.png');
		$('.content-color').css('background','url(./images/content/2.jpg)');
		$('.content-background').css('background','url(./images/content/13.png)');
		$('.content-img').css('background','url(./images/content/3.jpg)');
		$('.nav-color').css('background','#F8F0E5');
		$(this).prop('status',"1");
	}
}
$(document).ready(function()
	{
		$( window ).scroll(function ()
		{
			if( $(window).scrollTop() >= 200 )
			{
				$(".nav-color").addClass('navbar-fixed-top');
				$(".content-top").css('padding-top','75px');
				$(".nav-color").css('border-radius','4px');
			}else{
				$(".nav-color").removeClass('navbar-fixed-top');
				$(".content-top").css('padding-top','0px');		
			}
		});
	});

