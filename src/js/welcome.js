const transportBtn = document.querySelector('.welcome-section__transport-cta-button')
const garageBtn = document.querySelector('.welcome-section__garage-cta-button')

const moveToTransport = () => {
	window.location.href = 'transport.html'
}

const moveToGarage = () => {
	window.location.href = 'serwis.html'
}

transportBtn.addEventListener('click', moveToTransport)
garageBtn.addEventListener('click', moveToGarage)
