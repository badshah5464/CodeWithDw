//? CSS
let PageLinkCSS = document.getElementById("pageLinkCSS");
const lengDetailCSS = [
    {
        link: "./CSS-Basic-01.html",
        pageName: "CSS Tutorial"
    },
];

lengDetailCSS.map(function (x) {
    PageLinkCSS.innerHTML += `<li><a href="${x.link}">${x.pageName}</a></li>`;
})
