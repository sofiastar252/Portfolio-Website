document.addEventListener('DOMContentLoaded', function () {
    const titleElements = document.querySelectorAll('.title-hover');

    titleElements.forEach(function (title) {
        title.onmouseover = addGlow;
        title.onmouseout = removeGlow;
    });

    function addGlow() {
        this.style.textShadow = '0 0 10px #00f, 0 0 20px #00f, 0 0 30px #00f';
    }

    function removeGlow() {
        this.style.textShadow = 'none';
    }
});
