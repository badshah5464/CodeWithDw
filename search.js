//! Search Input 
const addMenu = document.getElementById("addMenu"),
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
    pageName: "All Method's"
  }, {
    link: "./React-App-Install-01.html",
    pageName: "React App Install"
  }, {
    link: "./react-app-structure-02.html",
    pageName: "React App Structure"
  },
  {
    link: "./react-app-about-AppJs-03.html",
    pageName: "About App.js & app start command."
  },
  {
    link: "./react-app-about-AppJs-03.html",
    pageName: "React App start command"
  },
  {
    link: "./react-component-04.html",
    pageName: "Component's & Import Export Method"
  },
  {
    link: "./react-BrowserRouter-05.html",
    pageName: "BrowserRouter Dom"
  }
  ];

const searchIcon = document.getElementById("searchIcon"),
  searchInput = document.getElementById("searchInput"),
  searchIconChange = document.getElementById("searchIconChange1;");

function searchFunction() {
  let e, s, a, n, t, c;
  for (e = document.getElementById("search"), s = e.value.toUpperCase(), a = document.getElementsByClassName("searchMenu"), n = document.getElementsByClassName("searchList"), c = 0; c < n.length; c++) t = n[c].getElementsByClassName("item")[0], t.innerHTML.toUpperCase().indexOf(s) > -1 ? n[c].style.display = "" : n[c].style.display = "none"
}
searchIcon.addEventListener("click", (() => {
  "searchInput" === searchInput.className ? searchInput.className += " searchResponse" : searchInput.className = "searchInput"
})), searchValue.map((function (e) {
  addMenu.innerHTML += `<li class="searchList"><a href="${e.link}" class="item">${e.pageName}</a></li>`
}));