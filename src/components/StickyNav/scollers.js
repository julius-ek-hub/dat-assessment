const scrollToView = (selector) =>
	document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });

export const scrollToRegister = () => scrollToView("#register-section");
export const scrollToMenu = () => scrollToView("#menu-section");
export const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};
