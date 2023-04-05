// Menu
const go2Top = document.querySelector("#go2Top");
const menu = document.querySelector("#menu");

const navMenu = document.querySelector(".navbar-menu");
const navMenuA = document.querySelectorAll(".navbar-menu a");
const menuToggler = document.querySelector(".menu-toggler");

const navbar = document.querySelector("nav");


addEventListener("scroll", () => {
	let scroll = this.scrollY;
	if(scroll > menu.clientHeight) {
    go2Top.style.opacity = 1;
    go2Top.style.lineHeight = "40px";
	go2Top.style.cursor = "pointer";
	navbar.style.height = "8vh";
	navbar.style.backgroundColor = "white";
    navMenuA.forEach(e => {
		e.style.color = "rgb(75, 75, 75)";
	});
	} else {
		go2Top.style.opacity = 0;
		go2Top.style.cursor = "default";
		navbar.style.height = "10vh";
		navbar.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
		navMenuA.forEach(e => {
			e.style.color = "#fff";
		});
	}
})

function mouseOver(element) {
	element.style.color = "rgb(255, 215, 0)"
}
function mouseOut(element) {
	let scroll = this.scrollY;
	if(scroll > menu.clientHeight) {
		element.style.color = "rgb(75, 75, 75)"
	} else {
		element.style.color = "rgb(255, 255, 255)"
	}
}
// Menu

// Go to top
go2Top.addEventListener("click", () => {
	if(go2Top.style.opacity != 0) window.scrollTo(0, 0);
})

menuToggler.addEventListener("click", () => {
	if(menuToggler.classList.contains("active")) {
		menuToggler.classList.remove("active");
		navMenu.classList.remove("active");
	} else {
		menuToggler.classList.add("active");
		navMenu.classList.add("active");
	}
});
// Go to top


// Blog slider
const sliders = document.querySelectorAll(".slider");
const articles = document.querySelectorAll(".article-main p");
const articleBtn = document.querySelectorAll(".article-btn");
 
sliders.forEach((slider, index) => {
	slider.addEventListener("mouseenter", () => {
	sliders[index].style.backgroundColor = "rgb(19, 18, 19)";
	articles[index].style.zIndex = "1";
    articles[index].style.opacity = 1;
    articles[index].style.transition = "1.5s";
	articles[index].style.transitionDelay = "0.05s";
	articleBtn[index].style.opacity = 1;
	articleBtn[index].style.transition = "0.3s";
	articleBtn[index].style.transitionDelay = "0.35s";
  });

  slider.addEventListener("mouseleave", () => {
	sliders[index].style.backgroundColor = "transparent"
	articles[index].style.zIndex = "-1";
    articles[index].style.opacity = 0;
    articles[index].style.transition = "0.2s";
	articles[index].style.transitionDelay = "0.05s";
	articleBtn[index].style.opacity = 0;
	articleBtn[index].style.transition = "0.2s";
	articleBtn[index].style.transitionDelay = "0.05s";
  }); 
});
//Blog slider

// Typewriter
let i = 0;
let txt = 'Blog pisany przez sztuczną inteligencję.';
let speed = 70;

window.onload = typeWriter()

function typeWriter(){
    if (i < txt.length) {
		document.querySelector("header h2").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
    setTimeout(typeWriter, 3000);
}
// Typewriter
