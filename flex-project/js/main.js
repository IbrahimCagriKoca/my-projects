let icons = document.getElementsByClassName("fas");
let changedItem = "";

for(let i = 0; i < icons.length; i++) {
	icons[i].addEventListener("click", function(e){
   		let currentIcon = e.currentTarget;

   		if(currentIcon.attributes.name.value === "left-closer") {
   			leftCloser(e);
   		} else if(currentIcon.attributes.name.value === "right-closer") {
   			rightCloser(e);
   		} else if(currentIcon.attributes.name.value === "bottom-closer") {
   			bottomCloser(e);
   		} else if(currentIcon.attributes.name.value === "left-hide") {
			leftHide(e);
		} else if(currentIcon.attributes.name.value === "right-hide") {
			rightHide(e);
		} else if(currentIcon.attributes.name.value === "bottom-hide") {
			bottomHide(e);
		}  else if(currentIcon.attributes.name.value === "left-expand") {
			leftExpand(e);
		} else if(currentIcon.attributes.name.value === "right-expand") {
			rightExpand(e);
		} else if(currentIcon.attributes.name.value === "bottom-expand") {
			bottomExpand(e);
		} else if(currentIcon.attributes.name.value === "undo-button") {
			undo(e);
		}
	})
}

leftCloser = (clickEvent) => {
	let leftPanel = document.getElementsByClassName("left")[0];

	leftPanel.style.display = "none";
	changedItem = "left";
}

rightCloser = (clickEvent) => {
	let rightPanel = document.getElementsByClassName("right")[0];

	rightPanel.style.display = "none";
	changedItem = "right";
}

bottomCloser = (clickEvent) => {
	let midPanel = document.getElementsByClassName("mid-bottom")[0];

	midPanel.style.display = "none";
	changedItem = "bottom";
}

leftHide = (clickEvent) => {
	let leftPanel = document.getElementsByClassName("left");
	let expandButton = document.getElementById("left-expand");
	let closeButton = document.getElementById("left-closer");

	if(expandButton.style.display === "none") {
		leftPanel[0].style.flexGrow = "20";
		expandButton.style.display = "inline-block";
		closeButton.style.display = "inline-block";
		changedItem = "left-hide";
	} else {
		leftPanel[0].style.flexGrow = "1";
		expandButton.style.display = "none";
		closeButton.style.display = "none";
		changedItem = "left";
	}
}

rightHide = (clickEvent) => {
	let rightPanel = document.getElementsByClassName("right");
	let expandButton = document.getElementById("right-expand");
	let closeButton = document.getElementById("right-closer");
	
	if(expandButton.style.display === "none") {
		rightPanel[0].style.flexGrow = "20";
		expandButton.style.display = "inline-block";
		closeButton.style.display = "inline-block";
		changedItem = "right-hide";
	} else {
		rightPanel[0].style.flexGrow = "1";
		expandButton.style.display = "none";
		closeButton.style.display = "none";
		changedItem = "right";
	}
}

bottomHide = (clickEvent) => {
	let bottomPanel = document.getElementsByClassName("mid-bottom");
	let expandButton = document.getElementById("bottom-expand");
	let closeButton = document.getElementById("bottom-closer");

	if(expandButton.style.display === "none") {
		bottomPanel[0].style.flex = "12";
		expandButton.style.display = "inline-block";
		closeButton.style.display = "inline-block";
		changedItem = "bottom-hide";
	} else {
		bottomPanel[0].style.flex = "1";
		expandButton.style.display = "none";
		closeButton.style.display = "none";
		changedItem = "bottom";
	}
}

