document.addEventListener('DOMContentLoaded', function(event) {


// get statements into an array statements
const STATEMENTS = document.getElementsByClassName("jsStatements");

// get pagination lis into an array pages
const PAGES = document.getElementsByClassName("jsPages");

// get enlight text
const ENLIGHT = document.getElementById("jsEnlight");
const CENLIGHT = document.getElementById("jsCurrentEnlight");
const TENLIGHT = document.getElementById("jsTotalEnlight");

// get right arrow
const ARROWRIGHT = document.getElementById("jsArrowRight");

// get left arrow
const ARROWLEFT = document.getElementById("jsArrowLeft");

// get right arrow
const INTRO = document.getElementById("jsIntro");

// counter for page tracking
let currentPage = 0;

// total pages
let totalPages = STATEMENTS.length - 1;


// button listeners

ARROWLEFT.addEventListener("click", function(){
  clickLeft();
});


ARROWRIGHT.addEventListener("click", function(){
  clickRight();
});

// when clicking right arrow
var clickRight = () => {

	// hidding/showing statements
	if (currentPage < totalPages) {

		// we hide previous statement
		addOpNone(STATEMENTS[currentPage]);

		currentPage++;

		// we show current statement
		removeOpNone(STATEMENTS[currentPage]);
	}

	// hidding/showing arrows
	checkArrows();

	// hidding/showing intro
	checkIntro();

	// hidding/showing enlight
	checkEnlight();



}


// when clicking left arrow
var clickLeft = () => {

	// hidding/showing statements
	if (currentPage <= totalPages && currentPage > 0) {

		// we hide previous statement
		addOpNone(STATEMENTS[currentPage]);

		currentPage--;

		// we show current statement
		removeOpNone(STATEMENTS[currentPage]);
	}

	// hidding/showing arrows
	checkArrows();

	// hidding/showing intro
	checkIntro();

	// hidding/showing enlight
	checkEnlight();

}


// check if arrows should be shown

var checkArrows = () => {

	if (currentPage == 0) {

		// we hide the left arrow
		addOpNone(ARROWLEFT);

	} else if (currentPage == totalPages) {

		// we hide the right arrow
		addOpNone(ARROWRIGHT);

	} else {

		// we show both arrows
		removeOpNone(ARROWRIGHT);
		removeOpNone(ARROWLEFT);

	}

}


// check if intro should be shown

var checkIntro = () => {

	if (currentPage == 0) {
		removeOpNone(INTRO);
	} else {
		addOpNone(INTRO);
	}

}

// check if enlight text should be shown

var checkEnlight = () => {

	if (currentPage > 0) {
		removeOpNone(ENLIGHT);
	} else {
		addOpNone(ENLIGHT);
	}

	checkEnlightPage();

}

// show correct enlight numbers

var checkEnlightPage = () => {

	CENLIGHT.innerHTML = currentPage;
	TENLIGHT.innerHTML = totalPages;

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