const searchIcon = document.getElementById("searchIcon");
const searchInput = document.getElementById("searchInput");
const searchIconChange = document.getElementById("searchIconChange1;")
searchIcon.addEventListener("click", function () {
    if (searchInput.className === 'searchInput') {
        searchInput.className += ' searchResponse'
    } else {
        searchInput.className = 'searchInput'
    }
});

//! Search Input 
const addMenu = document.getElementById("addMenu");
const searchValue = [
    {
        link: "./HTML-Home-01.html",
        pageName: "HTML Basic",
    },
    {
        link: "./html-introduction-02.html",
        pageName: "HTML introduction",
    },
    {
        link: "./html-Editor-03.html",
        pageName: "HTML Editor"
    },
    {
        link: "./CSS-Basic-01.html",
        pageName: "Basic of CSS"
    },
    {
        link: "./JavaScript-Basic-01.html",
        pageName: "Basic of JavaScript"
    },
    {
        link: "./AdvanceMethod.html",
        pageName: "Advance Method's"
    }
];
searchValue.map(function (x) {
    addMenu.innerHTML += `
        <li class="searchList"><a href="${x.link}" class="item">${x.pageName}</a></li>
    `
});

function searchFunction() {
    let input, filter, ul, li, a, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementsByClassName("searchMenu");
    li = document.getElementsByClassName("searchList");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByClassName("item")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
};