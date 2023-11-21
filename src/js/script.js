const body = document.querySelector("body");
const burgerBtn = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavItems = document.querySelectorAll(".mobile-nav__item");
const yearsAmount = document.querySelector(".years-number");

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

	const baseYear = 2025; // Rok, od którego zaczynają się zmiany liczby lat
	const startingValue = 2; // Początkowa wartość liczby lat

	// Obliczamy różnicę między aktualnym rokiem a bazowym rokiem
	const yearDifference = yyyy - baseYear;

	// Jeśli obecna data jest po kwietniu, zwiększamy różnicę o 1
	const adjustedDifference = mm > 3 ? yearDifference + 1 : yearDifference;

	// Wyliczamy nową ilość lat
	const newYears = Math.max(startingValue + adjustedDifference, startingValue);

	// Ustawiamy wartość w akapicie HTML
	yearsAmount.textContent = newYears.toString();
};

document.addEventListener("DOMContentLoaded", () => {
	yearsAmountControl();
});
burgerBtn.addEventListener("click", handleNav);
mobileNavItems.forEach((item) => {
	item.addEventListener("click", closeNav);
});
