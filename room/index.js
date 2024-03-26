

const navLinks = document.querySelector(".nav-links")
const navLinks1 = document.querySelector(".nav-links1")
function onToggleMenu(e){
    e.name = e.name === 'menu' ? 'close' : 'menu'
    navLinks1.classList.toggle( 'left-[0]')
    navLinks.classList.toggle('left-[50%]')
}