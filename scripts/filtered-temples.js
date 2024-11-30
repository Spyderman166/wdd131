const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Newport Beach California",
        location: "Newport Beach, California, United States",
        dedicated: "2005, August, 28",
        area: 17800,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/newport-beach-california-temple/newport-beach-california-temple-35496-thumb.jpg"
    },
    {
        templeName: "Los Angeles California",
        location: "Los Angeles, California, United States",
        dedicated: "1956, March, 11",
        area: 190614,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/los-angeles-california-temple/los-angeles-california-temple-38945-thumb.jpg"
    },
    {
        templeName: "San Diego California",
        location: "San Diego, California, United States",
        dedicated: "1993, February, 20",
        area: 72000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-9060-main.jpg"
    }
];

const container = document.getElementById('pictures');
let page = document.querySelector('h2.active');

const start = document;
start.addEventListener('DOMContentLoaded', () => {
    createTempleCards(temples);
});

const homeLink = document.querySelector('#home');
homeLink.addEventListener('click', () => {
    container.replaceChildren();
    createTempleCards(temples);
    checkScreenSize();
    page.textContent = 'Home';
});

const oldLink = document.querySelector('#old');
oldLink.addEventListener('click', () => {
    container.replaceChildren();
    createTempleCards(temples.filter(temple => !temple.dedicated.includes('18')));
    checkScreenSize();
    page.textContent = 'Old';
});

const newLink = document.querySelector('#new');
newLink.addEventListener('click', () => {
    container.replaceChildren();
    createTempleCards(temples.filter(temple => !temple.dedicated.includes('18') && !temple.dedicated.includes('19')));
    checkScreenSize();
    page.textContent = 'New';
});

const largeLink = document.querySelector('#large');
largeLink.addEventListener('click', () => {
    container.replaceChildren();
    createTempleCards(temples.filter(temple => temple.area > 90000));
    checkScreenSize();
    page.textContent = 'Large';
});

const smallLink = document.querySelector('#small');
smallLink.addEventListener('click', () => {
    container.replaceChildren();
    createTempleCards(temples.filter(temple => temple.area < 100000));
    checkScreenSize();
    page.textContent = 'Small';
});

function checkScreenSize() {
    if (window.innerWidth <= 650) {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    }
}

function createTempleCards(filteredTemples) {


    filteredTemples.forEach(temple => {
        const item = document.createElement('div');
        item.className = 'list-item';

        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.templeName + 'Temple';
        img.loading = 'lazy';
        img.className = 'item-image';

        const name = document.createElement('h2')
        name.className = 'temple-name';
        name.textContent = temple.templeName;

        const location = document.createElement('p');
        location.className = 'temple-location';
        location.textContent = 'LOCATION: ' + temple.location;

        const dedicated = document.createElement('p');
        dedicated.className = 'temple-dedicated';
        dedicated.textContent = 'DEDICATED: ' + temple.dedicated;

        const area = document.createElement('p');
        area.className = 'temple-area';
        area.textContent = 'SIZE: ' + temple.area + 'sq ft';

        item.appendChild(name);
        item.appendChild(location)
        item.appendChild(dedicated)
        item.appendChild(area)
        item.appendChild(img);



        container.appendChild(item);
    })
}
