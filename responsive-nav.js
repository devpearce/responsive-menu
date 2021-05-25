jQuery('document').ready(function(){

// Touch supported 

    let mobileNav = document.getElementById("mobile-nav");
    let hamburger = document.getElementById("hamburger");

    hamburger.addEventListener("click", function(e) {
        document.querySelector('#hamburger').classList.toggle('toggle');
        e.preventDefault();
        e.stopPropagation();
    });

    mobileNav = function(e){
        document.querySelector('div#mobile-nav').classList.toggle('active');
        e.preventDefault();
        e.stopPropagation();
    };

    hamburger.addEventListener("click", mobileNav);
    hamburger.addEventListener("touchend", mobileNav);

    let expandableTopItems = document.querySelectorAll(".topItem"); 

    expandableTopItems.forEach(function(topItem) {
    /* buttons are generated on init, to support no JS and have the submenus displayed by default */
    topItem.innerHTML=`<button type=button aria-expanded="false">${topItem.textContent}</button>`; //insert a button in the spans
    topItem.nextElementSibling.hidden=true; //hide submenu by default
        let btn=topItem.firstElementChild;
        /* add listener on each button to implement the behavior on click */
        btn.addEventListener("click", function(e) {
            let expanded = this.getAttribute("aria-expanded") === "true" || false;
            this.setAttribute("aria-expanded", !expanded);
            let submenu = this.parentNode.nextElementSibling;
            submenu.hidden = !submenu.hidden;
            e.preventDefault();
            return false;
        });

        btn.addEventListener("touchend", function(e) {
            let expanded = this.getAttribute("aria-expanded") === "true" || false;
            this.setAttribute("aria-expanded", !expanded);
            let submenu = this.parentNode.nextElementSibling;
            submenu.hidden = !submenu.hidden;
            e.preventDefault();
            return false;
        });
    });

});

