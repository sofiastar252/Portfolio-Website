document.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var parallaxElement = document.getElementById('welcome');

    if (parallaxElement) {
        parallaxElement.classList.toggle('parallax-bg', scrollPosition > 0);
    }
});
