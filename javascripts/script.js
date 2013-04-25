/*
	addOnLoad function
*/
function addOnload(newFunction) {
	var oldOnload = window.onload;
	
	if (typeof oldOnload == "function") {
		window.onload = function() {
			if (oldOnload) {
			oldOnload();
			}
			newFunction();
		}
	} else {
		window.onload = newFunction;
	}
}
/*
	1. detect windows size. (cross over different browser)
	2. set the css style for relative windows size.
	3. load on when windows is loaded.
	4. load on again when windows size adjusted.
*/
function adjustStyle() {
    var width = 0;
    // get the width.. cross-browser issues
    if (window.innerHeight) {
        width = window.innerWidth;
    } else if (document.documentElement && document.documentElement.clientHeight) {
        width = document.documentElement.clientWidth;
    } else if (document.body) {
        width = document.body.clientWidth;
    }
    // 3 size screen for different devices:
	// <480 = mobile
	// 481-640 = tablet
	// >640 =destop
    if (width <= 480) {
        document.getElementById("myCSS").setAttribute("href", "stylesheets/mobile.css");
    } else if (width>480 && width<=800) {
        document.getElementById("myCSS").setAttribute("href", "stylesheets/tablet.css");
    } else if (width>800){
        document.getElementById("myCSS").setAttribute("href", "stylesheets/desktop.css");
    }
}
// now call it when the window is resized.
window.onresize = function () {
    adjustStyle();	
};	
// call the resize when windows is loaded. 
addOnload(adjustStyle); 
/*
	1. Set a interface for all the submit button.
	2. load the interface when the windows is loaded.
*/
function setSubmitBtn() {
	document.getElementById("submitBtnAdd").onsubmit = submitBtdAdd;
	document.getElementById("submitBtnSortByName").onsubmit = submitBtdSortByName;
	document.getElementById("submitBtnSortByVlaue").onsubmit = submitBtdSortByValue;
	document.getElementById("submitBtnDelete").onsubmit = submitBtdDelete;
	document.getElementById("submitBtnShowXML").onsubmit = submitBtdShowXML;	
}

/*
	flowing image 
	1. display three image once a time
	2. set all image string to a array.
	3. display image follow the array index order.
	4. each 2.5's flash the three image. 
	5. image will move on to left.
*/

var myImage1 = document.getElementById("div1Image1");
var myImage2 = document.getElementById("div1Image2");
var myImage3 = document.getElementById("div1Image3");

var imageArray = ["images/lemon.jpg","images/orange.jpg","images/papaya.jpg",
				  "images/pear.png","images/pineapple.jpg","images/pitaya.jpg",
				  "images/redapple.jpg","images/strawberry.png","images/tomato.jpg",
				  "images/watermelon.jpg"];
var imageIndex1 = 0;
var imageIndex2 = 1;
var imageIndex3 = 2;

function changeImage() {
	myImage1.setAttribute("src",imageArray[imageIndex1]);
	imageIndex1++;
	if (imageIndex1 >= imageArray.length) {
		imageIndex1 = 0;
	}
	myImage2.setAttribute("src",imageArray[imageIndex2]);
	imageIndex2++;
	if (imageIndex2 >= imageArray.length) {
		imageIndex2 = 0;
	}
	myImage3.setAttribute("src",imageArray[imageIndex3]);
	imageIndex3++;
	if (imageIndex3 >= imageArray.length) {
		imageIndex3 = 0;
	}
}
// setInterval is in milliseconds
var intervalHandle = setInterval(changeImage,2500);

myImage.onclick =  function() {
	clearInterval(intervalHandle);
};
/*
* submitBtdAdd function is a method one of interface submitBtd.
* 1. get value from name/value pair text field
* 2. split the pair value by "="
* 3. check name and value are valid (no empty, only alpha-numeric characters.)
* 4. add name to list of the end.
*/
// get contents of Name/Values text box
function getNameValues() {
    // get contents of the "minutes" text box
    var nameValuePair = document.getElementById("nameValue").value;
	// split name value
	var name_str=split(nameValuePair,"=");
    // check if name_str valid
    if (name_str.length>2) {
        alert("Please enter one Name=Value pair only!");
        return;
    }
	if (name_str[0].length==0) {
		alert("Name can't be empty");
		return;
	}
	if (name_str[1].length==0) {
		alert ("Value can't be empty");
		return;
	}
}
function setSubmitBtnAdd() {
	var submitBtnAdd = document.getElementById("submitBtnAdd");
	submitBtdAdd.onclick=function(){
	getNameValues();
	}
}