leftExpand = (clickEvent) => { 
	let rightPanel = document.getElementsByClassName("right");
	let midPanel = document.getElementsByClassName("mid");
	let expandButton = document.getElementById("left-expand");

	if (midPanel[0].style.display === "none") {
		midPanel[0].style.display = "flex";
		rightPanel[0].style.display = "flex";
		expandButton.classList.remove("fa-caret-left");
		expandButton.classList.add("fa-caret-right");
		changedItem = "left-expand";
	} else {
		midPanel[0].style.display = "none";
		rightPanel[0].style.display = "none";
		expandButton.classList.remove("fa-caret-right");
		expandButton.classList.add("fa-caret-left");
		changedItem = "left";
	}
}

rightExpand = (clickEvent) => { 
	let leftPanel = document.getElementsByClassName("left");
	let midPanel = document.getElementsByClassName("mid");
	let expandButton = document.getElementById("right-expand");

	if (midPanel[0].style.display === "none") {
		midPanel[0].style.display = "flex";
		leftPanel[0].style.display = "flex";
		expandButton.classList.remove("fa-caret-right");
		expandButton.classList.add("fa-caret-left");
		changedItem = "right-expand";
	} else {
		midPanel[0].style.display = "none";
		leftPanel[0].style.display = "none";
		expandButton.classList.remove("fa-caret-left");
		expandButton.classList.add("fa-caret-right");
		changedItem = "right";

	}
}

bottomExpand = (clickEvent) => {
	let midTopPanel = document.getElementsByClassName("mid-top");
	let expandButton = document.getElementById("bottom-expand");

	if(midTopPanel[0].style.display === "none") {
		midTopPanel[0].style.display = "flex";
		expandButton.classList.remove("fa-caret-down");
		expandButton.classList.add("fa-caret-up");
		changedItem = "bottom-expand";
	} else {
		midTopPanel[0].style.display = "none";
		expandButton.classList.remove("fa-caret-up");
		expandButton.classList.add("fa-caret-down");
		changedItem = "bottom";
	}
}

undo = (clickEvent) => {
	let leftPanel = document.getElementsByClassName("left");
	let bottomPanel = document.getElementsByClassName("mid-bottom");
	let rightPanel = document.getElementsByClassName("right");
	let leftExpandButton = document.getElementById("left-expand");
	let leftCloseButton = document.getElementById("left-closer");
	let rightExpandButton = document.getElementById("right-expand");
	let rightCloseButton = document.getElementById("right-closer");
	let bottomExpandButton = document.getElementById("bottom-expand");
	let bottomCloseButton = document.getElementById("bottom-closer");
	switch(changedItem) {
		case "left":
			leftPanel[0].style.flexGrow = "20";
			leftPanel[0].style.display = "flex";
			leftExpandButton.style.display = "inline-block";
			leftCloseButton.style.display = "inline-block";
			break;
		case "right":
			rightPanel[0].style.flexGrow = "20";
			rightPanel[0].style.display = "flex";
			rightExpandButton.style.display = "inline-block";
			rightCloseButton.style.display = "inline-block";
			break;
		case "bottom":
			bottomPanel[0].style.flex = "12";
			bottomPanel[0].style.display = "flex";
			bottomExpandButton.style.display = "inline-block";
			bottomCloseButton.style.display = "inline-block";
			break;
		case "right-hide":
			rightPanel[0].style.flexGrow = "1";
			rightExpandButton.style.display = "none";
			rightCloseButton.style.display = "none";
			break;
		case "left-hide":
			leftPanel[0].style.flexGrow = "1";
			leftExpandButton.style.display = "none";
			leftCloseButton.style.display = "none";
			break;
		case "bottom-hide":
			bottomPanel[0].style.flex = "1";
			bottomExpandButton.style.display = "none";
			bottomCloseButton.style.display = "none";
			break;	
	}
}

// Javascript 
// Gizle/Goster: Gizle/Goster fonksiyonlari paneli son bulundugu halde geri getirmeli.
// Yapilan her islemden sonra mid-top div'inde bir geri al yazisi ciksin, tiklandiginda yapilan son islemi geri alsin.

// Css
// X(kapatma) butonlari sag panel icin sagda, sol panel icin solda olmali