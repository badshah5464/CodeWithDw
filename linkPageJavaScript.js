//? JavaScript
let PageLinkJavaScript = document.getElementById("pageLinkJavaScript");
const lengDetailJavaScript = [
    {
        link: "./JavaScript-Basic-01.html",
        pageName: "Basic of JavaScript"
    },
];

lengDetailJavaScript.map(function (x) {
    PageLinkJavaScript.innerHTML += `
        <li><a href="${x.link}">${x.pageName}</a></li>
    `;
})
