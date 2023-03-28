// ! Array Object
// ? HTML
const menuHtml = [
    {
        link: './HTML-Home-01.html',
        pageName: 'Basic HTML',
    },
    {
        link: './html-introduction-02.html',
        pageName: 'HTML introduction',
    },
    {
        link: "./html-Editor-03.html",
        pageName: "HTML Editor"
    }
];
// ? CSS
const menuCSS = [
    {
        link: "./CSS-Basic-01.html",
        pageName: "CSS Tutorial"
    },
];
// ? JavaScript
const menuJavaScript = [
    {
        link: "./JavaScript-Basic-01.html",
        pageName: "Basic of JavaScript"
    },
];
// ? React
const menuReact = [
    {
        link: "./React-Introduction-01.html",
        pageName: "React Introduction"
    },
];

// ! Get id
let Menu_itemHtml = document.getElementById("lengCodeDetailHTML");
let Menu_itemCSS = document.getElementById("lengCodeDetailCSS");
let Menu_itemJavaScript = document.getElementById("lengCodeDetailJavaScript");
let Menu_itemReact = document.getElementById("lengCodeDetailReact");
menuHtml.map(function (x) {
    Menu_itemHtml.innerHTML += `<li><a href="${x.link}">${x.pageName}</a></li>`;
});
menuCSS.map(function (x) {
    Menu_itemCSS.innerHTML += `<li><a href="${x.link}">${x.pageName}</a></li>`;
});
menuJavaScript.map(function (x) {
    Menu_itemJavaScript.innerHTML += `<li><a href="${x.link}">${x.pageName}</a></li>`;
});
menuReact.map(function (x) {
    Menu_itemReact.innerHTML += `<li><a href="${x.link}">${x.pageName}</a></li>`;
});