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

/* WhatsApp Quick Contact Hover */

const waQc = document.querySelector(".wa-qc");

waQc.innerHTML = `
	<div class="wrapper">
		<a href="https://wa.me/2348084634310"><i class="bi bi-whatsapp"></i></a>
	</div>`;

const waBg = document.querySelector(".wa-qc .wrapper");
const waIcon = document.querySelector(".wa-qc .wrapper i");

waBg.addEventListener("mouseover", () => {
	waBg.style.backgroundColor = "#f1f1f1";
	waBg.style.transition = "0.75s";
	waIcon.style.color = "#1a8754";
	waIcon.style.transition = "0.75s";
});

waBg.addEventListener("mouseleave", () => {
	waBg.style.backgroundColor = "#20a869";
	waBg.style.transition = "0.75s";
	waIcon.style.color = "#f1f1f1";
	waIcon.style.transition = "0.75s";
});