//! Navigation Bar Icon 
function change(x) {
    x.classList.toggle("change");
}

//! img-change
let slideIndex = 0;
showSlides();
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000);
}

//! Change Theme 
let changeThemeIndex = document.getElementById("changeThemeIndex");
let changeModeIconIndex = document.getElementById("changeModeIconIndex");
let modeTitleIndex = document.getElementById("modeTitleIndex");

changeThemeIndex.onclick = function () {
    document.body.classList.toggle("darkMode");
    document.body.classList.toggle("themeIconChange");
    if (document.body.classList.contains("darkMode")) {
        changeModeIconIndex.src = "./SunColor.png";
        modeTitleIndex.innerHTML = "Light Mode";
    } else {
        changeModeIconIndex.src = "./MoonColor.png";
        modeTitleIndex.innerHTML = "Dark Mode";
    }
};