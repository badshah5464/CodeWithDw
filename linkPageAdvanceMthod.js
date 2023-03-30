let pageLinkAdvanceMethod = document.getElementById("advanceMethodLink");

const pageLink = [
    {
        link: './AdvanceMethod.html',
        pageName: 'Upload internal image in profile.',
    },
];

pageLink.map(function (x) {
    advanceMethodLink.innerHTML += `
    <li><a href="${x.link}">${x.pageName}</a></li>
    `
})