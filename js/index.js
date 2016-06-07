// var mq = window.matchMedia( "(min-width: 768px)" );
// Set mq equal to window media matching a min-width
// This is a min width of an Ipad
// if (mq.matches) {
$(document).ready(function() {

	// Mobile Nav JS
	// $("#hamburger").click(function(){
	// 	if (!$(".nav").hasClass("activeNav")) {
	// 		$(".nav").addClass("activeNav");
	// 	}else {
	// 		$(".nav").removeClass("activeNav");
	// 	};
	// });


    $("#nav-mobile").html($("#nav-main").html());
    $("#nav-trigger span").click(function(){
        if ($("nav#nav-mobile ul").hasClass("expanded")) {
            $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
            $(this).removeClass("open");
        } else {
            $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
            $(this).addClass("open");
        }
    });


	function play() {
	    setInterval(function(){
	        var next = $(".slider .active").removeClass("active").next("img");
	        if (!next.length) {
	            next = $(".slider img:first");
	        }
	        next.addClass("active");
	    }, 5000);
	}
	play();



});
