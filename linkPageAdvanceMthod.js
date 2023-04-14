let pageLinkAdvanceMethod = document.getElementById("advanceMethodLink");

const pageLink = [{
    link: './AdvanceMethod.html',
    pageName: "Advance Method Home",
  },
  {
    link: './advanceMethod-internal_img_upload.html',
    pageName: 'Internal Image Upload In Profile',
  }
];

pageLink.map(function (x) {
  advanceMethodLink.innerHTML += `
    <li><a href="${x.link}">${x.pageName}</a></li>
    `
})