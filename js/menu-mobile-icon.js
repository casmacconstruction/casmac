console.log("Powered by Daniel Maciel Acevedo")

const menuButton = document.querySelector('.menu-button');
const menuContent = document.querySelector('.menu-mobile-background');
let menuOpen = false;

menuButton.addEventListener('click', () => 
{
    if(!menuOpen) 
    {
        menuButton.classList.add('open');
        menuContent.classList.add('open');
        menuOpen = true;
    } else {
        menuButton.classList.remove('open');
        menuContent.classList.remove('open');
        menuOpen = false;
    }
});

const menuHome = document.querySelector('.mobile-inicio');

menuHome.addEventListener('click', () => 
{
        menuButton.classList.remove('open');
        menuContent.classList.remove('open');
        menuOpen = false;
});