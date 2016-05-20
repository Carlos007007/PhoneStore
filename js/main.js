$(document).ready(function() {
    $('.btn-mobile').on('click', function(){
    	var menu=$('.navigation-list');
    	if(menu.hasClass('navigation-list-show')){
    		menu.removeClass('navigation-list-show');
    	}else{
    		menu.addClass('navigation-list-show');
    	}
    });
});