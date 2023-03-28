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

//! Navigation Button change toggle 
function change(x) {
    x.classList.toggle("change-linkPage");
  }

//! Language Page's Section
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}