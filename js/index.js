function hoverMap() {
    const mapImg = document.querySelector('.map__img');
    const hiddenElements = document.querySelector('.hidden_map_elements');

    mapImg.style.filter = 'brightness(70%)';
    hiddenElements.style.opacity = '1';
}

function unhoverMap() {
    const mapImg = document.querySelector('.map__img');
    const hiddenElements = document.querySelector('.hidden_map_elements');

    mapImg.style.filter = 'brightness(100%)';
    hiddenElements.style.opacity = '0';
}

const links = [
    'kastaHTML/akademiky.html',
    'kastaHTML/temni.html',
    'kastaHTML/universytetsi.html',
    'kastaHTML/koroleva.html',
    'kastaHTML/roshenokraty.html',
    'kastaHTML/orden.html',
    'kastaHTML/chebretsevi.html'
];

const boxes = document.querySelectorAll('.box');

boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        if (index < links.length) {
            window.location.href = links[index];
        }
    });
});