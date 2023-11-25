window.onload = async (event) => {
    var htmlElement = document.documentElement;
    htmlElement.style.overflowY = 'hidden';
};
document.addEventListener('DOMContentLoaded', (event) => {
    // Знаходимо кореневий елемент <html>
    var htmlElement = document.documentElement;
    var sectionLoader = document.getElementById("section-loader");
    // Встановлюємо overflow-x та overflow-y в значення 'hidden'
    htmlElement.style.overflowY = 'hidden';

    // Включаємо скролл після 5 секунд
    setTimeout(() => {
        sectionLoader.classList.replace("section-loader", "section-hidden");
        htmlElement.style.overflowY = '';
    }, 2000);
});