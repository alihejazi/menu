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


// sidebar submenu open close js code
// let htmlcssArrow = document.querySelector(".match-funding-arrow");
// htmlcssArrow.onclick = function() {
//  navLinks.classList.toggle("show-match-funding-sub-menu");
// }
// let moreArrow = document.querySelector(".match-funding-opportunities-sub-sub-menu-arrow");
// moreArrow.onclick = function() {
//  navLinks.classList.toggle("show-match-funding-opportunities-sub-sub-menu");
// }

// let aboutUsArrow = document.querySelector(".about-us-arrow");
// aboutUsArrow.onclick = function() {
//  navLinks.classList.toggle("show-about-us-sub-menu");
// }
// let resourcesArrow = document.querySelector(".sub-menu-arrow");
// resourcesArrow.onclick = function() {
//     resourcesArrow.classList.toggle('transform-180');
//     const subMenu = resourcesArrow.parentNode.querySelector('.sub-menu');
//     subMenu.classList.toggle('display-sub-menu');    
// }

const subMenuArrows = document.querySelectorAll('.sub-menu-arrow');
subMenuArrows.forEach(subMenuArrow => {
    subMenuArrow.onclick = () => {
        subMenuArrow.classList.toggle('transform-180');
        const subMenu = subMenuArrow.parentNode.querySelector('.sub-menu');
        subMenu.classList.toggle('display-sub-menu');    
    }
})

const subSubMenuArrows = document.querySelectorAll('.sub-sub-menu-arrow');
subSubMenuArrows.forEach(subSubMenuArrow => {
    subSubMenuArrow.onclick = () => {
        subSubMenuArrow.classList.toggle('transform-90');
        const subSubMenu = subSubMenuArrow.parentNode.parentNode.querySelector('.sub-sub-menu');
        subSubMenu.classList.toggle('display-sub-menu');    
    }
})