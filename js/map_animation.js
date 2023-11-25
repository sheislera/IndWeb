const pathsInfo = [
    {
        id: 'desna', image: 'images/мапа/desna/gallery1.jpg', title: 'Землi троєщини',
        text: 'Про землi троєщини ходить безлiч легенд: бiльша частина королевства нiколи там не була, а дiтей лякають iсторiями про це мiсце.',
        link: 'regionsHTML/troya.html',
        fontsize: '28px',
        isBoreder: false
    },
    {
        id: 'golos', image: 'images/мапа/golos/gallery1.jpeg', title: 'Файнофанiя',
        text: 'Великi парки та лiси, головний замок королiвства з резиденцiєю Королеви Хорн 1, ельфiйський музей пiд вiдкритим небом, безлiч житлових комплексiв, таверн та крамниць – це лише короткий перелiк того, що є на цих землях.',
        link: 'regionsHTML/faynofania.html',
        fontsize: '32px',
        isBoreder: false
    },
    {
        id: 'darnitsa', image: 'images/мапа/darnitsa/gallery1.jpeg', title: 'Поля Да Вiнчi',
        text: 'Ходить легенда, що з яким би ельфом чи ельфiйкою ти не познайомився в Дайвiнчiарiумi – вони точно живуть на Полях Да Вiнчi. Частина жителiв королiвства навiть нiколи тут не була, хоча побачити як живуть Безротi Барди – варте того.',
        link: 'regionsHTML/polya.html',
        fontsize: '28px',
        isBoreder: true
    },
    {
        id: 'obolon', image: 'images/мапа/obolon/gallery1.jpg', title: 'Оболонiя',
        text: 'Одна з найпопулярнiших для проживання земель, i це не дивно: тут безлiч тихих мiкро-земель: як для сiмей та поцiновувачiв спокiйного життя так i для тих, хто надає перевагу бурхливому життю.',
        link: 'regionsHTML/obolonia.html',
        fontsize: '32px',
        isBoreder: true
    },
    {
        id: 'svyatosh', image: 'images/мапа/svyatosh/gallery1.jpg', title: 'Борщiвська долина',
        text: 'Борщiвська долина - землi для ельфiв якi хочуть втекти вiд метушнi, адже бiльша частина долини - це лiси.  Приємний запах хвої, та багаторiчнi дуби, панельфки та комфортнi житловi комплекси.',
        link: 'regionsHTML/borshchivska.html',
        fontsize: '28px',
        isBoreder: false
    },
    {
        id: 'shevch', image: 'images/мапа/shevch/gallery1.jpg', title: 'Срiбноподiльськi ворота',
        text: 'Цi землi належать до центральних в королiвствi, тож тут є велика кiлькiсть iсторичних будiвель, пам’ятникiв i вiдомий на весь свiт - Унiверситет iменi Бенана Стандери.',
        link: 'regionsHTML/sribnopodil.html',
        fontsize: '28px',
        isBoreder: true
    },
    {
        id: 'pecher', image: 'images/мапа/pecher/gallery1.jpg', title: 'Печери ельфiйських героїв',
        text: 'В печерах ельфiйських героїв проживають найбагатшi на найвпливовiшi ельфи, представники влади, посли з iнших королiвств та успiшнi барди, тож це землi з прекрасними дорогами й iнфраструктурою.',
        link: 'regionsHTML/pechery.html',
        fontsize: '28px',
        isBoreder: false
    },
    {
        id: 'soloma', image: 'images/мапа/soloma/gallery1.jpg', title: 'Варениковi дачi',
        text: 'Варениковi дачi – найменша за територiєю частина королiвства, що славиться великою кiлькiстю спальних та промислових земель водночас. Але не зважаючи на ромiр, цi землi вмiщують в собi багато цiкавого.',
        link: 'regionsHTML/varenyk.html',
        fontsize: '28px',
        isBoreder: true
    },
    {
        id: 'dnipro', image: 'images/мапа/dnipro/gallery1.jpg', title: 'Ревучий Яр',
        text: 'Ревучий Яр не є найцiкавiшою частиною королiвства, та i через велику кiлькiсть пролетарiарту що тут живе, є досить небезпечним. Проте, навiть з такими обставинами, подивитись тут є на що.',
        link: 'regionsHTML/revuchyi.html',
        fontsize: '28px',
        isBoreder: false
    },
    {
        id: 'podol', image: 'images/мапа/podol/gallery1.jpg', title: 'Майдан слейностi',
        text: 'Центральнi землi королiвства - тут знаходиться безлiч пам’яток, крамниць з найдорожчими закордонними вбраннями, аксесуарами та всiм чого може побажати душа кожного, хто є в королiвствi.',
        link: 'regionsHTML/maydan.html',
        fontsize: '28px',
        isBoreder: false
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
        modalTitle.style.fontSize = pathInfo.fontsize
        if (pathInfo.isBoreder) {
            modalTitle.classList.add("stroke_text")
        }
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