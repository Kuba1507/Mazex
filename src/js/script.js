const body = document.querySelector("body");
const burgerBtn = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const cookieBox = document.querySelector(".cookie-box");
const cookieBtn = document.querySelector(".cookie-box__close-btn");
const mobileNavItems = document.querySelectorAll(".mobile-nav__item");
const yearsAmount = document.querySelector(".years-number");
const currentYearSpan = document.querySelector(".current-year");

const showCookie = () => {
	const cookieEaten = localStorage.getItem("cookie");

	if (cookieEaten) {
		cookieBox.classList.add("close-cookie");
	}
};

const handleCookieBox = () => {
	localStorage.setItem("cookie", "true");
	cookieBox.classList.add("close-cookie");
};

const handleNav = () => {
	mobileNav.classList.toggle("show-nav");
	burgerBtn.classList.toggle("is-active");
	body.classList.toggle("disable-scroll");
};

const closeNav = () => {
	mobileNav.classList.remove("show-nav");
	burgerBtn.classList.remove("is-active");
};

const yearsAmountControl = () => {
	const today = new Date();
	const mm = today.getMonth() + 1;
	const yyyy = today.getFullYear();

	const baseYear = 2025;
	const startingValue = 2;
	const yearDifference = yyyy - baseYear;
	const adjustedDifference = mm > 3 ? yearDifference + 1 : yearDifference;
	const newYears = Math.max(startingValue + adjustedDifference, startingValue);

	yearsAmount.textContent = newYears.toString();
};

const slides = document.querySelectorAll(".swiper-slide");

const updateImageSource = () => {
	slides.forEach((slide) => {
		const img = slide.querySelector("img");
		const desktopSrc = img.getAttribute("data-desktop");

		if (window.innerWidth >= 992 && desktopSrc) {
			img.src = desktopSrc;
		} else {
			img.src = img.getAttribute("src");
		}
	});
};

const setCurrentYear = () => {
	const currentYear = new Date().getFullYear();
	currentYearSpan.textContent = currentYear;
};

document.addEventListener("DOMContentLoaded", () => {
	updateImageSource();
});

window.addEventListener("resize", () => {
	updateImageSource();
});

document.addEventListener("DOMContentLoaded", () => {
	yearsAmountControl();
	setCurrentYear();
});
cookieBtn.addEventListener("click", handleCookieBox);
showCookie();
burgerBtn.addEventListener("click", handleNav);
mobileNavItems.forEach((item) => {
	item.addEventListener("click", closeNav);
});
