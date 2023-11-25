function changeImages(direction) {
    const container = document.querySelector('.container');
    const images = container.querySelectorAll('.image');

    // Отримання значень src зображень
    const src1 = images[0].src;
    const src2 = images[1].src;
    const src3 = images[2].src;

    // Зміна значень src в залежності від напрямку
    if (direction === 'left') {
        images[0].src = src3;
        images[1].src = src1;
        images[2].src = src2;
    } else if (direction === 'right') {
        images[0].src = src2;
        images[1].src = src3;
        images[2].src = src1;
    }
}