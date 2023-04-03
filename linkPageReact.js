const reactPageLink = [{
  link: "./React-App-Install-01.html",
  pageName: "React App Install"
},
{
  link: "./react-app-structure-02.html",
  pageName: "React App Structure"
},
{
  link: "./react-app-about-AppJs-03.html",
  pageName: "About App.js & app start command."
},
{
  link: "./react-component-04.html",
  pageName: "Component's & Import Export Method"
}
];

let reactLink = document.getElementById("reactLink");
reactPageLink.map(function (x) {
  reactLink.innerHTML += `<li><a href="${x.link}">${x.pageName}</a></li>`
})