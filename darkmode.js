function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    if (isDarkMode) {
        body.classList.add('dark-mode');
    }

    const darkModeButton = document.querySelector('.btn-dark-mode');

    if (darkModeButton) {
        darkModeButton.onclick = function () {
            toggleDarkMode();
        };
    }
});
