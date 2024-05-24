const body = document.querySelector('body')
const burgerBtn = document.querySelector('.hamburger')
const mobileNav = document.querySelector('.mobile-nav')
const cookieBox = document.querySelector('.cookie-box')
const cookieBtn = document.querySelector('.cookie-box__close-btn')
const mobileNavItems = document.querySelectorAll('.mobile-nav__item')
const yearsAmount = document.querySelector('.years-number')
const currentYearSpan = document.querySelector('.current-year')
const emailContent = document.querySelector('.contact-block__content--email')
const slides = document.querySelectorAll('.swiper-slide')
const transportBtn = document.querySelector('.welcome-section__transport-cta-button')
const garageBtn = document.querySelector('.welcome-section__garage-cta-button')

const showCookie = () => {
	const cookieEaten = localStorage.getItem('cookie')

	if (cookieEaten) {
		cookieBox.classList.add('close-cookie')
	}
}

const handleCookieBox = () => {
	localStorage.setItem('cookie', 'true')
	cookieBox.classList.add('close-cookie')
}

const handleNav = () => {
	mobileNav.classList.toggle('show-nav')
	burgerBtn.classList.toggle('is-active')
	body.classList.toggle('disable-scroll')
}

const closeNav = () => {
	mobileNav.classList.remove('show-nav')
	burgerBtn.classList.remove('is-active')
}

const yearsAmountControl = () => {
	const today = new Date()
	const mm = today.getMonth() + 1
	const yyyy = today.getFullYear()

	const defaultStartValue = 3
	let startingValue = defaultStartValue
	const targetDate = new Date('2025-04-28')
	const differenceInYears = Math.floor((today - targetDate) / (1000 * 60 * 60 * 24 * 365))
	if (today >= targetDate) {
		startingValue += differenceInYears
	}

	yearsAmount.textContent = startingValue.toString()
}

const updateImageSource = () => {
	slides.forEach(slide => {
		const img = slide.querySelector('img')
		const desktopSrc = img.getAttribute('data-desktop')

		if (window.innerWidth >= 992 && desktopSrc) {
			img.src = desktopSrc
		} else {
			img.src = img.getAttribute('src')
		}
	})
}

const handleResponsiveEmail = () => {
	if (window.innerWidth < 768) {
		emailContent.innerHTML = 'mazex.transport<br>@gmail.com'
	} else {
		emailContent.innerHTML = 'mazex.transport@gmail.com'
	}
}

const setCurrentYear = () => {
	const currentYear = new Date().getFullYear()
	currentYearSpan.textContent = currentYear
}

document.transportBtn.addEventListener('click', () => {
	window.location.href = 'transport.html'
})

document.garageBtn.addEventListener('click', () => {
	window.location.href = 'garaz.html'
})

document.addEventListener('DOMContentLoaded', () => {
	updateImageSource()
})

window.addEventListener('resize', () => {
	updateImageSource()
})

document.addEventListener('DOMContentLoaded', () => {
	handleResponsiveEmail()
})

window.addEventListener('load', setCurrentYear)

cookieBtn.addEventListener('click', handleCookieBox)
showCookie()
burgerBtn.addEventListener('click', handleNav)
mobileNavItems.forEach(item => {
	item.addEventListener('click', closeNav)
})
yearsAmountControl()
