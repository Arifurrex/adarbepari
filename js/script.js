$(window).on("load", function() {

	$(".loader .inner").fadeOut(500, function() {
		$(".loader").fadeOut(750);
	});

})




$(document).ready(function() {

	$('#slides').superslides({
		animation: 'fade',
		play: 50000,
		pagination: false
	});

	var typed = new Typed(".typed", {
		strings: ["ইভেন্ট--শিরো মোরি সর্বশেষ এ রকম একটি বিতর্কিত মন্তব্য করেছেন গতকাল বুধ.",
			"ইভেন্ট--জাপান অলিম্পিক কমিটি পরিষদের বৈঠকে, যেটা নিয়ে এখন জাপানে.",
			 "ইভেন্ট--কী কারণে এ রকম হয়ে থাকে, সেই ব্যাখ্যা দিয়ে তিনি বলেছিলেন."],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});

	$('.owl-carousel').owlCarousel({
		autoplay: true,
  center: true,
  loop: true,
		responsive: {
		  0: {
			items: 1,
		  },
		  480: {
			items: 1,
		  },
		  768: {
			items: 1,
		  },
		  938: {
			items:1,
		  },
		},
	  });


// vercal
// $('.owl-carousel').owlCarousel({
// 	loop: true,
//   autoplay: true,
//   items: 1,
//   nav: true,
//   autoplayHoverPause: true,
//   animateOut: 'slideOutUp',
//   animateIn: 'slideInUp'
//   });


	// var skillsTopOffset = $(".skillsSection").offset().top;
	var statsTopOffset = $(".statsSection").offset().top;
	var countUpFinished = false;
	if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() +200) {
			$(".counter").each(function() {
				var element = $(this);
				var endVal = parseInt(element.text());

				element.countup(endVal);
			})

			countUpFinished = true;

		}
	// $(window).scroll(function() {

		// if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

		// 	$('.chart').easyPieChart({
		//         easing: 'easeInOut',
		//         barColor: '#fff',
		//         trackColor: false,
		//         scaleColor: false,
		//         lineWidth: 4,
		//         size: 152,
		//         onStep: function(from, to, percent) {
		//         	$(this.el).find('.percent').text(Math.round(percent));
		//         }
		//     });


		// }


		// if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() +200) {
		// 	$(".counter").each(function() {
		// 		var element = $(this);
		// 		var endVal = parseInt(element.text());

		// 		element.countup(endVal);
		// 	})

		// 	countUpFinished = true;

		// }


	// });


	$("[data-fancybox]").fancybox();


	$(".items").isotope({
		filter: '*',
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false
		}
	});

	$("#filters a").click(function() {

		$("#filters .current").removeClass("current");
		$(this).addClass("current");

		var selector = $(this).attr("data-filter");

		$(".items").isotope({
			filter: selector,
			animationOptions: {
				duration: 1500,
				easing: 'linear',
				queue: false
			}
		});

		return false;
	});



	$("#navigation li a").click(function(e) {
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

	});




	const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation() {

		var body = $("body");

		if($(window).scrollTop() >= navTop) {
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		}
		else {
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}




	}

});
















