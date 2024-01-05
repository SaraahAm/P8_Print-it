const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



document.addEventListener("DOMContentLoaded", function () {

	let dots = document.querySelector(".dots")
		slides.forEach(function(slide, i){
			let dot = document.createElement("div")
			dot.classList.add("dot")
			dots.appendChild(dot)
			if(i===0){
				dot.classList.add("dot_selected")
			}
		});
		
	
	const leftArrow = document.querySelector(".arrow_left")
	const rightArrow = document.querySelector(".arrow_right")
	const image = document.querySelector('#banner .banner-img')
	const tagLine = document.querySelector('#banner p')
	const arraydot = document.querySelectorAll('.dot')
	

	let changement = 0

	function replaceImage(changement){
		image.src = "./assets/images/slideshow/"+slides[changement]['image']
		tagLine.innerHTML=slides[changement]['tagLine']
	}

	function changementDots(changement){
		arraydot.forEach(function(dot, i){
			dot.classList.remove('dot_selected')
			if (i===changement) {
				dot.classList.add('dot_selected')
			}
		});
	}

	function btnrightArrow() {
		changement ++
		if (changement >= slides.length){changement = 0}
		replaceImage(changement)
		changementDots(changement)
	}
	rightArrow.addEventListener("click", btnrightArrow);

	function btnLeftArrow() {
		changement --
		if (changement < 0){
			changement = slides.length - 1
		}
		replaceImage(changement)
		changementDots(changement)

	}


	leftArrow.addEventListener("click", btnLeftArrow);
});
