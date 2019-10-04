document.addEventListener('DOMContentLoaded', function(event) {


/* Declarations
------------------------
*/  

// counter for page tracking
let currentPage = 0;

// total pages
let totalPages = STATEMENTS.length - 1;

// get statements into an array statements
const STATEMENTS = document.getElementsByClassName("jsStatements");

// get cover
const COVER = document.getElementById("jsCover");

// previous position
let coverOldPosition = "left bottom";

// new position
let coverNewPosition = "left bottom";

// get right arrow
const ARROWRIGHT = document.getElementById("jsArrowRight");

// get left arrow
const ARROWLEFT = document.getElementById("jsArrowLeft");

// get right arrow
const INTRO = document.getElementById("jsIntro");

// get enlight text
const ENLIGHT = document.getElementById("jsEnlight");
const CENLIGHT = document.getElementById("jsCurrentEnlight");
const TENLIGHT = document.getElementById("jsTotalEnlight");

// get pagination lis into an array pages
const PAGES = document.getElementsByClassName("jsPages");


/* Listeners
------------------------
*/  

// button left
ARROWLEFT.addEventListener("click", function(){
  clickLeft();
});

// button right
ARROWRIGHT.addEventListener("click", function(){
  clickRight();
});


/* Functions
------------------------
*/  

// when clicking right arrow
var clickRight = () => {

	currentPage++;

	// disable both arrows for 2 seconds
	tempDisable();

	// hidding/showing statements
	checkStatements();

	// move cover according to page
	moveCover();

	// hidding/showing arrows
	checkArrows();

	// hidding/showing intro
	checkIntro();

	// highlights correct page in pagination
	checkPagination();

	// hidding/showing enlight
	checkEnlight();

}


// when clicking left arrow
var clickLeft = () => {

	currentPage--;

	// disable both arrows for 2 seconds
	tempDisable();

	// hidding/showing statements
	checkStatements();

	// move cover according to page
	moveCover();

	// hidding/showing arrows
	checkArrows();

	// hidding/showing intro
	checkIntro();

	// highlights correct page in pagination
	checkPagination();

	// hidding/showing enlight
	checkEnlight();

}


// show correct statement and hide the rest

var checkStatements = () => {
	// show correct statement

	if (currentPage <= totalPages && currentPage >= 0) {

		// we hide previous statement
		for(let statement of STATEMENTS) {
			addOpNone(statement);
		}

		// we show current statement
		removeOpNone(STATEMENTS[currentPage]);
	}
}


// move cover according to page

var moveCover = () => {

	switch (currentPage) {
	  	case 0:
	  		coverNewPosition = "left bottom";
			break;
	  	case 1:
	  		coverNewPosition = "-1170px bottom";
			break;
		case 2:
	  		coverNewPosition = "-1990px bottom";
			break;
		case 3:
	  		coverNewPosition = "-3225px bottom";
			break;
		case 4:
	  		coverNewPosition = "-4450px bottom";
			break;
		case 5:
	  		coverNewPosition = "-5670px bottom";
			break;
		case 6:
	  		coverNewPosition = "-7000px bottom";
			break;
		case 7:
	  		coverNewPosition = "right bottom";
			break;
		case 8:
	  		coverNewPosition = "right bottom";
			break;
		case 9:
	  		coverNewPosition = "-10060px bottom";
			break;
	  	
	  	default:
	    	coverNewPosition = "left bottom";
    }

    setTimeout(function () {
        COVER.style.backgroundPosition = coverOldPosition;    
	    COVER.style.transition = "background-position 1s";
	    COVER.style.backgroundPosition = coverNewPosition;

	    coverOldPosition = coverNewPosition;
    }, 1000);

}


// check if arrows should be shown

var checkArrows = () => {

	if (currentPage == 0) {

		// we hide the left arrow
		addOpNone(ARROWLEFT);

		// we disable the left arrow (just in case)
		addDisable(ARROWLEFT);

		// we enable the right arrow
		removeDisable(ARROWRIGHT);

	} else if (currentPage >= totalPages) {

		// we hide the right arrow
		addOpNone(ARROWRIGHT);
		
		// we disable the right arrow
		addDisable(ARROWRIGHT);

		// we enable the left arrow
		removeDisable(ARROWLEFT);

	} else {

		// we show both arrows
		removeOpNone(ARROWLEFT);
		removeOpNone(ARROWRIGHT);

		// we enable both arrows
		removeDisable(ARROWLEFT);
		removeDisable(ARROWRIGHT);

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


// check which page to highlight in pagination

var checkPagination = () => {

	// highlight correct pagionation goes here

}


// check if enlight text should be shown

var checkEnlight = () => {

	if (currentPage >= 1 && currentPage < totalPages) {
		tempDisappear(ENLIGHT);
	} else {
		addOpNone(ENLIGHT);
	}

	checkEnlightPage();

}


// show correct enlight numbers

var checkEnlightPage = () => {

	setTimeout(function () {
		CENLIGHT.innerHTML = currentPage;
		TENLIGHT.innerHTML = totalPages;
	}, 2000);

}


/* Functions used by other functions
------------------------
*/  

// adds class op-none w/animation

var addOpNone = (elementToHide) => {

	elementToHide.classList.add("op-none");
	elementToHide.style.opacity = 1;
	elementToHide.style.transition = "opacity 1s";
	elementToHide.style.opacity = 0;
	
}


// removes class op-none w/animation

var removeOpNone = (elementToShow) => {

	setTimeout(function () {
        elementToShow.classList.remove("op-none");
		elementToShow.style.opacity = 0;
		elementToShow.style.transition = "opacity 1s";
		elementToShow.style.opacity = 1;
    }, 2000);
		
}


// adds disabled attribute
var addDisable = (button) => {

	button.disabled = true;

}


// removes disabled attribute
var removeDisable = (button) => {

	setTimeout(function () {
		button.disabled = false;
	}, 2000);
}


// temp disable for buttons (to prevent fast clicking)

var tempDisable = () => {

        ARROWLEFT.disabled = true;
		ARROWRIGHT.disabled = true;

}


// temp disappear for elements (looks cool)

var tempDisappear = (elementToDisappear) => {

	if (currentPage >= 1 && currentPage < totalPages) {

			addOpNone(elementToDisappear);
			removeOpNone(elementToDisappear);

	} 

}


})