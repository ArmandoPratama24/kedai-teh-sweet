// toggle class active

const navbarNav = document.querySelector('.navbar-nav');

// ktika hamburger mnu di klik 
document.querySelector('#hamburger-menu')
.onclick = () => {
    navbarNav.classList.toggle('active')
};


// klik di luar side bar untuk mnghilangkan nav
const hamburger = document.querySelector('#hamburger-menu')

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
});


