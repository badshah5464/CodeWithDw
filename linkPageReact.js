const reactPageLink = [{
    link: "./React-App-Install-01.html",
    pageName: "React App Install"
}, ];

let reactLink = document.getElementById("reactLink");
reactPageLink.map(function (x) {
    reactLink.innerHTML += `<li><a href="${x.link}">${x.pageName}</a></li>`
})