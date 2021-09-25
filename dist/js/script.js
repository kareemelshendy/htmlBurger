const navbar = document.querySelector('.navbar');

onScroll = function() {
    const offset = window.scrollY;
    if (offset === 0) {
        navbar.classList.remove('on');
        navbar.classList.add('off');
    } else {
        navbar.classList.remove('off');
        navbar.classList.add('on');
    }
}

document.addEventListener('scroll', onScroll);