// Carousel functionality
function prevImage(button) {
	const carousel = button.closest('.carousel-container');
	const image = carousel.querySelector('.carousel-image');
	const indicators = carousel.querySelectorAll('.carousel-indicator');
	const currentIndex = Array.from(indicators).findIndex((indicator) =>
		indicator.classList.contains('active')
	);

	const newIndex =
		currentIndex === 0 ? indicators.length - 1 : currentIndex - 1;

	// Update active indicator
	indicators[currentIndex].classList.remove('active');
	indicators[newIndex].classList.add('active');

	// Update image (for now, we're using the same image, but you can add multiple images)
	const images = [
		'images/content/example-image.webp',
		'images/content/example-image.webp',
		'images/content/example-image.webp',
	];

	image.src = images[newIndex];
	image.alt = `Image ${newIndex + 1}`;
}

function nextImage(button) {
	const carousel = button.closest('.carousel-container');
	const image = carousel.querySelector('.carousel-image');
	const indicators = carousel.querySelectorAll('.carousel-indicator');
	const currentIndex = Array.from(indicators).findIndex((indicator) =>
		indicator.classList.contains('active')
	);

	const newIndex =
		currentIndex === indicators.length - 1 ? 0 : currentIndex + 1;

	// Update active indicator
	indicators[currentIndex].classList.remove('active');
	indicators[newIndex].classList.add('active');

	// Update image (for now, we're using the same image, but you can add multiple images)
	const images = [
		'images/content/example-image.webp',
		'images/content/example-image.webp',
		'images/content/example-image.webp',
	];

	image.src = images[newIndex];
	image.alt = `Image ${newIndex + 1}`;
}

function goToImage(button, index) {
	const carousel = button.closest('.carousel-container');
	const image = carousel.querySelector('.carousel-image');
	const indicators = carousel.querySelectorAll('.carousel-indicator');

	// Update active indicator
	indicators.forEach((indicator) => indicator.classList.remove('active'));
	button.classList.add('active');

	// Update image (for now, we're using the same image, but you can add multiple images)
	const images = [
		'images/content/example-image.webp',
		'images/content/example-image.webp',
		'images/content/example-image.webp',
	];

	image.src = images[index];
	image.alt = `Image ${index + 1}`;
}

// Add smooth scrolling for better UX
document.addEventListener('DOMContentLoaded', function () {
	// Add smooth scrolling to all links
	const links = document.querySelectorAll('a[href^="#"]');
	links.forEach((link) => {
		link.addEventListener('click', function (e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute('href'));
			if (target) {
				target.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});
			}
		});
	});
});
