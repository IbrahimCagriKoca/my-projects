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
    let newArrow = document.createElement("BUTTON");
    let leftSpan = document.getElementById("left-span");
    let rightArrow = document.getElementById("left-arrow");
    let leftArrow = document.getElementById("left-arrow");
    leftSpan.appendChild(newArrow);
    newArrow.classList.add("fas");
    newArrow.classList.add("fa-caret-left");
    newArrow.style.display = "none";
    newArrow.onclick = () => {
        if (leftDiv.style.width === "67%") {
            middleDiv.style.display = "block";
            leftDiv.style.width = "33%";
            newArrow.style.display = "none";
        } else {
            rightDiv.style.display = "block";
            leftDiv.style.width = "67%";
            if (newArrow.style.display === "none") {
                newArrow.style.display = "inline-block";
            }
            rightDiv.style.width = "33%";
        }
    };
    if (leftDiv.style.width === "67%") {
        rightDiv.style.display = "none";
        leftDiv.style.width = "100%";
        rightArrow.style.display = "none";

    } else if (rightDiv.style.width === "67%") {
        rightDiv.style.display = "none";
        leftDiv.style.width = "100%";
        leftArrow.style.display = "none";
        leftSpan.insertBefore(newArrow, leftSpan.childNodes[0]);
        newArrow.classList.add("fas");
        newArrow.classList.add("fa-caret-left");
        if (newArrow.style.display === "none") {
            newArrow.style.display = "inline-block";
        }
    } else {
        middleDiv.style.display = "none";
        leftDiv.style.width = "67%";
        leftSpan.insertBefore(newArrow, leftSpan.childNodes[0]);
        newArrow.classList.add("fas");
        newArrow.classList.add("fa-caret-left");
        if (newArrow.style.display === "none") {
            newArrow.style.display = "inline-block";
        }
    }
}

function expandRight() {
    let middleDiv = document.getElementById("mid-div");
    let rightDiv = document.getElementById("right-div");
    let leftDiv = document.getElementById("left-div");
    let newArrow = document.createElement("BUTTON");
    let rightSpan = document.getElementById("right-span");
    let leftArrow = document.getElementById("left-arrow");
    let rightArrow = document.getElementById("right-arrow");
    // rightSpan.appendChild(newArrow);
    newArrow.onclick = () => {
        if (rightDiv.style.width === "67%") {
            rightDiv.style.width = "33%";
            middleDiv.style.display = "block";
            newArrow.style.display = "none";
        } else if (rightDiv.style.width === "100%") {
            rightDiv.style.width = "67%";
            leftDiv.style.width = "33%";
            leftDiv.style.display = "block";
            rightArrow.style.display = "inline-block";
        }
    };
    if (rightDiv.style.width === "67%") {
        leftDiv.style.display = "none";
        rightDiv.style.width = "100%";
        rightArrow.style.display = "none";
        if (newArrow.style.display === "none") {
            newArrow.style.display = "inline-block";
        }
    } else if (leftDiv.style.width === "67%") {
        leftDiv.style.display = "none";
        rightDiv.style.width = "100%";
        rightArrow.style.display = "none";
        rightSpan.insertBefore(newArrow, rightSpan.childNodes[6]);
        newArrow.classList.add("fas");
        newArrow.classList.add("fa-caret-right");
        newArrow.style.display = "inline-block";
    } else {
        middleDiv.style.display = "none";
        rightDiv.style.width = "67%";
        rightSpan.insertBefore(newArrow, rightSpan.childNodes[6]);
        newArrow.classList.add("fas");
        newArrow.classList.add("fa-caret-right");
        newArrow.style.display = "inline-block";
    }
}

