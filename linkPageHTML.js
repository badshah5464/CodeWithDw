//? HTML
let DropDownHtml = document.getElementById("lengCodeDetailHTML");
let pageLinkHTML = document.getElementById("pageLinkHTML");
const lengDetailHtml = [
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

lengDetailHtml.map(function (x) {
    pageLinkHTML.innerHTML += `<li><a href="${x.link}">${x.pageName}</a></li>`;
})

lengDetailHtml.map(function (x) {
    DropDownHtml.innerHTML += `<li><a href="${x.link}">${x.pageName}</a></li>`;
});
