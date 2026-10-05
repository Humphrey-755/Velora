
    const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");

menu.addEventListener("click", function () {
    sidebar.classList.toggle("open");
});

const pfpicon = document.querySelectorAll(".pfpicon");
const profile = document.querySelector(".profile");

pfpicon.forEach(function(icon) {
    icon.addEventListener("click", function () {
        profile.classList.toggle("open");
    });
});
/*
const status = document.querySelector("#status");
const topic = document.querySelector(".js");
const label = document.querySelector(".dom");

let currentStatus = 0;

const statuses = [
    'HTML',
'CSS',
'Version Control',
'JavaScript',
'React.js',
'Backend Development',
'Databases',
'Full Stack Development'
];

status.addEventListener("click", function () {

    currentStatus = currentStatus + 1;

    if (currentStatus >= statuses.length) {
        currentStatus = 0;
    }

    topic.textContent = statuses[currentStatus];
});*/

const fill = document.querySelector ('.progress-fill')
const text = document.querySelector ('.progress-text')
let total = 70
fill.style.width= total + '%';
text.textContent= total + '%';

const bar = document.querySelector('.jsbar');
const innerbar = document.querySelector('.innerjsbar');
const texting = document.querySelector('.text-title')
let percent = 70;
innerbar.style.width= percent + '%';
texting.textContent= 'Javascript'+  percent + '%';

