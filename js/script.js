document.addEventListener('DOMContentLoaded', function(event) {


// get statements into an array statements
const statements = document.getElementsByClassName("jsStatements");

// get pagination lis into an array pages
const pages = document.getElementsByClassName("jsPages");

// get right arrow
const arrowRight = document.getElementById("jsArrowRight");

// get left arrow
const arrowLeft = document.getElementById("jsArrowLeft");

// get right arrow
const intro = document.getElementById("jsIntro");

// counter for page tracking
let currentPage = 0;


// button listeners

arrowLeft.addEventListener("click", function(){
  clickLeft();
});


arrowRight.addEventListener("click", function(){
  clickRight();
});

// when clicking right arrow
var clickRight = () => {

	// hidding/showing statements
	if (currentPage <= 7) {

		// we hide previous statement
		addOpNone(statements[currentPage]);

		currentPage++;

		// we show current statement
		removeOpNone(statements[currentPage]);
	}

	// hidding/showing arrows
	checkArrows();


	// hidding/showing intro
	checkIntro();

}


// when clicking left arrow
var clickLeft = () => {

	// hidding/showing statements
	if (currentPage <= 8 && currentPage > 0) {

		// we hide previous statement
		addOpNone(statements[currentPage]);

		currentPage--;

		// we show current statement
		removeOpNone(statements[currentPage]);
	}

	// hidding/showing arrows
	checkArrows();

	// hidding/showing intro
	checkIntro();

}


// check if arrows should be shown

var checkArrows = () => {

	if (currentPage == 0) {

		// we hide the left arrow
		addOpNone(arrowLeft);

	} else if (currentPage == 8) {

		// we hide the right arrow
		addOpNone(arrowRight);

	} else {

		// we show both arrows
		removeOpNone(arrowRight);
		removeOpNone(arrowLeft);

	}

}


// check if intro should be shown

var checkIntro = () => {

	if (currentPage == 0) {
		removeOpNone(intro);
	} else {
		addOpNone(intro);
	}

}


// adds class op-none w/animation
var addOpNone = (elementToHide) => {

	elementToHide.classList.add("op-none");
	elementToHide.style.opacity = 1;
	elementToHide.style.transition = "opacity 1s";
	elementToHide.style.opacity = 0;
	
}

// removes class op-none w/animation
var removeOpNone = (elementToShow) => {

	elementToShow.classList.remove("op-none");
	elementToShow.style.opacity = 0;
	elementToShow.style.transition = "opacity 1s";
	elementToShow.style.opacity = 1;
		
}


})