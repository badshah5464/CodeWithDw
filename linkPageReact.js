let reactLink = document.getElementById("reactLink");

const reactPageLink = [
    {
        link: "./React-introduction-01.html",
        pageName: "React App Install Method"
    },
];

reactPageLink.map(function (x) {
    reactLink.innerHTML += `<li><a href="${x.link}">${x.pageName}</a></li>`
})