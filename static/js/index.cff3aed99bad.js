const menu = document.getElementById('mobile-menu');
const toggle = () => menu.classList.toggle("hidden");
const dropdown = document.getElementById('dropdownNavbar');
const toggle2 = () => dropdown.classList.toggle("hidden");


const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');



// Change the icons inside the button based on previous settings
// if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {

if (localStorage.getItem('color-theme') === 'light'  || (!('color-theme' in localStorage) ))  {
    document.documentElement.classList.remove('dark');

    themeToggleDarkIcon.classList.remove('hidden');

} else {
    document.documentElement.classList.add('dark');
    themeToggleLightIcon.classList.remove('hidden');
}



const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

        // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }

});


mybutton = document.getElementById("top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    // document.documentElement.scrollTop = 0;
    window.scrollTo({top: 0, behavior: 'smooth'});// For Chrome, Firefox, IE and Opera
}

function modalShow(first, second) {
    toggleModal(first, false);
    toggleModal(second, true);
}
function modelShow(first){
    toggleModal(first, true);
}
function modelHide(first){
    toggleModal(first, false);
}
function update(){
    document.getElementById('success-news').classList.remove('hidden');
    document.getElementById('news_form').classList.add('hidden');
}

function showHid(cat) {
    let name = ".hidden-"+ cat
    let button = ".button-"+ cat
    document.querySelectorAll(name).forEach(removeHiddent)
    document.querySelector(button).classList.add('hidden')
}
function removeHiddent(x){
    x.classList.remove('hidden')
}