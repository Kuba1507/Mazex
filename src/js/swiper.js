const swiper = new Swiper(".partner-swiper", {
	slidesPerView: "auto",
	loop: true,
	centeredSlides: true,
	speed: 8000,
	allowTouchMove: false,
	disableOnInteraction: false,
	autoplay: {
		delay: 1,
	},
});

const swiperGallery = new Swiper(".mySwiper", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
