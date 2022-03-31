const toggle = document.querySelector('.nav__toggle');
const navBar = document.querySelector('.nav__bar');
const body = document.querySelector('.body');

toggle.addEventListener('click', () => {
    const navItem = document.querySelectorAll('.nav__item');
    
    body.classList.toggle('overflow');
    navBar.classList.toggle('nav__bar--mobile');

    navItem.forEach(elem => {
        elem.addEventListener('click', () => {
            body.classList.remove('overflow');
            navBar.classList.remove('nav__bar--mobile');  
        })
    })

})

new Splide( '.splide' ).mount();