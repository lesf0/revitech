//Табы
(function($){				
	jQuery.fn.lightTabs = function(options){

		var createTabs = function(){
			tabs = this;
			i = 0;
			
			showPage = function(i){
				$(tabs).children("div").children("div").hide();
				$(tabs).children("div").children("div").eq(i).show();
				$(tabs).children("ul").children("li").removeClass("active");
				$(tabs).children("ul").children("li").eq(i).addClass("active");
			}
								
			showPage(0);				
			
			$(tabs).children("ul").children("li").each(function(index, element){
				$(element).attr("data-page", i);
				i++;                        
			});
			
			$(tabs).children("ul").children("li").click(function(){
				showPage(parseInt($(this).attr("data-page")));
			});				
		};		
		return this.each(createTabs);
	};	
})(jQuery);
//Табы

function AnimateProject() {
    var length = $('.projects-block .project-item').length - 1;
    $('.projects-block .project-item').each(function(index) {
        if($(this).hasClass('active') && index != length) {
            $(this).removeClass('active').fadeOut(1000).next('.project-item').addClass('active').fadeIn(1000);
            return false;
        } else if (index == length) {
            $(this).removeClass('active').fadeOut(1000);
            $('.projects-block .project-item').eq(0).addClass('active').fadeIn(1000);
            return false;
        }
    });
};

//Уравниваем высоту итемов каталога
function setMaxheight(className) {
var maxheight = 0
$(className).each(function(){
	var height = $(this).height() 
	maxheight = height > maxheight ? height:maxheight
})
	$(className).css('height', maxheight+30)
}

$(document).ready(function(){
	var touch = $('#show_menu');
    var menu = $('.topmenu');
 
    $(touch).on('click', function(e) {
        e.preventDefault();
        //menu.fadeToggle("slow");
        $(document.body).toggleClass('menu_open');
    });
    $(window).resize(function(){
        var wid = $(window).width();
        if(wid > 880) {
            $(document.body).removeClass('menu_open');
        }
    });

    menu.find('.has-children > a').click(function(e){
    	e.preventDefault();
    	$(this).addClass('submenu_open');
    });
    menu.find('.has-children > a + ul').click(function(e){
    	e.preventDefault();
    	$(this).prev().removeClass('submenu_open');
    });
    menu.find('.has-children > a + ul > *').click(function(e){
    	e.stopPropagation();
    });
});