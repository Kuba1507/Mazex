const transportBtn = document.querySelector('.welcome-section__transport-cta-button')

const moveToTransport = params => {
	window.location.href = 'transport.html'
}

transportBtn.addEventListener('click', moveToTransport)
