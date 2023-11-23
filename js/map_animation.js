const pathsInfo = [
    {
        id: 'desna', image: 'images/мапа/desna/gallery1.jpg', title: 'Землі троєщини',
        text: 'Про землі троєщини ходить безліч легенд: більша частина королевства ніколи там не була, а дітей лякають історіями про це місце.',
        link: 'regionsHTML/troya.html'
    },
    {
        id: 'golos', image: 'images/мапа/golos/gallery1.jpeg', title: 'Файнофанія',
        text: 'Великі парки та ліси, головний замок королівства з резиденцією Королеви Хорн 1, ельфійський музей під відкритим небом, безліч житлових комплексів, таверн та крамниць – це лише короткий перелік того, що є на цих землях.',
        link: 'regionsHTML/faynofania.html'
    },
    {
        id: 'darnitsa', image: 'images/мапа/darnitsa/gallery1.jpeg', title: 'Поля Да Вінчі',
        text: 'Ходить легенда, що з яким би ельфом чи ельфійкою ти не познайомився в Дайвінчіаріумі – вони точно живуть на Полях Да Вінчі. Частина жителів королівства навіть ніколи тут не була, хоча побачити як живуть Безроті Барди – варте того.',
        link: 'regionsHTML/polya.html'
    },
    {
        id: 'obolon', image: 'images/мапа/obolon/gallery1.jpg', title: 'Оболонія',
        text: 'Одна з найпопулярніших для проживання земель, і це не дивно: тут безліч тихих мікро-земель: як для сімей та поціновувачів спокійного життя так і для тих, хто надає перевагу бурхливому життю.',
        link: 'regionsHTML/obolonia.html'
    },
    {
        id: 'svyatosh', image: 'images/мапа/svyatosh/gallery1.jpg', title: 'Борщівська долина',
        text: 'Борщівська долина - землі для ельфів які хочуть втекти від метушні, адже більша частина долини - це ліси.  Приємний запах хвої, та багаторічні дуби, панельфки та комфортні житлові комплекси.',
        link: 'regionsHTML/borshchivska.html'
    },
    {
        id: 'shevch', image: 'images/мапа/shevch/gallery1.jpg', title: 'Срібноподільські ворота',
        text: 'Ці землі належать до центральних в королівстві, тож тут є велика кількість історичних будівель, пам’ятників і відомий на весь світ - Університет імені Бенана Стандери.',
        link: 'regionsHTML/sribnopodil.html'
    },
    {
        id: 'pecher', image: 'images/мапа/pecher/gallery1.jpg', title: 'Печери ельфійських героїв',
        text: 'В печерах ельфійських героїв проживають найбагатші на найвпливовіші ельфи, представники влади, посли з інших королівств та успішні барди, тож це землі з прекрасними дорогами й інфраструктурою.',
        link: 'regionsHTML/pechery.html'
    },
    {
        id: 'soloma', image: 'images/мапа/soloma/gallery1.jpg', title: 'Вареникові дачі',
        text: 'Вареникові дачі – найменша за територією частина королівства, що славиться великою кількістю спальних та промислових земель водночас. Але не зважаючи на ромір, ці землі вміщують в собі багато цікавого.',
        link: 'regionsHTML/varenyk.html'
    },
    {
        id: 'dnipro', image: 'images/мапа/dnipro/gallery1.jpg', title: 'Ревучий Яр',
        text: 'Ревучий Яр не є найцікавішою частиною королівства, та і через велику кількість пролетаріарту що тут живе, є досить небезпечним. Проте, навіть з такими обставинами, подивитись тут є на що.',
        link: 'regionsHTML/revuchyi.html'
    },
    {
        id: 'podol', image: 'images/мапа/podol/gallery1.jpg', title: 'Майдан слейності',
        text: 'Центральні землі королівства - тут знаходиться безліч пам’яток, крамниць з найдорожчими закордонними вбраннями, аксесуарами та всім чого може побажати душа кожного, хто є в королівстві.',
        link: 'regionsHTML/maydan.html'
    }
];

const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalText = document.getElementById('modal-text');
const modalLink = document.getElementById('modal-link');
const closeBtn = document.getElementById('close-btn');

function showModal(id) {
    const pathInfo = pathsInfo.find(path => path.id === id);
    if (pathInfo) {
        modalTitle.textContent = pathInfo.title;
        modalImage.src = pathInfo.image;
        modalText.textContent = pathInfo.text;
        modalLink.href = pathInfo.link;
        modal.style.display = 'flex';
    }
}

pathsInfo.forEach(path => {
    const pathElement = document.getElementById(path.id);
    if (pathElement) {
        pathElement.addEventListener('click', () => {
            showModal(path.id);
        });
    }
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});