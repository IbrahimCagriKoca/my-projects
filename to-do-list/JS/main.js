// function setCookie(cname, cvalue, exdays) {
// //     var d = new Date();
// //     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
// //     var expires = "expires=" + d.toUTCString();
// //     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;SameSite=None;Secure";
// // }
// //
// // function getCookie(cname) {
// //     var name = cname + "=";
// //     var decodedCookie = decodeURIComponent(document.cookie);
// //     var ca = decodedCookie.split(';');
// //     for (var i = 0; i < ca.length; i++) {
// //         var c = ca[i];
// //         while (c.charAt(0) == ' ') {
// //             c = c.substring(1);
// //         }
// //         if (c.indexOf(name) == 0) {
// //             return c.substring(name.length, c.length);
// //         }
// //     }
// //     return "";
// // }


const addHideParentOnClick = (element) => {
    element.onclick = () => element.parentElement.remove();
}

const createCloseButton = () => {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    addHideParentOnClick(span);
    return span;
}

function createNewListElement(value) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(value));
    let closeButton = createCloseButton();
    li.appendChild(closeButton);
    return li;
}

// let cookie = getCookie('LeCookie');
// if (cookie !== '') {
//     console.log(cookie);
//     let previousList = cookie.split('|');
//     document.getElementById("list").innerHTML = null;
//     previousList.forEach(e => document.getElementById("list").appendChild(createNewListElement(e)));
// }

const addButton = document.getElementById("add");
let listItems = document.getElementsByTagName("LI");

for (let i = 0; i < listItems.length; i++) {
    let span = createCloseButton();
    listItems[i].appendChild(span);
}
let list = document.querySelector('ul');

list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
        if (document.getElementById("hide-completed").innerHTML === "Show Completed") {
            ev.target.style.display = "none";
        }
    }
}, false);

function newElement() {
    let toDoValue = document.getElementById("input").value;
    if (toDoValue === '') {
        alert("You must write something!");
        return;
    }
    document.getElementById("list").appendChild(createNewListElement(toDoValue));
    document.getElementById("input").value = "";
}

document.getElementById("input").addEventListener("keydown", (event) => {
    if (event.code === 'Enter') {
        addButton.click();
    }
});

/*
   function deleteCompleted() {
    let list =  document.getElementById("list").querySelectorAll(".checked");
    for (i = 0; i < list.length; i++) {
        list[i].remove();
    }
}

function selectAll() {
    let list = document.getElementById("list").getElementsByTagName("LI");
    for (i = 0; i < list.length; i++) {
        if (document.getElementById("select-all").innerHTML === "Deselect All") {
            list[i].className = "";
            document.getElementById("select-all").innerHTML = "Select All";
        } else {
            list[i].className = "checked";
            document.getElementById("select-all").innerHTML = "Deselect All";
        }
    }
}*/

function selectAll() {
    let selectAllButton = document.getElementById("select-all");
    if (selectAllButton.innerHTML === "Select All") {
        document.querySelectorAll("li:not(checked)").forEach(e => e.classList.add("checked"));
        selectAllButton.innerHTML = "Deselect All";
    } else {
        document.querySelectorAll("li.checked").forEach(e => e.classList.remove("checked"));
        selectAllButton.innerHTML = "Select All";
    }
}

function hideCompleted() {
    let hideCompletedToggleButton = document.getElementById("hide-completed");
    let isShow = hideCompletedToggleButton.innerHTML === "Show Completed";
    let list = document.querySelectorAll("li.checked");
    list.forEach(listElement => listElement.style.display = isShow ? "block" : "none");
    hideCompletedToggleButton.innerHTML = isShow ? "Hide Completed" : "Show Completed";
}

function clearAll() {
    document.getElementById("list").innerHTML = null;
}

function deleteCompleted() {
    document.querySelectorAll("li.checked").forEach(element => element.remove());
}

// function saveToCookie() {
//     let listElements = document.querySelectorAll("li");
//     console.log(listElements);
//     if (listElements.length > 0) {
//         let cookieText = Array.from(listElements).map(e => e.childNodes[0].nodeValue).join('|');
//         setCookie("LeCookie", cookieText, 31);
//         console.log(getCookie("LeCookie"));
//     } else {
//         setCookie("LeCookie", "", 0 );
//     }
// }