//! HEader DropDown 
let DropDown = document.getElementById("lengCodeDetailHTML");
const lengDetail = [
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
lengDetail.map(function (x) {
    DropDown.innerHTML += `
        <li><a href="${x.link}">${x.pageName}</a></li>
    `
});

//! Aside PageLink 
let pageLink = document.getElementById("pageLink");
const html = [
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
        pageName: "HTML Editor"
    }

];
html.map(function (x) {
    pageLink.innerHTML += `
        <ul>
            <li><a href="${x.link}">${x.pageName}</a></li>
        </ul>
    `
});