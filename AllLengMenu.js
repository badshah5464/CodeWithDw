const menuHtml = [
    { link: "./HTML-Home-01.html", pageName: "Basic HTML" },
    { link: "./html-introduction-02.html", pageName: "HTML introduction" },
    { link: "./html-Editor-03.html", pageName: "HTML Editor" }
];
const menuCSS = [
    { link: "./CSS-Basic-01.html", pageName: "CSS Tutorial" }
];
const menuJavaScript = [
    { link: "./JavaScript-Basic-01.html", pageName: "Basic of JavaScript" }
];
const menuReact = [
    { link: "./React-Introduction-01.html", pageName: "React App Install Method" }
];
const menuAdvanceMethod = [
    { link: "./AdvanceMethod.html", pageName: "Upload Internal image in page." }
];

let Menu_itemHtml = document.getElementById("lengCodeDetailHTML");
let Menu_itemCSS = document.getElementById("lengCodeDetailCSS");
let Menu_itemJavaScript = document.getElementById("lengCodeDetailJavaScript");
let Menu_itemReact = document.getElementById("lengCodeDetailReact");
let Menu_itemAdvanceMethod = document.getElementById("lengCodeDetailAdvanceMethod")

menuHtml.map(function (e) {
    Menu_itemHtml.innerHTML += `<li><a href="${e.link}">${e.pageName}</a></li>`
});
menuCSS.map(function (e) {
    Menu_itemCSS.innerHTML += `<li><a href="${e.link}">${e.pageName}</a></li>`
});
menuJavaScript.map(function (e) {
    Menu_itemJavaScript.innerHTML += `<li><a href="${e.link}">${e.pageName}</a></li>`
});
menuReact.map(function (e) {
    Menu_itemReact.innerHTML += `<li><a href="${e.link}">${e.pageName}</a></li>`
});
menuAdvanceMethod.map(function (x) {
    Menu_itemAdvanceMethod.innerHTML = `<li><a href="${x.link}">${x.pageName}</a></li>`
})