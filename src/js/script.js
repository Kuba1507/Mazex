const body = document.querySelector('body')
const burgerBtn = document.querySelector('.hamburger')
const mobileNav = document.querySelector('.mobile-nav')
const cookieBox = document.querySelector('.cookie-box')
const cookieBtn = document.querySelector('.cookie-box__close-btn')
const mobileNavItems = document.querySelectorAll('.mobile-nav__item')
const yearsAmount = document.querySelector('.years-number')
const currentYearSpan = document.querySelector('.current-year')
const emailContent = document.querySelector('.contact-block__content--email')
const garageEmailContent = document.querySelector('.contact-block__content--garage')
const slides = document.querySelectorAll('.swiper-slide')

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

const handleGarageResponsiveEmail = () => {
	if (window.innerWidth < 768) {
		garageEmailContent.innerHTML = 'mazex.serwis<br>@gmail.com'
	} else {
		garageEmailContent.innerHTML = 'mazex.serwis@gmail.com'
	}
}

const setCurrentYear = () => {
	const currentYear = new Date().getFullYear()
	currentYearSpan.textContent = currentYear
}

const addClickEvents = () => {
	const facebookLinks = document.querySelectorAll('.facebook-link')
	const instagramLinks = document.querySelectorAll('.instagram-link')

	facebookLinks.forEach(link => {
		link.addEventListener('click', () => {
			window.location.href = 'https://www.facebook.com/profile.php?id=100081866023444'
		})
	})

	instagramLinks.forEach(link => {
		link.addEventListener('click', () => {
			window.location.href = 'https://www.instagram.com/mazex_transport?igsh=cTQ3eDJ0cWtqYXY0'
		})
	})
}

const addGarageClickEvents = () => {
	const garageFacebookLinks = document.querySelectorAll('.facebook-garage-link')
	const garageInstagramLinks = document.querySelectorAll('.instagram-garage-link')

	garageFacebookLinks.forEach(link => {
		link.addEventListener('click', () => {
			window.location.href = 'https://www.facebook.com/profile.php?id=61560227537710'
		})
	})

	garageInstagramLinks.forEach(link => {
		link.addEventListener('click', () => {
			window.location.href =
				'https://www.instagram.com/mazex_serwis/?next=%2Fsecretmoonxo%2Ftagged%2F&locale=de&hl=am-et'
		})
	})
}

document.addEventListener('DOMContentLoaded', () => {
	updateImageSource()
})

window.addEventListener('resize', () => {
	updateImageSource()
})

document.addEventListener('DOMContentLoaded', () => {
	handleResponsiveEmail()
})

document.addEventListener('DOMContentLoaded', () => {
	handleGarageResponsiveEmail()
})

window.addEventListener('load', setCurrentYear)

cookieBtn.addEventListener('click', handleCookieBox)
showCookie()
burgerBtn.addEventListener('click', handleNav)
mobileNavItems.forEach(item => {
	item.addEventListener('click', closeNav)
})
document.addEventListener('DOMContentLoaded', addClickEvents)
document.addEventListener('DOMContentLoaded', addGarageClickEvents)
yearsAmountControl()
