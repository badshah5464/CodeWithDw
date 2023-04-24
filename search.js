//! Search Input
const addMenu = document.getElementById("addMenu"),
  searchValue = [
    //! HTML
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
      pageName: "HTML Editor",
    },
    //! CSS
    {
      link: "./CSS-Basic-01.html",
      pageName: "CSS Tutorial",
    },
    //! JavaScript
    {
      link: "./JavaScript-Basic-01.html",
      pageName: "Basic of JavaScript",
    },
    //! Advance Method
    {
      link: "./AdvanceMethod-01.html",
      pageName: "Advance Method Home",
    },
    {
      link: "./AdvanceMethod-scroll-navigation-animation-02.html",
      pageName: "Navigation Scroll Animation",
    },
    {
      link: "./AdvanceMethod-scroll-navigation-animation-02.html",
      pageName: "Navigation Scroll Animation in ReactJs",
    },
    {
      link: "./AdvanceMethod-AnchorTag-Animation-03.html",
      pageName: 'Anchor Tag Animation <br> ( &lt;a href=""&gt;&lt;/a&gt; )',
    },
    {
      link: "./AdvanceMethod-AnchorTag-Animation-03.html",
      pageName: "a tag animation",
    },
    {
      link: "./AdvanceMethod-AnchorTag-Animation-03.html",
      pageName: "a tag bottom line animation",
    },
    {
      link: "./AdvanceMethod-AnchorTag-Animation-03.html",
      pageName: "Anchor Tag Underline Animation",
    },
    {
      link: "./AdvanceMethod-AnchorTag-Animation-03.html",
      pageName: "a Tag Underline Animation",
    },
    {
      link: "./AdvanceMethod-DropDown-04.html",
      pageName: "DropDown With Js",
    },
    //! React
    {
      link: "./React-App-Install-01.html",
      pageName: "React App Install",
    },
    {
      link: "./react-app-structure-02.html",
      pageName: "React App Structure",
    },
    {
      link: "./react-app-about-AppJs-03.html",
      pageName: "About App.js & app start command.",
    },
    {
      link: "./react-app-about-AppJs-03.html",
      pageName: "React App start command",
    },
    {
      link: "./react-component-04.html",
      pageName: "Component's & Import Export Method",
    },
    {
      link: "./react-component-04.html",
      pageName: "Import Component file",
    },
    {
      link: "./react-component-04.html",
      pageName: "Import CSS file",
    },
    {
      link: "./react-component-04.html",
      pageName: "Import Image",
    },
    {
      link: "./react-BrowserRouter-05.html",
      pageName: "BrowserRouter Method",
    },
    {
      link: "./react-propsMethod-06.html",
      pageName: "Props Method",
    },
    {
      link: "./React-useRef-Method-07.html",
      pageName: "useRef() Method",
    },
    {
      link: "./React-useRef-Method-07.html",
      pageName: "Change value only one click",
    },
    {
      link: "./React-useState-Method-08.html",
      pageName: "useState() Method",
    },
    {
      link: "./React-useState-Method-08.html",
      pageName: "toggle theme change react",
    },
  ];

const searchIcon = document.getElementById("searchIcon"),
  searchInput = document.getElementById("searchInput"),
  searchIconChange = document.getElementById("searchIconChange1;");

function searchFunction() {
  let e, s, a, n, t, c;
  for (
    e = document.getElementById("search"),
      s = e.value.toUpperCase(),
      a = document.getElementsByClassName("searchMenu"),
      n = document.getElementsByClassName("searchList"),
      c = 0;
    c < n.length;
    c++
  )
    (t = n[c].getElementsByClassName("item")[0]),
      t.innerHTML.toUpperCase().indexOf(s) > -1
        ? (n[c].style.display = "")
        : (n[c].style.display = "none");
}
searchIcon.addEventListener("click", () => {
  "searchInput" === searchInput.className
    ? (searchInput.className += " searchResponse")
    : (searchInput.className = "searchInput");
}),
  searchValue.map(function (e) {
    addMenu.innerHTML += `<li class="searchList"><a href="${e.link}" class="item">${e.pageName}</a></li>`;
  });
