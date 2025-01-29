var currentPage = window.location.pathname.split('/').pop();

console.log("Current Page URL: " + currentPage);

var headerLinks = document.querySelectorAll('header ul li');

headerLinks.forEach(function(link) {
    var linkClass = link.getAttribute('class');
    if (currentPage === linkClass + '.html') {
        console.log("Match found for class: " + linkClass);
        link.querySelector('a').classList.add('active');
    } else if (currentPage === "" && linkClass === "index") {
        console.log("in home");
        link.querySelector('a').classList.add('active');
    }
});
