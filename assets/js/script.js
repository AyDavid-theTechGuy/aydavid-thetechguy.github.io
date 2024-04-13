const navbar = document.querySelector(".navbar");
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector(".navbar-collapse");

const profileCard = document.querySelector(".profile-card");
const overlay = document.querySelector(".overlay");
const btnCloseProfile = document.querySelector(".close-profile");

// Responsive Face Icon

if (navbarToggler.collapse === false) {
	navbarCollapse.insertAdjacentHTML(
		"afterend",
		`<button class="face-icon show-profile"><img src="./assets/img/face_FILL0_wght400_GRAD0_opsz24.svg" class="me-2" /></button>`
	);
} else {
	navbarCollapse.insertAdjacentHTML(
		"beforeend",
		`<button class="face-icon show-profile"><img src="./assets/img/face_FILL0_wght400_GRAD0_opsz24.svg" class="me-2 pt-2" /></button>`
	);
}

// Submenus - Dropdowns

const dropdown = document.querySelectorAll(".submenu .dropdown-btn");
const dropdownIcon = document.querySelectorAll(".submenu .dropdown-btn .material-icons");
const dropdownContent = document.querySelectorAll(".submenu .dropdown-content");

for (let i = 0; i < dropdown.length; i++) {
	dropdown[i].parentElement.addEventListener("mouseenter", () => {
		for (let j = 0; j < dropdownContent.length; j++) {
			if (i == j) {
				dropdownContent[j].style.display = "block";
			}
		}

		for (let k = 0; k < dropdownIcon.length; k++) {
			if (i == k) {
				dropdownIcon[k].textContent = "expand_less";
			}
		}
	});

	dropdown[i].parentElement.addEventListener("mouseleave", () => {
		for (let j = 0; j < dropdownContent.length; j++) {
			if (i == j) {
				dropdownContent[j].style.display = "none";
			}
		}

		for (let k = 0; k < dropdownIcon.length; k++) {
			if (i == k) {
				dropdownIcon[k].textContent = "expand_more";
			}
		}
	});
}

/* Profile Card */

const btnOpenProfile = document.querySelector(".show-profile");

const openProfile = function () {
	profileCard.classList.remove("hidden");
	overlay.classList.remove("hidden");
	navbar.classList.remove("fixed-top");
	document.onscroll = false;
};

const closeProfile = function () {
	profileCard.classList.add("hidden");
	overlay.classList.add("hidden");
	navbar.classList.add("fixed-top");
};

btnOpenProfile.addEventListener("click", openProfile);

btnCloseProfile.addEventListener("click", closeProfile);

overlay.addEventListener("click", closeProfile);

/* Lit Card */

const litCard = document.querySelectorAll(".pyb-projects .lit-card");

for (let i = 0; i < litCard.length; i++) {
	litCard[i].addEventListener("click", () => {
		window.location.href = litCard[i].getAttribute('link');
	});

	litCard[i].addEventListener("mouseover", () => {
		litCard[i].style.backgroundColor = "#3e3e43";
		litCard[i].style.color = "#ffffff";
	});

	litCard[i].addEventListener("mouseleave", () => {
		litCard[i].style.backgroundColor = "#ffffff";
		litCard[i].style.color = "#3e3e43";
	});
}

/* Web Temp Btn */

const webTempBtn = document.querySelectorAll(".web-temp-btn");

for (let i = 0; i < webTempBtn.length; i++) {
	webTempBtn[i].addEventListener("click", () => {
		window.location.href = webTempBtn[i].getAttribute('link');
	});
}