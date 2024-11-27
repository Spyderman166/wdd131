const today = new Date();
const year = today.getFullYear();
const lastModified = document.lastModified;

document.getElementById("currentYear").textContent = year;
document.getElementById("lastModified").textContent = lastModified;