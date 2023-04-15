let pageLinkAdvanceMethod = document.getElementById("advanceMethodLink");

const pageLink = [{
    link: './AdvanceMethod.html',
    pageName: "Advance Method Home",
  },
  {
    link: './AdvanceMethod-scroll-navigation-animation-02.html',
    pageName: 'Navigation Scroll Animation',
  }
];

pageLink.map(function (x) {
  advanceMethodLink.innerHTML += `
    <li><a href="${x.link}">${x.pageName}</a></li>
    `
})