function expandBottom() {
    let bottomDiv = document.getElementById("bottom-div");
    let midText = document.getElementById("mid-span");
    let bottomArrow = document.getElementById("bottom-arrow");
    if (bottomDiv.style.height === "100%") {
        bottomDiv.style.height = "33%";
        midText.innerText = "Mid";
        midText.style.display = "block";
        midText.style.display = "flex";
        midText.style.alignItems = "center";
        midText.style.justifyContent = "center";
        bottomArrow.classList.remove("fas");
        bottomArrow.classList.remove("fa-sort-down");
        bottomArrow.classList.add("fas");
        bottomArrow.classList.add("fa-sort-up");
    } else {
        bottomDiv.style.height = "100%";
        midText.style.display = "none";
        midText.innerText = "";
        bottomArrow.classList.remove("fas");
        bottomArrow.classList.remove("fa-sort-up");
        bottomArrow.classList.add("fa-sort-down");
        bottomArrow.classList.add("fas");
    }
}

function moveLeft() {
    let leftArrow = document.getElementById("left-arrow");
    let leftText = document.getElementById("left-text");
    let leftClose = document.getElementById("left-close");
    let leftSquare = document.getElementById("left-square");
    let middleDiv = document.getElementById("mid-div");
    let leftDiv = document.getElementById("left-div");
    let rightDiv = document.getElementById("right-div");
    if (middleDiv.style.width === "33%" && leftArrow.style.display === "none") {
        leftText.innerText = "Left";
        leftArrow.style.display = "inline-block";
        leftClose.style.display = "inline-block";
        leftSquare.style.display = "inline-block";
        leftDiv.style.width = "33%";
        middleDiv.style.width = "33%";
    } else if (middleDiv.style.width === "64%" && leftArrow.style.display === "none") {
        leftText.innerText = "Left";
        leftArrow.style.display = "inline-block";
        leftClose.style.display = "inline-block";
        leftSquare.style.display = "inline-block";
        leftDiv.style.width = "33%";
        middleDiv.style.width = "33%";
    } else if (middleDiv.style.width === "64%" && rightDiv.style.width === "1.5%") {
        leftText.innerText = "";
        leftArrow.style.display = "none";
        leftClose.style.display = "none";
        leftSquare.style.display = "none";
        leftDiv.style.width = "1.5%";
        middleDiv.style.width = "97%";
    } else if (middleDiv.style.width === "97%" && leftArrow.style.display === "none") {
        leftText.innerText = "Left";
        leftArrow.style.display = "inline-block";
        leftClose.style.display = "inline-block";
        leftSquare.style.display = "inline-block";
        leftDiv.style.width = "33%";
        middleDiv.style.width = "64%";
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
    let leftDiv = document.getElementById("left-div");
    if (middleDiv.style.width === "33%" && rightArrow.style.display === "none") {
        rightText.innerText = "Left";
        rightArrow.style.display = "inline-block";
        rightClose.style.display = "inline-block";
        rightSquare.style.display = "inline-block";
        rightDiv.style.width = "33%";
        middleDiv.style.width = "33%";
    } else if (middleDiv.style.width === "64%" && rightArrow.style.display === "none") {
        rightText.innerText = "Left";
        rightArrow.style.display = "inline-block";
        rightClose.style.display = "inline-block";
        rightSquare.style.display = "inline-block";
        rightDiv.style.width = "33%";
        middleDiv.style.width = "64%";
    } else if (middleDiv.style.width === "64%" && leftDiv.style.width === "1.5%") {
        rightText.innerText = "";
        rightArrow.style.display = "none";
        rightClose.style.display = "none";
        rightSquare.style.display = "none";
        rightDiv.style.width = "1.5%";
        middleDiv.style.width = "97%";
    } else if (middleDiv.style.width === "97%" && rightArrow.style.display === "none") {
        rightText.innerText = "Left";
        rightArrow.style.display = "inline-block";
        rightClose.style.display = "inline-block";
        rightSquare.style.display = "inline-block";
        rightDiv.style.width = "33%";
        middleDiv.style.width = "64%";
    } else {
        rightText.innerText = "";
        rightArrow.style.display = "none";
        rightClose.style.display = "none";
        rightSquare.style.display = "none";
        rightDiv.style.width = "1.5%";
        middleDiv.style.width = "64%";
    }
}