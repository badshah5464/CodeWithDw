const reactPageLink = [{
    link: "./React-App-Install-01.html",
    pageName: "React App Install"
},
{
    link: "./react-app-structure-02.html",
    pageName: "React App Structure"
},
{
    link: "./react-app-start-03.html",
    pageName:"App Start"
}
];

let reactLink = document.getElementById("reactLink");
reactPageLink.map(function (x) {
    reactLink.innerHTML += `<li><a href="${x.link}">${x.pageName}</a></li>`
})