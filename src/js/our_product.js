(function () {
	$.slidebars();

	$('#main-carousel').carousel({
		interval: null
	});

	$('#comment-carousel').carousel({
		interval: null
	});

	$('#recomended-carousel').carousel({
		interval: null 
	});

	$("#article-photo-carousel").carousel({
		swipe: 30,
		interval: null
	});

	// comment slider 

	var addEventSlider = function () {
		var photoWrapper = $(".carousel-photo").find("li"),
			indicators = $(".carousel-indicators").find("li"),
			photo = $(".carousel-photo").find("a"),
			carouselComment = $("#comment-carousel"),
			rightArrow = carouselComment.find(".nav-right-arrow"),
			leftArrow = carouselComment.find(".nav-left-arrow"),
			names = $(".name-wrapper p");
		
		var moveElements = function (dir) {
			var index = carouselComment.find(".item").index(carouselComment.find(".item.active")),
				itemLength = carouselComment.find(".item").length;

			names.removeClass("active");
			photo.removeClass("active");
			if (carouselComment.find(".item")[index + dir] === undefined) {
				if (dir > 0) {
					index = -1;
				} else {
					index = itemLength;
				}
			}
			$(photo[index + dir]).addClass("active");
			$(names[index + dir]).addClass("active");
		};

		rightArrow.on('click', function () {
			moveElements(1);
		});	

		leftArrow.on('click', function () {
			moveElements(-1)
		});

		photoWrapper.on("click", function () {
			var index = $(this).find("a").data("index");
			
			photo.removeClass("active");
			names.removeClass("active");
			
			$(this).find("a").addClass("active");
			$(names[index]).addClass("active");
		});

		indicators.on("click", function () {
			var index = $(this).data('slide-to');

			photo.removeClass("active");
			names.removeClass("active");
			
			$(photo[index]).addClass("active");
			$(names[index]).addClass("active");
		});
	};

	addEventSlider();
})();