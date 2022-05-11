window.addEventListener('scroll', onScroll)


onScroll()
function onScroll() {
    showNavOnScroll();
    ShowBackToTopButtonOnScroll();
    activeteMenu(home);
    activeteMenu(services);
    activeteMenu(about);
    activeteMenu(contact);
}

function activeteMenu(section){
    const targetLine = scrollY + innerHeight / 2;

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight + sectionTop;
    const insection = sectionTop <= targetLine && sectionHeight >= targetLine;
    
    const menuelement = document.querySelector(`.menu a[href*=
        ${section.getAttribute('id')}]`)


    menuelement.classList.remove('active')
    if (insection) {
        menuelement.classList.add('active')
    }
}

function showNavOnScroll() {
    if (scrollY > 0) {
        nav.classList.add('scroll')   
    } else {
        nav.classList.remove('scroll')
    }   
}
function ShowBackToTopButtonOnScroll() {
    if (scrollY > 550) {
        backToTopButton.classList.add('show')   
    } else {
        backToTopButton.classList.remove('show')
    }   
}

function openmenu(){
    document.body.classList.add('menu-expanded')
}
function closemenu(){
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1000,
}).reveal(`
#home,
#home img,
#home .stats,
#services,
#services header,
#services .card
#about,
#about header,
#about .content`);