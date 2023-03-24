//! header response navBar
let navigationIcon = document.getElementById("navigationIcon");
let navigationDetail = document.getElementById("navigationDetail");
navigationIcon.addEventListener("click", function () {
    if (navigationDetail.className === "navigation-detail") {
        navigationDetail.className += " navigation-response";
    } else {
        navigationDetail.className = "navigation-detail";
    }
})