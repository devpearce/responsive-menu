jQuery('document').ready(function(){

    // Mobile menu hamburger button
    // const mobileMenu = () => {
    //     const hamburger = document.getElementById('hamburger');
    //     const mobileNav = document.getElementById('mobile-nav');

    //     hamburger.addEventListener('click', ()=> {
    //         mobileNav.classList.toggle('active');
    //         hamburger.classList.toggle('toggle');
    //     });
        
    //     hamburger.addEventListener('touchend', ()=> {
    //         mobileNav.classList.toggle('active');
    //         hamburger.classList.toggle('toggle');
    //     });
    // }
    // mobileMenu();


// Touch supported 

    let mobileNav = document.getElementById("mobile-nav");
    let hamburger = document.getElementById("hamburger");

    hamburger.addEventListener("click", function(e) {
        document.querySelector('#hamburger').classList.toggle('toggle');
        e.preventDefault();
        e.stopPropagation();
    });

    mobileNav = function(){
        document.querySelector('div#mobile-nav').classList.toggle('active');
    };

    hamburger.addEventListener("click", mobileNav);
    hamburger.addEventListener("touchend", mobileNav);

    // Trigger for sub-menu
    // $('.nav-trigger').click(function(){
    //     $('.nav-trigger').toggleClass("trigger");
    //     $('nav ul .sub-menu').toggleClass("open");
    // });
    
    // $('.nav-trigger').touchend(function(){
    //     $('.nav-trigger').toggleClass("trigger");
    //     $('nav ul .sub-menu').toggleClass("open");
    // });

    // let subMenu = document.querySelector("li.nav-trigger");

    // subMenu.addEventListener("click", function(e) {
    //     document.querySelector('nav ul .sub-menu').classList.toggle('open');
    //     e.preventDefault();
    //     e.stopPropagation();
    // });
});

