//image carousel
console.log("carosel js");

//set image index and show slide
var slideIndex = 1;
showSlides(0);

//changes the slide
function showSlides(n) {
	//hide all slides
	var slides = document.getElementsByClassName("mySlides");
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	//adjust index
	slideIndex+=n;
	if(slideIndex > 3)
		slideIndex = 1
	if(slideIndex < 1)
		slideIndex = 3;
	//show new slide
	slides[slideIndex-1].style.display = "block";
	console.log("slides shown");
	//timer for automatic change
	setTimeout(function(){showSlides(1);}, 10000);
}
