//? React
let DropDownReact = document.getElementById("lengCodeDetailReact");
let PageLinkReact = document.getElementById("pageLinkReact");
const lengDetailReact = [
    {
        link: "./React-Introduction-01.html",
        pageName: "React Introduction"
    },
];

lengDetailReact.map(function (x) {
    DropDownReact.innerHTML += `<li><a href="${x.link}">${x.pageName}</a></li>`;
});

lengDetailReact.map(function (x) {
    PageLinkReact.innerHTML += `<li><a href="${x.link}">${x.pageName}</a></li>`;
})
