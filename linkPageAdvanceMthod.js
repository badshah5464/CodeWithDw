let pageLinkAdvanceMethod = document.getElementById("advanceMethodLink");

const pageLink = [
  {
    link: "./AdvanceMethod-01.html",
    pageName: "Advance Method Home",
  },
  {
    link: "./AdvanceMethod-scroll-navigation-animation-02.html",
    pageName: "Navigation Scroll Animation",
  },
  {
    link: "./AdvanceMethod-AnchorTag-Animation-03.html",
    pageName: 'Anchor Tag Animation <br> ( &lt;a href=""&gt;&lt;/a&gt; )',
  },
];

pageLink.map(function (x) {
  advanceMethodLink.innerHTML += `
    <li><a href="${x.link}">${x.pageName}</a></li>
    `;
});
