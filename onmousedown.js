document.addEventListener('DOMContentLoaded', function () {

    const printButton = document.getElementById('printButton');

    printButton.onmousedown = function () {
        
        window.print();
    };
});
