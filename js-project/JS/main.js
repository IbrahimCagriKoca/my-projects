function leftClose() {
    let middleDiv = document.getElementById("mid-div");
    let leftDiv = document.getElementById("left-div");
    if (middleDiv.style.width === "67%") {
        leftDiv.remove();
        middleDiv.style.width = "100%";
        middleDiv.style.borderWidth = "2px";
    } else {
        leftDiv.remove();
        middleDiv.style.width = "67%";
    }

}

function rightClose() {
    let middleDiv = document.getElementById("mid-div");
    let rightDiv = document.getElementById("right-div");
    if (middleDiv.style.width === "67%") {
        rightDiv.remove();
        middleDiv.style.width = "100%";
        middleDiv.style.borderWidth = "2px";
    } else {
        rightDiv.remove();
        middleDiv.style.width = "67%";
    }
}

function bottomClose() {
    document.getElementById("bottom-div").remove();
    document.getElementById("mid-span").style.height = "100%";
}

function expandLeft() {
    let middleDiv = document.getElementById("mid-div");
    let rightDiv = document.getElementById("right-div");
    let leftDiv = document.getElementById("left-div");
    if (middleDiv.style.display === "none") {
        rightDiv.style.display = "none";
        leftDiv.style.width = "100%";

    } else {
        middleDiv.style.display = "none";
        leftDiv.style.width = "67%";
    }
}

function expandRight() {
    let middleDiv = document.getElementById("mid-div");
    let rightDiv = document.getElementById("right-div");
    let leftDiv = document.getElementById("left-div");
    if (middleDiv.style.display === "none") {
        leftDiv.style.display = "none";
        rightDiv.style.width = "100%";

    } else {
        middleDiv.style.display = "none";
        rightDiv.style.width = "67%";
    }
}

function expandBottom() {
    document.getElementById("bottom-div").style.height = "100%";
    document.getElementById("mid-span").style.display = "none";
}

function moveLeft() {
    let leftArrow = document.getElementById("left-arrow");
    let leftText = document.getElementById("left-text");
    let leftClose = document.getElementById("left-close");
    let leftSquare = document.getElementById("left-square");
    let middleDiv = document.getElementById("mid-div");
    let leftDiv = document.getElementById("left-div");    
    if (leftArrow.style.display === "none") {
        leftText.innerText = "Left";
        leftArrow.style.display = "inline-block";
        leftClose.style.display = "inline-block";
        leftSquare.style.display = "inline-block";
        leftDiv.style.width = "33%";
        middleDiv.style.width = "33%";
    } else {
        leftText.innerText = "";
        leftArrow.style.display = "none";
        leftClose.style.display = "none";
        leftSquare.style.display = "none";
        leftDiv.style.width = "1.5%";
        middleDiv.style.width = "64%";
    }
}

function moveBottom() {
    let bottomArrow = document.getElementById("bottom-arrow");
    let bottomText = document.getElementById("bottom-text");
    let bottomClose = document.getElementById("bottom-close");
    let bottomSquare = document.getElementById("bottom-square");
    let middleSpan = document.getElementById("mid-span");
    let bottomDiv = document.getElementById("bottom-div");    
    if (bottomArrow.style.display === "none") {
        bottomText.innerText = "Bottom";
        bottomArrow.style.display = "inline-block";
        bottomClose.style.display = "inline-block";
        bottomSquare.style.display = "inline-block";
        bottomDiv.style.height = "33%";
        middleSpan.style.height = "66%";
    } else {
        bottomText.innerText = "";
        bottomArrow.style.display = "none";
        bottomClose.style.display = "none";
        bottomSquare.style.display = "none";
        bottomDiv.style.height = "3%";
        middleSpan.style.height = "96.4%";
    }
}

function moveRight() {
    let rightArrow = document.getElementById("right-arrow");
    let rightText = document.getElementById("right-text");
    let rightClose = document.getElementById("right-close");
    let rightSquare = document.getElementById("right-square");
    let middleDiv = document.getElementById("mid-div");
    let rightDiv = document.getElementById("right-div");    
    if (rightArrow.style.display === "none") {
        rightText.innerText = "Right";
        rightArrow.style.display = "inline-block";
        rightClose.style.display = "inline-block";
        rightSquare.style.display = "inline-block";
        rightDiv.style.width = "33%";
        middleDiv.style.width = "33%";
    } else {
        rightText.innerText = "";
        rightArrow.style.display = "none";
        rightClose.style.display = "none";
        rightSquare.style.display = "none";
        rightDiv.style.width = "1.5%";
        middleDiv.style.width = "64%";
    }    
}