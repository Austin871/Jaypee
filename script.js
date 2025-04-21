'use strict';

function toggleMenu() {
	const menu = document.querySelector('.mobile-nav-links');
	menu.classList.toggle('list-active');
	console.log('menu clicked');
}

document.addEventListener('click', function (event) {
	const menu = document.querySelector('.mobile-nav-links');
	const sandwich = document.querySelector('.sandwich-bar');

	if (!menu.contains(event.target) && !sandwich.contains(event.target)) {
		menu.classList.remove('list-active');
	}
});

document.addEventListener('DOMContentLoaded', () => {
	const targets = document.querySelectorAll('.hero-content, .hero-form');

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible');
					observer.unobserve(entry.target); // animate only once
				}
			});
		},
		{
			threshold: 0.1,
		}
	);

	targets.forEach((target) => {
		observer.observe(target);
	});
});
const targets = document.querySelectorAll('.product-box, .product-box img');
const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
				observer.unobserve(onscroll.target); // animate only once
			}
		});
	},
	{
		threshold: 0.1,
	}
);
targets.forEach((target) => {
	observer.observe(target);
});
