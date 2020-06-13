window.setTimeout(function () {
    const target = document.querySelectorAll('[data-anime]')
    //console.log(target.length); 
    target.forEach(function (element) {
        element.classList.add('animate');
    });
}, 800)


