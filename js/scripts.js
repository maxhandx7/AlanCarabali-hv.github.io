const	toggleTheme = document.getElementById("toggle-theme");
const	toggleIcon = document.getElementById("toggle-icon");
const	toggleText = document.getElementById("toggle-text");

const toggleColors = document.getElementById("toggle-color");
const rootStyles = document.documentElement.style;

toggleTheme.addEventListener("click", () => {
	
	document.body.classList.toggle("dark");
	if (toggleIcon.src.includes("moon.svg")) {
		toggleIcon.src="assets/icons/sun.svg";
		toggleText.textContent="Modo Light";
	}else{
		toggleIcon.src="assets/icons/moon.svg";
		toggleText.textContent="Modo Dark";
	}

});

toggleColors.addEventListener("click", (e)=>{
//console.log(e.target.dataset);
rootStyles.setProperty('--primary-color', e.target.dataset.color);
});