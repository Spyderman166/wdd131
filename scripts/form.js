const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const container = document.getElementById('prodName');
products.forEach(product => {
    const option = document.createElement('option')
    option.value = product.id;
    option.text = product.name;

    container.appendChild(option);
});

const form = document.getElementById('form1') 
form.addEventListener('submit', (event) => {
    const currentCount = localStorage.getItem("formSubmissions") || 0;
    localStorage.setItem("formSubmissions", parseInt(currentCount) + 1);

});