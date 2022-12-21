// search-box open close js code
let navbar = document.querySelector(".navbar");

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}

// Sidebar submenu open close js code for mobile menu
const subMenuArrows = document.querySelectorAll('.sub-menu-arrow');
subMenuArrows.forEach(subMenuArrow => {
    subMenuArrow.onclick = () => {
        subMenuArrow.classList.toggle('transform-180');
        const subMenu = subMenuArrow.parentNode.querySelector('.sub-menu');
        subMenu.classList.toggle('display-sub-menu');    
    }
})

// Sidebar sub-sub-menu open close js code for mobile menu
const subSubMenuArrows = document.querySelectorAll('.sub-sub-menu-arrow');
subSubMenuArrows.forEach(subSubMenuArrow => {
    subSubMenuArrow.onclick = () => {
        subSubMenuArrow.classList.toggle('transform-90');
        const subSubMenu = subSubMenuArrow.parentNode.parentNode.querySelector('.sub-sub-menu');
        subSubMenu.classList.toggle('display-sub-menu');    
    }
})