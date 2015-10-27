// (function () {
// 	"use strict"
// 	var Space = Space || {};

// // ------------VARS-------------//

// 	Space.main = {
// 		photoWrapper: $(".carousel-photo").find("li"),
// 		indicators: $(".carousel-indicators").find("li"),
// 		photo: $(".carousel-photo").find("a"),
// 		carouselComment: $("#comment-carousel"),
// 		rightArrow: carouselComment.find(".nav-right-arrow"),
// 		leftArrow: carouselComment.find(".nav-left-arrow"),
// 		names: $(".name-wrapper p")
// 	};

// 	Space.main.moveElements = function (dir) {
// 		var index = Space.main.carouselComment.find(".item").index(Space.main.carouselComment.find(".item.active")),
// 			itemLength = Space.main.carouselComment.find(".item").length;

// 		Space.main.names.removeClass("active");
// 		Space.main.photo.removeClass("active");
// 		if (Space.main.carouselComment.find(".item")[index + dir] === undefined) {
// 			if (dir > 0) {
// 				index = -1;
// 			} else {
// 				index = itemLength;
// 			}
// 		}
// 		$(Space.main.photo[index + dir]).addClass("active");
// 		$(Space.main.names[index + dir]).addClass("active");		
// 	};

// 	return Space;
// })();