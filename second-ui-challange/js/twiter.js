var followButton1 = document.getElementById(follow_button1);
var followButton2 = document.getElementById(follow_button2);
var followButton3 = document.getElementById(follow_button3);

followButton1.onclick = followOnclick(followButton1);
followButton2.onclick = followOnclick(followButton2);
followButton3.onclick = followOnclick(followButton3);

function followOnclick(followButton) {
    if (followButton.innerHTML == "Follow") {
        followButton.style.color = "white";
        followButton.style.backgroundColor = "#1da1f2"
        followButton.innerHTMl = "Followed"
    }
    else if (followButton.innerHTML == "Followed") {
        followButton.style.color = "white";
        followButton.style.backgroundColor = "#1da1f2"
        followButton.innerHTMl = "Follow";
    }
}


