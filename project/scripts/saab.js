const today = new Date();
const year = today.getFullYear();
const lastModified = document.lastModified;

document.getElementById("currentYear").textContent = year;
document.getElementById("lastModified").textContent = lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});