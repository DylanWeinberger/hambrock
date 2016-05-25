// $(document).ready(function(){


// 	function autoslide(){
//         var currentSlide = $('.active-slide');
//         var nextSlide = currentSlide.next();
        
		
// 		if(nextSlide.length === 0) {
//             nextSlide = $('.slide').first();
//         }


//         nextSlide.addClass("active-slide");
//        	currentSlide.fadeOut(1000, function(){
//        		currentSlide.removeClass("active-slide");
//        	});


        
       	
        
//        	// prevSlide.removeClass("last-slide");
//     };

//     setInterval(autoslide, 4000);  

// });




$(document).ready(function() {

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