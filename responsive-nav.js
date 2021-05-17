jQuery('document').ready(function($){

// Mobile menu hamburger button
    const mobileMenu = () => {
        const hamburger = document.getElementById('hamburger');
        const mobileNav = document.getElementById('mobile-nav');

        hamburger.addEventListener('click', ()=> {
            mobileNav.classList.toggle('active');
            hamburger.classList.toggle('toggle');
        });
        
        hamburger.addEventListener('touchend', ()=> {
            mobileNav.classList.toggle('active');
            hamburger.classList.toggle('toggle');
        });
        }
        mobileMenu();

    // Mobile menu dropdown trigger for sub-menu
    $('.nav-trigger').click(function(){
        $('.nav-trigger').toggleClass("trigger");
        $('nav ul .sub-menu').toggleClass("open");
    });
    
    $('.nav-trigger').touchend(function(){
        $('.nav-trigger').toggleClass("trigger");
        $('nav ul .sub-menu').toggleClass("open");
    });
});
