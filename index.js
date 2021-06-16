const initilData = [
    {
        link: "https://realty.rbc.ru/news/602b8d6e9a7947174743781a",
        img: "img/1.jpg",
        header: "Нереальный бум на Черном море: сколько стоит жилье и кто его покупает",
        date: "16 февраля 2021",
        icon: "img/1.svg",

    },
    {
        link: "https://ria.ru/20210415/istoki-1728384704.html",
        img: "img/2.jpg",
        header: "Возврат к истокам: россияне продают дома в Европе ради русской глубинки",
        date: "15 апреля 2021",
        icon: "img/2.svg",
    },
    {
        link: "https://tass.ru/nedvizhimost/10781859 ",
        img: "img/3.jpg",
        header: "Цены на апартаменты в Сочи выросли на 40% за год в преддверии их легализации",
        date: "25 февраля 2021",
        icon: "img/3.svg",
    },
    {
        link: "https://realty.ria.ru/20210312/moratoriy-1600832592.html",
        img: "img/4.jpg",
        header: "Проекты на 2-3 млн \"квадратов\" могут остановить в Сочи из-за моратория",
        date: "12 марта 2021",
        icon: "img/4.svg",
    },
    {
        link: "https://tass.ru/nedvizhimost/10895819",
        img: "img/5.jpg",
        header: "Эксперты опасаются, что цены на новостройки в Сочи достигнут пика из-за моратория",
        date: "13 марта 2021",
        icon: "img/3.svg",
    },
    {
        link: "https://tass.ru/nedvizhimost/10948809",
        img: "img/6.jpg",
        header: "Эксперты: апартаментов и квартир в новостройках Сочи хватит на восемь месяцев продаж",
        date: "19 марта 2021",
        icon: "img/3.svg",
    },
    {
        link: "https://realty.ria.ru/20210415/zhile_v_sochi-1728334593.html",
        img: "img/7.jpg",
        header: "Эксперт ожидает ажиотажного спроса на жилье в Сочи после закрытия Турции",
        date: "15 апреля 2021",
        icon: "img/4.svg",
    },
    {
        link: "https://www.kommersant.ru/doc/4790667",
        img: "img/8.jpg",
        header: "И сочится, и колется. Цены на курортную недвижимость догоняют московские",
        date: "24 апреля 2021",
        icon: "img/5.svg",
    },
    {
        link: "https://realty.rbc.ru/news/609431949a79473ea972f3b8",
        img: "img/9.jpg",
        header: "Дома и коттеджи: сколько стоит жилье у Черного Моря",
        date: "11 мая 2021",
        icon: "img/1.svg",
    },
    {
        link: "https://www.kommersant.ru/doc/4817160",
        img: "img/10.jpg",
        header: "Сочи не строится. Летом на черноморском курорте ожидается ноль предложений в жилых новостройках",
        date: "19 мая 2021",
        icon: "img/4.svg",
    }
    
]

let dataToRender = initilData;
let selectedType = 'all';
let showExistingItems = false;
const initialDataLength = initilData.length;

const list = document.querySelector('.cards')
const cardTemplate = document.querySelector('.card-template').content.querySelector('.card');


renderCardRange();






function renderCardRange() {
    dataToRender
        .forEach(cardData => {
            const card = cardTemplate.cloneNode(true);
            const header = card.querySelector('.card__header')
            const link = card.querySelector('.card__link')
            const date = card.querySelector('.card__date')
            const icon = card.querySelector('.card__icon')
            const img = card.querySelector('.card__image')

            img.style.backgroundImage = `url(${cardData.img})`
            icon.style.backgroundImage = `url(${cardData.icon})`
            header.textContent = cardData.header;
            date.textContent = cardData.date;
            link.href = cardData.link
            list.append(card)

        })

        }