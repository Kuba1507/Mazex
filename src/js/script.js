const burgerBtn = document.querySelector('.hamburger')
const mobileNav = document.querySelector('.mobile-nav')
const mobileNavItems = document.querySelectorAll('.mobile-nav__item')

const handleNav = () => {
	mobileNav.classList.toggle('show-nav')
	burgerBtn.classList.toggle('is-active')
}

const closeNav = () => {
	mobileNav.classList.remove('show-nav')
	burgerBtn.classList.remove('is-active')
}

burgerBtn.addEventListener('click', handleNav)
mobileNavItems.forEach(item => {
	item.addEventListener('click', closeNav)
})
