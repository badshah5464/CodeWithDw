//! linkPage header lengTopicNavBtn
let lengTopicNavBtn = document.getElementById("lengTopicNavBtn")
let linkPageAside = document.getElementById("linkPageAside")
lengTopicNavBtn.addEventListener("click", function () {
    if (linkPageAside.className === "linkPageAside") {
        linkPageAside.className += " linkPageAside-response";
    } else {
        linkPageAside.className = "linkPageAside"
    }
});

//! Output Btn 
function showOutput(evt, topicName) {
    let i, outputBtn, result;
    outputBtn = document.getElementsByClassName("outputBtn");
    for (i = 0; i < outputBtn.length; i++) {
        outputBtn[i].className = outputBtn[i].className.replace(
            " active",
            ""
        );
    }
    document.getElementById(topicName).style.display = "block";
    evt.currentTarget.className += " active";
}

//! Change Theme 
let changeTheme = document.getElementById("changeTheme");
let changeIcon = document.getElementById("changeIcon");
let modeTitle = document.getElementById("modeTitle");
changeTheme.onclick = function () {
    document.body.classList.toggle("darkMode");
    if (document.body.classList.contains("darkMode")) {
        changeIcon.src = "./SunColor.png";
        modeTitle.innerHTML = "Light Mode";
    } else {
        changeIcon.src = "./MoonColor.png";
        modeTitle.innerHTML = "Dark Mode";
    }
};