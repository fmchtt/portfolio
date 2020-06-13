window.setTimeout(function () {
    const target = document.querySelectorAll('[data-anime]');
    //console.log(target.length); 
    target.forEach(function (element) {
        element.classList.add('animate');
    });
}, 100)

function escurece() {
    var ps = document.querySelectorAll("p");
    var h1s = document.querySelectorAll("h1");
    var h3s = document.querySelectorAll("h3");
    var hrs = document.querySelectorAll("hr");
    var cardts = document.querySelectorAll("div.card-tall");
    var cards = document.querySelectorAll("div.card-slim");
    var icon = document.getElementById('icon');
    var back = document.getElementById("back");
    var footer = document.getElementById('footer');

        ps.forEach(function (element) {
            element.style.color = '#ffffff';
        });

        h1s.forEach(function (element) {
            element.style.color = '#ffffff';
        });

        h3s.forEach(function (element) {
            element.style.color = '#ffffff';
        });

        hrs.forEach(function (element) {
            element.style.borderColor = '#ffffff';
        });

        cardts.forEach(function (element) {
            element.style.background = "rgba(255, 255, 255, 0.3)";
        });

        cards.forEach(function (element) {
            element.style.background = "rgba(255, 255, 255, 0.3)"
        });

        back.style.background = '#000000'

        footer.style.background = 'rgba(255, 255, 255, 0.2)';

        icon.style.borderColor = "#ffffff";
}

