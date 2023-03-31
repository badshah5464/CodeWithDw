"use strict";

var searchIcon = document.getElementById("searchIcon"),
    searchInput = document.getElementById("searchInput"),
    searchIconChange = document.getElementById("searchIconChange1;");
searchIcon.addEventListener("click", function () {
  "searchInput" === searchInput.className ? searchInput.className += " searchResponse" : searchInput.className = "searchInput";
}); //! Search Input 

var addMenu = document.getElementById("addMenu"),
    searchValue = [{
  link: "./HTML-Home-01.html",
  pageName: "HTML Basic"
}, {
  link: "./html-introduction-02.html",
  pageName: "HTML introduction"
}, {
  link: "./html-Editor-03.html",
  pageName: "HTML Editor"
}, {
  link: "./CSS-Basic-01.html",
  pageName: "CSS Tutorial"
}, {
  link: "./JavaScript-Basic-01.html",
  pageName: "Basic of JavaScript"
}, {
  link: "./AdvanceMethod.html",
  pageName: "Advance Method's"
}, {
  link: "./React-Introduction-01.html",
  pageName: "ReactJs Introduction"
}];

function searchFunction() {
  var e, a, n, t, c, s;

  for (e = document.getElementById("search"), a = e.value.toUpperCase(), n = document.getElementsByClassName("searchMenu"), t = document.getElementsByClassName("searchList"), s = 0; s < t.length; s++) {
    c = t[s].getElementsByClassName("item")[0], c.innerHTML.toUpperCase().indexOf(a) > -1 ? t[s].style.display = "" : t[s].style.display = "none";
  }
}

searchValue.map(function (e) {
  addMenu.innerHTML += "\n        <li class=\"searchList\"><a href=\"".concat(e.link, "\" class=\"item\">").concat(e.pageName, "</a></li>\n    ");
});