//? CSS
let DropDownCSS = document.getElementById("lengCodeDetailCSS");
let PageLinkCSS = document.getElementById("pageLinkCSS");
const lengDetailCSS = [
    {
        link: "./CSS-Basic-01.html",
        pageName: "Basic of CSS"
    },
];

lengDetailCSS.map(function (x) {
    DropDownCSS.innerHTML += `
        <li><a href="${x.link}">${x.pageName}</a></li>
    `;
});

lengDetailCSS.map(function (x) {
    PageLinkCSS.innerHTML += `
        <li><a href="${x.link}">${x.pageName}</a></li>
    `;
})
