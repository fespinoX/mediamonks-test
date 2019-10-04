document.addEventListener('DOMContentLoaded', function(event) {


/* Declarations
------------------------
*/  

// counter for page tracking
let currentPage = 0;

// get statements into an array statements
const STATEMENTS = document.getElementsByClassName("jsStatements");

// total pages
let totalPages = STATEMENTS.length;

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

// get join us
const JOINUS = document.getElementById("jsJoinUs");


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

// pagination

for(let button of PAGES) {
	button.addEventListener("click", function(){
  		clickPage();
	});
}


/* Functions
------------------------
*/  

// when clicking right arrow

var clickRight = () => {

	currentPage++;

	callFunctions();

}


// when clicking left arrow

var clickLeft = () => {

	currentPage--;

	callFunctions();

}


// when clicking any page
var clickPage = () =>{


	let pageNumberClicked = parseInt(window.event.target.innerHTML);
	currentPage = pageNumberClicked;

	callFunctions();

}


// calls all the navigation functions
var callFunctions = () => {

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

	// show the last page if this is it
	checkLastPage();

}

// show correct statement and hide the rest

var checkStatements = () => {
	// show correct statement

	if (currentPage < totalPages && currentPage >= 0) {

		addOpNoneAll(STATEMENTS);

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
	  		coverNewPosition = "calc(100% + 1600px) bottom";
			break;
		case 7:
	  		coverNewPosition = "right bottom";
			break;
		case 8:
	  		coverNewPosition = "right bottom";
			break;
		case 9:
	  		coverNewPosition = "calc(100% - 1155px) bottom";
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
	if (currentPage <= totalPages && currentPage >= 0) {

		// we remove the highlight from all pages
		for(let page of PAGES) {
			page.classList.remove("white-box");
		}

		// we highlight the current page
		PAGES[currentPage].classList.add("white-box");
	}

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
		TENLIGHT.innerHTML = totalPages - 1;
	}, 2000);

}


// check if we are at the last page

var checkLastPage = () => {
	
	if ( currentPage == totalPages ) {

		// hide all statements
		addOpNoneAll(STATEMENTS);
		
		removeDNone(JOINUS);
		// show join us
		removeOpNone(JOINUS);
		

	} else {
		
		addDNone(JOINUS);
		// hide join us
		addOpNone(JOINUS);


	}

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

// adds class d-none

var addDNone = (elementToHide) => elementToHide.classList.add("d-none");


// removes class op-none w/animation

var removeDNone = (elementToShow) => elementToShow.classList.remove("d-none");


// adds disabled attribute
var addDisable = (button) => button.disabled = true;


// removes disabled attribute w/animation
var removeDisable = (button) => {

	setTimeout(function () {
		button.disabled = false;
	}, 2000);

}


// hides all elements inside an array

var addOpNoneAll = (arrayToHide) => {

	for(let position of arrayToHide) {
		addOpNone(position);
	}

}


// temp disable for buttons (to prevent fast clicking)

var tempDisable = () => {

    ARROWLEFT.disabled = true;
	ARROWRIGHT.disabled = true;

	for(let button of PAGES) {
		
		button.disabled = true;	

		setTimeout(function () {
			button.disabled = false;	
		}, 2000);
		
	}

}


// temp disappear for elements (looks cool)

var tempDisappear = (elementToDisappear) => {

	if (currentPage >= 1 && currentPage < totalPages) {

			addOpNone(elementToDisappear);
			removeOpNone(elementToDisappear);

	} 

}


})


/* Loader
------------------------
*/  


function showLoader() {

	setTimeout(function () {
       showPage();
    }, 3800);

}

const AANLOADER = document.getElementById("jsLoader");
const ANCONTENT = document.getElementById("jsCover");

function showPage() {

	AANLOADER.classList.add("d-none");
	ANCONTENT.classList.remove("d-none");

	setTimeout(function () {
        jsCover.classList.remove("op-none");
		jsCover.style.opacity = 0;
		jsCover.style.transition = "opacity 1s";
		jsCover.style.opacity = 1;
    }, 500);
  
}

const ANTXTFST = document.getElementById("jsAnTxtFst");
const ANTXTSCN = document.getElementById("jsAnTxtScn");


setTimeout(function () {
	ANTXTFST.innerHTML = "Patience.";
	ANTXTSCN.classList.remove("d-none");

}, 1000);


